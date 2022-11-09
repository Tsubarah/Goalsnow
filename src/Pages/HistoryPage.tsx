import { useEffect } from 'react'
import { useQuery} from 'react-query'
import { useParams} from 'react-router-dom'
import { IGoal } from '../typings/Goal'
import GoalsAPI from '../services/GoalsAPI'
import LoadingSpinner from '../Components/LoadingSpinner'
import HistoryList from '../Components/HistoryList'

const HistoryPage = () => {
    const { id } = useParams()
    const { data: goals, isLoading } = useQuery<IGoal[]>(['goals', id], () => GoalsAPI.getGoals(id))

    useEffect(() => {
        if (!goals)
        return
        console.log(goals)
      },[])
      console.log('goals', goals)

	return (
		
		<div className="history-page-wrapper">

			<h2>History</h2>

			{isLoading && <LoadingSpinner />}

			{!isLoading && goals && (

				<HistoryList goals={goals} />

			)}

		</div>
	)
}

export default HistoryPage