const Navbar = () => {
    return (
        <nav className="fixed top-0 w-full bg-white-900/80  backdrop-blur-sm border-b border-gray-200 shadow-sm z-50">
            <div className="max-w-6xl mx-auto px-4 py-3 flex justify-between items-center">
                <h1 className="logo text-2xl font-bold text-blue-400">Akshay Malik</h1>
                <ul className="flex space-x-6 text-gray-800 border border-gray-300 py-2 px-4 rounded-3xl">
                    {["Home", "About", "Projects","Certificates", "Contact"].map((item) => (
                        <li key={item}>
                            <a href={`#${item.toLowerCase()}`} className="hover:text-blue-400 transition">
                                {item}
                            </a>
                        </li>
                    ))}
                </ul>
                <h2 className="border border-gray-300 py-2 w-23 text-center rounded-4xl font-semibold"><a href="" className="cursor-pointer">Resume</a></h2>
            </div>
        </nav>
    )
}

export default Navbar;