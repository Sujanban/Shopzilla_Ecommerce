import React, {useContext} from 'react'
import Sidebar from '../components/Sidebar'
import Navbar from '../components/Navbar'
import { HamContext } from '../context/HamContext';
import Card from '../components/Card';

const Saved = () => {
    const {toggle,saved} = useContext(HamContext);
    return (
        <div>
            <Sidebar />
            <Navbar />
            <div className={`${toggle ? "ml-80 grid-cols-4" : "ml-24 grid-cols-5"} p-6 grid  items-center flex-wrap gap-4`}>
                {saved.length > 0 ? saved.map((item) => (
                    <Card pro={item} />
                )) : <>Favourite list is empty.</>}
            </div>
        </div>
    )
}

export default Saved