import { useEffect, useState } from 'react';
import './Followers.css';
import FollowersService from '../../../services/auth-aware/Followers';
import Follow from '../follow/Follow';
import Loading from '../../common/loading/Loading';
import { useAppDispatch, useAppSelector } from '../../../redux/hooks';
import { init } from '../../../redux/followersSlice';
import useService from '../../../hooks/useService';
import User from '../../../models/user/User';
import {  toast, ToastContainer } from 'react-toastify';

export default function Followers() {
    const followers = useAppSelector(state => state.followers.followers);
    const dispatch = useAppDispatch();
    const followersService = useService(FollowersService);

    useEffect(() => {
        (async () => {
            try {
                const followers = await followersService.getFollowers();
                dispatch(init(followers));
            } catch {
                toast.error("Failed to load followers users");
            }
        })();
    }, [dispatch, followersService]);

    return (
        <FollowersComponent followers={followers} />
    );
}

interface FollowersComponentProps {
    followers: User[];
}

const FollowersComponent = ({ followers }: FollowersComponentProps) => {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            setLoading(false);
        }, 3000);

        // Clean up the timer when the component unmounts
        return () => clearTimeout(timer);
    }, []);

    return (
        <div className='Followers'>
            <h3>Followers</h3>
            {loading && <Loading message='Uploading followers' />}
            {!loading && followers.length === 0 && <div>No followers found.</div>}
            {!loading && followers.length > 0 && (
                <>
                    {followers.map((follow: User) => (
                        <Follow key={follow.id} user={follow} />
                    ))}
                </>
            )}
            <ToastContainer />
        </div>
    );
};