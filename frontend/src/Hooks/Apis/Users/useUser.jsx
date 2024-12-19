import useAxiosSecure from "@/Hooks/Fetcher/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";


const useUser = () => {
    const axiosSecure = useAxiosSecure();
    const token = localStorage.getItem('cus_token')
 
  
    const {data:userData = null, isLoading, refetch:userFetch} = useQuery({
      queryKey : ['user-data'],
      queryFn : async () => {
        const res = await axiosSecure("/api/get-single-customer");
        return res.data.result
      },
      enabled: !!token
    })
    
    return [userData, isLoading, userFetch]
};

export default useUser;