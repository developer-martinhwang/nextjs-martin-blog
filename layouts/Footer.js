/*
 * Copyright(c)2021 developer.martinhwang@gmail.com
 * All rights reserved.
 * Filename: layouts/Footer.js
 * Key Options:
 * - Navigation, contact info, social community links
 * Revision History:
 * - Feb 25, 2021, developer Martin Hwang < developer.martinhwang@gmail.com >
 */
// next.js
import Link from 'next/link';
// material-ui-core
import {Box, 
        List, 
        ListItem, 
        Typography} from '@material-ui/core';
// material-ui-styles
import {makeStyles} from "@material-ui/styles";
// material-ui icons
import {AccountBox,
        Email,
        Facebook,
        LinkedIn,
        Home,
        DeveloperBoard,
        Description} from "@material-ui/icons";
const useStyles = makeStyles({
    root: {
        background: prop => prop.background,
        marginTop: prop => prop.marginTop,
        padding: "2em",
        paddingTop: "4em",
        borderTop: prop => prop.borderTop
    },
    row: {
        display: "flex",
        flexWrap: "wrap",
        marginRight: "-15px",
        marginLeft: "-15px",
        justifyContent: "center",
    },
    col: {
        fontSize: "1.2rem",
        position: "relative",
        width: "28%",
        paddingRight: "15px",
        paddingLeft: "15px",
        '@media screen and (max-width: 960px)': {
            width: "100%",
            marginBottom: "20px"
        }
    },
    listItem: {
        paddingLeft: "0",
    },
    link: {
        marginLeft: "0.2vw",
        padding: "0.3vh 0 0 1vw",
        color: "#304ffe",
        textDecoration: 'none'
    },
    copyright: {
        fontSize:"0.95rem",
        "& span":{
            color: "#304ffe"
        }
    }
})
export default function Footer (prop) {
    const classes = useStyles(prop);
    return (
        <Box className={classes.root}>
            <Box className={classes.row}>
                <Box className={classes.col}>
                    <Typography variant="h5">Follow Martin Hwang</Typography>
                    <List>
                    <ListItem className={classes.listItem}>
                        <LinkedIn /> <Link className={classes.link} href="https://www.linkedin.com/in/martin-hwang-developer/">LinkedIn</Link>
                    </ListItem>
                    <ListItem className={classes.listItem}>
                        <Facebook /> <Link className={classes.link} href="https://www.facebook.com/MartinHwangs">Facebook</Link>
                    </ListItem>
                    </List>
                </Box>
                <Box className={classes.col}>
                    <Typography variant="h5">Martin Hwang Blog</Typography>
                    <List>
                    <ListItem className={classes.listItem}>
                        <Home /> <Link className={classes.link} href="/">Home</Link>
                    </ListItem>
                    <ListItem className={classes.listItem}>
                        <AccountBox /> <Link className={classes.link} href="/">Log in</Link>
                    </ListItem>
                    <ListItem className={classes.listItem}>
                        <DeveloperBoard /> <Link className={classes.link} href="/modules/module">module</Link>
                    </ListItem>
                    <ListItem className={classes.listItem}>
                        <Description /> <Link className={classes.link} href="/">Terms & Conditions</Link>
                    </ListItem>
                    </List>
                </Box>
                <Box className={classes.col}>
                    <Typography variant="h5">Contact Martin Hwang</Typography>
                    <List>
                    <ListItem className={classes.listItem}>
                        <Email /> <Link className={classes.link} href="mailto:developer.martinhwang@gmail.com">developer.martinhwang@gmail.com</Link>
                    </ListItem>
                    </List>
                </Box>
            </Box>
            <Box className={classes.row} paddingTop="20px">
            <Typography className={classes.copyright} variant="body1">Copyright &copy; {new Date().getFullYear()}, All Right Reserved <Link href="/">Martin Hwang</Link></Typography>
            </Box>
        </Box>
    )
}
