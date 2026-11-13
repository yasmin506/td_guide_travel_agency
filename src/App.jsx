
import "./App.css";
import Header from"./components/Header/Header";
import Destinations from"./components/Destinations/Destinations";
import Footer from"./components/Footer/Footer";

function App(){
    return(
        <div className={App}>
            <Header/>
                <main>
                    <Destinations/>
                </main>
            <Footer/>
        </div>
    );
}export default App;