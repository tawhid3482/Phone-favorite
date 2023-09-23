import { NavLink } from "react-router-dom";
import Logo from "../Logo/Logo";

const Navbar = () => {
    return (
        <div className="flex justify-between items-center bg-slate-300 shadow-xl p-3 ">
            <div className="">
                <Logo></Logo>
            </div>
            <div className="flex gap-10">
                <NavLink
                    to="/"
                    className={({ isActive, isPending }) =>
                        isPending ? "pending" : isActive ? "text-red-500" : ""
                    }
                >
                    Home
                </NavLink>
                <NavLink
                    to="/favorite"
                    className={({ isActive, isPending }) =>
                        isPending ? "pending" : isActive ? "text-red-500" : "color"
                    }
                >
                    Favorite
                </NavLink>
                <NavLink
                    to="/login"
                    className={({ isActive, isPending }) =>
                        isPending ? "pending" : isActive ? "text-red-500" : ""
                    }
                >
                    Login
                </NavLink>
            </div>
        </div>
    );
};

export default Navbar;