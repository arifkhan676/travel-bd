import * as React from 'react';
import { styled } from '@mui/material/styles';

import IconButton from '@mui/material/IconButton';

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

    const [cartClick, setcartClick] = React.useState(true);

    return (
        <div>
            <p> Plan your next trip? </p>
            <h1> Next Destination </h1>
            <div style={{ display: 'flex', padding: '60px', marginLeft: '30px' }} >
                {
                    traveldata.map((item) => {
                        return <CardBox
                            item={item}
                            cartClick={cartClick}
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
                            cartClick={!cartClick}
                            btn='Click to Buy'
                        />
                    })

                }
            </div>
        </div>
    );
}
