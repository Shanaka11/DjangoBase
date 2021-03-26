// React Imports
import React, { useState } from 'react'
// Material UI Imports
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';

const Alert = ( { error, severity } ) => {
    
    const [ open, setOpen ] = useState(error)

    const handleClose = () => {
        setOpen(false)
    }

    return (
        <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
            <MuiAlert elevation={6} variant="filled" severity= {severity ? severity : 'success'}>
                {error}
            </MuiAlert>
        </Snackbar>  
    )
}

export default Alert
