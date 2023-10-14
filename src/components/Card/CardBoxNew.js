import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { contextAPI } from '../../App';

export default function CardBoxNew(props) {

    const [value, setValue] = React.useContext(contextAPI);


    const { id, title, subheader, btnName, image, typography, seeDetails } = props.item;

    const handleExpandClick = (id) => {
        const cartValue = [...value, props.item]
        setValue(cartValue);
    }

    return (
        <Card sx={{ maxWidth: 345 }}>
            <CardMedia
                sx={{ height: 140 }}
                image={image}
                title="green iguana"
            />
            <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                    {title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    {typography}
                </Typography>
            </CardContent>
            <CardActions>
                <Button onClick={() => { handleExpandClick(id) }} size="small">Buy</Button>
                <Button size="small">Learn More</Button>
            </CardActions>
        </Card>
    );
}
