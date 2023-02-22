import { Theme, SxProps } from '@mui/material';

export const RegisterContainerStyle: SxProps<Theme> = (theme) => {
  const { hplus } = theme.palette;
  return {
    padding: theme.spacing(2),
    display: 'flex',
    flexWrap: 'wrap',
    flexDirection: 'column',
    
    '& header': {
      width: '100%',
      '& h2': {
        fontSize: '1.5rem',
        color: hplus.primaryColor,
        fontWeight: '600',
        paddingBottom: theme.spacing(4),
        textAlign: 'center',
      },
      '& p':{
        textAlign: 'center',
        paddingBottom: theme.spacing(2),
      }
    }
  };
};

export const RegisterContentStyle: SxProps<Theme> = (theme) => {
  return {
    display: 'flex',
    width: '100%',
    flexWrap: 'wrap',
    justifyContent: 'center'
  }
}

export const RegisterFormContainerStyle: SxProps<Theme> = (theme) => {
  return {
    display: 'flex',
    flexDirection: 'column',
    width: '100%',
    alignItems: 'center',
    marginBottom: theme.spacing(2),

    '& form':{
      display: 'flex',
      flexDirection: 'column',
      width: '250px',
    }
  };
};

export const RegisterCardContainerStyle: SxProps<Theme> = () => {
  return {
    width: '100%',
    display: 'flex',
    justifyContent: 'center'
  }
}