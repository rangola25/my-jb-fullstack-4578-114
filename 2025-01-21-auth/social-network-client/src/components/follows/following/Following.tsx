import './Following.css'
import { useEffect, useState } from 'react'
import Follow from '../follow/Follow'
import Loading from '../../common/loading/Loading'
import { useAppDispatch, useAppSelector } from '../../../redux/hooks'
import { init } from '../../../redux/followingSlice'
import useService from '../../../hooks/useService'
import FollowingService from '../../../services/auth-aware/Following'
import User from '../../../models/user/User'
import {  toast, ToastContainer } from 'react-toastify';

export default function Following() {
    // const [following, setFollowing] = useState<User[]>([])
    const following = useAppSelector(state => state.following.following)

    const dispatch = useAppDispatch()

    const followingService = useService(FollowingService)

    useEffect(() => {
        (async () => {
            try {
            const following = await followingService.getFollowing()
            dispatch(init(following))
            } catch {
                toast.error("Failed to load following users");
            }
        })()
    }, [ dispatch, followingService ])

    return (
        <FollowingComponent following={following} />
    );
}

    interface FollowingComponentProps {
        following: User[];
    }
    
    const FollowingComponent = ({ following }: FollowingComponentProps) => {
        const [loading, setLoading] = useState(true);
    
        useEffect(() => {
            const timer = setTimeout(() => {
                setLoading(false);
            }, 3000);
    
            // Clean up the timer when the component unmounts
            return () => clearTimeout(timer);
        }, []);

    return (
        <div className='Following'>
            <h3>Following</h3>
            {loading && <Loading message='Uploading following' />}
            {!loading && following.length === 0 && <div>No following found.</div>}
            {!loading && following.length > 0 && (
             <>
                       {following.map((follow: User) => (
                            <Follow key={follow.id} user={follow} />
                        ))}       
                </>
            )} 
             <ToastContainer />
        </div>
    )
}