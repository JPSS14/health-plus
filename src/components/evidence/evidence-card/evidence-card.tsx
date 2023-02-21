import { Box } from '@mui/material';
import Typography from '@mui/material/Typography';
import { EvidenceType } from '../types';
import { EvidenceCardContainer, EvidenceCardImgContainer, EvidenceContetnStyle } from './evidence-card.style';

interface EvidenceCardProps {
  props: EvidenceType;
};

export const EvidenceCard = ({ props }: EvidenceCardProps) => {
  const { description, image, plan, name } = props;
  return (
    <Box sx={EvidenceCardContainer}>
      <Box sx={EvidenceCardImgContainer}>
        <img src={image} alt={name} title={name} />
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