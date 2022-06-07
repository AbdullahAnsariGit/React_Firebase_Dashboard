import { Box } from '@mui/system'
import ABInput from '../config/components/input'
import ABButton from '../config/components/button';
import { useNavigate } from 'react-router-dom';

function Login() {
  const navigate = useNavigate();
  const loginUser = () => {
     console.log("user login")
     navigate("/", {state:{user:true}});
  }
  
  return (
    <Box>
        <box sx={{padding:1}}>
            <ABInput label="Email" type="email"/>
        </box>
        <box sx={{padding:1}}>
            <ABInput label="Password" type="password"/>
        </box>
        <box sx={{padding:1}}>
        <ABButton onClick={loginUser} label='Login' />
        </box>
    </Box>
  )
}

export default Login