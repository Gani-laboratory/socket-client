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
          <input className="rounded-md rounded-r-none p-2 bg-gray-100 focus:outline-none" type="text" id="search" placeholder="Search" />
          <Search className="cursor-pointer rounded-md rounded-l-none p-2 bg-gray-200" width={40} height={40} />
        </div>
        <Notif className="cursor-pointer" width={35} height={35} />
        <small className="bg-red-600 text-white leading-none w-6 h-6 font-ubuntu text-xs text-center rounded-full p-1 relative right-9 bottom-2">11</small>
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
    <div className={`fixed h-screen transition-all delay-100 ${open ? "w-60" : "w-auto"} p-4 border-r z-10 bg-white font-ubuntu`}>
      <div className="flex flex-col justify-center gap-1 mt-1 w-9 h-9 cursor-pointer" onClick={toggleClass}>
        <span className="block h-1 w-full bg-black rounded-full" />
        <span className="block h-1 w-full bg-black rounded-full" />
        <span className="block h-1 w-full bg-black rounded-full" />
      </div>
      <div className="flex flex-col gap-5 items-center justify-center w-full h-full text-lg">
        <div className={`${open ? "flex items-center gap-2 bg-indigo-500 p-1 rounded-md" : ""} text-white cursor-pointer`}>
          <i className="far fa-home p-2 border-2 bg-indigo-600 rounded-md"></i>
          {open && <p>Homepage</p>}
        </div>
      </div>
    </div>
  )
}
