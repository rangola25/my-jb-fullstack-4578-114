import { useEffect, useState } from 'react'
import './Followers.css'
import User from '../../../models/user/User'
import followersService from '../../../services/followers'
import Follow from '../follow/Follow'
import Loading from '../../common/loading/Loading'

export default function Followers() {
    const [followers, setFollowers] = useState<User[]>([])

    useEffect(() => {
        followersService.getFollowers()
            .then(setFollowers)
            .catch(alert)
    }, [])

    function removeFromFollowingList(userId: string): void {
        console.log(userId)
    }

    return (
        <div className='Followers'>

            { followers.length === 0 && <Loading message='Uploading followers'/>}

            { followers.length > 0 && <>
                <h3>Followers</h3>
            {followers.map(follow => <Follow
                key={follow.id}
                user={follow}
                removeFromFollowingList={removeFromFollowingList}
            ></Follow>)}
            </>}
        </div>
    )
}