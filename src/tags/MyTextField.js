/*
 * Copyright(c)2021 developer.martinhwang@gmail.com
 * All rights reserved.
 * Filename: tags/MyTextField.js
 * Key Options:
 * -
 * Revision History:
 * - Feb 26, 2021, developer Martin Hwang < developer.martinhwang@gmail.com >
 *   : created
 */
import React from "react";
// material-ui core 
import {Box,
        TextField,
        }from "@material-ui/core";
// material-ui style
import {withStyles} from "@material-ui/styles";
const styles = {
    root: {
        '& label':{
          color: "#000",
        },
        '& label.Mui-focused': {
          color: "#000",
        },
        '& .MuiOutlinedInput-root': {
          '& fieldset': {
            borderColor: "#000",
          },
          '&.Mui-focused fieldset': {
            borderColor: "#000",
          },
          '& input': {
            color: "#000",
            fontSize: "1.1em",
            marginTop: "0.3vh"
          },
          "& .MuiInputAdornment-root .MuiSvgIcon-root": {
            color: "#000"
          },
          "&.Mui-focused .MuiInputAdornment-root .MuiSvgIcon-root": {
            color: "#000"
          },
        },
        "& .MuiFormHelperText-root": {
          color: "#000",
          fontSize: "1em",
        }
    },
};
function MyTextField(prop) {
    const {classes} = prop;
    return (
        <Box>
            <TextField
                className={classes.root}
                variant= {prop.variant}
                margin= {prop.margin}
                required={prop.required}
                fullWidth={prop.fullWidth}
                id={prop.id}
                label={prop.label}
                autoComplete={prop.autoComplete}
                InputProps={prop.InputProps}
                autoFocus={prop.autoFocus}
                type={prop.type}
                helperText={prop.helperText}
                onChange={prop.onChange}>
            </TextField>
        </Box>
    )
}

export default withStyles(styles)(MyTextField)
