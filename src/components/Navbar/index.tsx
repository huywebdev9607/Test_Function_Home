import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { Link, Navigate, useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import Nova from 'src/assets/app_icon.png';
import { Grid } from '@mui/material';
import { LanguagePopover } from './LanguagePopover';
import { AuthContext } from 'src/context/AuthContext';
import LogoutIcon from '@mui/icons-material/Logout';
import _ from 'lodash'

interface Props {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window?: () => Window;
  children:React.ReactNode;
}

interface NavItem {
  title:string,
  route:string,
}

const drawerWidth = 240;

const navItems:NavItem[] = [{title:'nav.title.Home', route:"/home"},{title: 'nav.title.Setting',route:"/setting"}];

export default function Navbar(props: Props) {
  const { window,children } = props;
  const {t} = useTranslation();
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const {logout} = React.useContext(AuthContext)
  const navigate = useNavigate();
  const [lang,setLang] = React.useState("vi")
  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
      <Grid container  sx={{ my: 2 }} alignItems="center" gap={1} justifyContent="center" onClick={()=>{navigate('home')}}>
      <img src={Nova} style={{width:"40px",height:'40px'}}/> <span>PCBA</span>
      </Grid>
      <Divider />
      <List>
        {navItems.map((item:NavItem) => (
          <ListItem key={item.title} disablePadding>
            <ListItemButton sx={{ textAlign: 'center' }} onClick={()=>{navigate(item.route)}}>
              <ListItemText primary={t(item.title)} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  const container = window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: 'flex' }}>
      <AppBar component="nav"  sx={{background:"white",color:"#000",paddingInline:"24px"}}>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: 'none' } }}
          >
            <MenuIcon />
          </IconButton>
          <Grid
            // variant="h6"
            // component="div"
            sx={{ flexGrow: 1, display: { xs: ' none', sm: 'flex' },fontWeight:"bold", alignItems:"center" , gap:2 }}
            onClick={()=>{navigate('home')}}
          >
            
           <img src={Nova} style={{width:"50px",height:'50px'}}/> <span>PCBA</span>
          </Grid>
          <Box sx={{ display: { xs: 'none', sm: 'flex' }, alignItems:"center", gap:6 }}>
            <LanguagePopover/>
            {/* <Selection options={[{label:"vietnamese",value:"vi"},{label:"english",value:"en"}]} selectionValue={lang} setSelection={setLang} title={"Language"}/> */}
            {navItems.map((item:NavItem,index:number) => (
              <Link key={index} style={{ color: '#000' }} to={item.route}>
                {t(item.title)}
              </Link>
            ))}
            <div onClick={()=>!_.isUndefined(logout) &&  logout()} style={{display:"flex", gap:3, alignItems:"center"}}><LogoutIcon fontSize="large" sx={{paddingRight:"15px"}}/><span>{t("logOut")}</span> </div>
          </Box>
        </Toolbar>
      </AppBar>
      <Box component="nav">
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
        >
          {drawer}
        </Drawer>
      </Box>
      <Box component="main" >
        <Toolbar />
          {children}
      </Box>
    </Box>
  );
}
