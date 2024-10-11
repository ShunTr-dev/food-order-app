import useHttp from '../hooks/useHttp.jsx'
import MealItem from './MealItem.jsx'

const requestConfig = {} // create this to avoid infinite loop

export default function Meals() {
    const { data: loadedMeals, isLoading } = useHttp('http://localhost:3000/meals', requestConfig, [])

    if (isLoading) {
        return <p>Loading...</p>
    }

    return (
        <ul id="meals">
            {loadedMeals.map((meal) => (
                <MealItem key={meal.id} meal={meal} />
            ))}
        </ul>
    )
}
