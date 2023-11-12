import { useParams,} from "react-router-dom"; 
import { useAuth } from "../../hooks/useAuth"
import useGetVacante from "../../hooks/useGetVacante";
import Spinner from "../../components/Spinner";
import VacanteForm from "../../components/VacanteForm";


const VacantesEdit = () => {
    useAuth({middleware:'auth'}); 

    const {id_vacante} = useParams(); 

    const {data:vacante, isLoading:isLoadingVacante} = useGetVacante(id_vacante); 

    if(isLoadingVacante) return (
        <Spinner  text="Cargando Vacante..."/>
    
    )


  return (
    <div className="py-12">
        <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
            <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                <div className="p-6 bg-white border-b border-gray-200">
                    <h1 className="text-3xl font-bold text-center mb-10">Editar Vacante:
                         <span className="text-gray-400"> {vacante?.titulo}</span>
                    </h1>
                    <div className="md:flex md:justify-center p-5">
                      <VacanteForm 
                        editar={true}
                        vacante={vacante}
                      />
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default VacantesEdit