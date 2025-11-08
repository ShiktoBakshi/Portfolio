

const Nav = () => {
    return (
        <div  className=" fixed w-full top-0 z-50">
            <div   className=" justify-center lg:flex hidden  text-white bg-cyan-300/50 backdrop:backdrop-blur-3xl ">
                <ul >
                    <li className="menu menu-horizontal px-1 font-bold text-lg font-mon hover:text-cyan-500"><a href="#home">Home</a></li>
                    <li className="menu menu-horizontal px-1 font-bold text-lg font-mon hover:text-cyan-500" ><a href="#about">About </a></li>
                    <li className="menu menu-horizontal px-1 font-bold text-lg font-mon hover:text-cyan-500" ><a href="#education">Education </a></li>
                    <li className="menu menu-horizontal px-1 font-bold text-lg font-mon  hover:text-cyan-500"><a href="#skills">Skills</a></li>
                    <li className="menu menu-horizontal px-1 font-bold text-lg font-mon hover:text-cyan-500"><a>Project</a></li>
                    <li className="menu menu-horizontal px-1 font-bold text-lg font-mon hover:text-cyan-500"><a href="#contact">Contact</a></li>
                </ul>
            </div>
            

            <div className="navbar-start ">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-8 text-cyan-500 hover:shadow-cyan-300 shadow-2xs" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                    </div>
                    <ul
                        tabIndex="-1"
                        className="menu items-center menu-sm dropdown-content bg-black/30 backdrop:backdrop-blur-2xl rounded-box z-1 mt-3 w-52 p-2 shadow ">
                        <li className="menu menu-horizontal px-1 font-bold text-lg font-mon  hover:text-cyan-500"><a href="#home">Home</a></li>
                        <li className="menu menu-horizontal px-1 font-bold text-lg font-mon  hover:text-cyan-500"><a href="#about">About </a></li>
                        <li className="menu menu-horizontal px-1 font-bold text-lg font-mon  hover:text-cyan-500"><a href="#education">Education </a></li>
                        <li className="menu menu-horizontal px-1 font-bold text-lg font-mon  hover:text-cyan-500"><a href="#skills">Skills</a></li>
                        <li className="menu menu-horizontal px-1 font-bold text-lg font-mon  hover:text-cyan-500"><a>Project</a></li>
                        <li className="menu menu-horizontal px-1 font-bold text-lg font-mon  hover:text-cyan-500"><a href="#contact">Contact</a></li>
                    </ul>
                </div>

            </div>

        </div>
    );
};

export default Nav;