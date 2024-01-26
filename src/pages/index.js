// pages/index.js

import React, { useState, useRef } from "react"
import { getUsers } from './services/github';
import ProfileCard from '@/components/ProfileCard/ProfileCard';
import Paginate from '@/components/Paginate/Paginate';
import Error from "./_error";

const UserList = ({ initialUserData }) => {
  const [initalUsers, setInitialUsers] = useState(initialUserData); 
  const [searchVal, setSearchVal] = useState(""); 

  const [currentPage, setCurrentPage] = useState(1);
  const [itemPerPage,setItemPerPage] = useState(5)


  const indexOfLastUser = currentPage * itemPerPage;
  const indexOfFirstUser = indexOfLastUser - itemPerPage;
  const currentUsers = initialUserData.slice(indexOfFirstUser, indexOfLastUser);
  const [usersData, setUserData] = useState(currentUsers); 
  const ref = useRef(null);

  const paginate = async (pageNumber) => {
     setCurrentPage(pageNumber);
     const currentUsers = initialUserData.slice((pageNumber * itemPerPage) - itemPerPage, pageNumber * itemPerPage);
     setUserData(prev=> currentUsers);
     ref.current?.scrollIntoView({behavior: 'smooth'});
  }
  const previousPage = async () => {
    if (currentPage !== 1) {
      const currentUsers = initialUserData.slice(((currentPage - 1) * itemPerPage) - itemPerPage, (currentPage - 1) * itemPerPage);
      setCurrentPage(currentPage - 1);
      setUserData(prev=> currentUsers);
      ref.current?.scrollIntoView({behavior: 'smooth'});
    }
  };

  const nextPage = async () => {
    if (currentPage !== Math.ceil(initialUserData.length / itemPerPage)) {
      const currentUsers = initialUserData.slice(((currentPage + 1) * itemPerPage) - itemPerPage, (currentPage + 1) * itemPerPage);
      setCurrentPage(currentPage + 1);
      setUserData(prev=> currentUsers);
      ref.current?.scrollIntoView({behavior: 'smooth'});
    }
  }

  
    const handleSearch = (e) => {
      setSearchVal(e.target.value)
      if (e.target.value !== "") {  
        const filterBySearch = initalUsers.filter((item) => { 
            if (item.login.toLowerCase().includes(e.target.value.toLowerCase())) { return item; } 
        }) 
        setUserData(prev=>filterBySearch); 
      } else {
        const currentUsers = initialUserData.slice((currentPage * itemPerPage) - itemPerPage, currentPage * itemPerPage);
        setUserData(prev=> currentUsers);
      }
    }
    const handleItem = (e) => {
        const page = 1
        setItemPerPage(prev => e.target.value);
        setCurrentPage(prev=>1);
        const currentUsers = initialUserData.slice((page * e.target.value) - e.target.value, page * e.target.value);
        setUserData(prev=> currentUsers);
    }

  return (
    <div id="work" className='w-full h-auto md:p-6 sm:p-0 md:mt-6 sm:mt-0 flex justify-center items-center'>
            <div className='max-w-[1180px] lg:w-[90%] sm:w-full flex flex-col justify-center items-center p-3 mx-auto'>
                <div className='w-full h-auto md:p-4 sm:p-3 flex lg:flex-row sm:flex-col-reverse justify-center lg:items-start md:items-center lg:mt-6 sm:mt-3'>
                    <div ref={ref} className='w-full h-auto flex flex-col justify-center items-center md:p-3 sm:p-0'>
                        <div className='mb-6 text text-[32px] text-[#495670] dark:text-[#ccd6f6] font-semibold flex justify-start items-start'>
                            <span className='mono-font text-[24px] font-normal dark:text-[#44ed9c] text-[#fd4c74] mr-2'>01.</span>
                            <div className="flex justify-center items-center">Github User List for you to manage with pagination</div>
                        </div>
                        <div className="flex flex-row justify-between items-start w-full my-6">   
                            <div className="relative w-[80%]">
                                <input type="text" id="simple-search" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search Github User" onChange={handleSearch} required />
                            </div>
                            <select id="countries" className="ml-2 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-[20%] p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white" onChange={handleItem}>
                                <option value="5">5</option>
                                <option value="10">10</option>
                                <option value="20">20</option>
                            </select>
                        </div>
                        <div className='w-full flex flex-col justify-center items-center '>
                            <div className='w-full grid-wrapper'>
                                {
                                    usersData.length > 0 ? usersData?.map((user, index) => 
                                        <ProfileCard value={user} key={user.id} />
                                        ) : <div className='w-full dark:text-white text-lg'>No User Found</div>
                                }
                            </div>
                            { searchVal === "" && <Paginate postsPerPage={itemPerPage} totalPosts={initialUserData.length} currentPage={currentPage} paginate={paginate} previousPage={previousPage} nextPage={nextPage} />}
                        </div>
                    </div>
                </div>
            </div>
        </div>
  );
};

export const getServerSideProps = async () => {
  const initialUserData = await getUsers();
  return { props: { initialUserData } };
};

export default UserList;
