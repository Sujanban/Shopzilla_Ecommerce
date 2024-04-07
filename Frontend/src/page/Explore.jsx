import React, { useState,useContext } from 'react'
import Sidebar from '../components/Sidebar'
import Navbar from '../components/Navbar'
import CategorySlides from '../components/CategorySlides'
import { HamContext } from '../context/HamContext'
import Card from '../components/Card'


// icon
import { MdSearch, MdTune } from "react-icons/md";
import { useNavigate } from 'react-router-dom'


const Explore = () => {
const [sortingOption, setSortingOption] = useState('');
const {toggle} = useContext(HamContext);

  const { search, product, selectedCategory, setSelectedCategory } = useContext(HamContext);
  const queryParameters = new URLSearchParams(window.location.search);
  const searchValue = queryParameters.get('search');
  const navigate = useNavigate();

  const handleReset = () => {
    setSelectedCategory('');
    navigate('/explore');
  }


  const sortedData = [...product].sort((a, b) => {
    if (sortingOption === 'highest') {
      return b.price - a.price; // Sort by highest price first
    } else if (sortingOption === 'lowest') {
      return a.price - b.price; // Sort by lowest price first
    } else {
      return 0; // Default order (no sorting)
    }
  });



  // const filteredData = sortedData.filter(item => {
  //   const matchesSearch = item.name.toLowerCase().includes(searchQuery.toLowerCase());
  //   const matchesCategory = selectedCategory === 'all' || item.category === selectedCategory;

  //   return matchesSearch && matchesCategory;
  // });

  return (
    <div className='min-h-screen'>
      <Sidebar />
      <Navbar />
      <div className={` ${toggle ? "ml-80 " : "ml-24 "}  p-6`}>
        <div className='flex justify-between items-center'>
          <h1 className=' text-xl font-medium text-green-900'>Filter By Category</h1>
          <div className='flex items-center gap-4'>
            <div className='flex items-center gap-2'>
              <h1 className='py-2'>Filter By: </h1>
              <div>
                <select className='p-2 border-none ring-none outline-none' name="" id=""
                  value={sortingOption}
                  onChange={(e) => setSortingOption(e.target.value)}
                  onClick={() => console.log(sortingOption)}>
                  <option value="">Default Order</option>
                  <option value="highest">Highest Price First</option>
                  <option value="lowest">Lowest Price First</option>
                </select>
              </div>
            </div>
            <button
              onClick={handleReset} className='flex items-center text-sm p-2 rounded-md border'><MdTune size={20} />Reset Search</button>
          </div>
        </div>
        <div className='pt-4 '>
          <CategorySlides />
        </div>

        {searchValue && <>Search term for {searchValue}</>}
        {selectedCategory &&
          <h1 className='pb-2 font-medium text-xl'>Search for {selectedCategory[0].toUpperCase() + selectedCategory.substring(1)}</h1>
        }
        <div className=''>
          <div className={` ${!toggle ? 'my-2 grid grid-cols-5 gap-2' : 'my-2 grid grid-cols-4 gap-2'}`}>






            {
              searchValue
                ?
                product && product.filter((item) => item.title.toLowerCase().includes(searchValue.toLowerCase())).map((pro, i) => (
                  <Card pro={pro} key={i} />
                ))
                :
                selectedCategory
                  ?
                  product && product.filter((item) => item.brand === selectedCategory).map((pro, i) => (
                    <Card pro={pro} key={i} />
                  ))
                  :
                  product && product.map((pro, i) => (
                    <Card pro={pro} key={i} />
                  ))
            }

            {/* {
              sortedData ? sortedData.map((pro, i) => (
                <Card pro={pro} key={i} />
              )):<></>
            } */}

          </div>
          {/* <button className='flex items-center mx-auto border-2 border-[#0400DA] text-black rounded-md px-3 py-2 text-xs'>View more<MdArrowRightAlt size={20} /></button> */}
        </div>
      </div>
    </div>
  )
}

export default Explore