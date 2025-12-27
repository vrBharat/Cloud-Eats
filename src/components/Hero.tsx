
import Image from 'next/image';

const Hero = () => {
    return (
        <section className="grid grid-cols-1 md:grid-cols-2 min-h-[90vh] px-4 sm:px-8 pt-28 sm:pt-32 pb-12 sm:pb-16 bg-gradient-to-br from-[#6c5ce7] via-[#8e44ad] to-[#a29bfe] rounded-b-[2.5rem] sm:rounded-b-[4rem] text-white gap-8 md:gap-8 relative overflow-hidden shadow-2xl">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] animate-pulse"></div>

            <div className="flex flex-col justify-center items-center md:items-start z-[2] pl-0 md:pl-16 text-center md:text-left">

                <h1 className="text-5xl sm:text-6xl md:text-8xl font-black leading-[1.05] mb-6 uppercase tracking-tight">
                    <span className="bg-gradient-to-r from-white via-blue-100 to-white bg-clip-text text-transparent drop-shadow-2xl filter block">Cloud</span>
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-300 to-orange-400 block mt-2 transform -rotate-1 origin-center md:origin-left">Eats</span>
                </h1>
                <p className="text-xl sm:text-2xl font-light mb-10 opacity-90 max-w-lg leading-relaxed text-blue-50 px-2 sm:px-0">
                    Experience the future of <span className="font-bold text-white border-b-2 border-amber-400">flavor</span>. Culinary masterpieces delivered to your doorstep in minutes.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 w-full sm:w-auto px-4 sm:px-0">
                    <button className="py-4 sm:py-5 px-8 sm:px-10 bg-gradient-to-r from-[#f2994a] to-[#e67e22] text-white rounded-full font-bold text-lg sm:text-xl uppercase shadow-[0_20px_40px_rgba(242,153,74,0.3)] transition-all hover:-translate-y-1 hover:shadow-[0_25px_50px_rgba(242,153,74,0.5)] active:translate-y-0 active:shadow-none ring-offset-2 ring-offset-[#6c5ce7] focus:ring-2 w-full sm:w-auto">
                        Get Started
                    </button>
                    <button className="py-4 sm:py-5 px-8 sm:px-10 bg-white/10 backdrop-blur-md text-white rounded-full font-bold text-lg sm:text-xl uppercase border border-white/30 transition-all hover:bg-white/20 hover:-translate-y-1 hover:shadow-lg active:translate-y-0 w-full sm:w-auto">
                        View Menu
                    </button>
                </div>
            </div>
            <div className="relative flex justify-center items-center z-[2] mt-8 md:mt-0">
                <div className="absolute w-[300px] h-[300px] sm:w-[500px] sm:h-[500px] md:w-[600px] md:h-[600px] bg-white/20 rounded-full blur-[80px] sm:blur-[100px] -z-10 animate-pulse"></div>
                {/* Note: The image hero-group.png needs to be in public/ folder. 
           If missing, Next.js might show broken image symbol or alt text. 
       */}
                <Image
                    src="/hero-group.png"
                    alt="Cloud Eats Friends"
                    width={700}
                    height={600}
                    className="w-[85%] sm:w-full max-w-[400px] md:max-w-[650px] h-auto object-contain animate-float drop-shadow-2xl"
                    priority
                />
            </div>


        </section>
    );
};

export default Hero;
