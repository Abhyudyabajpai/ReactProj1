import React, {useState, useEffect} from 'react'
import axios from 'axios'
import {useParams} from 'react-router-dom'
import Loader from '../Components/Loader'
import { useAxiosGet } from '../Hooks/HttpRequests'
function Product(){
    const {id} = useParams()
    const url = `https://5e9623dc5b19f10016b5e31f.mockapi.io/api/v1/products/${id}`

    let product = useAxiosGet(url)
    let content = null

    if(product.error){
        content = <p>
            There was an error please refresh or retry in sometime.
        </p>

    }

    if(product.loading){
        content = <Loader> </Loader>
    }
    if(product.data){
        content = 
        <div>
            <h1>{product.data.name}</h1>
            <div>
                <img 
                src={product.data.images[0].imageUrl}
                alt = {product.data.name}
                />
            </div>
            <div className ='font-bold text-xl mb-3'>
                $ {product.data.price}
                </div>
            <div>
                {product.data.description}
                </div>    
            </div>
        
    }

    return (
        <div>
            {content}
        </div>
    )
}

export default Product