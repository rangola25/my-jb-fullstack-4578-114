import { useNavigate, useParams } from 'react-router-dom';
import './EditPost.css';
import profileService from '../../../services/profile';
import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import PostDraft from '../../../models/post/PostDraft';
import Loading from '../../common/loading/Loading';
import { getSinglePost, update } from '../../../redux/profileSlice';
import { useAppDispatch } from '../../../redux/hooks';

export default function EditPost(): JSX.Element {
    const { id } = useParams<'id'>();
    const { handleSubmit, register, formState, reset } = useForm<PostDraft>();
    const navigate = useNavigate();

    // const posts = useAppSelector(state => state.profile.selectedPost);
    const dispatch = useAppDispatch();

    const [loading, setLoading] = useState<boolean>(false);

    useEffect(() => {
        if (id) {
            const fetchPost = async () => {
                setLoading(true);
                try {
                    const postFromServer = await profileService.getPost(id);
                    dispatch(getSinglePost(postFromServer.id));
                    reset(postFromServer); 
                } catch (e) {
                    alert(e);
                } finally {
                    setLoading(false);
                }
            };
            fetchPost();
        }
    }, [id, dispatch, reset]);

    async function submit(draft: PostDraft) {
        try {
            if (id) {
                setLoading(true);
                const updatedPost = await profileService.update(id, draft);
                dispatch(update(updatedPost))
                navigate('/profile');
            }
        } catch (e) {
            alert(e);
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
        </div>
    );
}