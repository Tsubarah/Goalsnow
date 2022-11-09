import Tabs from '../Components/Tabs'
import UserInfo from "../Components/UserInfo"
import LoadingSpinner from '../Components/LoadingSpinner'
import { useEffect } from 'react'
import { useQuery} from 'react-query'
import GoalsAPI from '../services/GoalsAPI'
import { useParams} from 'react-router-dom'
import { IGoal } from '../typings/Goal'


const GoalsPage = () => {
    const { id } = useParams()
    const { data: goals, isLoading } = useQuery<IGoal[]>(['goals', id], () => GoalsAPI.getGoals(id))

  useEffect(() => {
    if (!goals)
    return
    console.log(goals)
  },[])
  console.log('goals', goals)

  return (

    <div className="goals-page-wrapper">
        {isLoading && <LoadingSpinner />}

        {!isLoading && goals && (

        <>
            <UserInfo />

            <Tabs goals={goals} />
        </>
        )}
    </div>
  )
}

export default GoalsPage