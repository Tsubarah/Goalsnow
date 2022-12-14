import RightSidebar from "../Components/RightSidebar"
import Profile from "../Components/Profile"
import UserList from "../Components/Userlist"
import { useState } from "react"
import { IUser } from "../typings/Userinterface"

const ManagerPage = () => {
  const [show, setShow] = useState<boolean | null>(null)
  const [user, setUser] = useState<IUser | undefined>()

  const setUserFromUserlist = (user: IUser) => {
    setUser(user)
  }

  return (
    <div className="manager-page-wrapper">
      <div className="sidebar">
        <Profile user={user} />
      </div>

      <UserList
        setShow={setShow}
        show={show}
        setUserFromUserlist={setUserFromUserlist}
      />

      <RightSidebar show={show} user={user} />
    </div>
  )
}

export default ManagerPage
