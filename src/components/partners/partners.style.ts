import { Theme, SxProps } from '@mui/material';

export const PartnersContainerStyle: SxProps<Theme> = (theme) => {
  const { hplus } = theme.palette;
  return {
    padding: theme.spacing(2),

    '& header': {
      '& h2': {
        fontSize: '1.5rem',
        color: hplus.primaryColor,
        fontWeight: '600',
        textAlign: 'center'
      }
    }
  };
};

export const PartnersListContainer: SxProps<Theme> = () => {
  return {
    display: 'flex',
    justifyContent: 'center',
    flexWrap: 'wrap',
    '& img':{
      width: '200px'
    }
  }
}