import { useParams, Link} from "react-router-dom"; 
import { useAuth } from "../../hooks/useAuth";
import useGetVacanteShow from "../../hooks/useGetVacanteShow";
import Spinner from "../../components/Spinner";
import { formatearFecha } from "../../helpers/index";  
import PostularVacante from "../../components/PostularVacante";

const VacantesShow = () => {

    const {user} = useAuth({middleware:'guest'}); 

    const {id_vacante} = useParams(); 


    const {data:vacante, isLoading:isLoadingVacante} = useGetVacanteShow(id_vacante); 

    if(isLoadingVacante) return (
        <Spinner  text="Cargando Vacante..."/>
    
    )


  return (
   <>
    <header className="bg-white shadow">
        <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
            <h2 className="font-semibold text-xl text-gray-800 leading-tight">
            { vacante?.vacante.titulo}
            </h2>
        </div>
    </header>
     <div className="py-12">
        <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
            <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                <div className="p-10">
                    <div className="mb-5">

                        <h3 className="font-bold text-3xl text-gray-800 my-3 text-center">{vacante?.vacante.titulo}</h3>
                  
                        <div className="md:grid md:grid-cols-2 bg-gray-100 p-4 my-10">
                            <p className="font-bold text-sm uppercase text-gray-800 my-3">Empresa:
                                    <span className="normal-case font-normal"> {vacante?.vacante.empresa}</span>
                            </p>
                            <p className="font-bold text-sm uppercase text-gray-800 my-3">Ultimo día para Postularse:
                                <span className="normal-case font-normal"> {formatearFecha(vacante?.vacante.ultimo_dia.toString())}</span>
                            </p>
                            <p className="font-bold text-sm uppercase text-gray-800 my-3">Categoria:
                                <span className="normal-case font-normal"> {vacante?.categoria}</span>
                            </p>
                            <p className="font-bold text-sm uppercase text-gray-800 my-3">Salario:
                                <span className="normal-case font-normal"> {vacante?.salario}</span>
                            </p>
                        </div>
                    
                    </div>
                    <div className="md:grid md:grid-cols-6 gap-4">
                            <div className="md:col-span-2">
                                <img className="rounded-2xl" src={`${import.meta.env.VITE_API_URL}/uploads/${vacante?.vacante.imagen}`} alt="Imagen de la Vacante" />
                            </div>

                            <div className="md:col-span-4">
                                <h2 className="text-2xl font-bold mb-5">Descripción del Puesto</h2>
                                <p>{vacante?.vacante.descripcion}</p>
                            </div>
                    </div>
                   {!user && (
                        <div className="mt-5 bg-gray-50 border border-dashed p-5 text-center">
                            <p>
                                ¿Deseas Aplicar a está vacante? <Link className="font-bold text-indigo-600" to={'/auth'}>Obten una Cuenta y
                                aplica a esta y otras vacantes</Link>
                            </p>
                        </div>
                   )}

                   {user?.rol === 2 && (
                        <PostularVacante
                            id_vacante={id_vacante}
                        />
                   )}

                </div>            
            </div>
        </div>
    </div>
   </>
  )
}

export default VacantesShow