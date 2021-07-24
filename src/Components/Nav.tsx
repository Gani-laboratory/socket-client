import { ReactComponent as Notif } from "../Assets/notification.svg"
import { ReactComponent as Search } from "../Assets/search.svg"
import profile from "../Assets/profile.jpg"

export function TopBar() {
  return (
    <div className="flex justify-between items-center p-5 font-ubuntu">
      <h3 className="text-lg">Personal chat</h3>
      <div className="flex items-center">
        <input type="text" id="search" placeholder="Search" />
        <Notif className="cursor-pointer" width={35} height={35} />
        <img className="rounded-full cursor-pointer" src={profile} alt="profile" width={40} height={40} />
      </div>
    </div>
  )
}

export function SideBar() {
  return (
    <div className="">
      <p>Sidebar component</p>
    </div>
  )
}
