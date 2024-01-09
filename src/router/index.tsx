import { RouteObject } from "react-router-dom"
import { HomeLayout, AuthLayout } from "components"
import { PATH } from "constants"

export const router: RouteObject[] = [
    {
        element: <HomeLayout />,
        children: [
            {
                path: PATH.angle,
            },
            {
                path: PATH.direction,
            },
        ]
    },
    {
        element: <AuthLayout />,
        children: [
            {
                path: PATH.login,
            },
            {
                path: PATH.register,
            },
        ]
    }

]