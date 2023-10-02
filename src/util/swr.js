import useSWR from "swr";

export const useFetcher = (route) =>{
    const fetcher = (...args) => fetch(...args).then((res) => res.json());
    const { data, error, isLoading } = useSWR(route, fetcher); // Corrected variable name
    return { data, error, isLoading };
} 

