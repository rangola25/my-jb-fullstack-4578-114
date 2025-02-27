import { useForm } from 'react-hook-form'
import './NewPost.css'
import PostDraft from '../../../models/post/PostDraft'
import ProfileService from '../../../services/auth-aware/Profile'
import Loading from '../../common/loading/Loading'
import { useState } from 'react'
import { useAppDispatch } from '../../../redux/hooks'
import { newPost } from '../../../redux/profileSlice'
import useService from '../../../hooks/useService'
import {  toast, ToastContainer } from 'react-toastify';

export default function NewPost(): JSX.Element {

    const { register, handleSubmit, reset, formState } = useForm<PostDraft>()

    const [loading, setLoading] = useState<boolean>(false);

    const dispatch = useAppDispatch()

    const profileService = useService(ProfileService)

    async function submit(draft: PostDraft) {
        try {
            setLoading(true)
            const newPostFromServer = await profileService.create(draft)
            reset()
            dispatch(newPost(newPostFromServer))
        } catch {
            toast.error("Failed adding new post");
        } finally {
            setLoading(false)
            reset()
        }
    }

    return (
        <div className='NewPost'>
            { loading && <Loading message='Adding post'/>}

            { !loading && <>
            <form onSubmit={handleSubmit(submit)}>
                <input placeholder='title' {...register('title', {
                    required: {
                        value: true,
                        message: 'you must provide a title'
                    },
                    minLength: {
                        value: 10,
                        message: 'title must be 10 chars long'
                    }
                })}/>
                <span className='error'>{formState.errors.title?.message}</span>
                <textarea placeholder='post body' {...register('body', {
                    required: {
                        value: true,
                        message: 'you must provide a body'
                    },
                    minLength: {
                        value: 20,
                        message: 'body must be 10 chars long'
                    },
                })} />
                <span className='error'>{formState.errors.body?.message}</span>
                <button>Add Post</button>
            </form>
            </>}
            <ToastContainer />
        </div>
    )
}