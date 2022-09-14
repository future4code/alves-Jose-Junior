import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import { StyledToolbar } from './Styled';
import Button from '@mui/material/Button';
import { goToLogin, goToRecipesList } from '../../Routes/coordinator';
import { useNavigate } from 'react-router-dom';


const Header = ({rightButtonText, setRightButtonText}) => {
    const navigate = useNavigate()
    const token = localStorage.getItem("token")
    // const [rightButtonText, setRightButtonText] = useState(token ? "Logout" : "Login")
     
    const logout = () => {
        localStorage.removeItem("token")
    }

    const rightButtonAction = () => {
        if (token) {
            logout()
            setRightButtonText("Login")
            goToLogin(navigate)
        } else {
            goToLogin(navigate)
        }
    }
    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static">
                <StyledToolbar>
                    <Button onClick={() => goToRecipesList(navigate)} color="inherit">Cookenu</Button>
                    <Button onClick={rightButtonAction} color="inherit">{rightButtonText}</Button>
                </StyledToolbar>
            </AppBar>
        </Box>
    );
}
export default Header