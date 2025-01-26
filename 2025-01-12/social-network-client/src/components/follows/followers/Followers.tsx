import { useEffect, useState } from 'react'
import './Followers.css'
import User from '../../../models/user/User'
import followersService from '../../../services/followers'
import Follow from '../follow/Follow'

export default function Followers(): JSX.Element {
    const [followers, setFollowers] = useState<User[]>([])

    useEffect(() => {
        followersService.getFollowers()
            .then(setFollowers)
            .catch(alert)
    }, [])



    return (
        <div>
            <div>
                Followers
            </div>
        <div className='Followers'>
            {followers.map(follow => <Follow 
                                      key={follow.id} 
                                      user={follow}
                                     ></Follow>)}
        </div>
        </div>
    )
}