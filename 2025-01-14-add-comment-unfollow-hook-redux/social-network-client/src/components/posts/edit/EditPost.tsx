import { useNavigate, useParams } from 'react-router-dom'
import './EditPost.css'
import profileService from '../../../services/profile'
import { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
import PostDraft from '../../../models/post/PostDraft'
import Loading from '../../common/loading/Loading'

export default function EditPost(): JSX.Element {

    const { id } = useParams<'id'>()
    const { handleSubmit, register, formState, reset} = useForm<PostDraft>()
    const navigate = useNavigate()

    const [loading, setLoading] = useState<boolean>(false);

    useEffect(() => {
        if(id) {
            setLoading(true); 
            profileService.getPost(id)
                .then((data) => {
                    reset(data); 
                    setLoading(false); 
                })
                .catch((e) => {
                    alert(e);
                    setLoading(false); 
                });
        }
    }, [id, reset]);

    async function submit(draft: PostDraft) {
        try {
            if(id) {
                setLoading(true); 
                await profileService.update(id, draft)
                navigate('/profile')
                setLoading(false); 
            }            
        } catch (e) {
            alert(e)
        }
    }

    return (
        <div className='EditPost'>
            { loading && <Loading message='Loading'/>}

            { !loading && id !== undefined && <>
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
                
                <button>Update Post</button>
            </form>  
            </>} 
        </div>
    )
}