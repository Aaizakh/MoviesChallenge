import React, { useEffect } from 'react';
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

const Movie = (props) => {
    const item = props.item;
    const classes = useStyles();

    useEffect(() => {
    });

    return(
        <li key={props.i}
            className={classes.list}>
            {item.Title}
            ({item.Year})
            {props.nomineeList.includes(item) ? 
                <Button 
                    className={classes.button}
                    disabled
                    variant="contained" 
                    color="primary">
                        Nominate
                </Button>
                : 
                <Button 
                    className={classes.button}
                    variant="contained" 
                    color="primary"
                    onClick={() => props.handleNominees(item)}>
                        Nominate
                </Button>
            }
        </li>
    );
};

export default Movie;