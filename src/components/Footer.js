import { Button, Container, Grid, List, ListItem, makeStyles, TextField, Typography } from '@material-ui/core';
import React from 'react';
import logo from '../img/logo.png'
import { Link } from 'react-router-dom'
const useStyle = makeStyles(theme => ({
    root: {
        backgroundColor: '#333',
        paddingTop: 10,
    },
    linkItem: {
        color: '#fff',
        textDecoration: 'none',
        marginRight: 15,
        '&:hover': {
            textDecoration: 'underline'
        }
    }
}))
const Footer = () => {
    const { root, linkItem } = useStyle()
    return (
        <div className={root}>
            <Container>
                <Grid container>
                    <Grid item md={6}>
                        <img style={{ maxWidth: '100%' }} src={logo} alt="" />
                    </Grid>
                    <Grid item md={6}>
                        <div style={{ display: 'flex', justifyContent: 'space-around' }}>
                            <List>
                                <ListItem><Link className={linkItem} to="#">About Online food</Link> </ListItem>
                                <ListItem><Link className={linkItem} to="#">Read our blog</Link> </ListItem>
                                <ListItem><Link className={linkItem} to="#">Sign up to deliver</Link> </ListItem>
                                <ListItem><Link className={linkItem} to="#">Add your restaurant</Link> </ListItem>

                            </List>
                            <List>
                                <ListItem><Link className={linkItem} to="#">Get help</Link> </ListItem>
                                <ListItem><Link className={linkItem} to="#">Read FAQs</Link> </ListItem>
                                <ListItem><Link className={linkItem} to="#">View all cities</Link> </ListItem>
                                <ListItem><Link className={linkItem} to="#">Restaurants near me</Link> </ListItem>

                            </List>
                        </div>
                    </Grid>
                </Grid>
                <div style={{ display: 'flex', justifyContent: 'space-around', padding: '20px 0', borderTop: '1px solid gray' }}>
                    <Typography style={{ color: 'gray' }} variant="body1">Copyright &copy; all right reserved {new Date().getFullYear()} | developed by <a className={linkItem} href="https://dvlpralamin.netlify.app/" target="_blank" rel="noreferrer">Alamin Howlader</a></Typography>
                    <div>
                        <Link className={linkItem} to="#">Private Policy</Link>
                        <Link className={linkItem} to="#">Terms of Use</Link>
                        <Link className={linkItem} to="#">Pricing</Link>
                    </div>
                </div>
            </Container>
        </div>
    );
};

export default Footer;