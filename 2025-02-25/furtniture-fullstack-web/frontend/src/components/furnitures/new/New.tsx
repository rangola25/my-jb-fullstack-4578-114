import { useEffect } from 'react'
import './New.css'
import { useNavigate } from 'react-router-dom'
import furnituresService from '../../../services/auth-aware/furniture'
import { useForm } from 'react-hook-form'
import FurnitureDraft from '../../../models/furniture/FurnitureDraft'

export default function NewFurniture(): JSX.Element {

    useEffect(() => {
        (async() => {
            try {
                await furnituresService.getFurniture()
            } catch (e) {
                alert(e)
            }
        })()
    }, [])


    const { register, handleSubmit, formState } = useForm<FurnitureDraft>()

    const navigate = useNavigate()

    async function submit(draft: FurnitureDraft) {
        try {
            await furnituresService.create(draft)
            alert('added product')
            navigate('/furniture')
        } catch (e) {
            alert(e)
        }
    }


    return (
        <div className='Add'>
            <div>
                <h2>Add Furniture</h2>
            </div>
            <form onSubmit={handleSubmit(submit)}>
                <input placeholder='Furniture name' {...register('name', {
                    required: {
                        value: true,
                        message: 'name is a must'
                    }
                })}/>
                <span className='error'>{formState.errors.name?.message}</span>

                <input type="string" placeholder='Dimensions' {...register('dimensions', {
                    required: {
                        value: true,
                        message: 'dimensions is a must'
                    }
                })} />
                <span className='error'>{formState.errors.dimensions?.message}</span>

                <input type="string" placeholder='Color' {...register('color', {
                    required: {
                        value: true,
                        message: 'color is a must'
                    }
                })} />
                <span className='error'>{formState.errors.color?.message}</span>

                <input type="number" placeholder='Price' {...register('price', {
                    required: {
                        value: true,
                        message: 'price is a must'
                    }
                })} />
                <span className='error'>{formState.errors.price?.message}</span>

                <button>Add Product</button>
            </form>
        </div>
    )
}