import { useEffect, useState } from 'react'
import './New.css'
import Type from '../../../models/type/Type'
import categoriesService from '../../../services/auth-aware/Type'
import { useForm } from 'react-hook-form'
import Draft from '../../../models/present/Draft'
import { useNavigate } from 'react-router-dom'
import giftsService from '../../../services/auth-aware/Gifts'

export default function NewGift(): JSX.Element {

    const [ categories, setCategories ] = useState<Type[]>([])

    useEffect(() => {
        const fetchCategories = async () => {
            try {
                const categories = await categoriesService.getAllTypes()
                setCategories(categories)
            } catch (e) {
                alert(e)
            }
        }

        fetchCategories()
    }, [])


    const { register, handleSubmit, formState } = useForm<Draft>()

    const navigate = useNavigate()

    async function submit(draft: Draft) {
        try {
            await giftsService.new(draft)
            alert('added product')
            navigate('/gifts')
        } catch (e) {
            alert(e)
        }
    }

    return (
        <div className='New'>
            <form onSubmit={handleSubmit(submit)}>
                <select defaultValue={''} {...register('type', {
                        required: {
                            value: true,
                            message: 'category is a must'
                        }
                    })}>
                        <option value="" disabled>Select Target Market</option>
                        {categories.map(({ code, type }) => (
                    <option key={type} value={code}>{type}</option>
                ))}
                    </select>
                    <span className='error'>{formState.errors.type?.message}</span>

                    <input placeholder='Enter the present name' {...register('presentName', {
                    required: {
                        value: true,
                        message: 'name is a must'
                    }
                })}/>
                <span className='error'>{formState.errors.presentName?.message}</span>

                <input placeholder='Enter a description' {...register('presentDescription', {
                    required: {
                        value: true,
                        message: 'description is a must'
                    }
                })}/>
                <span className='error'>{formState.errors.presentDescription?.message}</span>

                <input type="number" placeholder='price' {...register('price', {
                    required: {
                        value: true,
                        message: 'price is a must'
                    },
                    min: {
                        value: 0,
                        message: 'Price cannot be less than 0'
                    }
                })} />
                <span className='error'>{formState.errors.price?.message}</span>

                <input type="number" placeholder='discount' {...register('discount', {
                    required: {
                        value: true,
                        message: 'discount is a must'
                    },
                    min: {
                        value: 1,
                        message: 'discount cannot be less than 1'
                    },
                    max: {
                        value: 100,
                        message: 'discount cannot be more than 100'
                    }
                })} />
                <span className='error'>{formState.errors.discount?.message}</span>                

                <button>Add Product</button>
            </form>
        </div>
    )
}