import { useState } from 'react';
import { Box, Button, MenuItem, Select, TextField, Typography } from "@mui/material";
import { Card } from "../card";
import { RegisterCardContainerStyle, RegisterContainerStyle, RegisterContentStyle, RegisterFormContainerStyle } from "./register.style";


export const Register = () => {
  const [userName, setUserName] = useState('');
  const [userPlan, setUserPlan] = useState<'Essencial' | 'Absoluto'>('Essencial');
  console.log(userPlan);
  const handleActivePlan = (e: string) => {
    if(e === 'Essencial' || e === 'Absoluto'){
      setUserPlan(e);
    }
  };

  return (
    <Box component='section' sx={RegisterContainerStyle}>
      <Box component='header'>
        <Typography component='h2'>Assinar Health+</Typography>
        <Typography component='p'>Atenção! Assinando hoje o primeiro mês é de graça, lembrando que não possuimos plano de fidelidade, se não gostar é só cancelar.</Typography>
      </Box>
      <Box sx={RegisterContentStyle}>
        <Box sx={RegisterFormContainerStyle}>
          <form>
            <TextField size='small' sx={{ marginBottom: '8px' }} label='Nome' onChange={(e) => setUserName(e.currentTarget.value)}/>
            <TextField size='small' sx={{ marginBottom: '8px' }} label='Email' type='email' />
            <Select size='small' sx={{ marginBottom: '8px' }} defaultValue='Essencial' onChange={(e) => handleActivePlan(e.target.value)}>
              <MenuItem value='Absoluto'>Absoluto</MenuItem>
              <MenuItem value='Essencial'>Essencial</MenuItem>
            </Select>
            <Button>Assinar</Button>
          </form>
        </Box>
        <Box sx={RegisterCardContainerStyle}>
          <Card userName={userName} userPlan={userPlan}/>
        </Box>
      </Box>
    </Box>
  );
};