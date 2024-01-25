// pages/user/[username].js
import { Fragment } from "react";
import { useRouter } from 'next/router';
import Link from 'next/link';
import { getUsers, getUserDetails, getRepoDetails } from '../services/github';
import { InfoDetails, Repostories } from "@/blocks";

const UserDetails = ({ user, repos }) => {
  const router = useRouter();
  if (router.isFallback) {
    return <p>Loading...</p>;
  }
  const getReposrender = () => {
    if(repos.length > 0){
        return <Repostories value={repos} />
    } else {
        return <div className='w-full text-lg dark:text-white'>No Repostories found</div>
    }
  }

  return (
    <Fragment>
        <div className='w-full h-auto p-6 mt-6 flex justify-center items-center'>
            <div className='max-w-[1180px] sm:w-full flex flex-col justify-start items-start p-3 mx-auto'>
                <div className='flex mr-2 text-2xl dark:font-medium font-semibold dark:text-[#44ed9c] text-[#fd4c74] text-uppercase w-auto text-left underlined'>{user?.login}</div>
                <div className='md:mt-4 sm:mt-6 w-full flex md:flex-row sm:flex-col item-center'>
                    <div className='md:w-[30%] border-r-2 border-white sm:w-full flex flex-col p-2'>
                    <div className="w-full px-3 py-3 text-center rounded-lg lg:mt-0 ">
                        <div className="space-y-4 xl:space-y-6">
                            <img className="mx-auto rounded-full h-44 w-44" src={user.avatar_url} alt={`${user.login}'s avatar`} />
                            <div className="space-y-2">
                                <div className="w-full flex justify-center items-center flex-col space-y-6 text-lg font-medium leading-6">
                                    <div className="w-full flex flex-col justify-center items-center">
                                        <h3 className="text-indigo-300  text-xl">{user?.login}</h3>
                                        <p className="text-white text-2xl">{user?.name}</p>
                                        <p className="text-white text-lg">{user?.bio}</p>
                                    </div>
                                    <div className="w-full flex px-2 justify-between mt-10 space-x-5">
                                        <div className="flex flex-col justify-center items-center">
                                            <h3 className="text-white text-2xl">{user?.followers}</h3>
                                            <p className="text-gray-400 text-xl">Follower</p>
                                        </div>
                                        <div className="flex flex-col justify-center items-center">
                                            <h3 className="text-white text-2xl">{user?.following}</h3>
                                            <p className="text-gray-400 text-xl">Following</p>
                                        </div>
                                        <div className="flex flex-col justify-center items-center">
                                            <h3 className="text-white text-2xl">{user?.public_repos}</h3>
                                            <p className="text-gray-400 text-xl">Repos</p>
                                        </div>
                                    </div>
                                    <Link href={user?.html_url} target="_blank" rel="noopener noreferrer" className="text-white flex justify-center w-[75%] border-[#44ed9c] py-2 border rounded-md hover:bg-white hover:text-[#44ed9c]">Edit Profile</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                    </div>
                    <div className='sm:mb-4 md:mb-0 md:ml-4 sm:w-full flex flex-col justify-start p-2 divide-y'>
                        <div className="flex flex-col lg:mr-2">
                            <div className='flex text-xl dark:font-medium font-semibold dark:text-[#44ed9c] text-[#fd4c74] text-uppercase w-auto text-left underlined'>Personal Information</div>
                            <InfoDetails value={user} />
                        </div>
                        <div className="flex flex-col lg:mr-2">
                            <div className='flex  text-xl dark:font-medium font-semibold dark:text-[#44ed9c] text-[#fd4c74] text-uppercase w-auto text-left underlined mt-4'>Repostories</div>
                            {getReposrender()}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </Fragment>
  );
};

export const getStaticPaths = async () => {
  // Pre-render pages for each user
  const users = await getUsers();
  const paths = users.map((user) => ({ params: { username: user.login } }));
  return { paths, fallback: true };
};

export const getStaticProps = async ({ params }) => {
  const user = await getUserDetails(params.username);
  const repos = await getRepoDetails(params.username);
  return { props: { user, repos }, revalidate: 1 };
};

export default UserDetails;
