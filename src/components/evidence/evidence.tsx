import { evidences } from '@/src/constants/evidences';
import { Box, Typography } from '@mui/material';
import { EvidenceCard } from './evidence-card';
import { EvidenceContainerStyle, EvidencesCardsContainer } from './evidence.style';

export const Evidence = () => {
  return (
    <Box component='section' sx={EvidenceContainerStyle}>
      <Box component='header'>
        <Typography component='h2'>Depoimentos</Typography>
      </Box>
      <Box sx={EvidencesCardsContainer}>
        {evidences.map((item, key) => (
          <EvidenceCard props={item} key={key} />
        ))}
      </Box>
    </Box>
  );
};