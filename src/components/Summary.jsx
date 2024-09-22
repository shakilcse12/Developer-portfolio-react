const Summary = () => {
    return (
        <div className="mt-24">
            <h3 className="text-4xl font-extrabold text-center mb-8">A summary of My Resume</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                    <h4 className="text-2xl font-extrabold mb-4">My Education</h4>
                    <div className="mb-8">
                        <h5 className="text-xl font-semibold">Master in Computer Engineering</h5>
                        <p className="text-gray-500 mb-2">Harvard University / 2015 - 2017</p>
                        <p>Aenean commodo ligula eget dolor. List skill/technologies here.</p>
                    </div>
                </div>
                <div>
                    <h4 className="text-2xl font-extrabold mb-4">My Experience</h4>
                    <div className="mb-8">
                        <h5 className="text-xl font-semibold">Sr. Frontend Developer</h5>
                        <p className="text-gray-500 mb-2">Apple Inc / 2020 - Current</p>
                        <p>Aenean commodo ligula eget dolor. List skill/technologies here.</p>
                    </div>
                </div>
            </div>
            <div className="text-center mt-12">
                <button className="bg-[#fd6e0b] text-white py-4 px-8 rounded-lg"><i className="bi bi-download"></i> Download CV</button>
            </div>
        </div>
    );
};

export default Summary;