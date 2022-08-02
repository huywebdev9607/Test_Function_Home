import { makeStyles } from '@mui/styles'
import { Theme } from '@mui/system'
import React from 'react'
import bg from 'src/assets/bg.jpg'

type Props = {
  children: React.ReactNode
}

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    // backgroundImage: "linear-gradient(to right,#51aae8, #d20be2)",
    background:`url(${bg})`,
    backgroundSize:"cover",
    backgroundRepeat:"no-repeat",
    minHeight:"100vh",
    position:"relative"
  },
  form:{
    position:"absolute",
    top:"50%",
    left:"50%",
    transform:"translate(-50%,-50%)",
    backgroundColor:"#fff",
    width:"400px",
    minHeight:"500px",
    padding:"24px",
    borderRadius:"24px",
  }

}))

const AuthLayout = ({ children }: Props) => {

  const classes = useStyles();
  return (
    <div className={classes.root}>
      <div className={classes.form}>
       {children}
      </div>
    </div>
  )
}

export default AuthLayout