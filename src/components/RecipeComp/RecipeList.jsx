/* eslint-disable react/prop-types */
import { Link } from 'react-router-dom';


//styles
import './RecipeList.css';
import Loading from '../Loader';


const RecipeList = ({recipes}) => {

  if(recipes.length === 0){
    return <div className='error'> No recipes<Loading /></div>
  }

  return (
    <div className="recipe-list">
      {recipes.map(recipe=>(
        <div key={recipe.id} className="card">
            <h3>{recipe.title}</h3>
            <p>{recipe.cookingTime} to make.</p>
            <div>{recipe.method.substring(0, 100)}...</div>
            <Link to={`/recipes/${recipe.id}`}>Cook This</Link>
        </div>
      ))}
    </div>
  );
}

export default RecipeList;