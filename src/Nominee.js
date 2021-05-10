import React from 'react';
import { Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
    button: {
        textTransform: 'none'
    },
    list: {
        marginBottom: '5px',
        listStyleType: 'none',
        display: 'flex',
        justifyContent: 'space-between',
        paddingBottom: '10px',
    }
});

const Nominee = (props) => {
    const classes = useStyles();
    const nominee = props.nominee;

    return(
        <li key={props.i}
            className={classes.list}>
            {nominee.Title}
            <Button
                className={classes.button}
                variant="contained"
                onClick={() => props.handleDelete(nominee)}>
                Remove
            </Button>
        </li>
    );
};

export default Nominee;