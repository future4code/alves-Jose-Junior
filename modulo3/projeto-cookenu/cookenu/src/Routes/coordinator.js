export const goToRecipesList = (navigate) =>{
    navigate("/")
}

export const goToSignUp = (navigate) =>{
    navigate("/cadastro")
}

export const goToLogin = (navigate) =>{
    navigate("/Login")
}

export const goToAddRecipes = (navigate) =>{
    navigate("/adicionar")
}

export const goToRecipesDetail = (navigate,id) =>{
    navigate(`/detalhes/${id}`)
}

export const goBack = (navigate) => {
    navigate(-1)
}
