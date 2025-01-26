import './Post.css'
import PostModel from '../../../models/post/Post'
import profileService from '../../../services/profile'
import { useNavigate } from 'react-router-dom'

interface PostProps {
    post: PostModel,
    isAllowActions?: boolean, // === isAllowActions: boolean | undefined
    remove? (id: string): void
}

export default function Post(props: PostProps): JSX.Element {

    const { title, body, createdAt, id } = props.post
    const { name } = props.post.user
    const navigate = useNavigate()
    
    async function deleteMe() {
        // props.remove: Function | undefined
        if(props.remove && confirm(`Are you sure you want to delete "${title}"?`)) {
            // props.remove: Function
            // this action is called type-narrowing.
            try {
                await profileService.remove(id)
                props.remove(id)
                // i was able to delete from the server,
                // this is the point to affect the UI
                // in other words, we need to change the state
            } catch (e) {
                alert(e)
            }
        }
    }

    function editMe() {
        navigate(`/edit/${id}`)
    }

    return (
        <div className='Post'>
            <h2>
                {title}
            </h2>
            <div>
                by {name} at {createdAt}
            </div>
            <div>
                {body}
            </div>
            { props.isAllowActions && 
                <div>
                    <button onClick={editMe}>Edit</button>
                    <button onClick={deleteMe}>Delete</button>
                </div>
            }
            <div>
                <h3>
                    Comments
                </h3>
                <div> 
                    <h5>{name} said at {createdAt}</h5>
                    <h4>{body}</h4>
                </div>
            </div>
        </div>
    )
}