// src/components/Signup.jsx
import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import { styled } from '@mui/material/styles';

const Container = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  height: '100vh',
  backgroundColor: '#fff',
  width: '100vw',
}));

const FormCard = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  width: '100%',
  maxWidth: '400px',
  padding: theme.spacing(4),
  boxShadow: '0px 5px 15px rgba(0, 0, 0, 0.1)',
  borderRadius: '8px',
  backgroundColor: '#fff',
}));

export default function SignUp() {
    console.log(" SignUp 컴포넌트가 렌더링됨!")
  return (
    <Container>
      <CssBaseline />
      <Typography variant="h5" sx={{ marginBottom: 2, fontWeight: 'bold' }}>
        시작하는 사람들의 커리어 커뮤니티
      </Typography>
      <FormCard>
        <FormControl margin="normal" fullWidth>
          <FormLabel>Full name</FormLabel>
          <TextField id="name" placeholder="이름을 입력하세요" variant="outlined" fullWidth />
        </FormControl>
        <FormControl margin="normal" fullWidth>
          <FormLabel>Email</FormLabel>
          <TextField id="email" placeholder="your@email.com" variant="outlined" fullWidth />
        </FormControl>
        <FormControl margin="normal" fullWidth>
          <FormLabel>Password</FormLabel>
          <TextField id="password" type="password" placeholder="비밀번호" variant="outlined" fullWidth />
        </FormControl>
        <Button variant="contained" color="primary" fullWidth sx={{ marginTop: 2 }}>
          회원가입
        </Button>
      </FormCard>
    </Container>
  );
}
