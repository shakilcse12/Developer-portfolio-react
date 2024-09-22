const Footer = () => {
    return (
        <div className="bg-[#fff8f3] py-24 px-12 grid grid-cols-1 md:grid-cols-2 gap-16">
        <div>
            <h4 className="text-4xl font-extrabold mb-8">Let's Connect</h4>
            <p className="text-gray-500 mb-12">Please fill out the form on this section to contact with me or call between 9:00 A.M and 8.00 P.M ET, Monday through Friday.</p>
            <div className="flex space-x-4">
                <a href="#"><img src="images/icons/facebook.png" alt=""/></a>
                <a href="#"><img src="images/icons/twitter.png" alt=""/></a>
                <a href="#"><img src="images/icons/insta.png" alt=""/></a>
            </div>
        </div>
        <div>
            <h4 className="text-4xl font-extrabold mb-8">Let's Message Me</h4>
            <form action="#">
                <input className="block w-full p-4 mb-6 rounded-lg bg-white border border-gray-300" type="text" placeholder="Your name"/>
                <input className="block w-full p-4 mb-6 rounded-lg bg-white border border-gray-300" type="email" placeholder="Your Email"/>
                <textarea className="block w-full p-4 mb-6 rounded-lg bg-white border border-gray-300" cols="30" rows="10" placeholder="Message"></textarea>
                <button className="bg-[#fd6e0b] text-white py-4 px-8 rounded-lg w-full">Submit</button>
            </form>
        </div>
    </div>
    );
};

export default Footer;