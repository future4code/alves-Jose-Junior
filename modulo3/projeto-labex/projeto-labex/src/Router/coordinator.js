export const goToListTripsPage = (navigate) => {
    navigate("/list-trips")
}

export const goToHome = (navigate) => {
    navigate("/")
}

export const goToAdminHomePage = (navigate) => {
    navigate("/admin-home")
}

export const goToAboutPage = (navigate) => {
    navigate("/about")
}

export const goBack = (navigate) => {
    navigate(-1)
}

export const goToApplicationFormPage = (navigate) => {
    navigate("/application-form")
}

export const goToLoginPage = (navigate) => {
    navigate("/login");
}

export const goToCreatetripPage = (navigate) => {
    navigate(`/createtrip`);
}

export const goToTripDetailsPage = (navigate, id) => {
    navigate(`/tripdetails/${id}`);
  }