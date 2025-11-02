const Navbar = () => {
    return (
        <nav className="fixed w-full bg-gray-950/80 backdrop-blur-sm border-b border-gray-800 z-50">
            <div className="max-w-6xl mx-auto px-4 py-3 flex justify-between items-center">
                <h1 className="text-2xl font-bold text-blue-400">Akshay Malik</h1>
                <ul className="flex space-x-6 text-gray-300">
                    {["Home", "About", "Projects", "Contact"].map((item) => (
                        <li key={item}>
                            <a href={`#${item.toLowerCase()}`} className="hover:text-blue-400 transition">
                                {item}
                            </a>
                        </li>
                    ))}
                </ul>
            </div>
        </nav>
    )
}

export default Navbar;