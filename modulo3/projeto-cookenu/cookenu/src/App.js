import { Router } from "./Routes/Router";
import React from "react";
// import AddRecipesPage from "./pages/AddRecipesPage/AddRecipesPage"
// import LoginPage from "./pages/LoginPage/LoginPage"
// import RecipesDetailPage from "./pages/RecipesDetailPage/RecipesDetailPage"
// import RecipesListPage from "./pages/RecipesListPage/RecipesListPage"
// import SingUpPage from "./pages/SingUpPage/SingUpPage"

const App = () => {
  return (
    <div>
      {/* <AddRecipesPage />
      <LoginPage />
      <RecipesDetailPage />
      <RecipesListPage />
      <SingUpPage /> */}
      <Router/>
    </div>
  );
}

export default App;
