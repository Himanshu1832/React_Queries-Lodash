import React from 'react'
import axios from 'axios'
import { useQuery } from 'react-query'

const fetchSuperHeroes = async () => {
    return await axios.get('http://localhost:4000/superheroes')
    
}

const RQSuperHeroes = () => {
    const {isLoading , data , isError , error} = useQuery('superheroes',
    // () => {
    //     return axios.get('http://localhost:4000/superheroes')
         fetchSuperHeroes)

         console.log(data)
    if(isLoading) return (<div>Loading...</div>)
    if(isError) return (<div>{error.message}</div>)

    return (
        <div>
            <div>
                <h1>RQ SuperHeroes Page</h1>
                {
                    data.data.map((item, index) => (
                        <div key={index}>
                            <h3>{item.name}</h3>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default RQSuperHeroes