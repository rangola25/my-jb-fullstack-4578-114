import { useEffect, useState } from 'react'
import './Profile.css'
import PostModel from '../../../models/post/Post'
import profile from '../../../services/profile'
import Post from '../post/Post'
import NewPost from '../new/NewPost'
import Comment from '../../../models/comment/Comment'
import Loading from '../../common/loading/Loading'
import useTitle from '../../../hooks/useTitle'

interface setEntered {
    setEntered(): void,
    enteredValue: boolean
}

export default function Profile(props: setEntered): JSX.Element {

    // posts: Post[]
    const [posts, setPosts] = useState<PostModel[]>([])

    useTitle('SN - Profile')

    useEffect(() => {
        // useEffect disallows the callback function to be async
        // so we either use then:
        profile.getProfile()
            .then(setPosts)
            .then(props.setEntered)
            .catch(alert)

        // or an async IIFE:            
        // (async () => {
        //     try {
        //         const profilePosts = await profile.getProfile()
        //         setPosts(profilePosts)
        //     } catch (e) {
        //         alert(e)
        //     }
        // })()
    }, [])

    function remove(id: string): void {
        const index = posts.findIndex(post => post.id === id)
        if (index > -1) {
            const postsAfterRemoval = [...posts]
            postsAfterRemoval.splice(index, 1)
            setPosts(postsAfterRemoval)
        }
    }

    function addPost(post: PostModel): void {
        setPosts([post, ...posts])
    }

    function addComment(comment: Comment): void {
        const postsWithNewComment = [...posts]

        const postToAddCommentTo = postsWithNewComment.find(post => post.id === comment.postId)
        if(postToAddCommentTo) {
            postToAddCommentTo.comments.unshift(comment)
        }

        setPosts(postsWithNewComment)
    }

    return (
        <div className='Profile'>
            {!props.enteredValue && posts.length === 0 && <Loading message='Uploading the profile'/>}
            {props.enteredValue && posts.length === 0  && <NewPost addPost={addPost}/>}

            { posts.length > 0 && <>
                <NewPost 
                    addPost={addPost} 
                />
                {posts.map(p =>
                    <Post
                        key={p.id}
                        post={p}
                        isAllowActions={true}
                        remove={remove}
                        addComment={addComment}
                    />
                )}
            </>}

        </div>
    )
}