import { useEffect, useState } from 'react'
import './Followers.css'
import User from '../../../models/user/User'
import follower from '../../../services/Follower'

export default function Profile(): JSX.Element {

    // posts: Post[]
    const [users, setPosts] = useState<User[]>([])

    useEffect(() => {
        follower.getProfile()
        .then(setPosts)
        .catch(alert)
    }, [])

    return (
        <div className='followers'>
            <ul>
                {users.map(({id, name}) => <li key={id}>{name}</li>)}
            </ul>
        </div>
    )
}