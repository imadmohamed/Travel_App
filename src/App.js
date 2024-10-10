import {colors, Container, styled}  from "@mui/material";
import  Button  from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import SendIcon from '@mui/icons-material/Send';
import Reply from '@mui/icons-material/Reply';

const StyledButton = styled(Button)(({theme}) =>({
  backgroundColor:"gray",
  color:theme.palette.primary.main,
  "&:hover":{
    backgroundColor:theme.palette.primary.main,
    color:"gray",

  }
}))

function App() {
  return (
    <Container>
    
<StyledButton variant="contained">My Button</StyledButton>
<br/><br/>
<Button variant="contained">Defolt Button</Button>

  </Container>
    
  );
}

export default App;
