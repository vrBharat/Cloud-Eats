

const Navbar = () => {
    return (
        <nav className="fixed top-0 left-0 right-0 z-50 flex flex-col sm:flex-row justify-between items-center py-3 px-4 sm:py-4 sm:px-8 w-[95%] sm:w-full max-w-[1400px] mx-auto mt-2 sm:mt-4 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 shadow-lg ring-1 ring-black/5 transition-all duration-300 gap-3 sm:gap-0">
            <div className="font-extrabold text-xl sm:text-2xl text-white drop-shadow-md tracking-tighter cursor-pointer hover:scale-105 transition-transform flex items-center gap-2">
                <span className="text-2xl sm:text-3xl">☁️</span> CLOUD EATS
            </div>
            <div className="flex gap-4 sm:gap-8 items-center bg-black/20 px-4 py-1.5 sm:px-6 sm:py-2 rounded-full backdrop-blur-sm">
                <a href="#" className="text-white font-medium text-xs sm:text-sm hover:text-orange-300 transition-colors duration-200 uppercase tracking-wide">Login</a>
                <a href="#" className="text-white font-medium text-xs sm:text-sm hover:text-orange-300 transition-colors duration-200 uppercase tracking-wide">Story</a>
            </div>
        </nav>
    );
};

export default Navbar;
