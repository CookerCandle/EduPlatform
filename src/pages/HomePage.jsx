import News from "../components/News";

const HomePage = () => {
    return(
        <>
            <div className="container mt-5">
                <h2 className="mb-4 text-center">Последние новости</h2>
                <News />    
            </div>
        </>
    );
};

export default HomePage;