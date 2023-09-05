
import { useFetch } from '../../hooks/useFetch';
import './Home.css'
import Loading from '../../components/Loader'
import RecipeList from '../../components/RecipeComp/RecipeList';


function Home() {
  const {data, isPending, error} = useFetch('http://localhost:3000/recipes');
  return (
    <div className="home">
      {error && <p className="error">{error}</p>}
      {isPending && <p><Loading /></p>}
      {data && <RecipeList recipes={data}/>}
    </div>
  )
}

export default Home;
