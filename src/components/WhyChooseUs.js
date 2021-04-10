import { Container, Grid, Typography } from '@material-ui/core';
import React from 'react';
import fastDelivery from '../img/fast-delivery.png'
import homeDelivery from '../img/free-delivery.png'
import cooking from '../img/cooking.png'
import WhyChooseSingle from './WhyChooseSingle';
import DirectionsBusIcon from '@material-ui/icons/DirectionsBus';
import NotificationsIcon from '@material-ui/icons/Notifications';
import AirportShuttleIcon from '@material-ui/icons/AirportShuttle';
const WhyChooseUs = () => {
    return (
        <Container style={{ margin: '100px auto' }}>
            <Typography variant="h3">Why you choose us</Typography>
            <Typography variant="body1" style={{ maxWidth: 500, marginBottom: 25 }}>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cupiditate, commodi labore dolores similique voluptatem quo? </Typography>
            <Grid container spacing={3}>
                <WhyChooseSingle img={fastDelivery} titleText={'Fast delivery'} Icon={DirectionsBusIcon} />
                <WhyChooseSingle img={cooking} titleText={'A good auto responder'} Icon={NotificationsIcon} />
                <WhyChooseSingle img={homeDelivery} titleText={'Home delivery'} Icon={AirportShuttleIcon} />
            </Grid>
        </Container>
    );
};

export default WhyChooseUs;