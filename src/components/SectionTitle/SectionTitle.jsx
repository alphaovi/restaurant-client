
const SectionTitle = ({heading, subHeading}) => {
    return (
        <div className="mx-auto w-4/12 text-center my-4 mt-5">
            <p className="text-yellow-500 mb-2">---{subHeading}---</p>
            <h3 className="text-3xl font-bold border-y-4 py-4 uppercase ">{heading}</h3>
            
        </div>
    );
};

export default SectionTitle;