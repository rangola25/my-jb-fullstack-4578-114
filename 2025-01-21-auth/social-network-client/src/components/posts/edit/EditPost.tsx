import { useNavigate, useParams } from 'react-router-dom';
import './EditPost.css';
import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import PostDraft from '../../../models/post/PostDraft';
import Loading from '../../common/loading/Loading';
import { getSinglePost, update } from '../../../redux/profileSlice';
import { useAppDispatch, useAppSelector } from '../../../redux/hooks';
import useService from '../../../hooks/useService';
import ProfileService from '../../../services/auth-aware/Profile';
import {  toast, ToastContainer } from 'react-toastify';

export default function EditPost(): JSX.Element {
    const { id } = useParams<'id'>();
    const { handleSubmit, register, formState, reset } = useForm<PostDraft>();
    const navigate = useNavigate();

    const post = useAppSelector(state => state.profile.posts.find(p => p.id === id));
    const dispatch = useAppDispatch();

    const profileService = useService(ProfileService)

    const [loading, setLoading] = useState<boolean>(false);

    useEffect(() => {
        if (id && post) {
                try {
                    setLoading(true);
                    const {title, body} = post
                    dispatch(getSinglePost(id));
                    reset({title, body}); 
                } catch {
                    toast.error("Failed");
                } finally {
                    setLoading(false);
                }
            };
    }, [dispatch, id, post, reset]);

    async function submit(draft: PostDraft) {
        try {
            if (id) {
                setLoading(true);
                const updatedPost = await profileService.update(id, draft);
                dispatch(update(updatedPost))
                navigate('/profile');
            }
        } catch {
            toast.error("Failed to upload the edit");
        } finally {
            setLoading(false);
        }
    }

    return (
        <div className='EditPost'>
            {loading && <Loading message='Loading' />}

            {!loading && id && (
                <>
                    <form onSubmit={handleSubmit(submit)}>
                        <input
                            placeholder='Title'
                            {...register('title', {
                                required: {
                                    value: true,
                                    message: 'You must provide a title'
                                },
                                minLength: {
                                    value: 10,
                                    message: 'Title must be at least 10 characters long'
                                }
                            })}
                        />
                        <span className='error'>{formState.errors.title?.message}</span>
                        <textarea
                            placeholder='Post body'
                            {...register('body', {
                                required: {
                                    value: true,
                                    message: 'You must provide a body'
                                },
                                minLength: {
                                    value: 20,
                                    message: 'Body must be at least 20 characters long'
                                },
                            })}
                        />
                        <span className='error'>{formState.errors.body?.message}</span>
                        
                        <button type='submit'>Update Post</button>
                    </form>
                </>
            )}
             <ToastContainer />
        </div>
    );
}