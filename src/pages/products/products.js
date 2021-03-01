import React from 'react';
import { useSelector } from "react-redux"


const Products = ({history}) => {
    const accessToken = useSelector(state => state.accessToken)
    if (!accessToken) {
        history.push("/")
    }
    return(
        <p>Products</p>
    )
}

export default Products;