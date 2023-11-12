import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import clientAxios from "../config/axios";
import useSWR from "swr";

export const useAuth = ({middleware, url}) => {

  const navigate = useNavigate(); 
  const token = localStorage.getItem('AUTH_TOKEN'); 
    const configHeaders = {
      headers: {
          Authorization: `Bearer ${token}`
      }
    }
   
  const {data:user, error, mutate, /*isLoading*/} = useSWR('/api/user',  () => 
      clientAxios('/api/user', configHeaders)
      .then(res => res.data)
      .catch(error => {
          throw Error(error?.response?.data?.errors)
      })
  ); 

    const login = async (dataLogin, setErrors) => {
        try {
            const {data} = await clientAxios.post('/api/auth/login', dataLogin); 
            localStorage.setItem('AUTH_TOKEN', data.token); 
            await mutate(); 
            setErrors([]); 
          } catch (error) {
            setErrors(Object.values(error.response.data.errors)); 
          }
    }

    const register = async (dataRegister, setErrors) => {
        try {
            const  {data} = await clientAxios.post('/api/auth/register', dataRegister); 
            localStorage.setItem('AUTH_TOKEN', data.token); 
            setErrors([]); 
            await mutate();
          } catch (error) {
            setErrors(Object.values(error.response.data.errors)); 
          }
    }

    const logout = async () => {
        try {
          await clientAxios.post('/api/logout', null, configHeaders); 
          localStorage.removeItem('AUTH_TOKEN'); 
         await mutate(undefined); 
        } catch (error) {
          throw Error(error?.response?.data?.errors)
        }
    }
    useEffect(() => {
          if(middleware === 'guest' && url && user){
            navigate(url)
          }
          if(middleware === 'auth' && error){
            navigate('/auth'); 
          }
          if(middleware === 'auth' && user?.rol === 2){
            navigate('/'); 
          }
    }, [user, error])

    return {
        login, 
        register, 
        logout,
        user,
        error
    }

}