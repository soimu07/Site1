import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from "react-redux"
import {getProductsAction} from '../../actions/actions'
import './products.css'
import Button from '../../components/button'
import {logOutUserAction} from '../../actions/actions'
import Preloader from '../../components/preloader';

const Products = ({history}) => {
    const dispatch = useDispatch();
    const accessToken = useSelector(state => state.accessToken)
    const products = useSelector(state => state.products)
    const limit = useSelector(state=> state.productsLimit)
    const offset = useSelector(state=> state.productsOffset)
    const productsTotal = useSelector(state=> state.productsTotal)
    const [isLoading, setIsLoading] = useState(false);
    
    useEffect(()=>{
       getProductsAction(accessToken, dispatch, history, limit, offset);
       setIsLoading(false);
       // eslint-disable-next-line
    },[]);
    
    if (!accessToken) {
        history.push("/")
    }
   
    const logOut = () => {
        dispatch(logOutUserAction())
        history.push('/')
    }
    
    useEffect(()=>{
        setIsLoading(false);
    },[products.length])
   
    const loadMoreClick = () =>{
        getProductsAction(accessToken, dispatch, history, limit, offset+limit);
        setIsLoading(true);
    }
    return(
        <div className='productsPage'>
            <header className='productsHeaderContainer'>
                <div className='productsHeader'>
                    <div className='headerTitle'>Never look back</div>
                    <div className='logOutButtonContainer'><Button onButtonClick={()=>logOut()}text='Log out'/></div>
                </div>
            </header>
                     
            <div className='productsContainer'>
            {(!products.length) && 'No products'}        
            {products.map(product => (
                <div key={product.id} className='productContainer'>
                   <img className='productImage' src={product.imageUrl} alt={product.title} />
                   <h3 className='productTitle'>{product.title}</h3>
                   <p className='productDescription'>{product.description}</p>
                   <div className='productPrice'>${Math.floor(Math.random()*100)}</div>
                </div>
            ))}                   
            </div>            
            {products.length>=1 && (
            <div className='loadMoreButtonContainer'>
            <Button text="Load more" backgroundColor='grey' onButtonClick={()=>{loadMoreClick()}} disabled={products.length===productsTotal}/>
            {isLoading && (
                 <div className='productsPreloadContainer'>
                 <Preloader/>
                 </div>
            ) }  
            </div>
            )}
                
        </div>
    )
}

export default Products;