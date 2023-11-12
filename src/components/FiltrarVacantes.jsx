import { createRef } from "react";

import useGetSalarios from "../hooks/useGetSalarios";
import useGetCategorias from "../hooks/useGetCategorias"; 

const FiltrarVacantes = ({setBusqueda}) => {
    const {data:salarios} = useGetSalarios(); 
    const {data:categorias} = useGetCategorias(); 

    const terminoBusqueda = createRef(); 
    const salarioBusqueda = createRef(); 
    const categoriaBusqueda = createRef(); 

    const handleBusqueda = (e) => {
        e.preventDefault(); 
        const dataBusqueda = {
            termino: terminoBusqueda.current.value,
            salario: salarioBusqueda.current.value,
            categoria: categoriaBusqueda.current.value
        }
        
        setBusqueda(dataBusqueda); 
    }

  return (
    <div className="bg-gray-200 py-10">
    <h2 className="text-2xl md:text-4xl text-gray-600 text-center font-extrabold my-5">Buscar y Filtrar Vacantes</h2>

    <div className="max-w-7xl mx-auto">
        <form onSubmit={handleBusqueda} >
            <div className="md:grid md:grid-cols-3 gap-5">
                <div className="mb-5">
                    <label 
                        className="block mb-1 text-sm text-gray-700 uppercase font-bold "
                        htmlFor="termino">Término de Búsqueda
                    </label>
                    <input 
                        ref={terminoBusqueda}
                        id="termino"
                        type="text"
                        placeholder="Buscar por Término: ej. Laravel"
                        className="rounded-md p-2 shadow-sm border-gray-300 focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 w-full"
                    />
                </div>

                <div className="mb-5">
                    <label className="block mb-1 text-sm text-gray-700 uppercase font-bold">Categoría</label>
                    <select ref={categoriaBusqueda}  className="border-gray-300 p-2 w-full">
                        <option value="">---Seleccione---</option>
                        {categorias?.categorias.map((categoria) => (
                            <option key={categoria.id} value={categoria.categoria}>
                            {categoria.categoria}
                            </option>
                      ))}
                    </select>
                </div>

                <div className="mb-5">
                    <label className="block mb-1 text-sm text-gray-700 uppercase font-bold">Salario Mensual</label>
                    <select ref={salarioBusqueda}  className="border-gray-300 p-2 w-full">
                        <option value="">---Seleccione---</option>
                        {salarios?.salarios.map((salario) => (
                            <option key={salario.id} value={salario.salario}>
                            {salario.salario}
                            </option>
                        ))}
                        
                    </select>
                </div>
            </div>

            <div className="flex justify-end">
                <button
                    type="submit"
                    className="bg-indigo-500 cursor-pointer hover:bg-indigo-600 transition-colors text-white text-sm font-bold px-10 py-2 rounded hover:cursor-pointer uppercase w-full md:w-auto"
                    
                >Buscar</button>
            </div>
        </form>

        </div>
    </div>
  )
}

export default FiltrarVacantes