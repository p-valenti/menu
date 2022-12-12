import { useRecipesContext} from '../hooks/useRecipesContext'
import { useAuthContext } from '../hooks/useAuthContext'

const RecipeDetails = ({recipe}) => {
    const { dispatch } = useRecipesContext()
    const { user } = useAuthContext()
    const handleClick = async () => {
        if (!user) {
            return
        }
        const response = await fetch('/api/recipes/' + recipe._id, {
            method: 'DELETE',
            headers: {
                'Authorization': `Bearer ${user.token}`
            }
        })
        const json = await response.json()
        if (response.ok) {
            dispatch({type: 'DELETE_RECIPE', payload: json})
        }
    }
    return (
        <div className="menu-details">
            <h4>{recipe.name}</h4>
            <p>{recipe.preparation}</p>
            <p>{recipe.cooking}</p>
            <p>{recipe.ingredients}</p>
            <p>{recipe.text}</p>
            <span className="material-symbols-outlined" onClick={handleClick}>delete</span>
        </div> 
    )
}

export default RecipeDetails;