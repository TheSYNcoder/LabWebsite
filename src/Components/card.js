import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Avatar from '@material-ui/core/Avatar';


import Image from "react-bootstrap/Image";
import { Row , Col , Container }  from "reactstrap";




import 'tachyons';

const useStyles = makeStyles({
  root: {
    maxWidth: 200,
  },
  media: {
    height: 140,
    width : "100%",
  },
  
      
  
  
});

export default function ProfileCard() {
  const classes = useStyles();

  return (
    <div className={`${classes.root}`}   style={{marginLeft:"5em" , marginBottom:"5em"}}>
    <Card className={`${classes.root}`} raised="true" elevation={15} className="grow">
      <CardActionArea>
        <Container className="d-flex justify-content-center p-3">
            <Image src="https://via.placeholder.com/120" roundedCircle className="grow"/>
        </Container>
        <CardContent >
          <Typography gutterBottom variant="h5" component="h2" className="d-flex justify-content-center">
            Insert skills here 
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p" className="d-flex justify-content-center">
            Name wow so 
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
    </div>
  );
}