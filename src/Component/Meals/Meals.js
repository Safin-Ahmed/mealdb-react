import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import Meal from '../Meal/Meal';
import './Meals.css';

const Meals = () => {
    const [meals, setMeals] = useState([]);
    const [cart, setCart] = useState([]);
    useEffect(() => {
        fetch('https://www.themealdb.com/api/json/v1/1/search.php?f=a')
        .then(res => res.json())
        .then(data => setMeals(data.meals));
    }, [])
    const handleAddMeal = product => {
        const newCart = [...cart, product];
        setCart(newCart);
    }
    return (
        <div className = "meals">
            <div className = "meals-container">
                {
                    meals.map(meal => <Meal addMeal = {handleAddMeal} key = {meal.idMeal} meal = {meal}></Meal>)      
                }
            </div>
            <div className = "cart-container">
                <h2>Order Summary</h2>
                <Cart cart = {cart}></Cart>
            </div>
        </div>
    );
};

export default Meals;