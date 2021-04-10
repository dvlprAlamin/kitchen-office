import { makeStyles, Typography } from '@material-ui/core';
import React from 'react';
import img from '../img/banner.jpg'

const useStyle = makeStyles(theme => ({
    banner: {
        background: `url(${img}),
        linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.6))`,
        backgroundBlendMode: 'overlay',
        height: 'calc(100vh - 57px)',
        width: '100%',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        color: '#fff'
    }
}))
const Banner = () => {
    const { banner } = useStyle();
    return (
        <div className={banner}>
            <Typography variant="h2" style={{ padding: '0 30px' }} >Best food waiting for your belly</Typography>
        </div>
    );
};

export default Banner;