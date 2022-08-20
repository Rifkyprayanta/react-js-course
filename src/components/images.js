import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Container, Button } from 'react-bootstrap'

const Images = (props) =>  {
    const [data, setDatas] = useState([])
    const [limit, setLimit] = useState(1)


    // setiap kali dibutuhkan useEffect 
    // maka lakukan best practice untuk membuat 
    // clean up function yaitu dengan 
    // tidak membuat setiap useEffect untuk dirender

    useEffect(()=>{
        let isCancelled = false 
        if(isCancelled === false)
            axios({
                method: 'get',
                url: `${process.env.REACT_APP_BASEURL}/photos?_limit=${limit}`
            }).then((result) => setDatas(result.data))

            return () => { isCancelled = true }
        }, [limit])

    const handleLimit = (props) => {
        if(props === "+"){
            setLimit((prev) => prev + 1)
        }
        if(props === "-"){
            setLimit((prev) => prev - 1)
        }
    }

  return (
    <React.Fragment>
        <Container>
            <h3>{limit} Jumlah Post </h3>
            {data.map((data,i) => {
                return(
                <div key={i}>
                    <h1>{data.title}</h1>
                    <p>{data.url}</p>
                </div>
                )
            })}
            <Button className="btn btn-primary" onClick={() => handleLimit("+")}>Tambah Post</Button> 
            {
                limit > 0 ? <Button className="btn btn-warning" onClick={() => handleLimit("-")}>Kurangin Post</Button> : <Button className="btn btn-warning" disabled> Kurangin Post </Button>
            }
        </Container>
    </React.Fragment>
  )
}

export default Images