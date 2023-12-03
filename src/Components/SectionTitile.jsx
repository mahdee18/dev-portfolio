const SectionTitle = ({title, subtitle}) => {
    return (
        <div  data-aos="fade-right" className="text-white mt-14 mb-6">
            <h1 className="text-3xl md:text-5xl font-bold">{title} <span className="text-accent">{subtitle}</span></h1>
            <div className="bg-accent h-2 rounded-full my-4 w-2/12 inline-block"></div>
            <div className="bg-white h-2 w-2 rounded-full my-4 inline-block ml-2"></div>
            <div className="bg-accent h-2 w-2 rounded-full my-4 inline-block ml-2"></div>
            <div className="bg-white h-2 w-2 rounded-full my-4 inline-block ml-2"></div>
        </div>
    );
};

export default SectionTitle;