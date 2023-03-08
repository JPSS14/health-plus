import { Box } from '@mui/material';
import getConfig from 'next/config';
import Typography from '@mui/material/Typography';
import { EvidenceType } from '../types';
import { EvidenceCardContainer, EvidenceCardImgContainer, EvidenceContetnStyle } from './evidence-card.style';

interface EvidenceCardProps {
  props: EvidenceType;
};

export const EvidenceCard = ({ props }: EvidenceCardProps) => {
  const { description, image, plan, name } = props;
  const { publicRuntimeConfig } = getConfig();
  return (
    <Box sx={EvidenceCardContainer}>
      <Box sx={EvidenceCardImgContainer}>
        <img src={`${publicRuntimeConfig.baseUrl}/img/${image}`} alt={name} title={name} />
      </Box>
      <Box sx={EvidenceContetnStyle(plan)}>
        <Box className='content__name'>
          <Typography component='p'>{name}</Typography>
        </Box>
        <Box className='content__plan'>
          <Typography component='p'>{plan}</Typography>
        </Box>
        <Box className='content__description'>
          <Typography component='p'>{description}</Typography>
        </Box>
      </Box>
    </Box>
  );
};