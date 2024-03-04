import React,{useEffect, useState} from "react"
import { Axios } from "axios"
import axios from "axios"
import Header from "../components/Header"
import ListKisi from "../components/ListKisi"

const Home = ()=>{
    const [kisi, setKisi]=useState(null)

    useEffect(()=>{
        axios.get("http://localhost:3005/kisi")
        .then(res=>{
            setKisi(res.data)
        })
        .catch(err=>{

        })
    },[])

    if(kisi === null) return null

    return(
        <div >
            <Header/>
        <p>burada kisiler listelenecek</p>
            <ListKisi kisi ={kisi}/>
        </div>
    )
}
export default Home