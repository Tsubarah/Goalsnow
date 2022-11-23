import RightSidebar from "../Components/RightSidebar"
import Profile from "../Components/Profile";
import UserList from "../Components/Userlist"
import { useState, useEffect } from "react"
import useUsers from "../services/useUsers";
import { useAuthContext } from "../Contexts/AuthContext";
import { IUser, ITeam } from "../typings/Userinterface";

const ManagerPage = () => {
  const [show, setShow] = useState<boolean | null>(null)
  const [user, setUser] = useState<IUser | undefined>()
  const [team, setTeam] = useState<ITeam | undefined>()
  const { currentUser } = useAuthContext();
  const { getManagersGroup } = useUsers()

  const setUserFromUserlist = (user: IUser) => {
    setUser(user)
  }

  const getTeam = async () => {
    if (!currentUser) return

    const getTeam = getManagersGroup(currentUser.token)
      getTeam.then((team: any) => {
        setTeam(team[0])
      })
    }
  
  useEffect(() => {
    if (currentUser) {
      getTeam()
      }
  },[currentUser])
  
  return (
    <div className="manager-page-wrapper">
      <div className="sidebar">
       <Profile user={user} />
      </div>
        
      <UserList setShow={setShow} show={show} setUserFromUserlist={setUserFromUserlist} team={team} /> 

      <RightSidebar show={show} user={user} />

    </div>
  )
}

export default ManagerPage