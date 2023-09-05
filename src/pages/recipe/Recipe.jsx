import { useParams } from 'react-router-dom';
import {useFetch} from '../../hooks/useFetch'
import './Recipe.css'
import Loading from '../../components/Loader';

function Recipe() {
  const {id} = useParams();
  const url = 'http://localhost:3000/recipes/' + id
  const {error, isPending, data: recipe} = useFetch(url)
  return (
    <div className="recipe">
      {error && <p className="error">{error}</p>}
      {isPending && <Loading /> }
      {recipe && (
        <>
          <h2 className="page-tile">{recipe.title}</h2>
          <p>Task {recipe.cookingTime}to cook</p>
          <ul>
            {
              recipe.ingredients.map(ing=> <li key={ing}>{ing}</li>)
            }
          </ul>
          <p className="method">{recipe.method}</p>
        </>
      )}
    </div>
  )
}

export default Recipe;
