import { useEffect, useState } from "react";
import { useAuth } from "../../hooks/useAuth"
import useGetAllVacantes from "../../hooks/useGetAllVacantes";
import HeaderHome from "../../components/HeaderHome";
import ItemVacanteHome from "../../components/ItemVacanteHome";
import FiltrarVacantes from "../../components/FiltrarVacantes";


const Home = () => {
    useAuth({middleware: 'guest'});
    const {data:vacantes,} =  useGetAllVacantes(); 

    const [vacantesData, setVacantesData] = useState([]);
    const [vacantesDataFiltradas, setVacantesDataFiltradas] = useState([]);

    const [busqueda, setBusqueda] = useState({
      termino: '',
      salario: '',
      categoria: '',
    });
    

    useEffect(() => {
      if (busqueda) {
        const vacantesFiltradas = vacantesData.filter((vacante) => {
        const terminoCoincide =
            vacante.vacante.titulo.toLowerCase().includes(busqueda?.termino.toLowerCase()) ||
            vacante.vacante.descripcion.toLowerCase().includes(busqueda?.termino.toLowerCase());
  
          const salarioCoincide = !busqueda?.salario || vacante.salario === busqueda?.salario;
          const categoriaCoincide = !busqueda?.categoria || vacante.categoria === busqueda?.categoria;

          return terminoCoincide && salarioCoincide && categoriaCoincide;
        });
  
        setVacantesDataFiltradas(vacantesFiltradas);
      }
    },[busqueda]); 
    

    useEffect(() => {
      if (vacantes?.vacantes?.length > 0 && vacantes.vacantes !== vacantesData) {
        setVacantesData(vacantes.vacantes);
      }
    }, [vacantes, vacantesData]);
   
  return (
    <>
        <HeaderHome/>
       <div>
       <FiltrarVacantes
        setBusqueda={setBusqueda}
       />
            <div className="py-12">
              <div className="max-w-7xl mx-auto">
                  <h3 className="font-extrabold text-4xl text-gray-600 mb-12">Nuestras Vacantes Disponibles</h3>

                  <div className="bg-white shadow-md rounded-lg p-6 divide-y divide-gray-300">
                    
                {
                   (busqueda.termino || busqueda.salario || busqueda.categoria) ? (
                  <>
                      <h2 className="p-3 text-center font-extrabold text-sm text-gray-600">{vacantesDataFiltradas.length  > 0 ? '' : 'No hay Vacantes Que coicidan con el termino de busqueda ingresado'}</h2>
                      {
                        <>
                        {vacantesDataFiltradas.map((vacante) => (
                          <ItemVacanteHome
                            key={vacante?.vacante.id}
                            vacante={vacante.vacante}
                            salario={vacante.salario}
                            categoria={vacante.categoria}
                          />
                        ))}
                      </>
                      }
                  </>
                  ) : (
                      <>
                      <h2 className="p-3 text-center font-extrabold text-sm text-gray-600">{vacantesData.length > 0 ? '' : 'No hay Vacantes Aún'}</h2>
                      {
                          <>
                          {vacantesData.map((vacante) => (
                            <ItemVacanteHome
                              key={vacante?.vacante.id}
                              vacante={vacante.vacante}
                              salario={vacante.salario}
                              categoria={vacante.categoria}
                            />
                          ))}
                        </>
                      }
                      </>
                  )
                }
                  </div>
              </div>

            </div>
       </div>
    </>
  )
}

export default Home