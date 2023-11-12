import useSWR from "swr";
import fetcher from "../lib/fetcher"

const useGetSalarios = () => {
    const {data, error, isLoading} = useSWR('/api/salarios', fetcher, {
      
    }); 
    return {
        data, 
        error,
        isLoading
    }
}

export default useGetSalarios;