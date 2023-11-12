import { useParams } from "react-router-dom"
import useGetVacante from "../../hooks/useGetVacante"
import useGetCandidatosVacantes from "../../hooks/useGetCandidatosVacantes";
import ItemCandidatoVacante from "../../components/ItemCandidatoVacante";


const VacanateCandidatos = () => {
    const {id_vacante} = useParams(); 
    const {data:vacante } = useGetVacante(id_vacante); 
    const {data:candidatos} = useGetCandidatosVacantes(id_vacante); 
    

  return (
 <>
    <header className="bg-white shadow">
        <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
            <h2 className="font-semibold text-xl text-gray-800 leading-tight">
                    Candidatos que han postulado a esta vacante
            </h2>
        </div>
    </header>
     <div className="py-12">
        <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
            <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                <div className="bg-white p-6 border-b border-gray-300 ">
                        <h1 className="text-2xl  text-center my-10">
                            Candidatos de la Vacante: 
                                <span className="font-bold"> {vacante?.titulo}</span>
                        </h1>

                        {!candidatos?.candidatos?.length > 0 ? (
                            <p className="text-center text-sm font-bold text-gray-700">No hay candidatos para esta vacante</p>
                        ) : (
                           <>
                            {candidatos?.candidatos?.map((item) => (
                                <ItemCandidatoVacante
                                  key={item?.candidato.id}
                                  candidato={item?.candidato}
                                  user={item?.user}
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

export default VacanateCandidatos