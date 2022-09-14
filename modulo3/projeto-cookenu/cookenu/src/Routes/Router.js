import React from "react";
import { Routes, Route} from "react-router-dom";
import AddRecipesPage from "../pages/AddRecipesPage/AddRecipesPage";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import LoginPage from "../pages/LoginPage/LoginPage";
import RecipesDetailPage from "../pages/RecipesDetailPage/RecipesDetailPage";
import RecipesListPage from "../pages/RecipesListPage/RecipesListPage"
import SingUpPage from "../pages/SingUpPage/SingUpPage";

export const Router = ({setRightButtonText}) => {
    return (
            <Routes>
                <Route index element={<RecipesListPage/>} />
                <Route path="login" element={<LoginPage setRightButtonText={setRightButtonText}/>}/>
                <Route path="cadastro" element={<SingUpPage setRightButtonText={setRightButtonText}/>}/>
                <Route path="detalhes/:id" element={<RecipesDetailPage/>}/>
                <Route path="adicionar" element={<AddRecipesPage/>}/>
                <Route path="*" element={<ErrorPage/>}/>
            </Routes>
    )
}

