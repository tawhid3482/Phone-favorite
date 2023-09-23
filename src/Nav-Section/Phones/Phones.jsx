import PhoneCard from "./PhoneCard";

const Phones = ({phones}) => {
    return (
        <div className="mt-5">
            <div className="text-center font-semibold text-3xl
            ">
                <p>Phone Category</p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3">
                {
                    phones?.map(phone =><PhoneCard key={phone.id} phone={phone}></PhoneCard>)
                }
            </div>
        </div>
    );
};

export default Phones;