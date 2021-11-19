import React from 'react'
import Card from '../UI/Card';
import MealItem from './MealItem/MealItem';
import classes from './AvailableMeals.module.css'

const DUMMY_MEALS = [
    {
        id: 'p1',
        name: 'Avocado',
        description: 'Tomatoes, Avocado slices, Mexican cheese',
        price: 15.99,
    },
    {
        id: 'p2',
        name: 'Vegetarian',
        description: 'Tomatoes, Bell peppers, Garlic, Onions, Other vegetables to taste',
        price: 17.99,
    },
    {
        id: 'p3',
        name: 'BBQ Hawaiian',
        description: 'BBQ sauce, Mozzarella, Grilled pineapple, Ham',
        price: 13.99,
    },
    {
        id: 'p4',
        name: 'Pepperoni',
        description: 'Tomato sauce, Pepperoni salami, lot of cheese',
        price: 10.99,
    },
];

const AvailableMeals = () => {
    const pizzasList = DUMMY_MEALS.map(pizza => (
        <MealItem
            id={pizza.id}
            key={pizza.id}
            name={pizza.name}
            description={pizza.description}
            price={pizza.price}
        />
    ));

    return (
        <section className={classes.pizzas}>
            <Card>
                <ul>
                    {pizzasList}
                </ul>
            </Card>
        </section>
    )
}

export default AvailableMeals
