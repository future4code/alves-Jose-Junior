import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AdminHomePage } from "../Pages/AdminHomePage"
import { CreateTripPage } from "../Pages/CreateTripPage";
import { ApplicationFormPage } from "../Pages/ApplicationFormPage";
import { ListTripsPage } from "../Pages/ListTripsPage";
import { TripsDetailPage } from "../Pages/TripsDetailPage";
import { LoginPage } from "../Pages/LoginPage";
import { HomePage } from "../Pages/HomePage";
import { ErrorPage } from "../Pages/ErrorPage";


export const Router = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route index element={<HomePage/>}/>
                <Route path="admin-home" element={<AdminHomePage />} />
                <Route path="application-form" element={<ApplicationFormPage />} />
                <Route path="createtrip" element={<CreateTripPage />} />
                <Route path="list-trips" element={<ListTripsPage />} />
                <Route path="tripsDetails" element={<TripsDetailPage />} />
                <Route path="login" element={<LoginPage />} />
                <Route path="*" element={<ErrorPage/>}/>
            </Routes>



        </BrowserRouter>

    )

}