// material-ui core
import {Box,
    Container,
    CssBaseline,
    Paper,
    } from '@material-ui/core';
// material-ui style
import {makeStyles} from '@material-ui/styles';
// layout 
import Footer from '../../src/layouts/Footer';
import Loginpaper from '../../src/layouts/Loginpaper';
const useStyles = makeStyles({
  root: {
    margin: "0",
    padding: "0",
    width:"100%",
  },
  container: {
  padding: "15vh 4vw 15vh 4vw"
  },
  paper: {
    backgroundColor:"#f4f4f4",
    minHeight: "40vh",
      padding: "7vh 2vw 10vh 2vw",
      '@media screen and (max-width: 960px)': {
        padding: "7vh 4vw 10vh 4vw",
      }
  },
  footer: {
    marginTop: "none",
  },
})
export default function Login() {
    const classes = useStyles();
    return (
      <Box className={classes.root}>
        <Container className={classes.container} maxWidth="sm">
          <CssBaseline />
          <Paper className={classes.paper}>
            <Loginpaper/>
          </Paper>
        </Container>
        <Footer className={classes.footer}/>
      </Box>
    )
}