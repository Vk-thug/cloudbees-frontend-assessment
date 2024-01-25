import React, { useState, useEffect } from 'react';
import { RepostoriesItem } from '../../components';

const Repostories = (props) => {
    const { value } = props
    const [repos, setRepos] = useState(value); 
    const [initalRepos, setInitialRepos] = useState(value); 
    const [searchVal, setSearchVal] = useState(""); 

    const handleSearch = (e) => {
      setSearchVal(e.target.value)
      if (searchVal === "") { setRepos(initalRepos); return; } 
        const filterBySearch = initalRepos.filter((item) => { 
            if (item.name.toLowerCase().includes(e.target.value.toLowerCase())) { return item; } 
        }) 
        setRepos(filterBySearch); 
    }
    const handleSort = (e) => {
        const Sortby = e.target.value
        const sortData = initalRepos.sort((a, b) => {
            return Sortby === "name" ? a.name.localeCompare(b.name) : Date.parse(b.pushed_at) - Date.parse(a.pushed_at)
        });
        setRepos(sortData);
        console.log(repos) 
    }
    useEffect(() => {
    }, [repos]);
  return (
    <div className='w-full h-auto flex flex-col justify-center items-center'>
        <div className="flex flex-row justify-between items-start w-full my-6">   
            <div className="relative w-[80%]">
                <input type="text" id="simple-search" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="find the repository..." onChange={handleSearch} required />
            </div>
            <select id="countries" className="ml-2 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-[20%] p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white" onChange={handleSort}>
                <option value="">Sort by</option>
                <option value="name">Name</option>
                <option value="updated">Last Updated</option>
            </select>
        </div>
        <div className='w-full flex flex-row justify-start items-start '>
            <div className='w-full'>
                {
                    repos.length > 0 && repos?.map((repo, index) => 
                            <RepostoriesItem value={repo} key={repo.id} />
                        ) 
                }
            </div>
        </div>
    </div>
  )
}

export default Repostories