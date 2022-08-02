import { LoadingButton } from "@mui/lab";
import {  Grid, Typography } from "@mui/material";
import _ from "lodash";
import React, { useContext } from "react";
import { Controller, useForm } from "react-hook-form";
import { useTranslation } from "react-i18next";
// import ButtonSubmit from "src/components/Button/Submit";
import InputField from "src/components/Form/InputField";
import AuthLayout from "src/components/Layout/Auth";
import {AuthContext, UserLogin} from "src/context/AuthContext";

//COMPONENT
const LoginPage = () => {
  const { t } = useTranslation();
  const {login,loading} = useContext(AuthContext)
  
 

  const {
    control,
    formState: { errors },
    handleSubmit,
  } = useForm<UserLogin>({
    defaultValues: {
      user_name: "",
      password: "",
    },
  });

  
  const onSubmit =   (values: UserLogin) => {
     _.isFunction(login) && login(values)
  };


  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <AuthLayout>
        <Grid container sx={{ padding: "24px" }}>
          <Typography paddingBottom={"10px"} variant="h4">
            {t("login")}
          </Typography>
          <Grid item container spacing={2}>
            <Grid item container>
              <Controller
                name="user_name"
                rules={{ required: t("field.required") }}
                control={control}
                render={({ field }) => (
                  <InputField
                    title={"username"}
                    error={Boolean(errors?.user_name)}
                    helperText={errors?.user_name?.message}
                    type="text"
                    disabled={loading}
                    {...field}
                  />
                )}
              />
            </Grid>
            <Grid item container>
              <Controller
                name="password"
                rules={{ required: t("field.required") }}
                control={control}
                render={({ field }) => (
                  <InputField
                    title={"password"}
                    error={Boolean(errors?.password)}
                    helperText={errors?.password?.message}
                    type="password"
                    disabled={loading}
                    {...field}
                  />
                )}
              />
            </Grid>
            <Grid item>
              <LoadingButton variant="contained" type="submit" loading={loading}>{t("login")}</LoadingButton>
            </Grid>
          </Grid>
        </Grid>
      </AuthLayout>
    </form>
  );
};

export default LoginPage;
