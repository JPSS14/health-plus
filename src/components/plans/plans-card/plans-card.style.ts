import { Theme, SxProps } from '@mui/material';

export const PlansCardContainerStyle: SxProps<Theme> = (theme) => {
  const { hplus, common } = theme.palette;
  return {
    position: 'relative',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    width: '350px',
    height: '638px',
    boxShadow: 'rgba(0, 0, 0, 0.19) 0px 10px 20px, rgba(0, 0, 0, 0.23) 0px 6px 6px',
    borderRadius: '12px',
    padding: theme.spacing(1),
    color: common.white,
    margin: `${theme.spacing(1)} ${theme.spacing(2)}`,

    '& ul':{
      listStyle: 'none',
      height: '240px',
      padding: 0,
      marginTop: theme.spacing(3),

      '& li':{
        display: 'flex'
      },

      '& li:not(:last-child)':{
        marginBottom: theme.spacing(1)
      },

      '& svg':{
        color: hplus.textPrimary,
        fontSize: '1rem',
        margin: '2px 2px 0 0'
      }
    },

    '& header':{
      padding: theme.spacing(1),

      '& h3':{
        fontSize: '1.5rem',
      }
    }
  }
};

export const PlansCardFooterStyle:SxProps<Theme> = (theme) => {
  const {hplus} = theme.palette;
  return {
    position: 'absolute',
    bottom: 0,
    padding: theme.spacing(3),
    display: 'flex',
    flexDirection: 'column',

    '& .footer__price':{
      fontSize: '1.7rem',
      color: hplus.textPrimary,
      padding: theme.spacing(1),
      fontWeight: '600'
    }
  };
};