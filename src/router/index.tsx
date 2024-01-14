import { RouteObject } from "react-router-dom"
import { HomeLayout, AuthLayout } from "components"
import { PATH } from "constants"
import { Angle, Direction, Login, Register } from "pages"

export const router: RouteObject[] = [
    {
        element: <HomeLayout />,
        children: [
            {
                path: PATH.angle,
                element: <Angle/>
            },
            {
                path: PATH.direction,
                element: <Direction/>
            },
        ]
    },
    {
        element: <AuthLayout />,
        children: [
            {
                path: PATH.login,
                element: <Login/>
            },
            {
                path: PATH.register,
                element: <Register/>
            },
        ]
    }

]