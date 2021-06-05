import React, { useEffect, useState } from 'react';
import ExpandLessIcon from '@material-ui/icons/ExpandLess';
import IconButton from '@material-ui/core/IconButton';
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles((theme) => ({
    toTop: {
        zIndex: 2,
        position: 'fixed',
        bottom: '2vh',
        backgroundColor: '#DB2777',
        color: 'black',
        "&:hover, &.Mui-focusVisible": {
            transition: '0.4s',
            color: 'white',
            backgroundColor: '#008aff'
        },
        right: '5%',
    }
}))


const ScrollTop = ({
    showBelow
}) => {

    const classes = useStyles();

    const[show, setShow] = useState(showBelow ? false : true)

    const handleScroll = () => {
        if (window.pageYOffset > showBelow) {
            if (!show) setShow(true)
        } else {
            if (show) setShow(false)
        }
    }


    useEffect(() => {
        if (showBelow){
            window.addEventListener(`scroll`, handleScroll)
            return () => window.removeEventListener(`scroll`, handleScroll)
        }
    })

    const handleClick = () => {
        window[`scrollTo`]({ top: 0, behavior: `smooth`})
    }
    return (
        <div>
            {show &&
            <IconButton onClick={handleClick} className={classes.toTop}>
                <ExpandLessIcon />
            </IconButton>
            }
        </div>
    )
}

export default ScrollTop;