import './Following.css'
import { useEffect, useState } from 'react'
import User from '../../../models/user/User'
import followingService from '../../../services/following'
import Follow from '../follow/Follow'
import Loading from '../../common/loading/Loading'

export default function Following() {
    const [following, setFollowing] = useState<User[]>([])

    useEffect(() => {
        followingService.getFollowing()
            .then(setFollowing)
            .catch(alert)
    }, [])

    function removeFromFollowingList(userId: string): void {
        const newFollowing = following.filter(f => f.id !== userId)
        setFollowing(newFollowing)
    }

    return (
        <div className='Following'>

        { following.length === 0 && <Loading message='Uploading following' />}

        { following.length > 0 && <>
            <h3>Following</h3>
            {following.map(follow => <Follow
                key={follow.id}
                user={follow}
                removeFromFollowingList={removeFromFollowingList}
            ></Follow>)}       
            </>} 
        </div>
    )
}