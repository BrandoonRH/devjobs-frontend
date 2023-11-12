import { createRef,useState,} from "react";
import { useNavigate } from "react-router-dom";
import useGetSalarios from "../hooks/useGetSalarios"
import useGetCategorias from "../hooks/useGetCategorias";
import useVacante from "../hooks/useVacantes";
import MyDropzone from "./Dropzone";
import Alert from "./Alert";
import Swal from "sweetalert2";


const VacanteForm = ({vacante, editar}) => {

  const navigate = useNavigate(); 
  const {createVacante, editVacante, imageVacante} = useVacante(); 
  const {data:salario} = useGetSalarios(); 
  const {data:categoria} = useGetCategorias(); 

  const tituloRef = createRef(); 
  const salarioRef = createRef(); 
  const categoriaRef = createRef(); 
  const empresaRef = createRef(); 
  const ultimoDiaRef = createRef(); 
  const descripcionRef = createRef(); 
  const imageRef = createRef();
   
  const [errors, setErrors] = useState([]); 
  const [vacanteEdit, setVacanteEdit] = useState(vacante ?? {});

  // Función reutilizable para manejar el evento onChange de los campos de formulario
  const handleInputChange = (name, setValue) => (e) => {
    const nuevoValor = e.target.value;
    setValue((prev) => ({
      ...prev,
      [name]: nuevoValor,
    }));
  };

// ... tu componente VacanteForm


  const handleSubmit = async (e) =>  {
    e.preventDefault();
    const dataVacante = {
      titulo : tituloRef.current.value,
      salario : salarioRef.current.value,
      categoria: categoriaRef.current.value,
      empresa : empresaRef.current.value,
      ultimo_dia : ultimoDiaRef.current.value,
      descripcion : descripcionRef.current.value,
      imagen : imageRef.current.value
    }
   //console.log(dataVacante); 
   if(editar){
      //editar vacante
      const response = await editVacante( vacanteEdit?.id, dataVacante, setErrors);
      if(response?.status === 200){
        Swal.fire(
          `${response?.data.message}!`,
          `Tu Vacante se a editado en Devjobs!`,
          'success'
        )
        navigate('/dashboard'); 
      }
   }else{
    //crear la vacante
      const response = await createVacante(dataVacante, setErrors); 
      if(response?.status === 200){
        Swal.fire(
          `${response?.data.message}!`,
          `Tu Vacante se a guardado en Devjobs!`,
          'success'
        )
        navigate('/dashboard'); 
      }
   }
  }//Fin handleSubmit



  return (
    <form onSubmit={handleSubmit}  className="md:w-1/2 space-y-5">
       {errors ? errors.map((error, i) => <Alert key={i}>{error}</Alert>) : null}
            <div>
                <label htmlFor="titulo" className="block  text-sm text-gray-700 font-bold uppercase mb-2">Titulo de la Vacante</label>
                <input ref={tituloRef} 
                  onChange={handleInputChange('titulo', setVacanteEdit)}
                  value={vacanteEdit?.titulo || ''} placeholder="Titulo de la Vacante"  className="rounded-md p-2 block mt-1 w-full shadow-sm border-gray-300 focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50" type="text" id="titulo" />
            </div>
            <div>
                <label htmlFor="salario" className="block  text-sm text-gray-700 font-bold uppercase mb-2">Salario de la Vacante</label>
                <select
                  ref={salarioRef}
                  id="salario"
                  className="w-full p-2 rounded-md shadow-sm border-gray-300 focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                  value={vacanteEdit?.salario_id || ''} 
                  onChange={handleInputChange('salario_id', setVacanteEdit)}
                >
                  <option value="">---Seleccione---</option>
                  {salario?.salarios.map((salario) => (
                    <option key={salario.id} value={salario.id}>
                      {salario.salario}
                    </option>
                  ))}
                </select>

            </div>
            <div>
                <label htmlFor="categoria" className="block  text-sm text-gray-700 font-bold uppercase mb-2">Categoria de la Vacante</label>
                <select
                      ref={categoriaRef}
                      id="categoria"
                      className="w-full p-2 rounded-md shadow-sm border-gray-300 focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                      value={vacanteEdit?.categoria_id || ''}
                      onChange={handleInputChange('categoria_id', setVacanteEdit)}
                    >
                      <option value="">---Seleccione---</option>
                      {categoria?.categorias.map((categoria) => (
                        <option key={categoria.id} value={categoria.id}>
                          {categoria.categoria}
                        </option>
                      ))}
                </select>
            </div>
            <div>
                <label htmlFor="empresa" className="block  text-sm text-gray-700 font-bold uppercase mb-2">Empresa</label>
                <input ref={empresaRef}
                      value={vacanteEdit?.empresa || ''} placeholder="Empresa, ejemplo: Netflix, Uber, Amazon"
                      className="rounded-md p-2 block mt-1 w-full shadow-sm border-gray-300 focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50" type="text" id="empresa" 
                      onChange={handleInputChange('empresa', setVacanteEdit)}
                      />
            </div>
            <div>
                <label htmlFor="ultimo_dia" className="block  text-sm text-gray-700 font-bold uppercase mb-2">Último día para Postularse</label>
                <input ref={ultimoDiaRef}
                      value={vacanteEdit?.ultimo_dia || ''}
                      className="rounded-md p-2 block mt-1 w-full shadow-sm border-gray-300 focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50" type="date" id="ultimo_dia" 
                      onChange={handleInputChange('ultimo_dia', setVacanteEdit)}
                      />
            </div>
            <div>
                <label htmlFor="descripcion" className="block text-sm text-gray-700 font-bold uppercase mb-2">Descripción</label>
                 <input ref={descripcionRef} 
                  onChange={handleInputChange('descripcion', setVacanteEdit)}
                  value={vacanteEdit?.descripcion || ''} placeholder="Descripción General del Puesto" className="w-full p-3 rounded-md shadow-sm border-gray-300 focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 h-20" type="text"  id="descripcion" />
            </div>
            <div>
                <MyDropzone/>
               <input type="hidden" name="image" value={`${imageVacante}`} ref={imageRef} />
            </div>
            <button type="submit" className="inline-flex items-center px-4 py-2 bg-indigo-600 border border-transparent rounded-md font-semibold text-xs text-white uppercase tracking-widest hover:bg-indigo-800 active:bg-gray-900 focus:outline-none focus:border-gray-900 focus:ring ring-gray-300 disabled:opacity-25 transition ease-in-out duration-150 ">
              {editar ? 'Guardar Cambios' : 'Crear Vacante'}
            </button>
    </form>
  )
}

export default VacanteForm