import {
    alpha,
    Avatar,
    Box,
    Button,
    IconButton,
    ListItemIcon,
    ListItemText,
    MenuItem,
  } from '@mui/material';
  import { useContext, useRef, useState } from 'react';
  import { useTranslation } from 'react-i18next';
  import ExitToAppIcon from '@mui/icons-material/ExitToApp';
  import { MenuPopover } from "src/components/Popover";
import PersonIcon from '@mui/icons-material/Person';
import { AuthContext } from 'src/context/AuthContext';
  
  
  export function UserPopover() {
    const { i18n } = useTranslation();
  
    const anchorRef = useRef(null);
    const {logout} = useContext(AuthContext)
  
    const [open, setOpen] = useState(false);
  
    const handleOpen = () => {
      setOpen(true);
    };
  
    const handleClose = () => {
      setOpen(false);
    };
  
    function handleMenuItemClick(value: string) {
      setOpen(false);
    }
  
    return (
      <>
        <IconButton
          ref={anchorRef}
          onClick={handleOpen}
          sx={{
            padding: 0,
            width: 44,
            height: 44,
            ...(open && {
              bgcolor: (theme) =>
                alpha(
                  theme.palette.secondary.main,
                  theme.palette.action.activatedOpacity,
                ),
            }),
          }}>
            <Avatar
            sx={{
              height: 40,
              width: 40,
              ml: 1
            }}
            src="/static/images/avatars/avatar_1.png"
          >
            <PersonIcon fontSize="small" />
          </Avatar>
        </IconButton>
  
        <MenuPopover
          sx={{}}
          open={open}
          onClose={handleClose}
          anchorEl={anchorRef.current}>
          <Box sx={{ py: 1 }}>
              <MenuItem
              onClick={()=>logout?.()}
                sx={{ py: 1, px: 2.5 }}>
                    <ListItemIcon>
                    <ExitToAppIcon/>
                    </ListItemIcon>
                    <ListItemText>
                        Logout
                    </ListItemText>
              </MenuItem>
          </Box>
        </MenuPopover>
      </>
    );
  }
  