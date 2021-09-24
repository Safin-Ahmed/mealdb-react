import React from 'react';
import './Meal.css';

const Meal = (props) => {
    const {strArea, idMeal, strMeal, strMealThumb, strYoutube} = props.meal;
    return (
        <div className = "single-meal">
            <img src={strMealThumb} alt="" />
            <h3>Food Name : {strMeal}</h3>
            <h4>Made In: {strArea}</h4>
            <button><a href={strYoutube}>Watch Video</a></button>
        </div>
    );
};

export default Meal;