import { Link } from "react-router-dom"
import { formatearFecha } from "../helpers"


const ItemVacanteHome = ({vacante, salario, categoria}) => {
  return (
    <div className="md:flex md:justify-between md:items-center py-5">
            <div className="md:flex-1">
                <a  className="text-3xl font-extrabold text-gray-600"
                    href="{{ route('vacantes.show', $vacante->id) }}">
                    {vacante?.titulo}
                </a>
                <p className="text-base text-gray-500 mb-1">Empresa: {vacante?.empresa}</p>
                <p className="text-xs font-bold text-gray-500 mb-1">Categoria: {categoria}</p>
                <p className="text-base text-gray-500 mb-1">Salario: {salario}</p>
                <p className="font-bold text-sm text-gray-500">
                    Último día para Postularse: 
                    <span className="font-normal"> {formatearFecha(vacante?.ultimo_dia)}</span>
                </p>
            </div>

            <div className="mt-5 md:mt-0">
                <Link to={`/vacantes/${vacante?.id}/show`} className="bg-indigo-500 p-3 text-sm uppercase font-bold text-white rounded-lg block text-center hover:bg-indigo-800">
                    Ver Vacante
                </Link>
            </div>
    </div>
  )
}

export default ItemVacanteHome


