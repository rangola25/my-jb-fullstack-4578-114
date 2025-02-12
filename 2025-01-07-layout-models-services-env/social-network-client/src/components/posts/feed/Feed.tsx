import { useEffect, useState } from 'react'
import './Feed.css'
import Post from '../../../models/post/Post'
import feed from '../../../services/Feed'

export default function Profile(): JSX.Element {

    // posts: Post[]
    const [posts, setPosts] = useState<Post[]>([])

    useEffect(() => {
        feed.getProfile()
        .then(setPosts)
        .catch(alert)
    }, [])

    return (
        <div className='feed'>
            <ul>
                {posts.map(({id, title}) => <li key={id}>{title}</li>)}
            </ul>
        </div>
    )
}