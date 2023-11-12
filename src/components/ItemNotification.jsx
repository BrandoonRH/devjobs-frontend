import { Link } from 'react-router-dom';
import { formatDistanceToNow } from 'date-fns';
import { es } from 'date-fns/locale'; // Importa el idioma español de date-fns


const ItemNotification = ({notification}) => {

  const timeAgo = formatDistanceToNow(new Date(notification.created_at), {
    addSuffix: true,
    locale: es, // Establece el idioma español
  });

    
  return (
    <div className="p-5 border border-gray-200 lg:flex lg:justify-between lg:items-center">
        <div>
              <p>
                  Tienes un nuevo candidato en: 
                      <span className="font-bold"> {notification.data.nombre_vacante}</span>
              </p>
              <p>
                hace:
                <span> {timeAgo}</span>
              </p>
        </div>
        <div className="mt-5 lg:mt-0">
            <Link  className="  bg-indigo-500 hover:bg-indigo-800 transition-all p-3 text-sm uppercase font-bold text-white rounded-lg">Ver Candidatos</Link>
        </div>
    </div>
  )
}

export default ItemNotification