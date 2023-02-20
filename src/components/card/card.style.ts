import { Theme, SxProps } from '@mui/material';

export const CardContainerStyle = (plan?: 'Essencial' | 'Absoluto'): SxProps<Theme> => (theme) => {
  const { hplus } = theme.palette;
  const primaryPlanColor = plan === 'Absoluto' ? hplus.primaryColor : hplus.textPrimary;
  return {
    cursor: 'default',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    background: primaryPlanColor,
    width: '322px',
    height: '208px',
    borderRadius: '12px',
    boxShadow: 'rgba(0, 0, 0, 0.45) 0px 25px 20px -20px',
    padding: theme.spacing(2),
  }
};

export const CardHeaderStyle = (plan?: 'Essencial' | 'Absoluto'): SxProps<Theme> => (theme) => {
  const { hplus } = theme.palette;
  const secondaryPlanColor = plan === 'Absoluto' ? hplus.textPrimary : hplus.primaryColor;
  return {
    borderBottom: `solid 2px ${secondaryPlanColor}`,
    paddingBottom: theme.spacing(1),
    '& .card__logo': {
      color: secondaryPlanColor,
      fontSize: '1.5rem',
      fontWeight: 700,
      padding: 0,
    },

    '& .card__plan': {
      color: theme.palette.common.white,
    },
  }
};

export const CardFooterStyle = (plan?: 'Essencial' | 'Absoluto'): SxProps<Theme> => (theme) => {
  const { hplus } = theme.palette;
  const secondaryPlanColor = plan === 'Absoluto' ? hplus.textPrimary : hplus.primaryColor;
  return {
    '& .card__number': {
      color: theme.palette.common.white,
    },

    '& .card__name': {
      color: secondaryPlanColor,
    }
  }
};