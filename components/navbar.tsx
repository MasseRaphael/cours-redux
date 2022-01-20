import Link from "next/link";
import { useState, useEffect } from "react";
import { Category } from "../typings/api";
import { FaTimes, FaBars } from "react-icons/fa";

const Navbar: React.FC<{ category: Category; categories}> = ({categories}) => {
    const [scrollY, setScrollY] = useState(0);
    const [mobileOpen, setMobileOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () =>{
            setScrollY(window.scrollY);
        };    
        handleScroll();

        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll)
        };
    }, []);
    return(
    <>
    <div className={
        scrollY > 150
        ? "flex transition-all ease-in-out opacity-100 fixed top-0 z-10 itemes-center h-20 px-6 justify-between bg-red-500 text-white w-full"
        : "flex transition-all ease-in-out opacity-0 fixed top-0 z-10 itemes-center h-20 px-6 justify-between bg-red-500 text-white w-full"
    }>
        <div className="h-8 flex lg:justify-center items-center w-full lg:w-4/12">
            <Link href="/">
                <a>Home</a>
            </Link>
        </div>
        <div className="ml-10 items-center hidden lg:flex">
            <Link href="/">
                <a>Home</a>
            </Link>
        </div>
        <div className="lg:hidden" onClick={() => setMobileOpen(!mobileOpen)}>
            {mobileOpen ? <FaTimes /> : <FaBars />}
        </div>
        {mobileOpen && (
            <div className="bg-red-500 absolute top-full left-0 flex flex-col items-center w-full pb-8 lg:hidden">
                <Link href="/">
                    <a>Home</a>
                </Link>
            </div>
        )}
    </div>
    </>)
}

export default Navbar;