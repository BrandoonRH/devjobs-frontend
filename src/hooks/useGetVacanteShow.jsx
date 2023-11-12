import useSWR from "swr";
import fetcher from "../lib/fetcher";

const useGetVacanteShow = (id) => {
    const {data, error, isLoading} = useSWR(`/api/vacantes/${id}`, fetcher, {
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

export default useGetVacanteShow;