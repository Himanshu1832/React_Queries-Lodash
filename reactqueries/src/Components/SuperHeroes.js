import React from 'react'
import axios from 'axios'

const SuperHeroes = () => {

    const [isLoading, setIsLoading] = React.useState(true)
    const [data, setData] = React.useState([])

    React.useEffect(() => {
        axios.get('http://localhost:4000/superheroes').then((response) => {
        setData(response.data)
        setIsLoading(false)
    })
    }, [])
  return (
    <div>
        <div><h1>SuperHeroes Page</h1></div>
        {isLoading ? (
            <div>Loading...</div>
        ) : (
            <div>
                {data.map((item, index) => (
                    <div key={index}>
                        <h3>{item.name}</h3>
                        </div>
                ))}
    </div>)}
    </div>
  )
}

export default SuperHeroes