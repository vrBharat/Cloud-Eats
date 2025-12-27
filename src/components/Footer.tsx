

const Footer = () => {
    return (
        <footer className="bg-gray-900 text-white py-12 sm:py-16 mt-16 sm:mt-24 rounded-t-[2rem] sm:rounded-t-[3rem] relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-gray-700 to-transparent"></div>
            <div className="max-w-[1200px] w-full mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-12 text-center md:text-left">
                <div className="flex flex-col gap-6 items-center md:items-start">
                    <div className="font-extrabold text-3xl tracking-tighter">CLOUD EATS</div>
                    <p className="text-gray-400 text-sm leading-relaxed max-w-[250px]">
                        Redefining food delivery with tech-forward kitchens and sustainable practices.
                    </p>
                    <div className="flex gap-4 mt-2">
                        {/* Placeholder Social Icons */}
                        <div className="w-10 h-10 rounded-full bg-white/10 flex justify-center items-center hover:bg-orange-500 transition-colors cursor-pointer text-sm font-bold">IG</div>
                        <div className="w-10 h-10 rounded-full bg-white/10 flex justify-center items-center hover:bg-blue-500 transition-colors cursor-pointer text-sm font-bold">TW</div>
                        <div className="w-10 h-10 rounded-full bg-white/10 flex justify-center items-center hover:bg-blue-700 transition-colors cursor-pointer text-sm font-bold">FB</div>
                    </div>
                </div>

                <div className="flex flex-col gap-4">
                    <h4 className="font-bold text-lg mb-2 text-gray-200">Company</h4>
                    <a href="#" className="text-gray-400 hover:text-white transition-colors">About Us</a>
                    <a href="#" className="text-gray-400 hover:text-white transition-colors">Careers</a>
                    <a href="#" className="text-gray-400 hover:text-white transition-colors">Blog</a>
                    <a href="#" className="text-gray-400 hover:text-white transition-colors">Press</a>
                </div>

                <div className="flex flex-col gap-4">
                    <h4 className="font-bold text-lg mb-2 text-gray-200">Support</h4>
                    <a href="#" className="text-gray-400 hover:text-white transition-colors">Help Center</a>
                    <a href="#" className="text-gray-400 hover:text-white transition-colors">Terms of Service</a>
                    <a href="#" className="text-gray-400 hover:text-white transition-colors">Privacy Policy</a>
                    <a href="#" className="text-gray-400 hover:text-white transition-colors">Contact</a>
                </div>

                <div className="flex flex-col gap-6 items-center md:items-start">
                    <h4 className="font-bold text-lg text-gray-200">Get the App</h4>
                    <button className="bg-white text-gray-900 py-3 px-8 rounded-full font-bold transition-transform hover:scale-105 hover:bg-gray-100 shadow-lg flex items-center justify-center gap-2 w-48">
                        <span className="text-xl">🍎</span> iOS Store
                    </button>
                    <button className="bg-transparent border border-gray-600 text-white py-3 px-8 rounded-full font-bold transition-all hover:bg-gray-800 hover:border-gray-500 flex items-center justify-center gap-2 w-48">
                        <span className="text-xl">🤖</span> Google Play
                    </button>
                </div>
            </div>
            <div className="mt-16 pt-8 border-t border-gray-800 text-center text-gray-500 text-sm">
                &copy; {new Date().getFullYear()} Cloud Eats Inc. All rights reserved.
            </div>
        </footer>
    );
};

export default Footer;
