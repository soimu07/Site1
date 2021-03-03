import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from "react-redux"
import {getProductsAction} from '../../actions/actions'
import './products.css'
import Button from '../../components/button'
import {logOutUserAction} from '../../actions/actions'

const Products = ({history}) => {
    const dispatch = useDispatch();
    const accessToken = useSelector(state => state.accessToken)
    const products = useSelector(state => state.products)
    useEffect(()=>{
       getProductsAction(accessToken, dispatch, history);
    },[accessToken, dispatch, history])
    if (!accessToken) {
        history.push("/")
    }
    const logOut = () => {
        dispatch(logOutUserAction())
        history.push('/')
    }
    return(
        <div className='productsPage'>
            <header className='productsHeaderContainer'>
                <div className='productsHeader'>
                    <div className='headerTitle'>Never look back</div>
                    <div className='logOutButtonContainer'><Button onButtonClick={()=>logOut()}text='Log out'></Button></div>
                </div>
            </header>
            <div className='spinner'></div>
            <div className='productsContainer'>
            {(!products.length) && 'Loading'}        
            {products.map(product => (
                <div key={product.id} className='productContainer'>
                   <img className='productImage' src={product.imageUrl} alt={product.title} />
                   <h3 className='productTitle'>{product.title}</h3>
                   <p className='productDescription'>{product.description}</p>
                   <div className='productPrice'>${Math.floor(Math.random()*100)}</div>
                </div>
            ))}  
                 
            </div>
            <div className='loadMoreButtonContainer'>
            <Button text="Load more"></Button>
            </div>    
        </div>
    )
}

export default Products;