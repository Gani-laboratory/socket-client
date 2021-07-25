import { ReactComponent as Notif } from "../Assets/notification.svg"
import { ReactComponent as Search } from "../Assets/search.svg"
import profile from "../Assets/profile.jpg"

export function TopBar() {
  return (
    <div className="flex justify-between items-center p-5 font-ubuntu border-b">
      <h3 className="text-lg">Personal chat</h3>
      <div className="flex items-center gap-5">
        <div className="flex items-center rounded-r">
          <input className="rounded-md rounded-r-none p-2 bg-gray-100" type="text" id="search" placeholder="Search" />
          <Search className="cursor-pointer rounded-md rounded-l-none p-2 bg-gray-200" width={40} height={40} />
        </div>
        <Notif className="cursor-pointer" width={35} height={35} />
        <img className="rounded-full cursor-pointer" src={profile} alt="profile" width={45} height={45} />
      </div>
    </div>
  )
}

export function SideBar() {
  return (
    <div className="flex flex-col">
      <p>Sidebar component</p>
    </div>
  )
}
