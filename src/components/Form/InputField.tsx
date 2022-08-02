import { TextField, Theme, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import React from "react";
import { useTranslation } from "react-i18next";



type InputProps = React.DetailedHTMLProps<
  React.InputHTMLAttributes<HTMLInputElement>,
  HTMLInputElement
> &{title:string,error:Boolean,helperText:string|undefined};

export const useStyles = makeStyles((theme: Theme) => ({
  title: {
    paddingBlock: "10px",
  },
}));

const InputField = React.forwardRef<HTMLInputElement,InputProps>(({title,error,helperText,...props},ref) =>{
    const { t } = useTranslation();
 
    const classes = useStyles();

    
  return (
    <div style={{ display: "flex", flexDirection: "column", width: "100%" }}>
      <Typography className={classes.title}>{t(title)}</Typography>
      <TextField
        ref={ref}
        inputProps={props}
      />
    </div>
  );
})




export default InputField;
