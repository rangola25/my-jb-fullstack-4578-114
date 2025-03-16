import { useEffect, useState } from 'react'
import './Feed.css'
import FeedService from '../../../services/auth-aware/Feed'
import Post from '../post/Post'
import useTitle from '../../../hooks/useTitle'
import Loading from '../../common/loading/Loading'
import { init, setNewContent } from '../../../redux/feedSlice'
import { useAppDispatch, useAppSelector } from '../../../redux/hooks'
import useService from '../../../hooks/useService'
import PostModel from '../../../models/post/Post'
import {  toast, ToastContainer } from 'react-toastify';

export default function Feed() {

    useTitle('SN - Feed')

    const posts = useAppSelector(state => state.feed.posts)
    const dispatch = useAppDispatch()

    const feedService = useService(FeedService)

    useEffect(() => {
        (async () => {
            try {
                if(posts.length === 0) {
                    const postsFromServer = await feedService.getFeed()
                    dispatch(init(postsFromServer))
                }
            } catch {
                toast.error("Failed to load posts");
            }
        })()
    }, [dispatch, feedService, posts.length])

    async function reload() {
        try {
            const postsFromServer = await feedService.getFeed()
            dispatch(init(postsFromServer))
        } catch {
            toast.error("Failed to load posts");
        }
    }

    function dismiss() {
        dispatch(setNewContent(false))
    }

    const isNewContent = useAppSelector(state => state.feed.isNewContent)

    return (
        <>
                <ProfileComponent 
                posts={posts} 
                dismiss={dismiss}
                isNewContent={isNewContent}
                reload={reload} 
                />
                 <ToastContainer />
        </>
            );
        }
        
        interface ProfileComponentProps {
            posts: PostModel[];
            dismiss: () => void;
            isNewContent: boolean;
            reload: () => Promise<void>;
        }
        
        const ProfileComponent = ({ posts, dismiss, isNewContent, reload }: ProfileComponentProps) => {
            const [loading, setLoading] = useState(true);
        
            useEffect(() => {
                const timer = setTimeout(() => {
                    setLoading(false);
                });
        
                // Clean up the timer when the component unmounts
                return () => clearTimeout(timer);
            }, []);
    
    return (
        <div className='Feed'>

            {loading && <Loading message='Uploading feed' />}
            {!loading && posts.length === 0 && <div>No posts found.</div>}
            {!loading && posts.length > 0 && (
                             <>
                {isNewContent && <>
                        <div className="info">
                            You have updates in your feed. reload? <button onClick={reload}>yes</button><button onClick={dismiss}>no</button>
                        </div>
                </>}

                {posts.map(p => <Post
                key={p.id}
                post={p}
            />)}
            </>)}
        </div>
    )
}