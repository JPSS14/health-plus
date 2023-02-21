import { Theme, SxProps } from '@mui/material';

export const EvidenceContainerStyle: SxProps<Theme> = (theme) => {
  const { hplus } = theme.palette;
  return {
    padding: theme.spacing(2),

    '& header': {
      '& h2': {
        fontSize: '1.5rem',
        fontWeight: '600',
        color: hplus.primaryColor,
        textAlign: 'center',
      }
    }
  };
};

export const EvidencesCardsContainer: SxProps<Theme> = () => {
  return {
    display: 'flex',
    justifyContent: 'center',
    flexWrap: 'wrap'
  };
};