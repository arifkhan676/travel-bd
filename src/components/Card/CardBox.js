import * as React from 'react';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { Button } from '@mui/material';
import { NavLink, useNavigate } from 'react-router-dom';
import { contextAPI } from '../../App';

const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
  marginLeft: 'auto',
  transition: theme.transitions.create('transform', {
    duration: theme.transitions.duration.shortest,
  }),
}));



export default function CardBox(props) {

  const [value, setValue] = React.useContext(contextAPI);
  //console.log(value);

  const { id, title, subheader, btnName, image, typography, seeDetails } = props.item;

  const navigate = useNavigate();

  const handleExpandClick = (id) => {

    navigate(`/VisitPage/${id}`)

  };

  const handleExpandBuy = (id) => {



    const cartValue = [...value, props.item]

    setValue(cartValue);

  }

  return (
    <Card sx={{ maxWidth: 345, marginLeft: '100px' }}>
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
            R
          </Avatar>
        }
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
        title={title}
        subheader={subheader}
      />
      <CardMedia
        component="img"
        height="194"
        image={image}
        alt="Paella dish"
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          {typography}
        </Typography>
        <NavLink to={`/ProductPage/${id}`} >
          <Typography variant="body2" color="text.secondary">
            {seeDetails}
          </Typography>
        </NavLink>

      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
          <FavoriteIcon />
        </IconButton>
        <IconButton aria-label="share">
          <ShareIcon />
        </IconButton>
        <ExpandMore
          aria-label="show more"
        >

          <div onClick={() => { props.cartClick ? handleExpandClick(id) : handleExpandBuy(id) }}>
            {props.btn}
          </div>


        </ExpandMore>
      </CardActions>

    </Card>
  );
}
