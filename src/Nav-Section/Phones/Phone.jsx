import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import PhnCard from "./PhnCard";

const Phone = () => {
    const [phone, setPhone] = useState()
    const phones = useLoaderData()
    const { id } = useParams()
    useEffect(() => {
        const findPhone = phones?.find(phone => phone.id === id)
        setPhone(findPhone)
    }, [id, phones])

    return (
        <div>
           <PhnCard phone={phone}></PhnCard>
        </div>
    );
};

export default Phone;