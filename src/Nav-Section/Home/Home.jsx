import React from 'react';
import Banner from './Banner';
import Phones from '../Phones/Phones';
import { useLoaderData } from 'react-router-dom';
import UseGetPhones from '../../Hook/UseGetPhones';

const Home = () => {
    // step-1 to load data
    // const phones = useLoaderData()

    // step-2 to load data use custom data loader
    const [phones] = UseGetPhones()

    return (
        <div>
            <Banner></Banner>
            <Phones phones={phones}></Phones>
        </div>
    );
};

export default Home;