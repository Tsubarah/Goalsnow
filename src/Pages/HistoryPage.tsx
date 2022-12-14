import { useEffect, useState } from 'react'
import { useQuery } from 'react-query'
import { useParams } from 'react-router-dom'
import GoalsAPI from '../services/GoalsAPI'
import HistoryList from '../Components/HistoryList'
import UserInfo from '../Components/UserInfo'
import { IGoal } from '../typings/Goalinterface'
import { IUser } from '../typings/Userinterface'


const HistoryPage = () => {
  const [user, setUser] = useState<IUser | undefined>()
  const { id } = useParams()
  const { data: goals } = useQuery<IGoal[]>(['goals', id], () => GoalsAPI.getGoals(id))

  useEffect(() => {
    let targets: any = window.localStorage.getItem('target')
    let target = JSON.parse(targets)
    setUser(target)
  }, [])

  useEffect(() => {
    if (!goals)
      return
    console.log(goals)
  }, [goals])

  return (
    <div className="history-page-wrapper">
      {goals && (
        <>
          <UserInfo goals={goals} user={user} />

          <HistoryList goals={goals} />
        </>
      )}
    </div>
  )
}

export default HistoryPage