import { Box, Typography, Button } from '@mui/material';
import StarOutlineIcon from '@mui/icons-material/StarOutline';
import { Card } from '../../card';
import { PlanType } from '../types';
import { PlansCardContainerStyle, PlansCardFooterStyle } from './plans-card.style';

interface PlansCardProps {
  plans: PlanType;
};

export const PlansCard = ({ plans }: PlansCardProps) => {
  const { planName, planBenefits, planPrice } = plans;
  return (
    <Box component='article' sx={PlansCardContainerStyle}>
      <Box component='header'>
        <Typography component='h3'>{planName}</Typography>
      </Box>
      <Card userPlan={planName} />
      <Box component='ul'>
        {planBenefits.map((item, key) => (
          <Box component='li' key={key}>
            <StarOutlineIcon />
            <Typography component='p'>{item}</Typography>
          </Box>
        ))}
      </Box>
      <Box sx={PlansCardFooterStyle}>
        <Box component='span' className="footer__price">{planPrice}</Box>
        <Button color='primary'>Assinar</Button>
      </Box>
    </Box>
  );
};