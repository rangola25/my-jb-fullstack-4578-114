import './vacation.css'
import { useNavigate } from 'react-router-dom'
import { useAppDispatch } from '../../../redux/hooks'
import useService from '../../../hooks/useService'
import VacationModel from '../../../models/vacation/Vacation'
import Admin from '../../../services/auth-aware/admin'
import { remove } from '../../../redux/vacationSlice'
import { useEffect, useRef } from 'react'
import Like from '../../../models/like/Like'
import User from '../../../services/auth-aware/vacation'
import { init } from '../../../redux/followingSlice'

interface VacationsProps {
    vacation: VacationModel,
    isAllowActions?: boolean, 
}
export default function Vacation(props: VacationsProps): JSX.Element {

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

    const likesFromServerRef = useRef<Like[] | null>(null);

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

    return (
        <div className='card-container-wrapper'>
        <div className="card-container">

            {props.isAllowActions &&
                <>
                    <button value={id} onClick={editMe}>Edit</button>
                    <button value={id} onClick={deleteMe}>Delete</button>
                </>
            }

            {!props.isAllowActions &&
                <>
                    <button>Likes: {likesFromServerRef.current?.map(l => l.vacationId === id).length}</button>
                </>
            }

            <img src={file}></img>
            <span>{destination}</span>
            <p>bootstrap gliph, {new Date(startDate).toLocaleString()} - {new Date(endDate).toLocaleString()}</p>
            <p>{description}</p>
            <button>{price}$</button>
        </div>
        </div>
    )  

}