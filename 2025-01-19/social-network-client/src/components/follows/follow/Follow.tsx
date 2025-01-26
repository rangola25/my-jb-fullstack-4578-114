import User from '../../../models/user/User'
import './Follow.css'
import profilePicSource from '../../../assets/images/profile.jpg'
import followingService from '../../../services/following'
import { useAppDispatch, useAppSelector } from '../../../redux/hooks'
import { unfollow as unfollowAction, follow as followAction } from '../../../redux/followingSlice'
import LoadingButton from '../../common/loading-button/LoadingButton'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

interface FollowProps {
    user: User
}
export default function Follow(props: FollowProps): JSX.Element {

            
    const { user: {id, name} } = props

    const [isSubmitting, setIsSubmitting] = useState<boolean>(false)
    
    const [followedNew, setIsFollowedNew] = useState<boolean>(false)

    const dispatch = useAppDispatch()
    const isFollowing = useAppSelector(state => state.following.following.findIndex(f => f.id === id) > -1)

    async function unfollow() {
        if(window.confirm(`Are you sure you wanna stop following ${name}?`)) {
            try {
                setIsSubmitting(true)
                await followingService.unfollow(id)
                dispatch(unfollowAction({userId: id}))
            } catch (e) {
                alert(e)
            } finally {
                setIsSubmitting(false)
            }
        }
    }

    async function follow() {
            try {
                setIsSubmitting(true)
                await followingService.follow(id)
                dispatch(followAction(props.user))
                setIsFollowedNew(true)
            } catch (e) {
                alert(e)
            } finally {
                setIsSubmitting(false)
            }
    }

    const navigate = useNavigate()

    function onClick() {
        try {
            navigate('/feed')
            window.location.reload();
            setIsFollowedNew(false);
        } catch(e) {
            alert(e)
        }
    }

    function handleCancel() {
        setIsFollowedNew(false);
    }

    return (
        <div className='Follow'>
            <div>
                <img src={profilePicSource} />
            </div>
            <div>
                {name}
            </div>
            <div>
            {isFollowing && <LoadingButton 
                    onClick={unfollow}
                    isSubmitting={isSubmitting}
                    buttonText='Unfollow'
                    loadingText='Unfollowing'
                />}

            {!isFollowing && <LoadingButton 
                    onClick={follow}
                    isSubmitting={isSubmitting}
                    buttonText='Follow'
                    loadingText='Following'
                />}
            {followedNew && <div className='refreshPageDiv'><br/>
                    There are new posts. Would you like to refresh the feed? <br/>
                    <button onClick={onClick}>Reload Feed</button>
                    <button onClick={handleCancel}>Cancel</button>
                </div>}
            </div>
        </div>
    )
}