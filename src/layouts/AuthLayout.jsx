import { Outlet } from "react-router-dom"
import { Link } from "react-router-dom"
import AplicationLogo from "../components/AplicationLogo"

const AuthLayout = () => {
  return (
    <main className="font-sans text-gray-900 antialiased">
      <div className="min-h-screen flex flex-col sm:justify-center items-center pt-6 sm:pt-0 bg-gray-200">
            <div>
              <Link to="/">
                   <AplicationLogo className="w-20 h-20 fill-current text-gray-500"/>
              </Link>
            </div>
            <div className="w-full sm:max-w-md mt-6 px-6 py-4 bg-white shadow-md overflow-hidden sm:rounded-lg">
                 <Outlet/>
            </div>
      </div>
    </main>
  )
}

export default AuthLayout