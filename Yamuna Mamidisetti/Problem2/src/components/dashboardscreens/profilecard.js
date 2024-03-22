import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Box, CardActionArea } from '@mui/material';
import PersistentDrawerLeft from './sidebar';

export default function ProfileCard() {
    const [getUseremail, setGetUserEmail] = React.useState('')
    //By using localstorage get the stored values
    React.useEffect(() => {
        var getUserEmail = localStorage.getItem('userEmail');
        setGetUserEmail(getUserEmail)
       
    }, [])
  return (
    <Box sx={{height:'100vh',width:'100vw',display:'flex',justifyContent:'center',alignItems:'center',backgroundColor: 'white'}}>
        
    <Card sx={{ maxWidth: 345 ,height:'50%',width:'50%' }}>
      <CardActionArea>
        <img
        src={'https://images.pexels.com/photos/1310474/pexels-photo-1310474.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'}
        alt={'profile image'}
        loading="lazy"
        style={{height:'50%',width:'100%'}}
      />
        <CardContent>
          <Typography gutterBottom variant="h8" component="div">
            Profile Details
          </Typography>
          <Typography variant="body2" color="text.secondary">
          Email : {getUseremail}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
    </Box>
  );
}
