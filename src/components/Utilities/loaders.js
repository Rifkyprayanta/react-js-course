import React from 'react'
import { Spinner, Button } from 'react-bootstrap'

const loaders = () => {
  return (
    <div className='d-flex justify-content-center align-items-center' style={{minHeight:"100vh"}}>
        <div className='d-flex'>
        <Button variant="primary" disabled>
        <Spinner
          as="span"
          animation="grow"
          size="lg"
          role="status"
          aria-hidden="true"
        />
        Sedang Mengambil Data...
      </Button>
        </div>
    </div>
  )
}

export default loaders