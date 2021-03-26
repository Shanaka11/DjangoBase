// React Imports
import React, { useState, useEffect } from 'react'
// 3rd Party Imports
import { useDispatch, useSelector } from 'react-redux'
// Material UI Imports
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper'
import Grid from '@material-ui/core/Grid'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'
import CircularProgress from '@material-ui/core/CircularProgress';
// Local Imports
import Alert from '../components/Alert'
import { login } from '../actions/userActions'

// Style
const useStyles = makeStyles({
    container: {
        height: '100vh',
        width: '100vw',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
    },
    cardContainer: {
        padding: 25,
        width: 300
    }
  });

const LoginPage = ({ history }) => {

    // Styles
    const classes = useStyles()
    // Form States
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    // Redux
    const dispatch = useDispatch()
    
    const userLogin = useSelector( state => state.userLogin )
    const { loading, error, userInfo } = userLogin

    // UseEffect
    useEffect(()=>{
        if(userInfo){
            history.push('/')
        }
    }, [userInfo, history])

    // Submit Handler
    const handleSubmit = (e) => {
        e.preventDefault()
        dispatch(login(email, password))
    }

    return (
        <div className={classes.container}>          
            {error && <Alert error={error} severity='error'/>}
            <Paper elevation={1} className={classes.cardContainer}>
                <h1>Login</h1>
                <form onSubmit={handleSubmit}>
                    <Grid container spacing={2}>
                        <Grid item xs={12}>
                            <TextField 
                                id="email" 
                                label="Email" 
                                variant="outlined" 
                                fullWidth
                                required
                                size='small'
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField 
                                id="password" 
                                label="Password" 
                                variant="outlined" 
                                fullWidth
                                required
                                type="password"
                                size='small'
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}                                
                            />
                        </Grid>
                        <Grid item xs={6}>
                            <Button
                                href="/register"
                                variant="contained"
                                color="secondary"
                                fullWidth
                                disabled={loading}
                            >
                                {loading ? <CircularProgress size={25}/> : "Register"}
                            </Button>
                        </Grid>                        
                        <Grid item xs={6}>
                            <Button
                                variant="contained"
                                color="primary"
                                fullWidth
                                type="submit"
                                disabled={loading}
                            >
                                {loading ? <CircularProgress size={25} color='secondary'/> : "Login"}
                            </Button>
                        </Grid>
                    </Grid>            
                </form>
            </Paper>
        </div>
    )
}

export default LoginPage
