import { useAuth } from "../../hooks/useAuth"
import VacanteForm from "../../components/VacanteForm";
const VacantesCreate = () => {
    useAuth({middleware:'auth'}); 
  return (
    <div className="py-12">
        <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
            <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                <div className="p-6 bg-white border-b border-gray-200">
                    <h1 className="text-3xl font-bold text-center mb-10">Publicar Vacante</h1>
                    <div className="md:flex md:justify-center p-5">
                        <VacanteForm
                            editar={false}
                            vacante={{}}
                        />
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default VacantesCreate