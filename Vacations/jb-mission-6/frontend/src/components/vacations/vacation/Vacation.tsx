import './vacation.css'
import { useNavigate } from 'react-router-dom'
import { useAppDispatch } from '../../../redux/hooks'
import useService from '../../../hooks/useService'
import VacationModel from '../../../models/vacation/Vacation'
import Admin from '../../../services/auth-aware/admin'
import { remove } from '../../../redux/vacationSlice'
import { useEffect, useRef, useState } from 'react'
import User from '../../../services/auth-aware/vacation'
import { init, like, unlike } from '../../../redux/followingSlice'
import useUserId from '../../../hooks/useUserId'
import LikeDraft from '../../../models/like/LikeDraft'

interface VacationsProps {
    vacation: VacationModel,
    isAllowActions?: boolean, 
}

export default function Vacation(props: VacationsProps): JSX.Element {
    const [isAllowActions, setIsAllowActions] = useState(false)
    const [isLiked, setIsLiked] = useState(false)  // State to track if the vacation is liked

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
    const likesFromServerRef = useRef<LikeDraft[] | null>(null)
    const userId = useUserId()

    useEffect(() => {
        const isUserAdmin = JSON.parse(localStorage.getItem('isAdmin') || 'false')
        setIsAllowActions(isUserAdmin)
    }, [])

    useEffect(() => {
        (async () => {
            try {
                const likesFromServer = await userService.getAllFollows()
                dispatch(init(likesFromServer))
                likesFromServerRef.current = likesFromServer
                
                // Check if the vacation has been liked by the current user
                const userLike = likesFromServer.find(like => like.userId === userId && like.vacationId === id)
                setIsLiked(!!userLike)  // Set the like status based on if the user has already liked it
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
            if (isLiked) {
                await removeLike(vacationId)
            } else {
                await giveLike(vacationId)
            }
        } catch (e) {
            alert(e)
        }
    }

    async function removeLike(vacationId: string) {
        try {
            if (confirm(`Are you sure you want to remove your like from: ${vacationId}`)) {
                await userService.unlike(userId, vacationId)
                dispatch(unlike({ vacationId: vacationId, userId: userId }))
                setIsLiked(false) 
                window.location.reload() 
                // Optionally, you can keep track of the like status using localStorage or Redux
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
                setIsLiked(true) 
                window.location.reload()
                // Optionally, you can keep track of the like status using localStorage or Redux
            }        
        } catch (e) {
            alert(e)
        }
    }

    return (
        <div className="Vacation">
            {isAllowActions &&
                    <div className="icons">
                    <button className='edit' value={id} onClick={editMe}><i className='bi bi-pencil'></i>Edit</button>
                    <button className='delete' value={id} onClick={deleteMe}><i className='bi bi-trash3'></i>Delete</button>
                    </div>
            }

            {!isAllowActions &&
                <div className='iconLike'>
                <button
                    value={id}
                    className={`likes ${isLiked ? 'liked' : ''}`} 
                    onClick={changeLike}
                >
                    <i className='bi bi-heart-fill'></i>Likes: {likesFromServerRef.current?.filter(l => l.vacationId === id).length}
                </button>
                </div>
            }

            <img src={`${import.meta.env.VITE_AWS_SERVER_URL}/${file}`} alt={destination}></img>
            <span>{destination}</span>
            <p className='date'>
                <i className='bi bi-calendar-event'></i>
                {new Date(startDate).toLocaleDateString()} - {new Date(endDate).toLocaleDateString()}
            </p>
            <div className='wrapper2'>
            <p className='description'>{description}</p>
            </div>
            <div className="wrapper">
            <button className='price'>{price}$</button>
            </div>
        </div>
    )
}
