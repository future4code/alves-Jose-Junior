import React from "react";
import { useNavigate } from "react-router-dom";
import { CreateTripPage } from "./Pages/CreateTripPage";
import { TripDetailPage } from "./Pages/TripDetailPage";
import { BrowserRouter, Routes, Route } from "react-router-dom"

export default function App() {
  // const navigate = useNavigate()

  // const goToPage1 = () => {
  //   navigate()
  // }

  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route index element={<TripDetailPage />} />
          <Route path="CreateTripPage" element={<CreateTripPage />} />



        </Routes>
        
        

      </BrowserRouter>


      <div>
        <p>Teste</p>

      </div>

      <button>Mudar página</button>

    </div>
  );
}
