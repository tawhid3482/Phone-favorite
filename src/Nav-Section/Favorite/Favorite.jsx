import { useEffect, useState } from "react";
import swal from "sweetalert";
import PhnCard from "../Phones/PhnCard";
import FavoriteCard from "./FavoriteCard";

const Favorite = () => {
    const [favorite, setFavorite] = useState([])
    const [noData, setNoData] = useState(false)
    const [seeMore, setSeeMore] = useState(false)
    const [totalPrice, setTotalPrice] = useState(0)
    useEffect(() => {
        const favoriteItem = JSON.parse(localStorage.getItem('fav'))
        if (favoriteItem) {
            setFavorite(favoriteItem)

            const total = favoriteItem.reduce((pValue ,cValue) => pValue + cValue.price, 0)
            setTotalPrice(total)
        }
        else {
            setNoData('No data found')
        }

    }, [])
    const handleRemove = () => {
        localStorage.clear()
        setFavorite([])
        setNoData('No data found')
    }
    return (
        <div>
            {
                noData ? <p className=" text-4xl font-semibold flex justify-center items-center h-[80vh]">{noData}</p> : <div className="">
                    <div className="text-right my-5 ">
                        {favorite.length > 0 && <button onClick={handleRemove} className="btn bg-blue-500 text-white"> all Favorite delete</button>}
                        <p>Total Price:{totalPrice}</p>
                    </div>
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
                        {
                            seeMore ? favorite?.map(phone => <FavoriteCard key={phone.id} phone={phone}></FavoriteCard>) :
                                favorite.slice(0, 4).map(phone => <FavoriteCard key={phone.id} phone={phone}></FavoriteCard>)
                        }
                    </div>
                    <div className="text-center my-5">
                        {
                            favorite.length > 4 && < button onClick={() => setSeeMore(!seeMore)} className="btn bg-blue-500 text-white">
                                {seeMore ? 'see less' : 'see more'}</button>
                        }
                    </div>

                </div>

            }

        </div >
    );
};

export default Favorite;