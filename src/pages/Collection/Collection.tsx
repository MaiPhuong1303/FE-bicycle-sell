import React from 'react';
import Box from '@mui/system/Box';
import ProductList from '../../components/layouts/components/ProductItemCard/producList';
import {useLocation} from 'react-router-dom';

const Collection: React.FC = () => {
    const location = useLocation();
    const categoryName = location.pathname.split('/').pop();

    return (
        <Box pt={4}>
            <div>
                <ProductList categoryName={categoryName}/>
            </div>
        </Box>
    )
}

export default Collection;
