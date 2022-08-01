import React from "react";
import useProtectedPage from "../../hooks/useProtectedPage";
import { BASE_URL } from "../../constants/urls";
import useRequestData from "../../hooks/useRequestData"
import RecipeCard from "../../components/RecipeCard/RecipeCard";
import { RecipeListContainer, AddRecipeButton } from "./Styled";
import { Add } from "@mui/icons-material";
import { goToAddRecipes, goToRecipesDetail } from "../../Routes/coordinator";
import { useNavigate} from "react-router-dom"


const RecipesListPage = () => {
    useProtectedPage()
    const navigate = useNavigate()
    const recipes = useRequestData([], `${BASE_URL}/recipe/feed`)

    const onClickCard = (id) => {
        goToRecipesDetail(navigate, id)
    }

    const recipesCards = recipes.map((recipe)=>{
        return (
            <RecipeCard 
            key={recipe.recipe_id}
            title={recipe.title}
            image={recipe.image}
            onClick={()=>onClickCard(recipe.recipe_id)}
            />
        )
    })

    return (
        <RecipeListContainer>
            {recipesCards}
            <AddRecipeButton
            color={"primary"}
            onClick={()=> goToAddRecipes(navigate)}
            >
            < Add />
            </AddRecipeButton>
        </RecipeListContainer>
    )
}

export default RecipesListPage