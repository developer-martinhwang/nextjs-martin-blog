/*
 * Copyright(c)2021 developer.martinhwang@gmail.com
 * All rights reserved.
 * Filename: layouts/StoryCard.js
 * Key Options:
 * -
 * Revision History:
 * - Feb 26, 2021, developer Martin Hwang < developer.martinhwang@gmail.com >
 *   : created
 */
import Image from 'next/image';
// material-ui core
import {Box, Typography} from "@material-ui/core";
// material-ui style
import {makeStyles} from "@material-ui/styles";
// import javascript from "/assets"
const useStyles = makeStyles({
    root: {
        marginTop: "1em",
        padding: "2em 3em 2em 3em",
        borderTop: "10px solid #303436",
        '@media screen and (max-width: 960px)': {
            padding: "4em 0 0 0",
        }
    },
    row: {
        display: "flex",
        flexWrap: "wrap",
        padding: "10px",
        justifyContent: "space-evenly",
    },
    col: {
        fontSize: "1.2rem",
        position: "relative",
        width: "28vw",
        padding: "2vw",
        '@media screen and (max-width: 960px)': {
            width: "100%",
            marginBottom: "30px",
            textAlign: "center"
        }
    },
    image: {
        height: "28vh",
        '@media screen and (max-width: 960px)': {
            marginBottom: "30px"
        }
    },
    title: {
        fontSize: "2.7rem",
        fontWeight: "bolder",
        '@media screen and (max-width: 960px)': {
           fontSize: "1.6rem",
           padding: "0",
           margin: "0"
        }
    },
    subtitle: {
        fontSize: "1.5rem",
        paddingLeft: "3px",
        '@media screen and (max-width: 960px)': {
            fontSize: "1rem",
            padding: "0",
            margin: "0"
        }
    }
})
// function:
// if index # even flexDirection row-reverse
// # odd flexDirection row
const flexDirection = (index) => {
    if (index%2 === 0) {
        return "row-reverse"
    }else {
        return "row"
    }
}
export default function Storycard(prop) {
    const classes = useStyles();
    return (
        <Box className={classes.root}>
            <Box className={classes.row} flexDirection={flexDirection(prop.index)}>
                <Box className={classes.col}>
                    <img
                        src={prop.image}
                        width="320"
                        height="350"
                        className={classes.image}
                    />
                </Box>
                <Box className={classes.col}>
                    <Typography className={classes.title}>{prop.title}</Typography>
                    <Typography className={classes.subtitle}>{prop.subtitle}</Typography>
                </Box>
            </Box>
        </Box>
    )
}