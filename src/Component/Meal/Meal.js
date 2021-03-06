import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee, faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import './Meal.css';

const Meal = (props) => {
    const {strArea, idMeal, strMeal, strMealThumb, strYoutube} = props.meal;
    const element = <FontAwesomeIcon icon={faShoppingCart} />
    return (
        <div className = "single-meal">
            <img src={strMealThumb} alt="" />
            <p>{idMeal}</p>
            <h3>Food Name : {strMeal}</h3>
            <h4>Made In: {strArea}</h4>
            <button><a href={strYoutube}>Watch Video</a></button>
            <button onClick = {() => {props.addMeal(props.meal)}} className="add-meal">{element} Add the Meal</button>
        </div>
    );
};

export default Meal;