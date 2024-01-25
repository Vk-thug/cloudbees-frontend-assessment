// pages/index.js
import React, { useState, useRef, useEffect } from "react"
import ProfileCard from '@/components/ProfileCard/ProfileCard';
import { getUsersByLimit } from "../services/github";

const UserScroll = ({ initialUsers  }) => {
    const [users, setUsers] = useState(initialUsers);
    const [page, setPage] = useState(1);
    const [loading, setLoading] = useState(false);
    const observer = useRef();
    const fetchMoreUsers = async () => {
        if (loading) return <div className="w-full dark:text-white">Loading...</div>;
        try {
          setLoading(true);
          const newUsers = await getUsersByLimit(page + 1, 10);
          setUsers((prevUsers) => [...prevUsers, ...newUsers]);
          setPage((prevPage) => prevPage + 1);
        } catch (error) {
          console.error('Error fetching more users:', error);
        } finally {
          setLoading(false);
        }
      };
      useEffect(() => {
        observer.current = new IntersectionObserver((entries) => {
          if (entries[0].isIntersecting) {
            fetchMoreUsers();
          }
        });
        observer.current.observe(document.querySelector('#observer'));
        return () => {
          observer.current.disconnect();
        };
      }, []);
  return (
    <div id="work" className='w-full h-auto md:p-6 sm:p-0 md:mt-6 sm:mt-0 flex justify-center items-center'>
            <div className='max-w-[1180px] lg:w-[90%] sm:w-full flex flex-col justify-center items-center p-3 mx-auto'>
                <div className='w-full h-auto md:p-4 sm:p-3 flex lg:flex-row sm:flex-col-reverse justify-center lg:items-start md:items-center lg:mt-6 sm:mt-3'>
                    <div className='w-full h-auto flex flex-col justify-center items-center md:p-3 sm:p-0'>
                        <div href="#contact" className='mb-6 text text-[32px] text-[#495670] dark:text-[#ccd6f6] font-semibold flex justify-start items-start'>
                            <span className='mono-font text-[24px] font-normal dark:text-[#44ed9c] text-[#fd4c74] mr-2'>02.</span>
                            <div className="flex justify-center items-center">Github User List for you to manage in Infinite Scroll Effect</div>
                        </div> 
                        <div className='w-full flex flex-col justify-center items-center '>
                            <div className='w-full grid-wrapper'>
                                {
                                    users.length > 0 ? users?.map((user, index) => <ProfileCard value={user} key={user.id} />) : <div className='w-full dark:text-white text-lg'>No User Found</div>
                                }
                            </div>
                               <button onClick={fetchMoreUsers} className="my-6" disabled={loading}>{loading ? 'Loading...' : 'Load More'}</button>
                               <div id="observer" style={{ height: '10px' }} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
  );
};

export const getStaticProps = async () => {
    const initialUsers = await getUsersByLimit(1,10); // Fetch initial users for the first page
    return { props: { initialUsers } };
};

export default UserScroll;
