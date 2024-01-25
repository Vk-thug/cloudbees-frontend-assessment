import React from 'react';
import Link from 'next/link';


const ProfileCard = (props) => {
    const { value } = props;
  return (
    <div className="px-6 py-6  text-center bg-[#112240] rounded-lg lg:mt-0 ">
    <div className="space-y-4 xl:space-y-6">
        <img className="mx-auto rounded-full h-24 w-24" src={value.avatar_url} alt={`${value.login}'s avatar`} />
        <div className="space-y-2">
            <div className="flex justify-center items-center flex-col space-y-6 text-lg font-medium leading-6">
                <div className="flex flex-col justify-center items-center">
                    <h3 className="text-white">{value.login}</h3>
                </div>
                <Link href={`/user/${value.login}`} target="_blank" rel="noopener noreferrer" className="text-white flex justify-center w-[75%] border-[#44ed9c] py-2 border rounded-md hover:bg-white hover:text-[#44ed9c]">View Profile</Link>
            </div>
        </div>
    </div>
</div>
  )
}

export default ProfileCard