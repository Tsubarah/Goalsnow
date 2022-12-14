import ListItem from "./ListItem"
import { useAuthContext } from "../Contexts/AuthContext"
import { IUser } from "../typings/Userinterface"
import { useState } from "react"

type listProps = {
  show: boolean | null
  setShow: (show: boolean) => void
  setUserFromUserlist: (user: IUser) => void
}

const UserList = ({ show, setShow, setUserFromUserlist }: listProps) => {
  const { users } = useAuthContext()
  const [isActive, setIsActive] = useState("")

  const sidebarStatus = () => {
    if (show === null && isActive === "") {
      return
    }
    if (isActive !== "") {
      setShow(true)
    } else {
      setShow(false)
    }
  }
  sidebarStatus()

  return (
    <div className="user-list-wrapper">
      {users && (
        <>
          <ul className="user-list">
            {users?.map((user, i) => (
              <ListItem
                key={i}
                id={i}
                user={user}
                setUserFromUserlist={setUserFromUserlist}
                setIsActive={setIsActive}
                isActive={isActive}
              />
            ))}
          </ul>
        </>
      )}
    </div>
  )
}

export default UserList
