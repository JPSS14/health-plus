import { Box, Typography } from '@mui/material';
import { DescriptionContainerStyle } from './description.style';

export const Description = () => {
  return (
    <Box component='section' sx={DescriptionContainerStyle}>
      <Box component='header'>
        <Typography component='h2'>O que é o Health+ ?</Typography>
      </Box>
      <Typography component='p'>O Health+ é uma assinatura de descontos na área de saúde, onde você poderá utilizar em qualquer consulta no Brasil, também é possível realizar exames médicos de qualquer especialidade com o mesmo desconto, além disso a rede de farmácias credenciadas é uma das melhores do Brasil, todas com desconto.</Typography>
    </Box>
  );
};