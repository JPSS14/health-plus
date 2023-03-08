import { partners } from "@/src/constants/partners";
import { Typography } from "@mui/material";
import getConfig from "next/config";
import { Box } from "@mui/material";
import { PartnersContainerStyle, PartnersListContainer } from "./partners.style";

export const Partners = () => {
  const { publicRuntimeConfig } = getConfig();
  return (
    <Box component='section' sx={PartnersContainerStyle}>
      <Box component='header'>
        <Typography component='h2'>Rede credenciada</Typography>
      </Box>
      <Box sx={PartnersListContainer}>
        {partners.map((item, key) => (
          <img src={`${publicRuntimeConfig.baseUrl}/img/${item}`} key={key} />
        ))}
      </Box>
    </Box>
  );
}; 