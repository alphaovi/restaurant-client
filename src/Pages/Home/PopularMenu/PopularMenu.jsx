
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import MenuItem from "../../Shared/MenuItem/MenuItem";
import useMenu from "../../../hooks/useMenu";

const PopularMenu = () => {
    const [menu] = useMenu();
    const popular = menu.filter(item => item.category === "popular");
    return (
        <section>
            <SectionTitle
            subHeading="Popular Items"
            heading="From our menu"
            ></SectionTitle>
            <div className="grid md:grid-cols-2 gap-4 mb-4">
               {
                popular.map(item => <MenuItem
                key={item._id}
                item={item}
                ></MenuItem>)
               }
            </div>

        </section>
    );
};

export default PopularMenu;