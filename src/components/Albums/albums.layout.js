import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Container, Button } from 'react-bootstrap'


const Albums = (props) => {
    return (
        <React.Fragment>
            <Container>
                <h3>{props.title}</h3>
                <i>{props.description}</i>
            </Container>
        </React.Fragment>
    )
}

export default Albums