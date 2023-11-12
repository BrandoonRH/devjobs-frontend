import { Outlet } from "react-router-dom"
import { Link, useLocation } from "react-router-dom";
import { useAuth } from "../hooks/useAuth"
import useGetNotifications from "../hooks/useGetNotifications";
import AplicationLogo from "../components/AplicationLogo";
import IconNotification from "../components/IconNotification";

const Layout = () => {
     const {user, logout} =  useAuth({});
     const location = useLocation();
     const {data:notifications} = useGetNotifications(); 


     
  return (
    <div className="min-h-screen bg-gray-100">
      <header className="bg-white shadow w-full mx-auto py-6 px-4 sm:px-6 lg:px-8">
              <div className="md:flex md:justify-between gap-3">
                  <div className="md:flex md:justify-start items-center gap-5">
                      <Link to="/">
                        <AplicationLogo className="w-20 h-20 fill-current text-gray-500"/>
                      </Link>
                      {
                        user?.rol === 1 && (
                          <div className="flex flex-col md:flex-row gap-5 mt-5 md:mt-0 text-center">
                              <Link to="/dashboard" className={`text-gray-400 font-semibold hover:underline ${location.pathname === '/dashboard' ? 'border-b-2 border-gray-600' : ''}`}>
                                Mis Vacantes
                              </Link>
                              <Link to="/vacante/create" className={`text-gray-400 font-semibold hover:underline ${location.pathname === '/vacante/create' ? 'border-b-2 border-gray-600' : ''}`}>
                                Creare Vacante
                              </Link>
                          </div>
                        )
                      }
                  </div>
                  <div className="mt-3 flex flex-col md:flex-row items-center gap-3">
                    {
                        user?.rol === 1 && (
                          <>
                             <p className="text-gray-400 font-semibold hover:underline">{notifications?.last}</p>
                              <Link to="/notifications" className={`text-gray-400 font-semibold hover:underline hover:text-indigo-600 hover:font-bold ${location.pathname === '/notifications' ? 'border-b-2 border-gray-600' : ''}`}>   
                                <IconNotification/>
                              </Link>
                          </>
                        )
                      }
                      {user ? (
                          <>
                            <p className=" text-md md:text-xl font-bold text-gray-600">{user.name}</p>
                            <button onClick={logout} className="w-3/4 mx-auto md:w-auto md:mx-0   bg-red-500 p-2 hover:bg-red-700 cursor-pointer rounded-md transition-all text-white font-bold">Cerra Sesión</button>
                          </>
                      ) : (
                          <>
                          <Link to="/auth" className="text-xl font-bold text-gray-500 hover:underline">Iniciar Sesión</Link>
                          </>
                      )}
                      
                  </div>
              </div>
      </header>
      <main>
         <Outlet/>
      </main>
        
    </div>
  )
}

export default Layout