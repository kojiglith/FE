import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import { styled } from '@mui/material/styles';
import Link from '@mui/material/Link';
import { Link as RouterLink } from 'react-router-dom';


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

export default function SignIn() {
  const [emailError, setEmailError] = useState(false);
  const [emailErrorMessage, setEmailErrorMessage] = useState('');
  const [passwordError, setPasswordError] = useState(false);
  const [passwordErrorMessage, setPasswordErrorMessage] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();

    const email = document.getElementById('email');
    const password = document.getElementById('password');

    let isValid = true;

    if (!email.value || !/\S+@\S+\.\S+/.test(email.value)) {
      setEmailError(true);
      setEmailErrorMessage('올바른 이메일 주소를 입력해주세요.');
      isValid = false;
    } else {
      setEmailError(false);
      setEmailErrorMessage('');
    }

    if (!password.value || password.value.length < 6) {
      setPasswordError(true);
      setPasswordErrorMessage('비밀번호는 최소 6자 이상이어야 합니다.');
      isValid = false;
    } else {
      setPasswordError(false);
      setPasswordErrorMessage('');
    }

    if (isValid) {
      console.log({
        email: email.value,
        password: password.value,
      });
    }
  };

  return (
    <Container>
      <CssBaseline />
      <Typography variant="h5" sx={{ marginBottom: 2, fontWeight: 'bold' }}>
        시작하는 사람들의 커리어 커뮤니티
      </Typography>
      <FormCard component="form" onSubmit={handleSubmit}>
        <FormControl margin="normal" fullWidth>
          <FormLabel htmlFor="email">Email</FormLabel>
          <TextField
            id="email"
            name="email"
            type="email"
            placeholder="your@email.com"
            variant="outlined"
            fullWidth
            error={emailError}
            helperText={emailErrorMessage}
          />
        </FormControl>
        <FormControl margin="normal" fullWidth>
          <FormLabel htmlFor="password">Password</FormLabel>
          <TextField
            id="password"
            name="password"
            type="password"
            placeholder="비밀번호"
            variant="outlined"
            fullWidth
            error={passwordError}
            helperText={passwordErrorMessage}
          />
        </FormControl>
        <Button
          type="submit"
          variant="contained"
          color="primary"
          fullWidth
          sx={{ marginTop: 2 }}
        >
          로그인
        </Button>

        <Typography
          variant="body2"
          sx={{
            textAlign: 'center',
            marginTop: 2,
          }}
        >
          <Link component={RouterLink} to="/signup" underline="hover">
            회원가입
          </Link>{' '}
          |{' '}
          <Link component={RouterLink} to="/forgot-password" underline="hover">
            비밀번호 찾기
          </Link>
        </Typography>
      </FormCard>
    </Container>
  );
}
