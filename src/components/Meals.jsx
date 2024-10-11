import useHttp from '../hooks/useHttp.jsx'
import Error from './Error.jsx'
import MealItem from './MealItem.jsx'

const requestConfig = {} // create this to avoid infinite loop

export default function Meals() {
    const { data: loadedMeals, isLoading, error } = useHttp('http://localhost:3000/meals', requestConfig, [])

    if (isLoading) {
        return <p className="center">Loading...</p>
    }

    if (error) {
        return <Error title="Error" message={error} />
    }

    return (
        <ul id="meals">
            {loadedMeals.map((meal) => (
                <MealItem key={meal.id} meal={meal} />
            ))}
        </ul>
    )
}
