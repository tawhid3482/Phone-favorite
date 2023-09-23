import { useEffect, useState } from "react";

const UseGetPhones = () => {
    const [phones, setPhones] = useState()
    useEffect(() => {
        fetch('/phone.json')
            .then(res => res.json())
            .then(data => setPhones(data))
    }, [])
    return [phones]
};

export default UseGetPhones;