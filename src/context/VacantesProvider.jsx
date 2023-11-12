import { createContext, useState } from "react";
import clientAxios from "../config/axios";

const VacanteContext = createContext(); 

const VacanteProvider = ({children}) => {



    //Config Peticiones HTTP 
    const token = localStorage.getItem('AUTH_TOKEN'); 
    const configHeaders = {
        headers: {
            //'Content-Type': 'multipart/form-data', 
            Authorization: `Bearer ${token}`
        }
    }
   
    const [imageVacante, setImageVacante] = useState(''); 
 

    const createVacante = async (dataVacante, setErrors) => {
        try {
            const response = await clientAxios.post('/api/vacante/create', dataVacante, configHeaders);
            setErrors([]); 
            //console.log(response.data.message); 
            return response
        } catch (error) {
            setErrors(Object.values(error.response.data.errors)); 
        }
    }

    const editVacante = async (id, dataVacante, setErrors) => {
        try {
            const response = await clientAxios.put(`/api/vacante/${id}`, dataVacante, configHeaders);
            setErrors([]); 
            //console.log(response.data.message); 
            return response
        } catch (error) {
            setErrors(Object.values(error.response.data.errors)); 
        }
    }

    const eliminarVacante = async (id) => {
        try {
            const response = await clientAxios.delete(`/api/vacante/delete/${id}`, configHeaders);
            //console.log(response.data.message); 
            return response
        } catch (error) {
            console.log(error);
        }
    }

    const postularVacante = async (id, formData) => {
        try {
            // Utiliza Axios para realizar la solicitud de carga de archivos
            const response = await clientAxios.post(`/api/postular/vacante/${id}`, formData, {
                headers: {
                    'Content-Type': 'multipart/form-data', 
                    Authorization: `Bearer ${token}`
                }
            });
            return response
        } catch (error) {
            console.log(error); 
        }
    }

    return (
        <VacanteContext.Provider
            value={{
                createVacante,
                setImageVacante,
                imageVacante,
                editVacante,
                eliminarVacante,
                postularVacante
            }}
        >
            {children}
        </VacanteContext.Provider>
    )
}

export {
    VacanteProvider
}

export default VacanteContext