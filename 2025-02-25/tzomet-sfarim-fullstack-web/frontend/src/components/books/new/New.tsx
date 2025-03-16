import { useEffect, useState } from 'react'
import './New.css'
import categoriesService from '../../../services/auth-aware/Author'
import { useForm } from 'react-hook-form'
import Draft from '../../../models/books/Draft'
import { useNavigate } from 'react-router-dom'
import Author from '../../../models/author/Author'
import booksService from '../../../services/auth-aware/Books'

export default function NewBook(): JSX.Element {

    const [categories, setCategories] = useState<Author[]>([])
    const [selectedAuthor, setSelectedAuthor] = useState<Author | null>(null)

    useEffect(() => {
        const fetchCategories = async () => {
            try {
                const categories = await categoriesService.getAllAuthors()
                setCategories(categories)
            } catch (e) {
                alert(e)
            }
        }

        fetchCategories()
    }, [])

    const { register, handleSubmit, formState, watch } = useForm<Draft>()
    const navigate = useNavigate()

    const firstName = watch('firstName')

    useEffect(() => {
        const author = categories.find(author => author.firstName === firstName)
        setSelectedAuthor(author || null)
    }, [firstName, categories])

    async function submit(draft: Draft) {
        try {
            await booksService.new(draft)
            alert('Added product')
            navigate('/books')
        } catch (e) {
            alert(e)
        }
    }

 
    const validateLastName = (value: string) => {
        if (selectedAuthor) {
            
            return selectedAuthor.lastName === value || 'Last name must match the selected first name'
        }
        return true; 
    }

    return (
        <div className='New'>
            <form onSubmit={handleSubmit(submit)}>
                <select defaultValue={''} {...register('firstName', {
                    required: {
                        value: true,
                        message: 'Author first name is a must'
                    }
                })}>
                    <option value="" disabled>Select Target Market</option>
                    {categories.map(({ authorId, firstName }) => (
                        <option key={authorId} value={firstName}>{firstName}</option>
                    ))}
                </select>
                <span className='error'>{formState.errors.firstName?.message}</span>

                <select defaultValue={''} {...register('lastName', {
                    required: {
                        value: true,
                        message: 'Author last name is a must'
                    },
                    validate: {
                        namesMatch: validateLastName
                    }
                })}>
                    <option value="" disabled>Select Target Market</option>
                    {selectedAuthor?.lastName && (
                        <option value={selectedAuthor.lastName}>{selectedAuthor.lastName}</option>
                    )}
                </select>
                <span className='error'>{formState.errors.lastName?.message}</span>

                <input placeholder='Enter the book name' {...register('name', {
                    required: {
                        value: true,
                        message: 'Book name is required'
                    }
                })} />
                <span className='error'>{formState.errors.name?.message}</span>

                <input placeholder='Enter the amount of pages' {...register('amountOfPages', {
                    required: {
                        value: true,
                        message: 'Amount of pages is required'
                    },
                    min: {
                        value: 5,
                        message: 'The minimum number of pages is 5'
                    },
                    max: {
                        value: 1300,
                        message: 'The maximum number of pages is 1300'
                    }
                })} />
                <span className='error'>{formState.errors.amountOfPages?.message}</span>

                <input type="number" placeholder='Price' {...register('price', {
                    required: {
                        value: true,
                        message: 'Price is required'
                    },
                    min: {
                        value: 0,
                        message: 'Price cannot be less than 0'
                    },
                    max: {
                        value: 1000,
                        message: 'Price cannot exceed 1000'
                    }
                })} />
                <span className='error'>{formState.errors.price?.message}</span>

                <button>Add Product</button>
            </form>
        </div>
    )
}
