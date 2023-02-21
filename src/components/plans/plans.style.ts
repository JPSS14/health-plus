import {Theme, SxProps} from '@mui/material';

export const PlansContainerStyle: SxProps<Theme> = (theme) => {
  const {hplus} = theme.palette;
  return {
    background: hplus.secondaryColor,
    padding: theme.spacing(2),

    '& .plans__header':{
      color: hplus.textPrimary,

      '& h2':{
        fontSize: '1.5rem',
        fontWeight: '600'
      }
    }
  };
};

export const CardPlansContainer:SxProps<Theme> = (theme) => {
  return {
    display: 'flex',
    justifyContent: 'center',
    flexWrap: 'wrap',
    padding: `${theme.spacing(4)} 0`
  };
};