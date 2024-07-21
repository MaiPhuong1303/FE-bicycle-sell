import React from 'react';
import Box from '@mui/system/Box';
import ProductList from '../../components/layouts/components/ProductItemCard/producList';
import {useLocation} from 'react-router-dom';

const Collection: React.FC = () => {
    const location = useLocation();
    const categoryName = location.pathname.split('/').pop(); // Extract categoryName from URL

    return (
        <Box pt={4}>
            <div>
                <ProductList categoryName={categoryName}/> {/* Pass categoryName to ProductList */}
            </div>
        </Box>
    );
}

export default Collection;