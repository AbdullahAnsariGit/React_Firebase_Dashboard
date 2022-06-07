import Button from '@mui/material/Button';

import React from 'react'

export default function ABButton(props) {
    const {label, onClick} = props;
  return (
    <Button onClick={onClick} variant="contained">{label}</Button>
  )
}
