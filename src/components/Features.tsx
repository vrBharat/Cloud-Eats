const Features = () => {
    return (
        <section className="text-center py-16 sm:py-24 relative px-4 sm:px-0">
            <h2 className="text-3xl sm:text-4xl font-extrabold uppercase text-gray-800 mb-10 sm:mb-16 tracking-wider relative inline-block">
                Fresh. Fast. Fusion
                <span className="absolute -bottom-4 left-0 w-full h-1 bg-gradient-to-r from-transparent via-orange-400 to-transparent"></span>
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-10">
                <div className="group flex flex-col items-center gap-6 p-6 sm:p-10 rounded-[2rem] sm:rounded-[2.5rem] bg-white border border-gray-100 shadow-[0_10px_40px_rgba(0,0,0,0.05)] transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_20px_50px_rgba(0,0,0,0.1)] relative overflow-hidden">
                    <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-green-300 to-green-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
                    <div className="w-[100px] h-[100px] sm:w-[140px] sm:h-[140px] rounded-full bg-green-50 flex justify-center items-center shadow-inner mb-2 group-hover:scale-110 transition-transform duration-500 relative">
                        <div className="absolute inset-0 rounded-full border-2 border-green-100 opacity-0 group-hover:opacity-100 group-hover:animate-ping"></div>
                        {/* Chef Hat Icon */}
                        <svg className="w-[50px] h-[50px] sm:w-[70px] sm:h-[70px] text-green-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M6 13.87A4 4 0 0 1 7.41 6a5.11 5.11 0 0 1 1.05-1.54 5 5 0 0 1 7.08 0A5.11 5.11 0 0 1 16.59 6 4 4 0 0 1 18 13.87V21H6Z" />
                            <line x1="6" y1="17" x2="18" y2="17" />
                        </svg>
                    </div>
                    <p className="font-extrabold text-lg sm:text-xl uppercase max-w-[200px] leading-snug text-gray-800 tracking-wide">Sustainable Sourcing</p>
                    <p className="text-sm text-gray-500 leading-relaxed opacity-100 sm:opacity-0 sm:group-hover:opacity-100 transition-opacity duration-300 transform sm:translate-y-4 sm:group-hover:translate-y-0">
                        We seek out the finest eco-friendly ingredients for a guilt-free feast.
                    </p>
                </div>

                <div className="group flex flex-col items-center gap-6 p-6 sm:p-10 rounded-[2rem] sm:rounded-[2.5rem] bg-white border border-gray-100 shadow-[0_10px_40px_rgba(0,0,0,0.05)] transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_20px_50px_rgba(0,0,0,0.1)] relative overflow-hidden">
                    <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-orange-300 to-orange-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
                    <div className="w-[100px] h-[100px] sm:w-[140px] sm:h-[140px] rounded-full bg-orange-50 flex justify-center items-center shadow-inner mb-2 group-hover:scale-110 transition-transform duration-500 relative">
                        <div className="absolute inset-0 rounded-full border-2 border-orange-100 opacity-0 group-hover:opacity-100 group-hover:animate-ping"></div>
                        {/* Timer/Fast Icon */}
                        <svg className="w-[50px] h-[50px] sm:w-[70px] sm:h-[70px] text-orange-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                            <circle cx="12" cy="12" r="10" />
                            <polyline points="12 6 12 12 16 14" />
                            <path d="M12 2v-2" transform="translate(6, 0)" />
                        </svg>
                    </div>
                    <p className="font-extrabold text-lg sm:text-xl uppercase max-w-[200px] leading-snug text-gray-800 tracking-wide">Blazing Fast Delivery</p>
                    <p className="text-sm text-gray-500 leading-relaxed opacity-100 sm:opacity-0 sm:group-hover:opacity-100 transition-opacity duration-300 transform sm:translate-y-4 sm:group-hover:translate-y-0">
                        From our cloud kitchen to your doorstep in record time, hot and fresh.
                    </p>
                </div>

                <div className="group flex flex-col items-center gap-6 p-6 sm:p-10 rounded-[2rem] sm:rounded-[2.5rem] bg-white border border-gray-100 shadow-[0_10px_40px_rgba(0,0,0,0.05)] transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_20px_50px_rgba(0,0,0,0.1)] relative overflow-hidden">
                    <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-purple-300 to-purple-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
                    <div className="w-[100px] h-[100px] sm:w-[140px] sm:h-[140px] rounded-full bg-purple-50 flex justify-center items-center shadow-inner mb-2 group-hover:scale-110 transition-transform duration-500 relative">
                        <div className="absolute inset-0 rounded-full border-2 border-purple-100 opacity-0 group-hover:opacity-100 group-hover:animate-ping"></div>
                        {/* Globe/Fusion Icon */}
                        <svg className="w-[50px] h-[50px] sm:w-[70px] sm:h-[70px] text-purple-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                            <circle cx="12" cy="12" r="10" />
                            <line x1="2" y1="12" x2="22" y2="12" />
                            <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
                        </svg>
                    </div>
                    <p className="font-extrabold text-lg sm:text-xl uppercase max-w-[200px] leading-snug text-gray-800 tracking-wide">Global Flavor Fusions</p>
                    <p className="text-sm text-gray-500 leading-relaxed opacity-100 sm:opacity-0 sm:group-hover:opacity-100 transition-opacity duration-300 transform sm:translate-y-4 sm:group-hover:translate-y-0">
                        Bold combinations inspired by cuisines from around the world.
                    </p>
                </div>
            </div>
        </section>
    );
};

export default Features;
