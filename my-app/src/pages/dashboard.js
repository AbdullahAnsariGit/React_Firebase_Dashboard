import { Typography } from '@mui/material'
import { Box } from '@mui/system'
import { useEffect } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { useState } from 'react';
import MainLayout from './mainlayout';

export default function Dashboard() {
  const [user, setUser] = useState(false)
  const navigate = useNavigate();
  const location = useLocation();
  useEffect(() => {
if (location.state && location.state.user) {
  navigate("/");
}else{
  navigate("/login")
}
  },[]);
  return (
    <>
    <h1>Dashboard</h1>
    <MainLayout />
    </>
  )
}
