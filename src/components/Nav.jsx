
const Nav = () => {

  return (
    <div className="bg-top-left">
    <div className="bg-[#fff8f3]">
        <nav className="flex justify-between items-center mx-52 py-4">
            <h3 className="text-4xl font-extrabold">Ma<span className="text-[#fd6e0b]">r</span>ks</h3>
            <ul className="flex space-x-12">
                <li>Portfolio</li>
                <li>Blog</li>
                <li><a href="#"><button className="bg-[#fd6e0b] text-white py-4 px-8 rounded-lg">Hire Me</button></a></li>
            </ul>
        </nav>
        <div className="flex justify-between mx-[50px] lg:mx-52 mt-12">
            <div>
                <h4 className="text-4xl font-semibold">Hi, I am</h4>
                <h1 className="text-6xl font-extrabold mt-4">Mary Hardy</h1>
                <p className="text-lg text-gray-500 mt-6">Shot what able cold new see hold. Friendly as an betrayed formerly he. Morning because as to society behaved moments.</p>
                <div className="flex space-x-4 mt-8">
                    <button className="bg-[#fd6e0b] text-white py-4 px-8 rounded-lg">Download CV</button>
                    <button className="bg-[#fd6e0b] text-white py-4 px-8 rounded-lg flex items-center space-x-2">
                        <i className="bi bi-telephone-fill"></i> Contact
                    </button>
                </div>
            </div>
            <img className="w-96" src="src/assets/hardy.png" alt="Profile Picture of Hardy"/>
        </div>
        

    </div>
    </div>
  );
};

export default Nav;
