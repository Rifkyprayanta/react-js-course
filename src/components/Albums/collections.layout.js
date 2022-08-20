import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Container, Button, Carousel, ButtonGroup } from 'react-bootstrap'
import Loaders from '../Utilities/loaders'


const Collections = () => {
    const [data, setDatas] = useState([])
    const [limit, setLimit] = useState(2)
    const [loading, setLoading] = useState(true)
    useEffect(()=>{
        let isCancelled = false 
        if(isCancelled === false){
            setLoading(true)
            axios({
                method: 'get',
                url: `${process.env.REACT_APP_BASEURL}/photos?_limit=${limit}`
            })
            .then((result) => setDatas(result.data))
            .catch((err) => console.log(err))
            .finally(() => setLoading(false))
        }
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


    if(loading) return <Loaders/>

  return (
    <React.Fragment>
        <Container>
            <br></br>
            <h3> Albums API </h3>
            <p> This Page to Fecth Image with Default is {limit} </p>
            <p> Show <b>{limit}</b> Albums </p>
            <Carousel>
                {data.map((data, i) => {
                    return (
                        <Carousel.Item key={i}>
                            <img
                            className="d-block w-100"
                            src={data.thumbnailUrl}
                            alt="First slide"
                            height={450}
                            width={450}
                            />
                            <Carousel.Caption>
                            <h3>{data.title}</h3>
                            </Carousel.Caption>
                        </Carousel.Item>
                    )
                })}
            </Carousel>
            <br></br>
            <ButtonGroup className="d-flex justify-content-center align-items-center mt-2">
            {
                limit == 1 ? 
                    <Button className="btn btn-success" onClick={() => handleLimit("+")}>+ Collections</Button>
                    : 
                    <>
                    <Button className="btn btn-success" onClick={() => handleLimit("+")}>+ Collections</Button>
                    <Button className="btn btn-warning" onClick={() => handleLimit("-")}>- Collections</Button>
                    </>
            }
            
            </ButtonGroup>
        </Container>
    </React.Fragment>
  )
}

export default Collections