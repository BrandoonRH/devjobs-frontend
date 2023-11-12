import useSWR from "swr";
import fetcher from "../lib/fetcher";

const useGetCandidatosVacantes = (id) => {
    const {data, error, isLoading} = useSWR(`/api/candidatos/${id}`, fetcher, {
        revalidateIfStale: true,
        revalidateOnFocus: true,
        revalidateOnReconnect: true,
        refreshInterval: 2000
    }); 
    return {
        data, 
        error,
        isLoading
    }
}

export default useGetCandidatosVacantes;