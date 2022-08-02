import { LoadingButton } from '@mui/lab';
import { Grid, Typography } from '@mui/material';
import _ from 'lodash';
import React, { useContext, useMemo } from 'react'
import { Controller, FieldError, useForm } from 'react-hook-form';
import { useTranslation } from 'react-i18next';
import InputField from 'src/components/Form/InputField';
import AuthLayout from 'src/components/Layout/Auth';
import { AuthContext, UserProfile, UserLogin } from 'src/context/AuthContext';


type Props = {}

interface FieldInfo {
    name: string,
    rules:any,
    title:string,
    type:string,
}

const RegisterPage = (props: Props) => {
    const { t } = useTranslation();
    // const { ,loading } = useContext(AuthContext);
   const loading = false;
    const {
      control,
      formState: { errors },
      handleSubmit,
    } = useForm<UserLogin & Omit<UserProfile,"role">>({
      defaultValues: {
        user_name: "",
        password: "",
      },
    });

    const fields = useMemo(()=>{
        return [
            {
                name:"userName",
                rules:{required:t('field.required')},
                title:"email",
                type:"text",
            },
            {
                name:"firstName",
                rules:{required:t('field.required')},
                title:"firstName",
                type:"text",
            },
            {
                name:"lastName",
                rules:{required:t('field.required')},
                title:"lastName",
                type:"text",
            },
            {
                name:"password",
                rules:{required:t('field.required')},
                title:"password",
                type:"password",
            },
            // {
            //     name:"confirmPassword",
            //     rules:{required:t('field.required')},
            //     title:"confirmPassword",
            //     type:"password",
            // }
        ]
    },[])

    const renderFieldRegister = (fields:FieldInfo[]) =>{
        return fields.map(({name,rules,...inputField},index)=>{
            let error = Boolean(_.hasIn(errors,name)?true:false);
            let helperText = errors && _.get(errors,`${name}.message`);
            let fieldName:any = name;
            return <Grid item container><Controller key={index} control={control} rules={rules} name={fieldName} render={({field})=> <InputField disabled={loading} {...field} {...inputField} error={error} helperText={helperText}/>}/></Grid>
        })
    }

    const onSubmit = (values:UserLogin &  Omit<UserProfile,"role">) => {
      // register(values)
    };
  
    return (
      <form onSubmit={handleSubmit(onSubmit)}>
        <AuthLayout>
          <Grid container sx={{ padding: "24px" }} justifyContent="center">
            <Typography paddingBottom={"10px"} variant="h4">
              {t("register")}
            </Typography>
            <Grid item container spacing={2}>
              {renderFieldRegister(fields)}
              <Grid item container justifyContent={"center"} marginTop="15px">
                <LoadingButton loading={loading}>{t("register")}</LoadingButton>
              </Grid>
            </Grid>
          </Grid>
        </AuthLayout>
      </form>
    );
}

export default RegisterPage