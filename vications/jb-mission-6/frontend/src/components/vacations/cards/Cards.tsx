import { useEffect, useState } from 'react'
import './Cards.css'
// import Loading from '../../common/loading/Loading'
import useTitle from '../../../hooks/useTitle'
import { useAppDispatch, useAppSelector } from '../../../redux/hooks'
import { init as initLikes } from '../../../redux/followingSlice'
import useService from '../../../hooks/useService'
import Vacation from '../vacation/Vacation'
import VacationModel from '../../../models/vacation/Vacation'
import { useSelector } from 'react-redux'
import { RootState } from '../../../redux/store'
import User from '../../../services/auth-aware/vacation'
import useUserId from '../../../hooks/useUserId'
import VacationForm from '../vacationForm/VacationForm'
import { init } from '../../../redux/vacationSlice'

export default function Vacations(): JSX.Element {
  useTitle('Vacations')
  const dispatch = useAppDispatch()
  const userService = useService(User)
  const userId = useUserId()

  const [page, setPage] = useState<number>(1)
  const itemsPerPage = 10

  function pagesChange(event: React.MouseEvent<HTMLButtonElement>) {
      setPage(+event.currentTarget.value)
  }

  const [vacations, setVacations] = useState<VacationModel[]>()

  const vacationsRedux = useAppSelector(state => state.vacations.vacations)

  useEffect(() => {
      (async () => {
          try {
              if (vacationsRedux.length === 0) {
                  const vacationsFromServer = await userService.getAllVacations()
                  dispatch(init(vacationsFromServer))
                  setVacations(vacationsFromServer)
                  const likesFromServer = await userService.getAllLikes()
                  dispatch(initLikes(likesFromServer))
              } else {
                  setVacations(vacationsRedux)
              }
          } catch (e) {
              alert(e)
          }
      })()
  }, [dispatch, userService, vacationsRedux])

  const [filter, setFilter] = useState<string>('all')

  const handleFilterChange = (newFilter: string) => {
      setFilter(newFilter)
      setPage(1)
  }

  const likesReduxState = useSelector((state: RootState) => state.following.likes)

  useEffect(() => {
      if (filter === 'all') {
          setVacations(vacationsRedux)
      } else if (filter === 'followed') {
          const followArray = likesReduxState.filter(l => userId === l.userId).map(l => l.vacationId)
          const filteredVacations = vacations?.filter(v => followArray.includes(v.id))
          if (filteredVacations?.length !== 0) {
              setVacations(filteredVacations)
          } else {
              setVacations([])  // No vacations found, set to empty array
          }
      } else if (filter === 'notStarted') {
          const filteredVacations = vacations?.filter(v => new Date(v.startDate) > new Date())
          if (filteredVacations?.length !== 0) {
              setVacations(filteredVacations)
          } else {
              setVacations([])  // No vacations found, set to empty array
          }
      } else if (filter === 'active') {
          const filteredVacations = vacations?.filter(v => new Date(v.endDate) > new Date() && new Date(v.startDate) < new Date())
          if (filteredVacations?.length !== 0) {
              setVacations(filteredVacations)
          } else {
              setVacations([])  // No vacations found, set to empty array
          }
      }
  }, [filter, likesReduxState, userId, vacations, vacationsRedux])

  return (
      <>
          <VacationForm onFilterChange={handleFilterChange} />

          <div className='VacationsContainer'>
              {vacations?.length === 0 ? (
                  <div>No vacations found for the selected filter.</div>  
              ) : (
                  <>
                      {vacations?.slice((page - 1) * itemsPerPage, page * itemsPerPage)
                          .map(v =>
                              <Vacation
                                  key={v.id}
                                  vacation={v}
                              />
                          )
                      }
                  </>
              )}
          </div>
          <br />

          <span className='span'>pages:</span>
          <div className='paginationBar'>
              <nav aria-label="Page navigation example">
                  <ul className="pagination">
                      {/* Dynamically generate pagination buttons */}
                      {vacations && Array.from({ length: Math.ceil(vacations.length / itemsPerPage) }).map((_, index) => (
                          <li className="page-item" key={index}>
                              <button
                                  value={index + 1}
                                  className={`page-link ${page === index + 1 ? 'active' : ''}`}
                                  onClick={pagesChange}
                              >
                                  {index + 1}
                              </button>
                          </li>
                      ))}
                  </ul>
              </nav>
          </div>
      </>
  )
}
