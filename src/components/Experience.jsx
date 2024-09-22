const Experience = () => {
    return (
        <div className="mt-24">
            <h3 className="text-4xl font-extrabold text-center mb-8">What I Do</h3>
            <p className="text-center text-gray-500 mb-16">I have more than 10 years experience building software for clients all over the world. Below is a quick overview of my main technical skill sets and technologies I use.</p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                <div className="bg-white shadow-md rounded-lg p-6">
                    <img src="images/icons/js.png" alt=""/>
                    <h4 className="text-2xl font-bold mt-4">Vanilla JavaScript</h4>
                    <p className="text-gray-500 mt-2">Aenean commodo ligula eget dolor. List skill/technologies here.</p>
                </div>
                <div className="bg-white shadow-md rounded-lg p-6">
                    <img src="images/icons/react.png" alt=""/>
                    <h4 className="text-2xl font-bold mt-4">React</h4>
                    <p className="text-gray-500 mt-2">Aenean commodo ligula eget dolor. List skill/technologies here.</p>
                </div>
                <div className="bg-white shadow-md rounded-lg p-6">
                    <img src="images/icons/nodejs.png" alt=""/>
                    <h4 className="text-2xl font-bold mt-4">Node JS</h4>
                    <p className="text-gray-500 mt-2">Aenean commodo ligula eget dolor. List skill/technologies here.</p>
                </div>
                <div className="bg-white shadow-md rounded-lg p-6">
                    <img src="images/icons/mongo.png" alt=""/>
                    <h4 className="text-2xl font-bold mt-4">MongoDB</h4>
                    <p className="text-gray-500 mt-2">Aenean commodo ligula eget dolor. List skill/technologies here.</p>
                </div>
            </div>
        </div>
    );
};

export default Experience;