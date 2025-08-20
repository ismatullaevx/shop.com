
import Customer from "../components/Customer";
import DressStyle from "../components/DressStyle";

import HomeStart from "../components/HomeStart";

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

        </div>
    );
}

export default Home;
