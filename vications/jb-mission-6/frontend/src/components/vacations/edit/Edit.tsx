import { useNavigate, useParams } from 'react-router-dom'
import './Edit.css'
import { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
import { useAppDispatch, useAppSelector } from '../../../redux/hooks'
import useService from '../../../hooks/useService'
import VacationModel from '../../../models/vacation/Vacation'
import Admin from '../../../services/auth-aware/admin'
import Vacation from '../../../models/vacation/Vacation'
import { update } from '../../../redux/vacationSlice'

export default function EditVacation(): JSX.Element {

    const [selectedDate, setSelectedDate] = useState('');

    const { id } = useParams<'id'>()
    const { handleSubmit, register, formState, reset } = useForm<VacationModel>()
    const navigate = useNavigate()

    const vacation = useAppSelector(state => state.vacations.vacations.find(v => v.id === id))
    const dispatch = useAppDispatch() 

    const adminService = useService(Admin)

    useEffect(() => {
        if (id && vacation) {
            const { file, destination, description, startDate, endDate, price } = vacation
            setSelectedDate(startDate.toLocaleString())
            // if (new Date(startDate) <)
            reset({ file, destination, description, startDate, endDate, price})
        }
    }, [id, reset, vacation])

    async function submit(draft: Vacation) {
        try {
                if (id) {
                const startDate = new Date(draft.startDate)
                const endDate = new Date(draft.endDate)

                if (endDate < startDate) {
                alert("The finish date must be later than the starting date")
                }
                const updatedVacation = await adminService.updateVacation(id, draft)
                dispatch(update(updatedVacation))
                navigate('/admin/vacations')
            }
        } catch (e) {
            alert(e)
        }
    }

    

    return (
        <div className='EditVacationContainer'>
        <div className='EditVacation'>
            <form onSubmit={handleSubmit(submit)}>

                <label>destination</label>
                <input placeholder='destination' {...register('destination', {
                    required: {
                        value: true,
                        message: 'You must provide a destination'
                    }
                })} />
                <span className='error'>{formState.errors.destination?.message}</span>

                <label>description</label>
                <textarea placeholder='description' {...register('description', {
                    required: {
                        value: true,
                        message: 'You must provide a description'
                    },
                    minLength: {
                        value: 10,
                        message: 'Description must be 10 chars long'
                    },
                })} />
                <span className='error'>{formState.errors.description?.message}</span>

                <label>start on</label>
                <input type='date' placeholder='Start date' value={selectedDate} {...register('startDate', {
                    required: {
                        value: true,
                        message: 'You must provide a date'
                    }
                })} />
                <span className='error'>{formState.errors.startDate?.message}</span>

                <label>end on</label>
                <input type='date' placeholder='End date' {...register('endDate', {
                    required: {
                        value: true,
                        message: 'You must provide a date'
                    }
                })} />
                <span className='error'>{formState.errors.endDate?.message}</span>

                <label>price</label>
                <input type='number' placeholder='Price' {...register('price', {
                    required: {
                        value: true,
                        message: 'You must provide the price'
                    },
                    min: {
                        value: 0,
                        message: 'Price can not be negative.'
                    },
                    max: {
                        value: 10000,
                        message: 'Price can not be higher than 10000$'
                    }
                })}/>
                <span className='error'>{formState.errors.price?.message}</span>

                <label>cover image</label>
                <input {...register('file', {
                    required: {
                        value: true,
                        message: 'You must provide a title'
                    }
                })}>
                    {/* <button>
                        Change Image
                    </button> */}
                </input>
                <img src={vacation?.file}/>
                <span className='error'>{formState.errors.file?.message}</span>
 
                <button>Update Vacation</button>
                <button>Cancel</button>
            </form>
        </div>
        </div>
    )
}