import { useEffect } from 'react'
import './Cards.css'
import Loading from '../../common/loading/Loading'
import useTitle from '../../../hooks/useTitle'
import { useAppDispatch, useAppSelector } from '../../../redux/hooks'
import useService from '../../../hooks/useService'
import Vacation from '../vacation/Vacation'
import User from '../../../services/auth-aware/vacation'
import { init } from '../../../redux/vacationSlice'

interface VacationsProps {
    isAllowActions: boolean
}
export default function Cards(props: VacationsProps): JSX.Element {

    useTitle('Vacations')

    const userService = useService(User)

    const vacations = useAppSelector(state => state.vacations.vacations)
    const dispatch = useAppDispatch()

    useEffect(() => {
        (async () => {
            try {
                if (vacations.length === 0) {
                    const postsFromServer = await userService.getAllVacations()
                    dispatch(init(postsFromServer))
                }
            } catch (e) {
                alert(e)
            }
        })()
    }, [dispatch, userService, vacations.length])

    return (
        <div className='Vacations'>

            {vacations.length === 0 && <Loading />}

            {vacations.length > 0 && <>
                {vacations.map(v =>
                    <Vacation
                        key={v.id}
                        vacation={v}
                        isAllowActions={props.isAllowActions}
                    />
                )}
            </>}

        </div>
    )
}