import { useEffect, useState } from 'react'
import './Following.css'
import User from '../../../models/user/User'
import following from '../../../services/Following'

export default function Profile(): JSX.Element {

    // posts: Post[]
    const [users, setPosts] = useState<User[]>([])

    useEffect(() => {
        following.getProfile()
        .then(setPosts)
        .catch(alert)
    }, [])

    return (
        <div className='following'>
            <ul>
                {users.map(({id, name}) => <li key={id}>{name}</li>)}
            </ul>
        </div>
    )
}