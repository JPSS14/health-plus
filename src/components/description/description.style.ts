import {Theme, SxProps} from '@mui/material';

export const DescriptionContainerStyle: SxProps<Theme> = (theme) => {
  const {hplus, common} = theme.palette;
  return {
    background: hplus.textPrimary,
    padding: theme.spacing(2),

    '& h2':{
      fontSize: '1.5rem',
      fontWeight: '600',
      color: theme.palette.common.white,
    },
    '& p':{
      color: common.white,
      textAlign: 'justify',
    }
  };
};