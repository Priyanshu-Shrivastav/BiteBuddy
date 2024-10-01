import { useState , useEffect } from "react";
import { API_URL } from "./constants";



const useFetch = () => {
    const [data , setData] = useState([]);
    
    useEffect(()=>{
        fetchData();
    }, []);

    const fetchData = async () => {
        const response = await fetch(API_URL);
        const result = await response.json();
        setData(result?.data)
    }
    return data;
    
} 


export default useFetch;