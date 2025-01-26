import { useEffect } from 'react'
import './Followers.css'
import followersService from '../../../services/followers'
import Follow from '../follow/Follow'
import Loading from '../../common/loading/Loading'
import { useAppDispatch, useAppSelector } from '../../../redux/hooks'
import { init } from '../../../redux/followersSlice'

export default function Followers() {
     const followers = useAppSelector(state => state.followers.followers)

    const dispatch = useAppDispatch()

    useEffect(() => {
        (async () => {
            try {
            const followers = await followersService.getFollowers()
            dispatch(init(followers))
            } catch (e) {
                alert(e)
            }
        })()
    }, [ dispatch ])

    return (
        <div className='Followers'>

            { followers.length === 0 && <Loading message='Uploading followers'/>}

            { followers.length > 0 && <>
                <h3>Followers</h3>
            {followers.map(follow => <Follow
                key={follow.id}
                user={follow}
            ></Follow>)}
            </>}
        </div>
    )
}