import TextField from '@mui/material/TextField';

function ABInput(props){
    const{label,type} = props;
    return(
        <>
        <TextField id="outlined-basic"
         label={label}
          type={type}
           variant="outlined" />  
  
        </>
    );
}

export default ABInput;