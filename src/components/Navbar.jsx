

const Navbar = () => {
  return (
    <header className='w-full'>
        <nav className='flex justify-between items-center px-6 md:px-20 py-4'>
            <a href='/' className='flex items-center gap-1'>
                <img 
                    src="/pokeball.svg" 
                    alt="logo"
                    className="h-[32px] w-[32px]"
                />

                <p className="font-spaceGrotesk text-[28px]  font-bold">
                    Poke<span className="text-red-500">Dex</span>
                </p>
            </a>
            <div  className="flex items-center justify-center gap-5">
                <a href="/" className="hover:scale-125 transition-transform duration-300 flex items-center bg-white rounded-lg p-2 px-4">
                    <img
                    src="/search.svg"
                    alt="search"
                    className="object-contain me-2"
                    />
                    <p>
                        Search
                    </p>
                </a>

            </div>
            <div className=" items-center justify-center gap-5 hidden md:flex">
                <div className='flex gap-2'>
                    <a href='https://github.com/Akshat-Kumar-X' target='_blank'>
                        <button 
                            type='button' 
                            className='rounded-full font-semibold border-[#1e1e1e] border-2 bg-[#323232] py-1.5 px-5 text-sm text-white transition-all hover:bg-white hover:text-black'
                        >
                            GitHub
                        </button>
                    </a>
                    <a href='https://www.linkedin.com/in/akshat-kumar-86203224a/' target='_blank'>
                        <button 
                            type='button' 
                            className='rounded-full font-semibold border-[#0A66C2] border-2 bg-[#0A66C2] py-1.5 px-5 text-sm text-white transition-all hover:bg-white hover:text-[#0A66C2]'
                        >
                            Linkedin
                        </button>
                    </a>
                </div>
            </div>
            

        </nav>
    </header>
  )
}

export default Navbar