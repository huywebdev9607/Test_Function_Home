import {
    alpha,
    Box,
    IconButton,
    ListItemIcon,
    ListItemText,
    MenuItem,
  } from '@mui/material';
  import { useRef, useState } from 'react';
  import { useTranslation } from 'react-i18next';
  
  import { MenuPopover } from "src/components/Popover";
  import { Langs } from 'src/constants/lang';
  
  export function LanguagePopover() {
    const { i18n } = useTranslation();
  
    const anchorRef = useRef(null);
  
    const [open, setOpen] = useState(false);
  
    const handleOpen = () => {
      setOpen(true);
    };
  
    const handleClose = () => {
      setOpen(false);
    };
  
    function handleMenuItemClick(value: string) {
      setOpen(false);
      i18n.changeLanguage(value);
      
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
          {Langs[i18n.language] && (
            <img
              src={Langs[i18n.language].icon}
              alt={Langs[i18n.language].label}
              width={28}
              height={20}
            />
          )}
        </IconButton>
  
        <MenuPopover
          sx={{}}
          open={open}
          onClose={handleClose}
          anchorEl={anchorRef.current}>
          <Box sx={{ py: 1 }}>
            {Object.keys(Langs).map((key) => (
              <MenuItem
                key={key}
                selected={key === i18n.language}
                onClick={() => handleMenuItemClick(key)}
                sx={{ py: 1, px: 2.5 }}>
                <ListItemIcon>
                  <Box
                    component="img"
                    alt={Langs[key].label}
                    src={Langs[key].icon}
                    sx={{ width: 28, height: 20 }}
                  />
                </ListItemIcon>
                <ListItemText primaryTypographyProps={{ variant: 'body2' }}>
                  {Langs[key].label}
                </ListItemText>
              </MenuItem>
            ))}
          </Box>
        </MenuPopover>
      </>
    );
  }
  