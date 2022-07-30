import React from "react";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import AddRecipesPage from "../pages/AddRecipesPage/AddRecipesPage";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import LoginPage from "../pages/LoginPage/LoginPage";
import RecipesDetailPage from "../pages/RecipesDetailPage/RecipesDetailPage";
import RecipesListPage from "../pages/RecipesListPage/RecipesListPage"
import SingUpPage from "../pages/SingUpPage/SingUpPage";

export const Router = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route index element={<RecipesListPage/>} />
                <Route path="login" element={<LoginPage/>}/>
                <Route path="cadastro" element={<SingUpPage/>}/>
                <Route path="detalhe" element={<RecipesDetailPage/>}/>
                <Route path="adicionar" element={<AddRecipesPage/>}/>
                <Route path="*" element={<ErrorPage/>}/>
            </Routes>
        </BrowserRouter>
    )
}

