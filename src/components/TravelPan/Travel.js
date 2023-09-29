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
import CardBox from '../Card/CardBox';
import { products, traveldata } from '../TravelData/Traveldata';

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

export default function Travel() {


    return (
        <div>
            <p> Plan your next trip? </p>
            <h1> Next Destination </h1>
            <div style={{ display: 'flex', padding: '60px', marginLeft: '30px' }} >
                {
                    traveldata.map((item) => {
                        return <CardBox
                            item={item}
                            btn='Visit'
                        />
                    })

                }
            </div>
            <p> Are you missing something? </p>
            <h1> Here you look, take some necessary items </h1>
            <div style={{ display: 'flex', padding: '60px', marginLeft: '30px' }} >

                {
                    products.map((item) => {
                        return <CardBox
                            key={item.id}
                            item={item}
                            btn='Buy Now'
                        />
                    })

                }
            </div>
        </div>
    );
}
