import React, { useState } from 'react'
import Button from '@material-ui/core/Button'
import ModalDialog from './ModalDialog'
import styled from 'styled-components'

const Signup = () => {
    const [open, setOpen] = useState(false)

    //function to handle modal open

    const handleOpen = () => {
        setOpen(true);
    }

    //function to handle modal close
    const handleClose = () => {
        setOpen(false)
    }

    return (
        <Style>
            <Button variant="contained" color="primary" onClick={handleOpen}>
                Signup
            </Button>
            {/*display the modal and pass props*/}
            <ModalDialog open={open} handleClose={handleClose} />
        </Style>
    )
}

const Style = styled.div`
  
  dispay: flex;
  align-items: center;
  justify-content: center;
  color: #00888B;
`

export default Signup