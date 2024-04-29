

import React from 'react';
import img from "/public/5d6ba50f5e5603476fbd5f4a0bf0c100.png"
import { IoIosArrowBack ,IoIosArrowForward  } from "react-icons/io";
import { HiArrowsUpDown } from "react-icons/hi2";
import { FaAngleDown, FaAngleUp } from "react-icons/fa";
import { GiFireBowl } from "react-icons/gi";
import "./postPages.css";



const PostPages = async () => {



    const res = await fetch("http://localhost:5000/posts");
    const posts = await res.json();




    return (
        <div className="bg-gray-100">
            <div className="overflow-x-auto px-10">
                <table className="table-auto  border-collapse border-separate border-spacing-y-5  " >
                    <thead>
                        <tr className="box-border forRow ">
                            <td className="text-center p-4">
                                <input type="checkbox" />
                            </td>
                            <th className="text-left pl-20 p-2  "><div className='flex'>Name
                                <div className='wrapper '>

                                    <FaAngleUp />
                                    <FaAngleDown />
                                </div>
                            </div>

                            </th>
                            <th className=" text-left pl-5 p-2 "><div className='flex'>Benefit Type<div className='wrapper '>

                                <FaAngleUp />
                                <FaAngleDown />
                            </div></div>

                            </th>
                            <th className="text-center p-2 pl-10 "><div className='flex'>Total Plan<div className='wrapper '>

                                <FaAngleUp />
                                <FaAngleDown />
                            </div></div>

                            </th>
                            <th className="text-center p-2 pl-10"><div className='flex'>Total Left<div className='wrapper '>

                                <FaAngleUp />
                                <FaAngleDown />
                            </div></div>

                            </th>
                            <th className=" text-center p-2 pl-10 "><div className='flex'>Date<div className='wrapper '>

                                <FaAngleUp />
                                <FaAngleDown />
                            </div></div>

                            </th>
                            <th className=" text-center p-2 pl-3 "><div className='flex'>Status</div>
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {posts.map((post, index) => (
                            <tr key={index} className={`hover:bg-gray-200 transition-colors duration-200 bg-white p-4 rounded-lg forRow overflow-hidden`}>
                                <td className="text-center rounded-l-lg p-4">
                                    <input type="checkbox" />
                                </td>
                                <td className="text-center  p-4">
                                    <div className="flex items-center">
                                        <div className="w-10 h-10 bg-gray-300 rounded-full overflow-hidden mr-4">
                                            {/* <img src={img} alt="Profile" className="w-full h-full object-cover" /> */}
                                            <img src="https://s3-alpha-sig.figma.com/img/eede/4465/5d6ba50f5e5603476fbd5f4a0bf0c100?Expires=1714953600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=ovHREyNhfi~DMJ-ZA9qw6SGTXwuJrEd6zdsKaqaFh51mw6iHq3BCxGHz6NiMxzuuX59StN9XmlSAj0TblPWSA-HYtVcSI7W3ln6VgJ-ml~~Am3d7if9wx3u6KH6HJcLpxAxWwPGqVsFfmrcWcfjgwZ7Q62m19~f0CL-y96j-EzeDziGIYGc~IPSSQKV2qoe9Xd981om1Zz8miR5F7AVGTTpc3i1gzJzhquxQ4GHb7N70BaKjqVWoTCHzam4LVzieFHwMK0rQbXhsRGbX67UxaSb1PbiheoLFWUEwZsEbUf92~pL7wrytffUJrf0bQPnug8bA6eFMxk~IwQ9woJaKdQ__" alt="Profile" className=" h-full forImg object-cover" />
                                        </div>
                                        <div className="flex flex-col">
                                            <p className="font-semibold">{post.name}</p>
                                            <p className="text-sm text-left text-gray-600">${post.number}</p>
                                        </div>
                                    </div>
                                </td>
                                <td className="text-center p-4">
                                    <div className="flex items-center">
                                        < GiFireBowl className='forBack  icon mr-2' />
                                        <span>{post.benefit_type}</span>
                                    </div>
                                </td>
                                <td className="text-center  p-4">{post.total_pain}</td>
                                <td className="text-center  p-4">{post.total_left}</td>
                                <td className="text-center  p-4">{post.date}</td>
                                <td className="text-center rounded-r-lg p-4 text-fuchsia-800">{post.status}</td>
                            </tr>

                        ))}
                    </tbody>
                </table>
            </div>
            <div className="flex justify-center mb-4  forPage ">
                <button className="mr-2">
                <IoIosArrowBack />
                </button>
                <span className='pageNumber mx-2'> 1</span>
                <span className='pageNumber mx-2'> 2</span>
                <span className='pageNumber mx-2'> 3</span>
                <span className='pageNumber mx-2'> 4</span>
                <span className='pageNumber mx-2'> 5</span>
                <span className='pageNumber mx-2'> 6</span>
                <button className="ml-2">
                <IoIosArrowForward />
                </button>
            </div>


        </div>
    );
};

export default PostPages;