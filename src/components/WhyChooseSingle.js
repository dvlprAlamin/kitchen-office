import { Button, Grid, Typography } from '@material-ui/core';
import React from 'react';
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';
const WhyChooseSingle = ({ img, titleText, Icon }) => {
    return (
        <Grid item lg={4} md={4} sm={12} xs={12}>
            <img style={{ width: '100%', borderRadius: 20 }} src={img} alt="" />
            <div style={{ display: 'flex', padding: 5 }}>
                <Icon style={{ background: '#ff0000', color: '#fff', padding: 7, borderRadius: '50%', marginRight: 10, fontSize: 40 }} />
                <div>
                    <Typography variant="h5"> {titleText}</Typography>
                    <Typography variant="body1">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi, natus. At deleniti voluptatem unde neque quos qui quo, cumque provident....
                    </Typography>
                    <Button color="primary" style={{ padding: 10, marginLeft: -10 }}>See more <ArrowForwardIcon style={{ background: 'green', color: '#fff', padding: 3, borderRadius: '50%', marginLeft: 10, fontSize: 20 }} /></Button>
                </div>
            </div>

        </Grid>
    );
};

export default WhyChooseSingle;