import { Theme, SxProps } from '@mui/material';

export const ContentContainerStyle: SxProps<Theme> = () => {
  return {
    width: '100%',
  };
};

export const ContentHeaderStyle: SxProps<Theme> = (theme) => {
  const {hplus} = theme.palette;
  return {
    display: 'flex',
    padding: `${theme.spacing(2)}`,
    height: 'calc(95vh - 72px)',
    '& .header__title':{
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      width: '50%',
      color: hplus.primaryColor,

      '& h1':{
        fontSize: '2rem',
        fontWeight: '600',
        marginBottom: theme.spacing(2),
        lineHeight: 1.2,
      },
      '& p:not(:last-child)':{
        marginBottom: theme.spacing(1),
      },
    },

    '& .header__image':{
      width: '50%',
      display: 'flex',
      justifyContent: 'center',
    },
    '@media(max-width: 800px)':{
      flexWrap: 'wrap',

      '& .header__title':{
        width: '100%',
      },
      '& .header__image':{
        width: '100%',
      }
    },
  };
};

export const ContentImageContainer: SxProps<Theme> = () => {
  return {
    width: '100%',
    display: 'flex',
    justifyContent: 'center',

    '& img':{
      width: '100%',
    },

    '@media(max-width: 800px)':{
      width: '50%',
    },
  };
};