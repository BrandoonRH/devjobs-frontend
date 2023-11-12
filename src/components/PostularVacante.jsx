import { useNavigate } from "react-router-dom";
import { useState } from "react";
import useVacante from "../hooks/useVacantes"; 

import Swal from "sweetalert2";

const PostularVacante = ({id_vacante}) => {
  const navigate = useNavigate(); 
  const { postularVacante} = useVacante();
  const [cv, setCv] = useState(null);

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setCv(file);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append('cv', cv);
    
  // Utiliza Axios para realizar la solicitud de carga de archivos
  const response = await postularVacante(id_vacante, formData);

    // Maneja la respuesta del servidor
    if (response.status === 200) {
      // Mostrar mensaje de éxito o realizar otras acciones necesarias
      Swal.fire(
        `${response?.data.message}!`,
        `Espera a que el reclutador se comunique contigo!`,
        'success'
      ); 
      navigate('/'); 
    }
   
  };


  return (
    <div className="bg-gray-100 p-5 mt-10 flex flex-col justify-center items-center">
        <h3 className="text-center text-2xl font-bold my-4">Postularme a está Vacante</h3>
        
        <form className="w-96 mt-5" onSubmit={handleSubmit} >
            <div className="mb-4">
                    <label htmlFor="cv" className="block  text-sm text-gray-700 font-bold uppercase mb-2">
                        Curriculumn u Hoja de Vida (PDF)
                    </label>
                    <input  onChange={handleFileChange} accept=".pdf" type="file" id="cv" className="block mt-1 w-full rounded-md shadow-sm border-gray-300 focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"/>
            </div>
            <button type="submit" className="inline-flex items-center px-4 py-2 bg-indigo-600 border border-transparent rounded-md font-semibold text-xs text-white uppercase tracking-widest hover:bg-indigo-800 active:bg-gray-900 focus:outline-none focus:border-gray-900 focus:ring ring-gray-300 disabled:opacity-25 transition ease-in-out duration-150" >
                Postularme
            </button>
        </form>
    </div>
  )
}

export default PostularVacante