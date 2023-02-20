import { Box } from '@mui/material';
import { CardContainerStyle, CardFooterStyle, CardHeaderStyle } from './card.style';

interface CardProps {
  userName?: string;
  userPlan?: 'Essencial' | 'Absoluto'
};

export const Card = ({userName, userPlan}: CardProps) => {
  return (
    <Box sx={CardContainerStyle(userPlan)}>
      <Box sx={CardHeaderStyle(userPlan)}>
        <Box className="card__logo">Health+</Box>
        <Box className="card__plan">{userPlan ? userPlan : 'Essencial'}</Box>
      </Box>
      <Box sx={CardFooterStyle(userPlan)}>
        <Box className="card__number">1234 5678 9012 3456</Box>
        <Box className="card__name">{userName ? userName : 'Gabriel Barbosa'}</Box>
      </Box>
    </Box>
  );
};