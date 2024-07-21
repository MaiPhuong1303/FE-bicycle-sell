import React, {useEffect} from 'react';
import {useSelector} from 'react-redux';
import Loader from '../../components/layouts/components/Loader';
import ProductList from '../../components/layouts/components/ProductItemCard/producList';
import Box from "@mui/system/Box";


function Collection() {

    return (
        <Box pt={4}>
            <div>
                <ProductList/>
            </div>
        </Box>
    );
}

export default Collection;
