import useSWR from "swr";
import fetcher from "../lib/fetcher";

const useGetVacante = (id) => {
    const {data, error, isLoading} = useSWR(`/api/vacante/${id}/edit`, fetcher, {
        revalidateIfStale: true,
        revalidateOnFocus: true,
        revalidateOnReconnect: true
    }); 
    return {
        data, 
        error,
        isLoading
    }
}

export default useGetVacante;