import useSWR from "swr";
import fetcher from "../lib/fetcher"

const useGetNotifications = () => {
    const {data, error, isLoading} = useSWR('/api/notificationes', fetcher, {
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

export default useGetNotifications;