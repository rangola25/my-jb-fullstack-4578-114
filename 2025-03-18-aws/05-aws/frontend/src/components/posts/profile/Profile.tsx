import { useEffect, useState } from 'react'
import './Profile.css'
import ProfileService from '../../../services/auth-aware/Profile'
import Post from '../post/Post'
import NewPost from '../new/NewPost'
import Loading from '../../common/loading/Loading'
import useTitle from '../../../hooks/useTitle'
import { useAppDispatch, useAppSelector } from '../../../redux/hooks'
import { init } from '../../../redux/profileSlice'
import useService from '../../../hooks/useService'
import PostModel from '../../../models/post/Post'
import {  toast, ToastContainer } from 'react-toastify';

export default function Profile(): JSX.Element {

    useTitle('SN - Profile')

    const profileService = useService(ProfileService)

    const posts = useAppSelector(state => state.profile.posts)
    const dispatch = useAppDispatch()

    useEffect(() => {
        (async () => {
            try {
                if(posts.length === 0) {
                    const postsFromServer = await profileService.getProfile()
                    dispatch(init(postsFromServer))
                }
            } catch {
                toast.error("Failed to load posts");
            }
        })()
    }, [])

     return (
        <>
            <ProfileComponent posts={posts} />
            <ToastContainer />
            </>
        );
    }
    
    interface ProfileComponentProps {
        posts: PostModel[];
    }
    
    const ProfileComponent = ({ posts }: ProfileComponentProps) => {
        const [loading, setLoading] = useState(true);
    
        useEffect(() => {
            const timer = setTimeout(() => {
                setLoading(false);
            });
    
            // Clean up the timer when the component unmounts
            return () => clearTimeout(timer);
        }, []);

    return (
        <div className='Profile'>
                
                <NewPost />
                {loading && <Loading message='Uploading profile' />}
                {!loading && posts.length === 0 && <div>No posts found.</div>}
                {!loading && posts.length > 0 && (
                    <>
                {posts.map(p =>
                    <Post
                        key={p.id}
                        post={p}
                        isAllowActions={true}
                    />
                )}
            </>)}
        </div>
    )
}