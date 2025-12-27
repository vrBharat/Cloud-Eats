const FoodGallery = () => {
    return (
        <section className="mt-20 sm:mt-32 relative">
            <h2 className="text-4xl font-extrabold uppercase text-gray-800 mb-12 text-center tracking-wide">
                #CloudEats<span className="text-orange-500">Adventures</span>
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 px-4">
                <div className="group relative aspect-square rounded-[3rem] overflow-hidden cursor-pointer shadow-2xl transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_30px_60px_rgba(0,0,0,0.15)] ring-4 ring-white ring-offset-4 ring-offset-gray-50">
                    <div className="w-full h-full bg-cover bg-center transition-transform duration-700 group-hover:scale-110" style={{ background: 'url("https://images.unsplash.com/photo-1513104890138-7c749659a591?q=80&w=2070&auto=format&fit=crop") center/cover' }}></div>
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-300"></div>
                    <div className="absolute bottom-0 left-0 right-0 p-8 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                        <span className="inline-block px-3 py-1 bg-orange-500 text-white text-xs font-bold rounded-full mb-3 shadow-lg">Community Favorite</span>
                        <h3 className="font-bold text-2xl text-white mb-1 drop-shadow-lg">Artisan Pizza</h3>
                        <p className="text-white/80 text-sm font-medium">Join 2.5k foodie fans</p>
                    </div>
                </div>

                <div className="group relative aspect-square rounded-[3rem] overflow-hidden cursor-pointer shadow-2xl transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_30px_60px_rgba(0,0,0,0.15)] ring-4 ring-white ring-offset-4 ring-offset-gray-50">
                    <div className="w-full h-full bg-cover bg-center transition-transform duration-700 group-hover:scale-110" style={{ background: 'url("https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?q=80&w=1981&auto=format&fit=crop") center/cover' }}></div>
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-300"></div>
                    <div className="absolute bottom-0 left-0 right-0 p-8 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                        <span className="inline-block px-3 py-1 bg-purple-500 text-white text-xs font-bold rounded-full mb-3 shadow-lg">Top Rated</span>
                        <h3 className="font-bold text-2xl text-white mb-1 drop-shadow-lg">Gourmet Waffles</h3>
                        <p className="text-white/80 text-sm font-medium">Sweet & Savory delights</p>
                    </div>
                </div>

                <div className="group relative aspect-square rounded-[3rem] overflow-hidden cursor-pointer shadow-2xl transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_30px_60px_rgba(0,0,0,0.15)] ring-4 ring-white ring-offset-4 ring-offset-gray-50">
                    <div className="w-full h-full bg-cover bg-center transition-transform duration-700 group-hover:scale-110" style={{ background: 'url("https://images.unsplash.com/photo-1504674900247-0877df9cc836?q=80&w=2070&auto=format&fit=crop") center/cover' }}></div>
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-300"></div>
                    <div className="absolute bottom-0 left-0 right-0 p-8 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                        <span className="inline-block px-3 py-1 bg-green-500 text-white text-xs font-bold rounded-full mb-3 shadow-lg">Fresh Catch</span>
                        <h3 className="font-bold text-2xl text-white mb-1 drop-shadow-lg">Exotic Bowls</h3>
                        <p className="text-white/80 text-sm font-medium">Healthy & Delicious</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default FoodGallery;
