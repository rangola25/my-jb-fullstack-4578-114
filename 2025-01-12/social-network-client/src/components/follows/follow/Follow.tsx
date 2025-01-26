import User from '../../../models/user/User'
import './Follow.css'
import profilePicSource from '../../../assets/images/profile.jpg'
import following from '../../../services/following'

interface FollowProps {
    user: User,
    isAllowActions?: boolean
    remove? (id: string): void
}

export default function Follow(props: FollowProps): JSX.Element {

    const { name, id } = props.user

    async function unfollow() {
        // props.remove: Function | undefined
        if(props.remove && confirm(`Are you sure you want to unfollow "${name}"?`)) {
            // props.remove: Function
            // this action is called type-narrowing.
            try {
                await following.remove(id)
                props.remove(id)
                // i was able to delete from the server,
                // this is the point to affect the UI
                // in other words, we need to change the state
            } catch (e) {
                alert(e)
            }
        }
    }

    return (
        <div className='Follow'>
            <div>
                <img src={profilePicSource} />
            </div>
            <div>
                {name}
            </div>
            { props.isAllowActions && 
            <div>
                <button onClick={unfollow}>Unfollow</button>
            </div>
            }
        </div>
    )
}