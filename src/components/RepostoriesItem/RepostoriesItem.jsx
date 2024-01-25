import React from 'react'
import { MdOutlineFileDownload } from "react-icons/md";
const RepostoriesItem = (props) => {
    const { value } = props
    if(value === undefined) {
        return null
    }
    function convertDate(dateString) {
        const date = new Date(dateString);
        const options = { weekday: 'long', month: 'long', day: 'numeric', year: "numeric", };
        return date.toLocaleDateString('en-US', options);
    }
  return (
    <div className='w-full flex flex-row justify-between items-start border-b-[1px] border-gray-500 pb-4 mt-6'>
        <div className='title flex- flex-row justify-start items-center space-y-2'>
            <div className='repo-title text-2xl text-blue-700 flex items-center'>
                <p className='mr-2 mt-1'>{value?.name || ""}</p>
                <span className='border rounded-xl text-xs text-white border-gray-500 px-2 py-1 '>{value?.visibility}</span>
            </div>
            <div className='repo-desc text-lg'>{value?.description}</div>
            <div className='repo-desc mt-[8px] text-[14px]'>Updated on {convertDate(value?.pushed_at)}</div>
        </div>
        <div className='group w-[35px] h-[35px] flex items-center hover:bg-blue-700 p-1'>
            <MdOutlineFileDownload className='w-full h-full group-hover:text-white' />
        </div>
    </div>
  )
}

export default RepostoriesItem