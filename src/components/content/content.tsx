import { Box, Typography } from '@mui/material';
import { FC } from 'react';
import getConfig from 'next/config';
import { ContentContainerStyle, ContentHeaderStyle, ContentImageContainer } from './content.style';

export const Content: FC<{ children?: React.ReactNode }> = ({ children }) => {
  const { publicRuntimeConfig } = getConfig();
  return (
    <Box component='article' sx={ContentContainerStyle}>
      <Box component='header' sx={ContentHeaderStyle}>
        <Box className="header__title">
          <Typography component='h1'>Com Health+ você tem até 35% de desconto em qualquer consulta médica, exames e mais!</Typography>
          <Typography component='p'>Health+ é a escolha perfeita para economizar e se manter saudável! Pois temos uma rede de farmácias credenciadas em todo Brasil!</Typography>
        </Box>
        <Box className="header__image">
          <Box sx={ContentImageContainer}>
            <img src={`${publicRuntimeConfig.baseUrl}/img/consulta-medica.svg`} alt="Consulta médica" title="Consulta médica" />
          </Box>
        </Box>
      </Box>
      {children}
    </Box>
  );
};