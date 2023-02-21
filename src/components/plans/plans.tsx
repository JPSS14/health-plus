import { hplusPlans } from '@/src/constants/plans';
import { Box, Typography } from '@mui/material';
import { PlansCard } from './plans-card';
import { CardPlansContainer, PlansContainerStyle } from './plans.style';

export const Plans = () => {
  return (
    <Box component='section' sx={PlansContainerStyle}>
      <Box component='header' className='plans__header'>
        <Typography component='h2'>Nossos planos</Typography>
        <Typography component='p'>Confira nossos planos e escolha o que é mais adequado ao seu perfil:</Typography>
      </Box>
      <Box sx={CardPlansContainer}>
        {hplusPlans.map((item, key) => (
          <PlansCard plans={item} key={key}/>
        ))}
      </Box>
    </Box>
  );
};