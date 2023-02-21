import {Theme, SxProps} from '@mui/material';

export const HeaderContainerStyle: SxProps<Theme> = (theme) => {
  const {hplus} = theme.palette;
  return {
    background: hplus.primaryColor,
    color: hplus.textPrimary,
    padding: `${theme.spacing(0.5)} ${theme.spacing(2)}`,

    '& .logo':{
      fontSize: '2rem',
      fontWeight: 700,
    }
  };
};