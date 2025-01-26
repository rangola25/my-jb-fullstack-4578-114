import './Post.css'
import PostModel from '../../../models/post/Post'
import profileService from '../../../services/profile'
import { useNavigate } from 'react-router-dom'
import Comments from '../comments/Comments'
import { useAppDispatch } from '../../../redux/hooks'
import { remove } from '../../../redux/profileSlice'

interface PostProps {
    post: PostModel,
    isAllowActions?: boolean
}
export default function Post(props: PostProps): JSX.Element {

    const { 
        title, 
        body, 
        createdAt, 
        id, 
        comments 
    } = props.post
    const { name } = props.post.user

    const navigate = useNavigate()

    const dispatch = useAppDispatch()
    
    async function deleteMe() {
        if(confirm(`Are you sure you want to delete "${title}"`)) {
            try {
                await profileService.remove(id)
                dispatch(remove({id}))
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
        <div>
            {title}
        </div>
        <div>
            by {name} at {createdAt}
        </div>
        <div>
            {body}
        </div>
        {props.isAllowActions && 
            <div>
                <button onClick={editMe}>Edit</button>
                <button onClick={deleteMe}>Delete</button>
            </div>
        }
        <Comments 
            comments={comments}
            postId={id}
        />
    </div>
    
    )
}
