import { useForm } from 'react-hook-form'
import './New.css'
import { useAppDispatch } from '../../../redux/hooks'
import useService from '../../../hooks/useService'
import { ChangeEvent, useState } from 'react'
import VacationDraft from '../../../models/vacation/Draft'
import Admin from '../../../services/auth-aware/admin'
import { newVacation } from '../../../redux/vacationSlice'
import { useNavigate } from 'react-router-dom'
import Draft from '../../../models/vacation/Draft'

export default function New(): JSX.Element {

  const { handleSubmit, register, formState, reset, setValue } = useForm<Draft>()

    const [previewImageSrc, setPreviewImageSrc] = useState<string>('')

    const dispatch = useAppDispatch()

    const adminService = useService(Admin)

    function resetTime(date: Date): Date {
        const resetDate = new Date(date);
        resetDate.setHours(0, 0, 0, 0);
        return resetDate;
      }

    async function submit(draft: VacationDraft) {
        try {
            const startDate = new Date(draft.startDate)
            const endDate = new Date(draft.endDate)
            const today = resetTime(new Date());

            if (endDate <= startDate) {
                alert("The finish date must be later than the starting date")
                return
            }

            if (startDate <= today) {
                alert("The start date can not be in the past. pay attention!")
                return
            }

            // draft.postImage = (draft.postImage as unknown as FileList)[0]
            // draft.file = (draft.file as string)
            const newVacationFromServer = await adminService.createVacation(draft)
            reset()
            setPreviewImageSrc('')
            dispatch(newVacation(newVacationFromServer))
            navigate('/admin/vacations')
            window.location.reload()
        } catch (e) {
            alert(e)
        }
    }

    const navigate = useNavigate()
    function cancel(){
        navigate(`/admin/vacations`)
    }

    function previewImage(event: ChangeEvent<HTMLInputElement>) {
        const file = event.currentTarget.files && event.currentTarget.files[0]
        if (file) {
            const imageSource = URL.createObjectURL(file)
            setPreviewImageSrc(imageSource)
            setValue('file', file)  // Set the selected file in the form state
        }
    }

    return (
        <div className='NewVacationContainer'>
            <div className='NewVacation'>
                <form onSubmit={handleSubmit(submit)}>

                    <label>destination</label>
                    <input {...register('destination', {
                        required: {
                            value: true,
                            message: 'You must provide a destination'
                        }
                    })} />
                    <span className='error'>{formState.errors.destination?.message}</span>

                    <label>description</label>
                    <textarea {...register('description', {
                        required: {
                            value: true,
                            message: 'You must provide a description'
                        },
                        minLength: {
                            value: 10,
                            message: 'Description must be 10 chars long'
                        }
                    })} />
                    <span className='error'>{formState.errors.description?.message}</span>

                    <label>start on</label>
                    <input type='date' {...register('startDate', {
                        required: {
                            value: true,
                            message: 'You must provide a start date'
                        }
                    })} />
                    <span className='error'>{formState.errors.startDate?.message}</span>

                    <label>end on</label>
                    <input type='date' {...register('endDate', {
                        required: {
                            value: true,
                            message: 'You must provide a end date'
                        }
                    })} />
                    <span className='error'>{formState.errors.endDate?.message}</span>

                    <label>price</label>
                    <input {...register('price', {
                        required: {
                            value: true,
                            message: 'You must provide a price'
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

                    <label>cover Image</label>
                    <input type='file' onChange={previewImage}/>
                     <img src={previewImageSrc} alt="Preview" style={{ width: '200px', height: 'auto' }} />
                    <span className='error'>{formState.errors.file?.message}</span>

                    <button type="submit">Update Vacation</button>
                    <button type="button" onClick={cancel}>Cancel</button>
                </form>
            </div>
        </div>
    )
}