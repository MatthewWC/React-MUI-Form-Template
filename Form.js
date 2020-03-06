import React from 'react'

import validator from '../tools/validator'

// ---- M-UI imports ----
import { makeStyles } from '@material-ui/core/styles'
import Grid from '@material-ui/core/Grid'
import Button from '@material-ui/core/Button'
import TextField from '@material-ui/core/TextField'
import Paper from '@material-ui/core/Paper'
import { Typography } from '@material-ui/core'
import FormHelperText from '@material-ui/core/FormHelperText'
// ---- M-UI imports ----

// M-UI styles
const useStyles = makeStyles(theme => ({
  registerRoot: {
    flexDirection: 'column'
  },
  paper: {
    minWidth: '300px',
    display: 'flex',
    flexDirection: 'column',
    margin: 10,
    padding: 20,
  },
  title: {
    marginBottom: 20,
    margin: 'auto'
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    height: '200px' // set height for proper spacing
  },
  textField: { 
  },
  errors: {
    margin: theme.spacing(2)
  },  
  button: {
  }
}))

function Form(props) {

  // M-UI styles instance
  const classes = useStyles()

  //refs
  const errorRef = React.createRef()
  const formRef = React.createRef()

  async function handleSubmit(event) {
    event.preventDefault()
    // reset error text
    errorRef.current.innerHTML = ''
    try{
      validator('Form Name Goes Here')
      // INSERT MUTATION LOGIC
    }
    catch(error){
      let errMsg
      // handle unsuccessful response
      errMsg = error.toString().lastIndexOf(':') + 1
      errorRef.current.innerHTML = error.toString().substring(errMsg, 75)
    }
  }

  return(
    <Grid
      container
      justify='center'>
      <Paper
        className={classes.paper}>
        <Typography
          className={classes.title}>
          Form Name
        </Typography>
        <form
          className={classes.form}
          ref={formRef}>
          <TextField
            key='text'
            className={classes.textField}
            name='text'
            label='label'
            variant='outlined'
            defaultValue='Text Field'
            InputLabelProps={{
              shrink: true,
            }}
            type='text'
            /> 
          <TextField
            key='float'
            className={classes.textField}
            name='float'
            label='label'
            variant='outlined'
            defaultValue={0}
            inputProps={{ step: 'any' }}
            InputLabelProps={{
              shrink: true,
            }}
            type='number'
            step='any'
            />
          <FormHelperText
            className={classes.errors}
            ref={errorRef}
            error={true}
          >
          </FormHelperText>
          <Button
            onClick={(event) => {
              handleSubmit(event)
            }}
            className={classes.button}
            variant='contained'>
              SUBMIT
          </Button>
        </form>
      </Paper>
    </Grid>
  )
}

export default Form
