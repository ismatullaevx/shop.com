
import Customer from "../components/Customer";
import DressStyle from "../components/DressStyle";
import Header from "../components/Header";
import HomeStart from "../components/HomeStart";
import Login from "../components/login";
import ProductSections from "../components/ProductSections";
import TopSelling from "../components/TopSelling";



const Home = ({ search }) => {

    return (
        <div>

            <HomeStart />
            <ProductSections search={search} />
            <TopSelling search={search} />
            <DressStyle />
            <Customer />
            <Login />
        </div>
    );
}

export default Home;
