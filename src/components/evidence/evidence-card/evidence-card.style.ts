import { Theme, SxProps } from '@mui/material';

export const EvidenceCardContainer: SxProps<Theme> = (theme) => {
  const { hplus } = theme.palette;
  return {
    display: 'flex',
    position: 'relative',
    border: `3px solid ${hplus.lightColor}`,
    width: '500px',
    height: '220px',
    padding: theme.spacing(2),
    borderRadius: '12px',
    margin: theme.spacing(3.5),

    '@media(max-width: 630px)':{
      flexDirection: 'column',
      height: '320px',
    }
  };
};

export const EvidenceCardImgContainer: SxProps<Theme> = () => {
  return {
    position: 'absolute',
    left: -35,
    '& img': {
      width: '75%',
      borderRadius: '12px',
      boxShadow: 'rgba(14, 30, 37, 0.12) 0px 2px 4px 0px, rgba(14, 30, 37, 0.32) 0px 2px 16px 0px',
    }
  };
};

export const EvidenceContetnStyle = (plan: 'Absoluto' | 'Essencial'): SxProps<Theme> => (theme) => {
  const { hplus, common } = theme.palette;
  const activePlan = plan === 'Absoluto' ? hplus.primaryColor : hplus.textPrimary;
  return {
    marginLeft: theme.spacing(19),

    '& .content__name': {
      color: activePlan,

      '& p': {
        fontSize: '1.5rem'
      }
    },

    '& .content__plan': {
      color: activePlan,

      '& p': {
        fontSize: '1.3rem',
        fontWeight: '600',
      }
    },

    '& .content__description': {
      color: common.black,
    },
  };
};