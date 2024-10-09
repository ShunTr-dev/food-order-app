import { useEffect, useState } from 'react'

export default function Meals() {
    const [loadedMeals, setLoadedMeals] = useState([])

    useEffect(() => {
        async function fetchMeals() {
            const response = await fetch('http://localhost:3000/meals')

            if (!response.ok) {
                throw new Error('Failed to fetch meals')
            }

            const meals = await response.json()
            setLoadedMeals(meals)
        }

        fetchMeals()
    }, [])

    return (
        <ul id="meals">
            {loadedMeals.map((meal) => (
                <li key={meal.id}>
                    <h2>{meal.name}</h2>
                    <p>{meal.description}</p>
                    <p>{meal.price} kr</p>
                    <button>Add to cart</button>
                </li>
            ))}
        </ul>
    )
}