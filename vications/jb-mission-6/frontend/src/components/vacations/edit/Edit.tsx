import { useNavigate, useParams } from 'react-router-dom'
import './Edit.css'
import { ChangeEvent, useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
import { useAppDispatch, useAppSelector } from '../../../redux/hooks'
import useService from '../../../hooks/useService'
import Admin from '../../../services/auth-aware/admin'
import { update } from '../../../redux/vacationSlice'
import Draft from '../../../models/vacation/Draft'

export default function EditVacation(): JSX.Element {
    const { id } = useParams<'id'>()
    const { handleSubmit, register, formState, reset, setValue, setError } = useForm<Draft>()
    const navigate = useNavigate()

    const vacation = useAppSelector(state => state.vacations.vacations.find(v => v.id === id))
    const dispatch = useAppDispatch()

    const adminService = useService(Admin)

    useEffect(() => {
        if (id && vacation) {
            const { price, description, destination, file, endDate, startDate } = vacation
            reset({ price, description, destination, endDate, startDate })
            setPreviewImageSrc(file)
        }
    }, [id, reset, vacation])

    async function submit(draft: Draft) {
        try {
            // Manually check if file is provided
            if (!draft.file) {
                setError("file", {
                    type: "manual",
                    message: "You must upload a cover image"
                })
                return
            }
    
            const startDate = new Date(draft.startDate)
            const endDate = new Date(draft.endDate)
    
            if (endDate < startDate) {
                alert("The finish date must be later than the starting date")
                return
            }
    
            if (!id) {
                alert("Vacation ID is missing");
                return;
            }
    
            const updatedVacation = await adminService.updateVacation(id, draft)
            dispatch(update(updatedVacation))
            setPreviewImageSrc('')
            navigate('/admin/vacations')
        } catch (e) {
            alert(e)
        }
    }

    function cancel() {
        navigate(`/admin/vacations`)
    }

    const [previewImageSrc, setPreviewImageSrc] = useState<string>('')

    function previewImage(event: ChangeEvent<HTMLInputElement>) {
        const file = event.currentTarget.files && event.currentTarget.files[0]
        if (file) {
            const imageSource = URL.createObjectURL(file)
            setPreviewImageSrc(imageSource)
            setValue('file', file)  // Set the selected file in the form state
        }
    }

    return (
        <div className='EditVacationContainer'>
            <div className='EditVacation'>
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
                    <textarea  {...register('description', {
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
                    <input type='date' {...register('startDate', {
                        required: {
                            value: true,
                            message: 'You must provide a date'
                        }
                    })} />
                    <span className='error'>{formState.errors.startDate?.message}</span>

                    <label>end on</label>
                    <input type='date' {...register('endDate', {
                        required: {
                            value: true,
                            message: 'You must provide a date'
                        }
                    })} />
                    <span className='error'>{formState.errors.endDate?.message}</span>

                    <label>price</label>
                    <input type='number' {...register('price', {
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
                    })} />
                    <span className='error'>{formState.errors.price?.message}</span>

                    <label>cover image</label>
                    <input
                        type='file'
                        onChange={previewImage}
                    />
                    {previewImageSrc && <img src={`${import.meta.env.VITE_AWS_SERVER_URL}/${previewImageSrc}`}  alt="Preview" style={{ width: '200px', height: 'auto' }} />}
                    {/* Display error message for file if needed */}
                    <span className='error'>{formState.errors.file?.message}</span>

                    <button type="submit">Update Vacation</button>
                    <button type="button" onClick={cancel}>Cancel</button>
                </form>
            </div>
        </div>
    )
}
