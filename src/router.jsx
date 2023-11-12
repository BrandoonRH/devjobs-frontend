import { createBrowserRouter } from "react-router-dom";
import Layout from "./layouts/Layout";
import Home from "./views/home/Home";
import AuthLayout from "./layouts/AuthLayout";
import Auth from "./views/auth/Auth";
import VacantesIndex from "./views/vacantes/VacantesIndex";
import VacantesCreate from "./views/vacantes/VacantesCreate";
import VacantesEdit from "./views/vacantes/VacantesEdit";
import VacantesShow from "./views/vacantes/VacantesShow";
import NotificationsReclutador from "./views/notifications/NotificationsReclutador";
import VacanateCandidatos from "./views/vacantes/VacanateCandidatos";

const router = createBrowserRouter([
    {
            path: '/',
            element: <Layout/>,
            children: [
                {
                    index: true,
                    element: <Home/>
                },
                {
                    path: '/dashboard',
                    element: <VacantesIndex/>
                },
                {
                    path: '/vacante/create',
                    element: <VacantesCreate/>
                },
                {
                    path: '/vacantes/:id_vacante/edit',
                    element: <VacantesEdit/>
                },
                {
                    path: '/vacantes/:id_vacante/show',
                    element: <VacantesShow/>
                },
                {
                    path:'/notifications',
                    element: <NotificationsReclutador/>
                },
                {
                    path:'/vacante/:id_vacante/candidatos', 
                    element: <VacanateCandidatos/>
                }

            ]
    },
    {
        path: '/auth',
        element: <AuthLayout/>,
        children: [
            {
                index: true,
                element: <Auth/>
            }
        ]
    },{

    }
]);

export default router; 