import { PopoverProps } from '@mui/material';
import { ArrowStyle } from './Popover.style';
import Popover from '@mui/material/Popover';
import { ReactFragment } from 'react';


export function MenuPopover({ children, sx, ...other }: PopoverProps) {
  return (
    <Popover 
    anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
    transformOrigin={{ vertical: 'top', horizontal: 'right' }}
    PaperProps={{
      sx: {
        mt: 1.5,
        ml: 0.5,
        overflow: 'inherit',
        // boxShadow: (theme) => theme.customShadows.z1,
        boxShadow: 'none',
        border: (theme) => `solid 1px ${theme.palette.grey}`,
        width: 200,
        ...sx,
      },
    }}
    {...other}>
      <ArrowStyle className="arrow" />
       {children}
    </Popover>
  );
}
