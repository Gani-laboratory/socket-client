import { useState } from "react"
import { ReactComponent as Notif } from "../Assets/notification.svg"
import { ReactComponent as Search } from "../Assets/search.svg"
import profile from "../Assets/profile.jpg"

export function TopBar() {
  return (
    <div className="flex justify-between items-center p-5 font-ubuntu border-b ml-16">
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
  const [open, setOpen] = useState(false)
  const toggleClass = () => {
    setOpen(!open)
  }

  return (
    <div className="fixed h-screen p-4 border-r z-10 bg-white">
      <div className="flex flex-col justify-center gap-1 mt-1 w-9 h-9 cursor-pointer transition-all" onClick={toggleClass}>
        <span className="block h-1 w-full bg-black rounded-full" />
        <span className="block h-1 w-full bg-black rounded-full" />
        <span className="block h-1 w-full bg-black rounded-full" />
      </div>
      <div className="flex items-center justify-center w-full h-full text-lg">
        <p>L</p>
      </div>
    </div>
  )
}
