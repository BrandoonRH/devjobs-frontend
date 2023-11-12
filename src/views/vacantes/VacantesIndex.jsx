import { useAuth } from "../../hooks/useAuth"
import useGetVacantesUser from "../../hooks/useGetVacantesUser"; 
import ItemVacante from "../../components/ItemVacante";

const VacantesIndex = () => {

  useAuth({middleware: 'auth'});
  const {data:vacantes} = useGetVacantesUser(); 

  return (
    <div className="py-12">
        <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
            <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
            {vacantes?.vacantes.length === 0 ? (
                  <p className="text-gray-600 p-10 uppercase text-sm text-center font-bold">No tienes vacantes publicadas</p>
                ) : (
                    <>
                    {vacantes?.vacantes.map((vacante) => (
                      <ItemVacante
                        key={vacante.vacante.id}
                        vacante={vacante.vacante}
                      />
                    ))}
                    </>
            )}
            </div>
        </div>
    </div>
  )
}

export default VacantesIndex