import useSWR from "swr";
import fetcher from "../lib/fetcher"

const useGetAllVacantes = () => {
    const {data, error, isLoading} = useSWR('/api/vacantes', fetcher, {
        revalidateIfStale: false,
        revalidateOnFocus: false,
        revalidateOnReconnect: false,
        //revalidateOnMount: false,
       //refreshInterval: 2000
    }); 
    return {
        data, 
        error,
        isLoading
    }
}

export default useGetAllVacantes;


