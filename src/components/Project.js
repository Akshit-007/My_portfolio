import React from 'react';
import project1 from '../Project1.png'
import project2 from '../Project2.png'
import project3 from '../Project3.png'
import project4 from '../Project4.png'

function Project() {
    return (
        <div className="w-9/10  min-h-9/10 xl:h-9/10 bg-gray-800 mx-auto mt-10 rounded-lg shadow-2xl p-8">


            <div class="inline-flex">
                <div class="flex h-4 w-4 mt-3">
                    <span class="animate-ping absolute inline-flex h-4 w-4 rounded-full bg-purple-400 opacity-75"></span>
                    <span class="relative inline-flex rounded-full h-4 w-4 bg-purple-500"></span>
                </div>
                <div className="font-mono ml-6 text-white text-3xl">PROJECT</div>



            </div>
            <div class="flex flex-row flex-wrap justify-around mt-7">
                <div className="h-72 w-60 bg-gray-200 rounded pl-4 m-2">
                    <div className="absolute">
                        <div>
                            <div className="text-purple-600"> <span class="relative inline-flex rounded-full h-2 w-2 bg-purple-500"></span> Tool</div>
                            <div> MERN STACK</div>
                        </div>
                        <div>
                            <div className="text-purple-600"> <span class="relative inline-flex rounded-full h-2 w-2 bg-purple-500"></span> Info</div>
                            <div className="w-52 text-xs"> Here you can ask your doubt and reply to anyone anomonously bycreating your account.  </div>
                            <div className="w-52 text-xs"> You can also view different community of our college and get engage with those communities</div>
                        </div>
                    </div>
                    <div className=" shadow-2xl h-56 w-52 bg-white rounded-lg  transform  duration-500 ease-in-out hover:opacity-0">
                        <img src={project4} className="w-52 h-44 rounded-lg" />
                        <div className="text-purple-600 text-2xl text-center text-mono">AskUS</div>
                    </div>
                    <div className="rounded-2xl h-8 w-40 bg-white text-purple-600 hover:bg-purple-600 hover:text-white text-xl mt-2 ml-5 text-center"><a href="https://trusting-poincare-3920dd.netlify.app/" target="_blank">VISIT</a></div>
                </div>
                <div className="h-72 w-60 bg-gray-200 rounded pl-4  m-2">
                    <div className="absolute">
                        <div>
                            <div className="text-purple-600"> <span class="relative inline-flex rounded-full h-2 w-2 bg-purple-500"></span> Tool</div>
                            <div> MERN STACK</div>
                        </div>
                        <div>
                            <div className="text-purple-600"> <span class="relative inline-flex rounded-full h-2 w-2 bg-purple-500"></span> Info</div>
                            <div className="w-52 text-xs"> This web-app focuses on crypto currencies. It shows current price of top 100 currencies in USD,INR and EUR. You can add some currency in your favourite list , for which you will get regular updates.
                                You can also set a desired value for which you will get alert by your mail. </div>
                        </div>
                    </div>
                    <div className="shadow-2xl h-56 w-52 bg-white rounded-lg transform  duration-500 ease-in-out hover:opacity-0">
                        <img src={project1} className="w-52 h-44 rounded-lg" />
                        <div className="text-purple-600 text-2xl text-center text-mono">Crypto Tracker</div>
                    </div>
                    <div className="rounded-2xl h-8 w-40 bg-white text-purple-600 hover:bg-purple-600 hover:text-white text-xl mt-2 ml-5 text-center"><a href="https://crypto-trackers.netlify.app/" target="_blank">VISIT</a></div>
                </div>
                <div className="h-72 w-60 bg-gray-200 rounded pl-4 m-2">
                    <div className="absolute">
                        <div>
                            <div className="text-purple-600"> <span class="relative inline-flex rounded-full h-2 w-2 bg-purple-500"></span> Tool</div>
                            <div> MERN STACK</div>
                        </div>
                        <div>
                            <div className="text-purple-600"> <span class="relative inline-flex rounded-full h-2 w-2 bg-purple-500"></span> Info</div>
                            <div className="w-52 text-xs"> This is a social web-app for food-blogger. You can share your food receie or your experience at some restaurant.
                                It has functionality like like others post , edit and delete your own post.  </div>
                        </div>
                    </div>
                    <div className=" shadow-2xl h-56 w-52 bg-white rounded-lg  transform  duration-500 ease-in-out hover:opacity-0">
                        <img src={project2} className="w-52 h-44 rounded-lg" />
                        <div className="text-purple-600 text-2xl text-center text-mono">Food Blog</div>
                    </div>
                    <div className="rounded-2xl h-8 w-40 bg-white text-purple-600 hover:bg-purple-600 hover:text-white text-xl mt-2 ml-5 text-center"><a href="https://food-blogs.netlify.app/" target="_blank">VISIT</a></div>
                </div>

                <div className="h-72 w-60 bg-gray-200 rounded pl-4 m-2">
                    <div className="absolute">
                        <div>
                            <div className="text-purple-600"> <span class="relative inline-flex rounded-full h-2 w-2 bg-purple-500"></span> Tool</div>
                            <div> React JS , Html ,Css ,Axios </div>
                        </div>
                        <div>
                            <div className="text-purple-600"> <span class="relative inline-flex rounded-full h-2 w-2 bg-purple-500"></span> Info</div>
                            <div className="w-52 text-xs"> If you are a pokemon lover you should try it. It is same like pokedex , where you simply just search a pokemon by its name and you will
                                get all of its info.  </div>
                        </div>
                    </div>
                    <div className="shadow-2xl h-56 w-52 bg-white rounded-lg  transform  duration-500 ease-in-out hover:opacity-0 ">
                        <img src={project3} className="w-52 h-44 rounded-lg  " />
                        <div className="text-purple-600 text-2xl text-center text-mono">Pokedex</div>
                    </div>
                    <div className="rounded-2xl h-8 w-40 bg-white text-purple-600 hover:bg-purple-600 hover:text-white text-xl mt-2 ml-5 text-center"><a href="https://akshit-007.github.io/Pokemon/" target="_blank">VISIT</a></div>
                </div>
            </div>


            <br />

        </div>
    );
}

export default Project;