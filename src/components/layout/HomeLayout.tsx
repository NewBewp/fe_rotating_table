import { Outlet } from "react-router-dom"

export const HomeLayout = () => {
    return (
        <div className="w-dvh h-dvh">
            <Outlet />
        </div>
    )
}