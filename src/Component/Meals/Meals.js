import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import Meal from '../Meal/Meal';
import './Meals.css';

const Meals = () => {
    const [meals, setMeals] = useState([]);
    const [cart, setCart] = useState([]);
    const [displayMeals, setDisplayMeals] = useState([]);
    useEffect(() => {
        fetch('https://www.themealdb.com/api/json/v1/1/search.php?f=a')
        .then(res => res.json())
        .then(data =>{
            setMeals(data.meals);
            setDisplayMeals(data.meals);
        })
    }, [])

    const handleAddMeal = product => {
        const newCart = [...cart, product];
        setCart(newCart);
    }
    const handleSearch = event => {
        const searchText = event.target.value;
        fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${searchText ? `${searchText}`:`a`}`)
        .then(res => res.json())
        .then(data => setDisplayMeals(data.meals));
    }
    return (
        <div>
          <div>
              <div className = "search-container">
                <input onChange={handleSearch} placeholder="Search Your Tasty Food" type="text" />
              </div>
                <div className = "meals">
                <div className = "meals-container">
                    {
                     displayMeals.map(meal => <Meal addMeal = {handleAddMeal} key = {meal.idMeal} meal = {meal}></Meal>)      
                    }
                </div>
                <div className = "cart-container">
                    <h2>Order Summary</h2>
                    <Cart cart = {cart}></Cart>
                </div>
        </div>
          </div>
        </div>
    );
};

export default Meals;