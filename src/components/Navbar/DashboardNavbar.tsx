import PropTypes from 'prop-types';
import styled from '@emotion/styled';
import { AppBar, Avatar, Badge, Box, IconButton, Toolbar, Tooltip ,Theme} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
// import { Bell as BellIcon } from '../icons/bell';
// import { UserCircle as UserCircleIcon } from '../icons/user-circle';
// import { Users as UsersIcon } from '../icons/users';
import NotificationsIcon from '@mui/icons-material/Notifications';
import { theme } from 'src/theme/theme';
import { LanguagePopover } from './LanguagePopover';
import { UserPopover } from '../Popover/UserPopover';




type Props = {
    onSidebarOpen:()=>void
}

const DashboardNavbarRoot = styled(AppBar)(({ theme:Theme }) => ({
    backgroundColor:theme.palette.background.paper,
    boxShadow: theme.shadows[3]
}));

export const DashboardNavbar = (props:Props) => {
  const { onSidebarOpen, ...other } = props;

  return (
    <>
      <DashboardNavbarRoot
        sx={{
          left: {
            lg: 280
          },
          width: {
            lg: 'calc(100% - 280px)'
          }
        }}
        {...other}>
        <Toolbar
          disableGutters
          sx={{
            minHeight: 64,
            left: 0,
            px: 2
          }}
        >
          <IconButton
            onClick={onSidebarOpen}
            sx={{
              display: {
                xs: 'inline-flex',
                lg: 'none'
              }
            }}
          >
            <MenuIcon fontSize="small" />
          </IconButton>
          {/* <Tooltip title="Search">
            <IconButton sx={{ ml: 1 }}>
              <SearchIcon fontSize="small" />
            </IconButton>
          </Tooltip> */}
          <Box sx={{ flexGrow: 1 }} />
          <Tooltip title="Contacts">
            <LanguagePopover/>
          </Tooltip>
          <Tooltip title="Notifications">
            <IconButton sx={{ ml: 1,mr:1 }}>
              <Badge
                badgeContent={4}
                color="primary"
                variant="dot"
              >
                <NotificationsIcon fontSize="small" />
              </Badge>
            </IconButton>
          </Tooltip>
          <UserPopover/>
        </Toolbar>
      </DashboardNavbarRoot>
    </>
  );
};
