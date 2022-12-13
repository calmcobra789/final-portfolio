import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import CardMedia from '@mui/material/CardMedia';


export default function DisplayCard(props) {
  const item = props.item;
//   console.log(item);


  return (
    
    <div className = "DisplayCard">
    <Card sx={{ minWidth: 275 }} variant="outlined">
      <CardMedia
        component="img"
        height="194"
        image={item.image}
        alt={item.name}
      />  
      <CardContent>
      {/* <h1>{item.price}</h1> */}
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          {item.date}
          
          

        </Typography>
        <Typography variant="h5" component="div">
          {/* be{bull}nev{bull}o{bull}lent */}
          {item.name}

        </Typography>
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
          {item.organization}
        </Typography>
        <Typography variant="body2">
          {item.description}
          <br />
        </Typography>
      </CardContent>
      <CardActions>
        <a href= {item.link}> <Button size="small"> Learn More </Button></a>
      </CardActions>
    </Card>
    
    </div>
  );
}
