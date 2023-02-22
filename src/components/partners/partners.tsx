import { partners } from "@/src/constants/partners";
import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import { PartnersContainerStyle, PartnersListContainer } from "./partners.style";

export const Partners = () => {
  return (
    <Box component='section' sx={PartnersContainerStyle}>
      <Box component='header'>
        <Typography component='h2'>Rede credenciada</Typography>
      </Box>
      <Box sx={PartnersListContainer}>
        {partners.map((item, key) => (
          <img src={item} key={key} />
        ))}
      </Box>
    </Box>
  );
}; 