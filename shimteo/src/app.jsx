// src/App.jsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import SignIn from 'src/components/SignIn';
import SignUp from 'src/components/SignUp';
import OtherFeature from './components/OtherFeature';

function App() {
  const isLoggedIn = false; // 나중엔 이걸 로그인 상태로 바꿔줄 수 있어!

  return (
    <Router>
      <Routes>
        {/* 기본 "/" 접근 시 로그인 상태에 따라 분기 */}
        <Route path="/" element={isLoggedIn ? <OtherFeature /> : <Navigate to="/signin" />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/feature" element={<OtherFeature />} />
        {/* 그 외 경로는 Not Found 처리도 가능 */}
        <Route path="*" element={<div>404 - 페이지를 찾을 수 없습니다.</div>} />
      </Routes>
    </Router>
  );
}

export default App;
