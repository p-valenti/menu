import { useState } from "react"
import { useRecipesContext } from "../hooks/useRecipesContext"
import { useAuthContext } from "../hooks/useAuthContext"

const RecipeForm = () => {
    const { dispatch } = useRecipesContext()
    const { user } = useAuthContext()
    const [name, setName] = useState('')
    const [timeOfPreparation, setTimeOfPreparation] = useState('')
    const [timeOfCooking, setTimeOfCooking] = useState('')
    const [ingredients, setIngredients] = useState('')
    const [recipeText, setRecipeText] = useState('')
    const [error, setError] = useState(null)
    const [emptyFields, setEmptyFields] = useState([])

    const handleSubmit = async (e) => {
        e.preventDefault()
        if (!user) {
            setError('You must be logged in')
            return
        }
        const recipe = {name, timeOfPreparation, timeOfCooking, ingredients, recipeText}
        const response = await fetch('/api/recipes', {
            method: 'POST',
            body: JSON.stringify(recipe),
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${user.token}`
            }
        })
        const json = await response.json()
        if (!response.ok) {
            setError(json.error)
            setEmptyFields(json.emptyFields)
        }
        if (response.ok) {
            setName('')
            setTimeOfPreparation('')
            setTimeOfCooking('')
            setIngredients('')
            setRecipeText('')
            setError(null)
            setEmptyFields([])
            console.log('new recipe added', json)
            dispatch({type: 'CREATE_RECIPE', payload: json})
        }
    }
    return (
        <form className="create" onSubmit={handleSubmit}>
            <h3>Add a New Recipe</h3>
            <label>Name:</label>
            <input
                type="text"
                onChange={(e) => setName(e.target.value)}
                value={name}
                className={emptyFields.includes('name') ? 'error' : ''}
            />
            <label>Time of preparation:</label>
            <input
                type="number"
                onChange={(e) => setTimeOfPreparation(e.target.value)}
                value={timeOfPreparation}
                className={emptyFields.includes('timeOfPreparation') ? 'error' : ''}
            />
            <label>Time of cooking:</label>
            <input
                type="number"
                onChange={(e) => setTimeOfCooking(e.target.value)}
                value={timeOfCooking}
                className={emptyFields.includes('timeOfCooking') ? 'error' : ''}
            />
            <label>Ingredients:</label>
            <input
                type="text"
                onChange={(e) => setIngredients(e.target.value)}
                value={ingredients}
                className={emptyFields.includes('ingredients') ? 'error' : ''}
            />
            <label>Recipe:</label>
            <input
                type="text"
                onChange={(e) => setRecipeText(e.target.value)}
                value={recipeText}
                className={emptyFields.includes('recipeText') ? 'error' : ''}
            />
            <button>Add Recipe</button>
            {error && <div className="error">{error}</div>}
        </form>
    )
}

export default RecipeForm