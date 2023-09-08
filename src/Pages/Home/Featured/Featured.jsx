import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import featuredImg from "../../../assets/home/featured.jpg";
import "./Featured.css";

const Featured = () => {
    const today = new Date();
    const date = today.getFullYear() + '-' + today.getMonth() + "-" + today.getDate();

    return (
        <div className="featured-item bg-fixed p-16 m-16">
            <SectionTitle
                heading="Featured Item"
                subHeading="Check it out"
                className="text-blue-700"
            ></SectionTitle>
            <div className="md:flex justify-center items-center bg-slate-500 bg-opacity-50 py-8 px-16">
                <div className="m-5">
                    <img src={featuredImg} alt="" />
                </div>
                <div className="md:ml-10 text-white">
                    <p>{date}</p>
                    <p className="uppercase">Where Can I get some?</p>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Soluta, excepturi eveniet! Voluptate praesentium ea natus quisquam magni suscipit consectetur. Vero fugiat ut nemo ipsa rerum molestias laudantium aperiam voluptatem optio.</p>
                    <button className="btn btn-outline border-0 border-b-4 mt-5">Order Now</button>
                </div>
            </div>
        </div>
    );
};

export default Featured;