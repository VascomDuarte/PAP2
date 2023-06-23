import SimpleSlider from "../Components/car"
import Header from "../Components/header"
import Cards from "../Components/teste"
import NavBar from "../Components/navbar";
import Footer from "../Components/footer";
import Info from "../Components/Info";
import Newsletter from "../Components/newsletter";

export default function home() {

    return (

        <div >
        <NavBar />

        <Info/>
            {/* <SimpleSlider /> */}
        <Cards />

        <Newsletter />

        <Footer />
        </div>
    )
}