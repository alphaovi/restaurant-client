import { Helmet } from 'react-helmet-async';
import Cover from '../../Shared/Cover/Cover';
import useMenu from '../../../hooks/useMenu';
import SectionTitle from '../../../components/SectionTitle/SectionTitle';
import MenuCategory from '../MenuCategory/MenuCategory';

import bannerImage from "../../../assets/menu/banner3.jpg"
import desertImg from "../../../assets/menu/dessert-bg.jpeg"
import pizzaImg from "../../../assets/menu/pizza-bg.jpg";
// import saladImg from "../../../assets/menu/salad-bg.jpg";
// import soupImg from "../../assets/menu/soup-bg.jpg"



const Menu = () => {
    const [menu] = useMenu();
    const pizza = menu.filter(item => item.category === "pizza");
    const desserts = menu.filter(item => item.category === "dessert");
    const offered = menu.filter(item => item.category === "offered");

    return (
        <div>
            <Helmet>
                <title>Bistro Boss | Menu</title>
            </Helmet>
            <Cover
                img={bannerImage}
                title={"Our Menu"}
            ></Cover>
            {/* Main Cover */}
            <SectionTitle subHeading={"Don't Miss"} heading={"Today's Offer"}></SectionTitle>

            {/* offered items */}
            <MenuCategory items={offered}></MenuCategory>

            {/* dessert items */}
            <MenuCategory
                items={desserts}
                title={"Desserts"}
                img={desertImg}
            ></MenuCategory>

            {/* Pizza Items */}
            <MenuCategory
                items={pizza}
                title={"Pizzas"}
                img={pizzaImg}
            ></MenuCategory>

            
            {/* <MenuCategory
                items={salad}
                title={"salads"}
                img={saladImg}
            ></MenuCategory> */}


            
            {/* <MenuCategory
                items={soup}
                title={"soups"}
                img={soupImg}
            ></MenuCategory> */}


        </div>
    );
};

export default Menu;