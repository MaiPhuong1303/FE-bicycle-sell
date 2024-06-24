import classNames from 'classnames/bind';
import styles from './Loader.module.scss';
import {Grid, Skeleton} from '@mui/material';
import Box from '@mui/system/Box';
import PropTypes from 'prop-types';

const cx = classNames.bind(styles);

interface LoaderProps {
    length?: number;
}

Loader.propTypes = {
    length: PropTypes.number,
};

Loader.defaultProps = {
    length: 6,
};

// class loader làm skeletons
function Loader({length = 6}: LoaderProps) {
    return (
        <Box>
            <Grid container>
                {Array.from(new Array(length)).map((_, index) => (
                    // nếu đt thì 11 item,... lap màn lớn thì 4item
                    <Grid item key={index} xs={12} sm={6} md={4} lg={3}>
                        <Box padding={1}>
                            <Skeleton variant="rectangular" width="100%" height={118}/>
                            <Skeleton/>
                            <Skeleton width="60%"/>
                        </Box>
                    </Grid>
                ))}
            </Grid>
        </Box>
    );
}

export default Loader;
