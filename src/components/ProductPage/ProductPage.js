import React from 'react'
import { useParams } from 'react-router-dom'
import { products } from '../TravelData/Traveldata';
import CardBox from '../Card/CardBox';
import { Button } from '@mui/material';

const ProductPage = (props) => {



    const { proId } = useParams();

    const getProducts = products.find(product => product.id === proId);

    console.log(getProducts);

    return (
        <div>
            <h1> Here is your products </h1>

            <div>
                <CardBox item={getProducts}
                    btn={<Button variant="outlined">
                        Buy
                    </Button>}
                />
            </div>

        </div>
    )
}

export default ProductPage
