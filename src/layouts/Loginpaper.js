import {useState, useEffect} from 'react';
import Link from 'next/link';
// material-ui core
import {Box,
        Typography,
        Button,
        Grid,
        InputAdornment,
        IconButton,
        FormControlLabel,
        Checkbox,
        } from '@material-ui/core';
// material-ui style
import {makeStyles} from "@material-ui/styles";
// material-ui icons
import {Email,
        VpnKey,
        Visibility,
        VisibilityOff}from "@material-ui/icons";
// components
import MyTextField from "../../src/tags/MyTextField";
// icons
const useStyles = makeStyles({
  root: {
    margin: "0",
    padding: "0",
    width:"100%",
    color: "#000"
  },
  head: {
    color: "#000",
  },
  icon: {
    display: "flex",
    justifyContent: "center",
    marginBottom: "3vh",
  },
  logintext: {
    fontSize:"2em",
    fontWeight: "bolder"
  },
  loginbutton: {
    margin: "3.5vh 0 2vh 0",
    backgroundColor: "#000",
    minHeight: "5vh",
    color: "grey",
    "&:hover": {
      backgroundColor: "#000",
      color:"#fff"
    }
  },
  avatar: {
    width: "55px",
    height: "55px"
  },
  forgotpassword: {
    marginTop: "3vh",
    '& a': {
      color:"#000"
    }
  },
  signupnow: {
    margin: "1vh 0",
    '& a': {
      color:"#000",
      '&:hover': {
        color:"#000"
      }
    }
  },
  formcontrollabel: {
      color:"#000",
      paddingTop: "1vh",
      '& .MuiIconButton-label:hover ': {
        backgroundColor: "rgba(191, 187, 187, 0.04)",
      },
      '& svg': {
          color:"#000",
      },
      '& .Mui-checked:hover span': {
        backgroundColor: "rgba(191, 187, 187, 0.04)"
      }
  }
})
export default function Loginpaper() {
  const classes = useStyles();
  const [showPassword, setShowPassword] = useState(false);
  const showHidePassword = () => {
    setShowPassword(!showPassword);
  }
  useEffect(() => {
    window.scrollTo(0, 0);
  },[])
  const showHidePasswordIcon = (showPassword?<Visibility/>:
    <VisibilityOff/>)
  return (
        <Box className={classes.root}>
            <Box className={classes.head}>
                <Box className={classes.icon}>
                </Box>
                <Typography variant="body1" className={classes.logintext}>
                Log in
                </Typography>
            </Box>
            <Box>
                <form className={classes.form}>
                <MyTextField
                    variant="outlined"
                    margin="normal"
                    required={true}
                    fullWidth={true}
                    id="email"
                    label="Email"
                    type="email"
                    name="email"
                    autoComplete="email"
                    InputProps={{
                    startAdornment: (
                        <InputAdornment position="start">
                        <Email/>
                        </InputAdornment>
                    ),
                    }}
                    autoFocus={true}/>
                <MyTextField
                    variant="outlined"
                    margin="normal"
                    required={true}
                    fullWidth={true}
                    name="password"
                    label="Password"
                    type={showPassword?"text":"password"}
                    id="password"
                    InputProps={{
                    startAdornment: (
                        <InputAdornment position="start">
                        <VpnKey/>
                        </InputAdornment>
                    ),
                    endAdornment:(
                        <InputAdornment position="end">
                        <IconButton
                            aria-label="toogle password visibility"
                            onClick={showHidePassword}>
                            {showHidePasswordIcon}
                        </IconButton>
                        </InputAdornment>
                    )
                    }}
                    autoComplete="current-password"/>
                <Button
                    type="submit"
                    fullWidth
                    variant="contained"
                    className={classes.loginbutton}>
                    Log in
                </Button>
                <FormControlLabel
                    control={<Checkbox value="remember"/>}
                    label="Remember me"
                    className={classes.formcontrollabel}/>
                <Box>
                    <Grid className={classes.forgotpassword}>
                    <Link href="#">
                        Forgot password?
                    </Link>
                    </Grid>
                    <Grid item className={classes.signupnow}>
                    <Link href="/authentication/signup" variant="body2">
                        New? Sign up Now
                    </Link>
                    </Grid>
                </Box>
                </form>
            </Box>
        </Box>
    )
}