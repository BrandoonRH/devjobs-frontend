import useSWR from "swr";
import fetcher from "../lib/fetcher"

const useGetVacantesUser = () => {
    const {data, error, isLoading} = useSWR('/api/vacantes', fetcher, {
        revalidateIfStale: true,
        revalidateOnFocus: true,
        revalidateOnReconnect: true,
        revalidateOnMount: true,
       refreshInterval: 2000
    });
    return {
        data, 
        error,
        isLoading
    }
}

export default useGetVacantesUser;