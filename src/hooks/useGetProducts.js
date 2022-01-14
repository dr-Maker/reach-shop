import { useState, useEffect } from "react";
import axios from "axios";

const useGetProducts = (API) =>{

    const [products, setProducts] = useState([]);

    useEffect(async ()=>{
        const reponse = await axios(API);
        setProducts(reponse.data);
    }, []);
    
    return products;
}



export default useGetProducts;