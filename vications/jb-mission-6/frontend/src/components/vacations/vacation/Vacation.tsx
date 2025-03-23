import './vacation.css'
import { useNavigate } from 'react-router-dom'
import { useAppDispatch } from '../../../redux/hooks'
import useService from '../../../hooks/useService'
import VacationModel from '../../../models/vacation/Vacation'
import Admin from '../../../services/auth-aware/admin'
import { remove } from '../../../redux/vacationSlice'
import { useEffect, useRef, useState } from 'react'
import Like from '../../../models/like/Like'
import User from '../../../services/auth-aware/vacation'
import { init, like, unlike } from '../../../redux/followingSlice'
import useUserId from '../../../hooks/useUserId'

interface VacationsProps {
    vacation: VacationModel,
    isAllowActions?: boolean, 
}

export default function Vacation(props: VacationsProps): JSX.Element {
    const [isAllowActions, setIsAllowActions] = useState(false);

    const {
        id,
        file,
        destination,
        startDate,
        endDate,
        description,
        price
    } = props.vacation

    const navigate = useNavigate()
    const dispatch = useAppDispatch()
    const adminService = useService(Admin)
    const userService = useService(User)
    const likesFromServerRef = useRef<Like[] | null>(null)
    const userId = useUserId()

    useEffect(() => {
        const isUserAdmin = JSON.parse(localStorage.getItem('isAdmin') || 'false')
        setIsAllowActions(isUserAdmin)
    }, [])

    useEffect(() => {
        (async () => {
            try {
                const likesFromServer = await userService.getAllLikes()
                dispatch(init(likesFromServer))
                likesFromServerRef.current = likesFromServer
            } catch (e) {
                alert(e)
            }
        })()
    }, [])

    async function deleteMe() {
        if (confirm(`Are you sure you want to delete the vacation in "${destination}"?`)) {
            try {
                await adminService.removeVacation(id)
                dispatch(remove({ id }))
            } catch (e) {
                alert(e)
            }
        }
    }

    function editMe() {
        navigate(`/admin/edit/${id}`)
    }

    async function changeLike(event: React.MouseEvent<HTMLButtonElement>) {
        try {
            const vacationId = event.currentTarget.value
            const likesArray = await userService.getAllFollows()
            console.log(likesArray)
            const like = likesArray.find(like => like.userId === userId && like.vacationId === vacationId)
            console.log(like)
            if (like) {
                await removeLike(vacationId)
            }
            else {
                await giveLike(vacationId)
            }
        } catch (e) {
            alert(e)
        }
    }

    async function removeLike(vacationId: string) {
        try {
            if (confirm(`Are you sure you want to delete like from: ${vacationId}`)) {
            await userService.unlike(userId, vacationId)
            dispatch(unlike({ vacationId: vacationId, userId: userId }))
            window.location.reload()
            }        
        } catch (e) {
            alert(e)
        }
    }

    async function giveLike(vacationId: string) {
        try {
            if (confirm(`Are you sure you want to like: ${vacationId}`)) {
                await userService.addLike(userId, vacationId)
                dispatch(like({ vacationId: vacationId, userId: userId }))
                window.location.reload()
            }        
        } catch (e) {
            alert(e)
        }
    }

    return (
        <div className="Vacation">
            {isAllowActions &&
                <>
                    <button value={id} onClick={editMe}><i className='bi bi-pencil'></i>Edit</button>
                    <button value={id} onClick={deleteMe}><i className='bi bi-trash3'></i>Delete</button>
                </>
            }

            {!isAllowActions &&
                <>
                    <button value={id} className='likes' onClick={changeLike}><i className='bi bi-heart-fill'></i>Likes: {likesFromServerRef.current?.filter(l => l.vacationId === id).length}</button>
                </>
            }

            <img src={`${import.meta.env.VITE_AWS_SERVER_URL}/${file}`}></img>
            <span>{destination}</span>
            <p className='date'><i className='bi bi-calender-event'></i>{new Date(startDate).toLocaleString()} - {new Date(endDate).toLocaleString()}</p>
            <p className='description'>{description}</p>
            <button className='price'>{price}$</button>
        </div>
    )
}
