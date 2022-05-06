import React from "react"
import {useEffect} from "react"
import {useState} from "react"


export const Ecommerce = () => {
    const [initialState, setIntialState] = useState([])

    useEffect(()=> {
        // fetch('https://fakestoreapi.com/products')
        //     .then(res=>res.json())
        //     .then(json=>console.log(json))
        fetch('/api').then(res => {
            if(res.ok){
                return res.json()
            }
        }).then(jsonResponse => setIntialState(jsonResponse))
    },[])

return (<div>{initialState.length > 0 && initialState.map(e => <li>e</li>)}</div>)
}

