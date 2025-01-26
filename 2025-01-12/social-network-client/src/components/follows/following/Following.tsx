import './Following.css'
import { useEffect, useState } from 'react'
import User from '../../../models/user/User'
import followingService from '../../../services/following'
import Follow from '../follow/Follow'

export default function Following() {
    const [following, setFollowing] = useState<User[]>([])

    useEffect(() => {
        followingService.getFollowing()
            .then(setFollowing)
            .catch(alert)
    }, [])

    function remove(id: string): void {
        const index = following.findIndex(follow => follow.id === id)
        if (index > -1) {
            const postsAfterRemoval = [...following]
            postsAfterRemoval.splice(index, 1)
            setFollowing(postsAfterRemoval)
        }
    }

    return (
        <div>
            <div>
                Following
            </div>
        <div className='Following'>
            {following.map(follow => <Follow
                                        key={follow.id}
                                        user={follow}
                                        isAllowActions={true}
                                        remove={remove}
                                    ></Follow>)}        
        </div>
        </div>
    )
}