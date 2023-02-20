import { Box } from "@mui/material";
import { HeaderContainerStyle } from "./header.style";

export const Header = () => {
  return (
    <Box component='header' sx={HeaderContainerStyle}>
      <Box component='span' className="logo">Health+</Box>
    </Box>
  );
};