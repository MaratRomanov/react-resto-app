import React from 'react';
import './menu-list-item.scss';
import Pizza from './pizza.png';
import Salad from './salad.png';
import Meat from './meat.png';
import { Link } from 'react-router-dom';

const MenuListItem = ({ menuItem, onAddToCart }) => {
    const { title, price, url, category } = menuItem;

    let categoryIcon = null;

    if (category === "pizza") {
        categoryIcon = Pizza
    }
    else if (category === "salads") {
        categoryIcon = Salad
    }
    else {
        categoryIcon = Meat
    }

    return (
        <li className="menu__item">
            <Link to={`/${menuItem.id}`}>
                <div className="menu__title">{title}</div>
                <img className="menu__img" src={url} alt={title}></img>
                <div className="menu__category">
                    <span>Category: {category}</span>
                    <img
                        src={categoryIcon}
                        style={{
                            width: '25px'
                        }}
                        alt={category}
                    />
                </div>
                <div className="menu__price"><span>Price: {price} $</span></div>
                <button className="menu__btn" onClick={() => onAddToCart()}>Add to cart</button>
            </Link>
        </li>
    )
}

export default MenuListItem;