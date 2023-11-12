import { Link } from "react-router-dom"
import { formatearFecha } from "../helpers"; 
import useVacante from "../hooks/useVacantes";
import Swal from "sweetalert2";

const ItemVacante = ({vacante}) => {

  const {eliminarVacante} = useVacante(); 

  const eliminar = async () => {
    Swal.fire({
      title: '¿Seguro que desea eliminar la vacante?',
      text: "Esta acción no se puede revertir!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Si, Eliminar!',
      cancelButtonText: 'No, Cancelar!'
    }).then((result)=> {
      if (result.isConfirmed) {
        eliminarVacante(vacante.id);
        Swal.fire(
          'Eliminado!',
          'La vacante se a eliminado.',
          'success'
        )
      }
    });
  }
   
  return (
    <div className="p-6 bg-white border-b border-gray-200 md:flex md:justify-between md:items-center">
       <div className="space-y-3">
             <Link to={`/vacantes/${vacante.id}/show`} className="text-xl font-bold">{vacante?.titulo}</Link>
             <p className="text-sm text-gray-600 font-bold">{vacante?.empresa}</p>
             <p className="text-sm text-gray-400">Último día: {formatearFecha(vacante?.ultimo_dia?.toString())}</p>
       </div>
       <div className="flex flex-col md:flex-row gap-3 items-stretch mt-5 md:mt-0">
          <Link to={`/vacante/${vacante.id}/candidatos`} className="bg-slate-800 py-2 px-4 rounded-xl text-white text-sm font-bold uppercase text-center">Candidatos</Link>
          <Link to={`/vacantes/${vacante.id}/edit`} className="bg-sky-400 py-2 px-4 rounded-xl text-white text-sm font-bold uppercase text-center">Editar</Link>
          <Link onClick={eliminar} className="bg-red-500 py-2 px-4 rounded-xl text-white text-sm font-bold uppercase text-center">Eliminar</Link>
       </div>
    </div>
  )
}

export default ItemVacante