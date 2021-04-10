import { Button, Container, Grid, Paper, Typography } from '@material-ui/core';
// import React, { useState } from 'react';
// import { GetFood } from '../context/foodContext';
import Counter from './Counter';
import AddIcon from '@material-ui/icons/Add';
import RemoveIcon from '@material-ui/icons/Remove';
// const CheckOutDetails = () => {
//     // const [count, setCount] = useState(1);

// const { address, cart, foods, count, setCount } = GetFood();
// console.log(cart);
// const { name, img, price } = cart;
// // const [count, setCount] = useState(cart.quantity)
// const subTotal = (price * count);
// const tax = +(subTotal * .1).toFixed(2);
// const total = (subTotal + tax + 2).toFixed(2);
//     return (
// < >
//     <Typography variant="h5"> From: Cafe Jhotpot</Typography>
//     <Typography variant="h6"> Arriving in 20-30 minutes</Typography>
//     <Typography variant="body1"> {address.road}</Typography>
//     <Paper elevation={2} style={{ padding: 5, margin: '10px 0' }}>
//         <Grid container spacing={2}>
//             <Grid item xs={3}>
//                 <img width='100%' src={img} alt="" />
//             </Grid>
//             <Grid item xs={4}>
//                 <Typography variant="body1">{name}</Typography>
//                 <Typography variant="h6" color="secondary">{subTotal}</Typography>
//                 <Typography variant="caption" color="textSecondary">Delivery free</Typography>
//             </Grid>
//             <Grid item xs={5} style={{ fontSize: 18, margin: 'auto' }}>
//                 <Button onClick={() => setCount(pre => pre > 1 ? pre - 1 : 1)} >
//                     <RemoveIcon />
//                 </Button>
//                 <span>{count}</span>
//                 <Button onClick={() => setCount(pre => pre + 1)}>
//                     <AddIcon color="secondary" />
//                 </Button>
//             </Grid>
//         </Grid>
//     </Paper>
// <table cellPadding="5" cellSpacing="5">
//     <tbody align="left">
//         <tr>
//             <th>SubTotal: {count} item</th>
//             <td>${subTotal}</td>
//         </tr>
//         <tr>
//             <th>Tax</th>
//             <td>${tax}</td>
//         </tr>
//         <tr>
//             <th>Delivery fee</th>
//             <td>$2</td>
//         </tr>
//         <tr>
//             <th>Total</th>
//             <td>${total}</td>
//         </tr>
//     </tbody>
// </table>
//     <Button color="secondary" variant="contained">Place Order</Button>
// </>
//     );
// };

// export default CheckOutDetails;
import React, { useState } from 'react';
import { withStyles } from '@material-ui/core/styles';
// import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import MuiDialogTitle from '@material-ui/core/DialogTitle';
import MuiDialogContent from '@material-ui/core/DialogContent';
import MuiDialogActions from '@material-ui/core/DialogActions';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart, removeFromCart } from '../redux/actions/cartAction';
import { Delete } from '@material-ui/icons';
// import Typography from '@material-ui/core/Typography';

// const styles = (theme) => ({
//     root: {
//         margin: 0,
//         padding: theme.spacing(2),
//     },
//     closeButton: {
//         position: 'absolute',
//         right: theme.spacing(1),
//         top: theme.spacing(1),
//         color: theme.palette.grey[500],
//     },
// });

// const DialogTitle = withStyles(styles)((props) => {
//     const { children, classes, onClose, ...other } = props;
//     return (
//         <MuiDialogTitle disableTypography className={classes.root} {...other}>
//             <Typography variant="h6">{children}</Typography>
//             {onClose ? (
//                 <IconButton aria-label="close" className={classes.closeButton} onClick={onClose}>
//                     <CloseIcon />
//                 </IconButton>
//             ) : null}
//         </MuiDialogTitle>
//     );
// });

// const DialogContent = withStyles((theme) => ({
//     root: {
//         padding: theme.spacing(2),
//     },
// }))(MuiDialogContent);

const DialogActions = withStyles((theme) => ({
    root: {
        margin: 0,
        padding: theme.spacing(1),
    },
}))(MuiDialogActions);

export default function CustomizedDialogs({ open, handleClose }) {
    // const [open, setOpen] = useState(false);

    // const handleClickOpen = () => {
    //     setOpen(true);
    // };
    // const handleClose = () => {
    //     setOpen(false);
    // };


    // const { address, cart, foods, count, setCount } = GetFood();
    // console.log(cart);
    // const { name, img, price } = cart;
    // const [count, setCount] = useState(cart.quantity)
    // const subTotal = (price * count);
    // const tax = +(subTotal * .1).toFixed(2);
    // const total = (subTotal + tax + 2).toFixed(2);

    const dispatch = useDispatch();
    const cartItems = useSelector(state => state.cart.cartItems)
    const totalQuantity = cartItems.reduce((qty, item) => qty + item.quantity, 0)
    const getTotal = () => {
        return cartItems.reduce((price, item) => price + (item.quantity * +item.price), 0)
    }
    const subtotal = getTotal().toFixed(2)
    const tax = (getTotal() * .1).toFixed(2)
    const total = ((+subtotal) + (+tax) + 2).toFixed(2)
    // useEffect(()=>{
    //     dispatch()
    // },[dispatch])
    const quantityHandler = (id, quantity) => {
        dispatch(addToCart(id, quantity))
        // console.log(id, quantity);
    }
    // console.log(cartItems);

    const removeFromCartHandler = (id) => {
        dispatch(removeFromCart(id));
    };
    return (
        <div >
            {/* <Button variant="outlined" color="primary" onClick={handleClickOpen}>
                Save and continue</Button> */}

            <Dialog
                onClose={handleClose}
                aria-labelledby="Cart Items" open={open}>
                {/* <DialogTitle id="customized-dialog-title" onClose={handleClose}>
                    Modal title
        </DialogTitle> */}


                {/* <Typography variant="h5"> From: Cafe Jhotpot</Typography> */}
                {/* <Typography variant="h6"> Arriving in 20-30 minutes</Typography> */}
                {/* <Typography variant="body1"> {address.road}</Typography> */}
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
                </table>


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
