const Intro = () => {
    return (

        <div className="bg-[#fff8f3] py-24 px-12 text-center rounded-lg mt-24">
            <h3 className="text-4xl font-extrabold mb-8">About Me</h3>
            <p className="text-gray-500 mb-16">I'm a designer & developer with a passion for web design. I enjoy developing simple, clean, and slick websites that provide real value to the end user. Thousands of clients have procured exceptional results while working with me. Delivering work within time and budget which meets clients' requirements is my motto.</p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                <div>
                    <p className="text-gray-500 text-lg">Name:</p>
                    <p className="text-xl">Mary Hardy</p>
                </div>
                <div>
                    <p className="text-gray-500 text-lg">Email:</p>
                    <p className="text-xl">info@gmail.com</p>
                </div>
                <div>
                    <p className="text-gray-500 text-lg">Date of birth:</p>
                    <p className="text-xl">11 November 1987</p>
                </div>
                <div>
                    <p className="text-gray-500 text-lg">From:</p>
                    <p className="text-xl">Los Angeles, USA</p>
                </div>
            </div>
        </div>
    );
};

export default Intro;