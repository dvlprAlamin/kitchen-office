import { createContext, useContext, useState } from "react";
import img from '../dinner1.png'
const FoodContext = createContext();

export const GetFood = () => {
    return useContext(FoodContext);
}

export const FoodProvider = ({ children }) => {
    const [foods, setFoods] = useState([
        {
            id: 1,
            img: img,
            type: 'breakfast',
            name: 'Chicken dinner',
            price: 39.99,
            slug: 'How to dream about your future',
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. In ratione vitae explicabo autem excepturi perspiciatis vel, sunt esse accusamus nihil possimus voluptas ipsa quam aut exercitationem minus assumenda perferendis expedita quibusdam! Eaque ut consequuntur in omnis, mollitia doloremque magnam similique dicta optio, exercitationem assumenda quis. Tempore suscipit temporibus obcaecati impedit.',

        },
        {
            id: 2,
            img: img,
            type: 'breakfast',
            name: 'Beef dinner',
            price: 59.99,
            slug: 'How to dream about your future',
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. In ratione vitae explicabo autem excepturi perspiciatis vel, sunt esse accusamus nihil possimus voluptas ipsa quam aut exercitationem minus assumenda perferendis expedita quibusdam! Eaque ut consequuntur in omnis, mollitia doloremque magnam similique dicta optio, exercitationem assumenda quis. Tempore suscipit temporibus obcaecati impedit.',

        },
        {
            id: 3,
            img: img,
            type: 'breakfast',
            name: 'Mutton dinner',
            price: 79.99,
            slug: 'How to dream about your future',
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. In ratione vitae explicabo autem excepturi perspiciatis vel, sunt esse accusamus nihil possimus voluptas ipsa quam aut exercitationem minus assumenda perferendis expedita quibusdam! Eaque ut consequuntur in omnis, mollitia doloremque magnam similique dicta optio, exercitationem assumenda quis. Tempore suscipit temporibus obcaecati impedit.',

        },
        {
            id: 4,
            img: img,
            type: 'lunch',
            name: 'Chicken dinner',
            price: 39.99,
            slug: 'How to dream about your future',
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. In ratione vitae explicabo autem excepturi perspiciatis vel, sunt esse accusamus nihil possimus voluptas ipsa quam aut exercitationem minus assumenda perferendis expedita quibusdam! Eaque ut consequuntur in omnis, mollitia doloremque magnam similique dicta optio, exercitationem assumenda quis. Tempore suscipit temporibus obcaecati impedit.',

        },
        {
            id: 5,
            img: img,
            type: 'lunch',
            name: 'Beef dinner',
            price: 59.99,
            slug: 'How to dream about your future',
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. In ratione vitae explicabo autem excepturi perspiciatis vel, sunt esse accusamus nihil possimus voluptas ipsa quam aut exercitationem minus assumenda perferendis expedita quibusdam! Eaque ut consequuntur in omnis, mollitia doloremque magnam similique dicta optio, exercitationem assumenda quis. Tempore suscipit temporibus obcaecati impedit.',

        },
        {
            id: 6,
            img: img,
            type: 'dinner',
            name: 'Mutton dinner',
            price: 79.99,
            slug: 'How to dream about your future',
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. In ratione vitae explicabo autem excepturi perspiciatis vel, sunt esse accusamus nihil possimus voluptas ipsa quam aut exercitationem minus assumenda perferendis expedita quibusdam! Eaque ut consequuntur in omnis, mollitia doloremque magnam similique dicta optio, exercitationem assumenda quis. Tempore suscipit temporibus obcaecati impedit.',

        }
    ]);
    const [cart, setCart] = useState({})
    const [address, setAddress] = useState({})
    const value = {
        foods,
        setFoods,
        cart,
        setCart,
        address,
        setAddress
    }
    return (
        <FoodContext.Provider value={value}>
            {children}
        </FoodContext.Provider>
    )
}