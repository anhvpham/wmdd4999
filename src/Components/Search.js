import React from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
    form: {
        width: "100%"
    },
    textField: {
        dislay: 'flex',
        margin: theme.spacing.unit,
    },

    button: {
        margin: theme.spacing.unit
    },
})


const Search = (props) => (
    <form onSubmit = {props.getNews}>
        <TextField
            className = { props.classes.textField}
            id = "outlined-search"
            placeholder = "Keyword or Phrase Search"
            name = "search"
            type = "search"
            margin = "normal"
            variant = "outlined"
            fullWidth = {true}
        />


        <Button 
            variant = "contained"
            color = "primary"
            size = "large"
            type = "submit"
            fullWidth = {true}
            id = "submit"
         >
         SEARCH
         </Button>       
    </form>
)

export default withStyles(styles)(Search)