import React, {useState, useEffect} from "react";
import "./home.css";
import axios from "axios";

export const Home = () => {
    const [recipes, setRecipes] = useState([]);

    useEffect(() => 
    {
     const fetchRecipe = async () =>
     {
        try{
              const response = await axios.get("http://localhost:3001/recipes");
              setRecipes(response.data) 
              console.log(response.data)
    
    
            }catch(err){
             console.error(err);
            }

           
    }
        fetchRecipe();
     }, [])
    



    return(
     <div className="homecss">
     <div className="headercss">
     <h2>Recipes Main Page</h2>
    
    </div>
     <div className="homecontent">
     <ul>
        {recipes.map((recipe) =>(
            <li key={recipe._id}>
              <div>
                <h3>{recipe.name}</h3>
              </div>
              <div>
                <p>{recipe.instructions}</p>
              </div>
              <img src={recipe.imageURL} alt={recipe.name} />
              <p>Cooking Time: {recipe.cookingTime} (minutes)
              </p>
            </li>
        ))}
      </ul>

     </div>
   
     </div>

    );
   

}