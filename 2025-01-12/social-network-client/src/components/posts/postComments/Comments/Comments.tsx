import { Component, useEffect, useState } from "react"
import Post from "../../post/Post"
import Comment from "../../../../models/comment/Comment"
import comments from "../../../../services/comments"

export default function Comments() {
    const [posts, setPosts] = useState<Comment[]>([])  

    useEffect(() => {
        comments.getFeed()
            .then(setPosts)
            .catch(alert)
    }, [])

    return (
        <div className='Feed'>
            {posts.map(p => (  
                <Component
                    key={p.id}
                    post={p}
                />
            ))}
        </div>
    )
}
