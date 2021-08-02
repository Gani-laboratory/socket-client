export default function Register() {
  return (
    <div className="flex absolute w-full h-full">
      <div className="flex flex-col m-auto w-1/2 h-1/3 p-5 bg-gray-50 border rounded gap-5 justify-between font-ubuntu">
        <div className="flex flex-col gap-5 rounded">
          <div className="flex">
            <i className="far fa-user rounded-l border bg-gray-100 p-2"></i>
            <input className="rounded-r border border-l-none bg-gray-100 focus:outline-none p-1 px-3 lg:w-full w-1/2" type="text" name="username" placeholder="Username" />
          </div>
          <div className="flex">
            <i className="far fa-fingerprint rounded-l border bg-gray-100 p-2"></i>
            <input className="rounded-r border border-l-none bg-gray-100 focus:outline-none p-1 px-3 lg:w-full w-1/2" type="text" name="username" placeholder="Password" />
          </div>
        </div>
        <div className="flex justify-between">
          <button className="p-3 bg-gray-500 rounded text-white">Submit</button>
          <button className="p-3 bg-gray-500 rounded text-white">Back</button>
        </div>
      </div>
    </div>
  )
}
