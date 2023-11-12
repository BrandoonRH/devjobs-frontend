import { useAuth } from "../../hooks/useAuth";
import useGetNotifications from "../../hooks/useGetNotifications"
import ItemNotification from "../../components/ItemNotification";

const NotificationsReclutador = () => {

        useAuth({middleware: 'auth'});     
        const {data:notifications} = useGetNotifications(); 
    
  return (
    <>
    <header className="bg-white shadow">
        <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
            <h2 className="font-semibold text-xl text-gray-800 leading-tight">
                Notificaciones
            </h2>
        </div>
    </header>
     <div className="py-12">
        <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
            <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                <div className="bg-white p-6 border-b border-gray-300 ">
                        <h1 className="text-2xl font-bold text-center my-10">Mis Notificaciones</h1>

                        {!notifications?.notifications?.length > 0 ? (
                            <p className="text-center text-sm font-bold text-gray-700">No hay Notificaciones que mostrar</p>
                        ) : (
                           <>
                            {notifications?.notifications?.map((notification) => (
                                <ItemNotification
                                  key={notification.id}
                                  notification={notification}
                                />
                            
                            ))}
                           </>
                        )}
                </div>            
            </div>
        </div>
    </div>
   </>
  )
}

export default NotificationsReclutador