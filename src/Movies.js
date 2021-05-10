import React, { useState, useEffect } from 'react';
import { Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import axios from 'axios'
import Movie from './Movie'
import Nominee from './Nominee'

const useStyles = makeStyles({
    root: {
        display: 'flex',
        wrap: 'nowrap',
        justifyContent: 'center',
    },
    searchBar: {
        margin: '30px',
        background: '#FBF7ED',
        border: 0,
        borderRadius: 3,
        color: '#014D40',
        height: 100,
        padding: '30px',
    },
    results: {
        background: '#FBF7ED',
        color: '#014D40',
        margin: '10px',
        padding: '30px',
    },
    nominations: {
        background: '#FBF7ED',
        color: '#014D40',
        margin: '10px',
        padding: '30px',
    },
    search: {
        width: '200px',
        height: '30px',
        borderRadius: 2,
        border: 0,
        paddingLeft: '10px',
    },
});

const Movies = () => {
    const classes = useStyles();
    const [movieList, setMovieList] = useState({});
    const [nomineeList, setNomineeList] = useState([]);
    const [searchQuery, setSearchQuery] = useState('s');

    useEffect(() => {
    });

    function handleSearch(query){
        setSearchQuery(query)
        const mainURL = `http://www.omdbapi.com/?s=${query}&type=movie&page=1&apikey=${process.env.REACT_APP_API_KEY}`;
        axios.get(mainURL).then((r) => {
            setMovieList(r.data.Search)
        })
    }
    
    function handleNominees(item){
        if (!nomineeList.includes(item)){
            setNomineeList([...nomineeList, item])
        }
    }

    
    function handleDelete(item){
        setNomineeList(nomineeList.filter(nominee => nominee !== item))
    }


    return(
        <>
            <h1>The Shoppies</h1>
            <Grid className={classes.searchBar}>
                <h1>Movies Title</h1>
                <input 
                    type="text"
                    className={classes.search}
                    placeholder="Search Movies"
                    value={searchQuery}
                    onChange={(event) => handleSearch(event.target.value)}>
                </input>
            </Grid>
            <Grid container className={classes.root}>
                <Grid className={classes.results} md={5}>
                    <h1>Results for "{searchQuery}"</h1>
                    {movieList && Object.values(movieList).map((item,i) => 
                        <Movie item={item} i={i} nomineeList={nomineeList} handleNominees={handleNominees}></Movie>
                    )}
                </Grid>
                <Grid className={classes.nominations} md={5}>
                    <h1>Nominations</h1>
                    {nomineeList && Object.values(nomineeList).map((nominee,i) => 
                        <Nominee nominee={nominee} handleDelete={handleDelete}></Nominee>
                    )}
                </Grid>
            </Grid>
        </>
    );
};

export default Movies;