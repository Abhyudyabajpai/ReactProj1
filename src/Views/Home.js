import React, {useState, useEffect} from 'react'
import axios from 'axios'
import Loader from '../Components/Loader'
import ProductCard from '../Components/ProductCard'
import { useAxiosGet } from '../Hooks/HttpRequests'

function Home(){
    const url = `https://5e9623dc5b19f10016b5e31f.mockapi.io/api/v1/products?page=1&limit=10`
    
    let products = useAxiosGet(url)
    let content = null

    if(products.error){
        content = <p>
            There was an error please refresh or retry in sometime.
        </p>

    }

    if(products.loading){
        content = <Loader> </Loader>
    }

    if(products.data){
        content = 
        products.data.map((product) =>
        <div key ={product.id}>
            <ProductCard 
            product = {product} />
        </div>)
        
    }

    return (
        <div>
            <h1 className='font-bold text-2xl'>Best Sellers</h1>
            {content}
        </div>
    )
}

export default Home