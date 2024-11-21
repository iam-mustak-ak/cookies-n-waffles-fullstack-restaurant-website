import OfferCard from "./common/offerCard";

const Offer = () => {
    return (
        <div>
            <h4 className="bg-none bg-primary/5  outline-none text-2xl p-5 font-medium w-full my-6">
                Offer
            </h4>
            <div className="flex flex-col gap-4">
                {[...Array(4)].map((offer, i) => (
                    <OfferCard key={i} />
                ))}
            </div>
        </div>
    );
};

export default Offer;
