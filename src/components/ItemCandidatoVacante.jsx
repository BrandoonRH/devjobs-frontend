import { formatDistanceToNow } from 'date-fns';
import { es } from 'date-fns/locale'; // Importa el idioma español de date-fns
import DescargarPDFButton from './DescargarPDFButton';

const ItemCandidatoVacante = ({candidato, user}) => {

    const timeAgo = formatDistanceToNow(new Date(candidato.created_at), {
        addSuffix: true,
        locale: es, // Establece el idioma español
      });

   
      
  return (
    <li className="p-3 flex items-center">
    <div className="flex-1">
        <p className="text-xl font-medium text-gray-800">{user?.name}</p>
        <p className="text-sm text-gray-600">{user?.email}</p>
        <p className="text-sm font-medium text-gray-600">
            Día que se Postulo: <span className="font-normal">{timeAgo}</span>
        </p>
    </div>
    <div>
        <DescargarPDFButton
            key={candidato?.id}
            candidato={candidato}
        />
    </div>
</li>
  )
}

export default ItemCandidatoVacante