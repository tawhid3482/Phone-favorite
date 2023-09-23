import { createBrowserRouter } from 'react-router-dom';
import Navbar from '../Nav-Section/Navbar/Navbar';
import MainLayOut from '../MainLayOut/MainLayOut';
import Login from '../Nav-Section/Login/Login';
import Home from '../Nav-Section/Home/Home';
import ErrorPage from '../ErrorPage/ErrorPage';
import Phone from '../Nav-Section/Phones/Phone';
import Favorite from '../Nav-Section/Favorite/Favorite';

const myProject = createBrowserRouter([
   {
    path:'/',
    element:<MainLayOut></MainLayOut>,
    errorElement:<ErrorPage></ErrorPage>,
    children:[
        {
            path:'/',
            element:<Home></Home>,
            loader:()=> fetch('/phone.json')
            
        },
        {
            path:'/login',
            element:<Login></Login>
        
        },
        {
            path:'/favorite',
            element:<Favorite></Favorite>
        },
        {
            path:'/phones/:id',
            element:<Phone></Phone>,
            loader:()=>fetch('/phone.json')

        }
    ]
   } 
])

export default myProject;