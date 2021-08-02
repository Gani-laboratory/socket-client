export default function Register() {
  return (
    <div className="flex flex-col w-10/12 m-36 p-5 bg-gray-50 border rounded gap-5 font-ubuntu">
      <div className="flex items-center rounded">
        <i className="far fa-user rounded-l border bg-gray-100 p-2"></i>
        <input className="rounded-r border border-l-none bg-gray-100 focus:outline-none p-1 px-3 lg:w-full w-1/2" type="text" name="username" placeholder="Username" />
      </div>
      <div className="flex justify-between">
        <button className="p-3 bg-gray-500 rounded text-white">Create account</button>
        <button className="p-3 bg-gray-500 rounded text-white">Back</button>
      </div>
    </div>
  )
}
