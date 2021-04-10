import { Button, Container, Grid, Paper, Typography } from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';
import RemoveIcon from '@material-ui/icons/Remove';
import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Dialog from '@material-ui/core/Dialog';
import MuiDialogActions from '@material-ui/core/DialogActions';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart, removeFromCart } from '../redux/actions/cartAction';
import { Delete } from '@material-ui/icons';

const DialogActions = withStyles((theme) => ({
    root: {
        margin: 0,
        padding: theme.spacing(1),
    },
}))(MuiDialogActions);

export default function CustomizedDialogs({ open, handleClose }) {
    const dispatch = useDispatch();
    const cartItems = useSelector(state => state.cart.cartItems)
    const totalQuantity = cartItems.reduce((qty, item) => qty + item.quantity, 0)
    const getTotal = () => {
        return cartItems.reduce((price, item) => price + (item.quantity * +item.price), 0)
    }
    const subtotal = getTotal().toFixed(2)
    const tax = (getTotal() * .1).toFixed(2)
    const total = ((+subtotal) + (+tax) + 2).toFixed(2)

    const quantityHandler = (id, quantity) => {
        dispatch(addToCart(id, quantity))
    }

    const removeFromCartHandler = (id) => {
        dispatch(removeFromCart(id));
    };
    return (
        <div >
            <Dialog
                onClose={handleClose}
                aria-labelledby="Cart Items" open={open}>
                {
                    cartItems.map(item =>
                        <Container key={item.id}>
                            <Paper elevation={2} style={{ padding: 10, marginTop: 25 }}>
                                <Grid container spacing={2}>
                                    <Grid item xs={3}>
                                        <img width='100%' src={item.img} alt="" />
                                    </Grid>
                                    <Grid item xs={3}>
                                        <Typography variant="body1">{item.name}</Typography>
                                        <Typography variant="h6" color="secondary">{item.price * item.quantity}</Typography>
                                        <Typography variant="caption" color="textSecondary">Delivery free</Typography>
                                    </Grid>
                                    <Grid item xs={4} style={{ fontSize: 18, margin: 'auto' }}>
                                        <Button onClick={() => quantityHandler(item.id, item.quantity > 1 ? item.quantity - 1 : 1)} >
                                            <RemoveIcon />
                                        </Button>
                                        <span>{item.quantity}</span>
                                        <Button onClick={() => quantityHandler(item.id, item.quantity + 1)}>
                                            <AddIcon color="secondary" />
                                        </Button>
                                    </Grid>
                                    <Grid item xs={2} style={{ margin: 'auto' }}>
                                        <Button onClick={() => removeFromCartHandler(item.id)}>
                                            <Delete color="secondary" />
                                        </Button>
                                    </Grid>
                                </Grid>
                            </Paper>
                        </Container>)}
                {cartItems.length > 0 &&
                    <table cellPadding="5" cellSpacing="5">
                        <tbody align="left">
                            <tr>
                                <th>SubTotal: {totalQuantity} item</th>
                                <td>${subtotal}</td>
                            </tr>
                            <tr>
                                <th>Tax</th>
                                <td>${tax}</td>
                            </tr>
                            <tr>
                                <th>Delivery fee</th>
                                <td>$2.00</td>
                            </tr>
                            <tr>
                                <th>Total</th>
                                <td>${total}</td>
                            </tr>
                        </tbody>
                    </table>}


                {
                    cartItems.length === 0 &&
                    <div style={{ minHeight: '50vh', margin: 30 }}>
                        <Typography variant="h4">Your cart is empty</Typography>
                    </div>
                }
                <DialogActions>

                    <Button style={{ margin: 'auto' }} onClick={handleClose} color="primary" variant="contained">Close</Button>

                </DialogActions>
            </Dialog>
        </div>
    );
}
