import useSWR from "swr";
import fetcher from "../lib/fetcher"

const useGetCategorias = () => {
    const {data, error, isLoading} = useSWR('/api/categorias', fetcher, {
      
    }); 
    return {
        data, 
        error,
        isLoading
    }
}

export default useGetCategorias;