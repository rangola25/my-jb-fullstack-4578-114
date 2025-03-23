import { useForm } from 'react-hook-form'
import './New.css'
import loadingImageSource from '../../../assets/images/loading.webp'
import { useAppDispatch } from '../../../redux/hooks'
import useService from '../../../hooks/useService'
import { ChangeEvent, useState } from 'react'
import VacationDraft from '../../../models/vacation/Draft'
import Admin from '../../../services/auth-aware/admin'
import { newVacation } from '../../../redux/vacationSlice'
import { useNavigate } from 'react-router-dom'

export default function New(): JSX.Element {

    const { register, handleSubmit, reset, formState } = useForm<VacationDraft>()

    const [previewImageSrc, setPreviewImageSrc] = useState<string>('')

    const dispatch = useAppDispatch()

    const adminService = useService(Admin)

    async function submit(draft: VacationDraft) {
        try {
            const startDate = new Date(draft.startDate)
            const endDate = new Date(draft.endDate)

            if (endDate < startDate) {
                alert("The finish date must be later than the starting date")
            }

            if (startDate < new Date()) {
                alert("The start date can not be in the past. pay attention!")
            }
            // draft.postImage = (draft.postImage as unknown as FileList)[0]
            // draft.file = (draft.file as string)
            const newVacationFromServer = await adminService.createVacation(draft)
            reset()
            setPreviewImageSrc('')
            dispatch(newVacation(newVacationFromServer))
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
                    <input type="file" accept='image/png, image/jpeg, image/jpg' {...register('file',  {
                        required: {
                            value: true,
                            message: 'You must provide a file'
                        }
                    })}  onChange={previewImage}/>
                    <span className='error'>{formState.errors.file?.message}</span>
                    {!previewImageSrc && <img src={``} />}
                    {previewImageSrc && <img src={previewImageSrc} />}
                    {!formState.isSubmitting && <button>Add Vacation</button>}
                    {formState.isSubmitting && <p>posting new vacation... <i><img src={loadingImageSource} /></i></p>}
                    <button onClick={cancel}>Cancel</button>
                </form>
            </div>
        </div>
    )
}