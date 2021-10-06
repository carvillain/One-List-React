import React, { useState, useEffect} from 'react';
import { makeStyles } from '@material-ui/core';
import fellowship from '../../assets/images/fellowship.jpg';
import { Link } from 'react-router-dom';

const useStyles = makeStyles({
    root:{
        padding: '0',
        margin: '0'
    },
    navbar_container: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    logo:{
        margin: '0 0 0 0.45em'
    },
    logo_a: {
        color: 'rgb(28,24,22)'
    },
    logo_navigation: {
        listStyle: 'none',
        textTransform: 'uppercase',
        textDecoration: 'none'
    },
    navigation: {
        display: 'flex'
    },
    nav_a:{
        display: 'block',
        padding: '1em',
        color: 'black'
    },
    main: {
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${fellowship});`,
        width: '100%',
        height: '100%',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        position: 'absolute',
    },
    main_text:{
        textAlign: 'center',
        position: 'relative',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        color: 'white'
    }
    
})

export const Header = () => {

    const classes = useStyles();

    return (
        <nav>
            <div className = {classes.navbar_container}>
            <h1 className={ `${classes.logo} `}>
                    <a href="" className={ `${classes.logo_a} ${classes.logo_navigation}` }>OneList</a>
                </h1>
                <ul className={ `${classes.navigation} ${classes.logo_navigation}` }>
                    <li>
                        <Link to="/create" className={classes.nav_a}>Create Playlist</Link>
                    </li>
                    <li>
                        <Link to="/dashboard" className={classes.nav_a}>Dashboard</Link>
                    </li>
                </ul>
            </div>
        </nav>
    )
}