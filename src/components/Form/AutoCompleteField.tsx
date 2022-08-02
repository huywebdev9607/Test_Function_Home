import * as React from "react";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import { CircularProgress, Typography } from "@mui/material";
import { useStyles } from "./InputField";
import { useTranslation } from "react-i18next";
import _ from "lodash";

interface option {
  label: string;
  value: string | number;
}

type Props = {
  title: string;
  options: option[];
  name:string
  setValue:any
  error: boolean;
  loading:boolean;
  helperText: string | undefined;
  handleChange?:(value:any)=>void
  onChange:(e:any) =>void
};

export default function AutoCompleteField({ title, options ,setValue,name,error,helperText,handleChange,loading,...rest }: Props) {
  let {onChange,...props} = rest;

  const [optionsField,setOptionsField] = React.useState(options)

  const classes = useStyles();
  const { t } = useTranslation();

  React.useEffect(()=>{
    if(loading){
      setOptionsField([])
    }else{
      setOptionsField(options)
    }
  },[loading])

  return (
    <div style={{ display: "flex", flexDirection: "column", width: "100%" }}>
      <Typography className={classes.title}>{t(title)}</Typography>
      <Autocomplete
        disablePortal
        options={optionsField}
        onSelect={e =>{
          let value = _.filter(options,(option)=> option.label === (e.target as HTMLInputElement).value)[0]
          setValue(name,value)
        }}
        // sx={{ width: 300 }}
        {...props}
        loading={loading}
        loadingText={<CircularProgress/>}
        onChange={(e,value)=>{
          onChange(value);
          _.isFunction(handleChange) &&  handleChange(value?.value)
        }}
        getOptionLabel={(option:option) =>option.label}
        isOptionEqualToValue={(option,value) => option.value === value.value}
        renderInput={(params) => {
          return <TextField {...params} name={name} error={error} helperText={helperText}/>;
        }}
      />
    </div>
  );
}

