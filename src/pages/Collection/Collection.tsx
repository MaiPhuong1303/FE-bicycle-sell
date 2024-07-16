// // // import React, {useEffect} from 'react';
// // // import {useSelector} from 'react-redux';
// // // import Loader from '../../components/layouts/components/Loader';
// // // import ProductList from '../../components/layouts/components/ProductItemCard/producList';
// // // import Box from "@mui/system/Box";
// // // import {useParams} from "react-router-dom";
// // //
// // //
// // // function Collection() {
// // //     const {categoryName} = useParams<{ categoryName: string }>();
// // //
// // //     return (
// // //         <Box pt={4}>
// // //             <div>
// // //                 <ProductList/>
// // //                 <p>Category Name: {categoryName}</p>
// // //             </div>
// // //         </Box>
// // //     );
// // // }
// // //
// // // export default Collection;
// // //
// // import React from 'react';
// // import Box from '@mui/system/Box';
// // import {Typography} from '@mui/material';
// // import ProductList from '../../components/layouts/components/ProductItemCard/producList';
// // import {useLocation} from 'react-router-dom';
// //
// // const Collection: React.FC = () => {
// //     const location = useLocation();
// //
// //     return (
// //         <Box pt={4}>
// //             <div>
// //                 <ProductList/>
// //             </div>
// //         </Box>
// //     );
// // }
// //
// // export default Collection;
// import React from 'react';
// import Box from '@mui/system/Box';
// import ProductList from '../../components/layouts/components/ProductItemCard/producList';
// import {useLocation} from 'react-router-dom';
//
// const Collection: React.FC = () => {
//     const location = useLocation();
//     const categoryName = location.pathname.split('/').pop(); // Lấy categoryName từ URL
//
//     return (
//         <Box pt={4}>
//             <div>
//                 <ProductList categoryName={categoryName}/> {/* Truyền categoryName vào ProductList */}
//             </div>
//         </Box>
//     );
// }
//
// export default Collection;
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
