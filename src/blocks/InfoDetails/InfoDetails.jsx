import React from 'react'

const InfoDetails = (props) => {
  const { value } = props
  return (
    <section>
      <div className="px-4 py-8 mx-auto">
          <div className="grid gap-4 mb-4 sm:grid-cols-2 sm:gap-6 sm:mb-5">
              <div className="sm:col-span-2">
                  <label htmlFor="name" className="block mb-2 text-lg font-medium text-gray-900 dark:text-white">User Name</label>
                  <input type="text" name="name" id="name" className="bg-gray-50 border border-gray-300 text-gray-900 text-lg rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" value={value?.name || ""} placeholder="name" disabled />
              </div>
              <div className="w-full sm:col-span-2 col-span-1">
                  <label htmlFor="email" className="block mb-2 text-lg font-medium text-gray-900 dark:text-white">email</label>
                  <input type="text" name="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 text-lg rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" value={value?.email || ""} placeholder="Email" disabled />
              </div>
              <div className="w-full sm:col-span-2 col-span-1">
                  <label htmlFor="organisation" className="block mb-2 text-lg font-medium text-gray-900 dark:text-white">Organisation</label>
                  <input type="text" name="organisation" id="organisation" className="bg-gray-50 border border-gray-300 text-gray-900 text-lg rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" value={value?.company || ""} placeholder="CloudBees" disabled />
              </div>
              <div className='sm:col-span-2 md:col-span-1'>
                <label htmlFor="plan" className="block mb-2 text-lg font-medium text-gray-900 dark:text-white">Plan</label>
                    <input type="text" name="plan" id="plan" className="bg-gray-50 border border-gray-300 text-gray-900 text-lg rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" value={value?.plan?.name || ""} placeholder="Plan" disabled />
                </div>
              <div className='sm:col-span-2 md:col-span-1'>
                  <label htmlFor="location" className="block mb-2 text-lg font-medium text-gray-900 dark:text-white">Location</label>
                  <input type="text" name="location" id="location" className="bg-gray-50 border border-gray-300 text-gray-900 text-lg rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" value={value?.location || ""} placeholder="Chennai" disabled />
              </div> 
          </div>
        </div>
      </section>
  )
}

export default InfoDetails