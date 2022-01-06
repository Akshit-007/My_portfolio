import React, { useState } from 'react';
import $ from 'jquery';
import './Tools.css';
import { DiReact } from "react-icons/di";
import { DiBootstrap } from "react-icons/di";
import { DiCss3 } from "react-icons/di";
import { DiHtml5 } from "react-icons/di";
import { DiJavascript1 } from "react-icons/di";
import { DiJqueryLogo } from "react-icons/di";
import { DiNodejsSmall } from "react-icons/di";
import { DiMongodb } from "react-icons/di";
import { DiGithubBadge } from "react-icons/di";
import { DiHeroku } from "react-icons/di";
import { DiVisualstudio } from "react-icons/di";
import { SiTailwindcss } from "react-icons/si";
import { SiJsonwebtokens } from "react-icons/si";
import { SiFirebase } from "react-icons/si";
import { SiPostman } from "react-icons/si";
import { SiNetlify } from "react-icons/si";

function Tools() {

    const [tool, settool] = useState('frontend');

    const fendactive = () => {

        $('.active').removeClass('active');
        $('.fend').addClass('active');
        settool('frontend')


    }

    const bendactive = () => {

        $('.active').removeClass('active');
        $('.bend').addClass('active');
        settool('backend')


    }
    const toolactive = () => {

        $('.active').removeClass('active');
        $('.tool').addClass('active');
        settool('tools')
    }
    return (
        <div className="w-9/10  min-h-9/10 xl:h-9/10  bg-gray-800 mx-auto mt-10 rounded-lg shadow-2xl p-8">


            <div class="inline-flex">
                <div class="flex h-4 w-4 mt-3">
                    <span class="animate-ping absolute inline-flex h-4 w-4 rounded-full bg-purple-400 opacity-75"></span>
                    <span class="relative inline-flex rounded-full h-4 w-4 bg-purple-500"></span>
                </div>
                <div className="font-mono ml-6 text-white text-3xl">TOOLS</div>
            </div>

            <div class="flex flex-col lg:flex-row m-10">
                <div className="fend text-white w-24 text-lg text-mono active cursor-pointertext-left lg:text-center" onClick={fendactive}>Front-End</div>
                <div className="bend text-white w-24 text-lg text-mono cursor-pointer text-left lg:text-center" onClick={bendactive}> Back-End </div>
                <div className="tool text-white w-24 text-lg text-mono cursor-pointer text-left lg:text-center" onClick={toolactive}>Tools</div>
            </div>

            {tool === 'frontend' ? <>
                <div class="flex flex-wrap justify-center pl-10 sm:justify-center md:justify-start">
                    <div className="transition duration-500 ease-in-out h-30 w-24 bg-gray-700 rounded-lg mr-5 mb-3 hover:bg-white text-center transform hover:-translate-y-1 hover:scale-110 "><DiReact className="text-purple-600 h-16 w-24 " /> <div className="text-purple-600 text-mono">REACT </div> </div>
                    <div className="transition duration-500 ease-in-out h-30 w-24 bg-gray-700 rounded-lg mr-5 mb-3 hover:bg-white text-center transform hover:-translate-y-1 hover:scale-110 "><DiBootstrap className="text-purple-600 h-16 w-24 " /> <div className="text-purple-600 text-mono">BOOTSTRAP </div> </div>
                    <div className="transition duration-500 ease-in-out h-30 w-24 bg-gray-700 rounded-lg mr-5 mb-3 hover:bg-white text-center transform hover:-translate-y-1 hover:scale-110 "><DiCss3 className="text-purple-600 h-16 w-24 " /> <div className="text-purple-600 text-mono">CSS </div> </div>
                    <div className="transition duration-500 ease-in-out h-30 w-24 bg-gray-700 rounded-lg mr-5 mb-3 hover:bg-white text-center transform hover:-translate-y-1 hover:scale-110 "><DiHtml5 className="text-purple-600 h-16 w-24 " /> <div className="text-purple-600 text-mono">HTML </div> </div>
                    <div className="transition duration-500 ease-in-out h-30 w-24 bg-gray-700 rounded-lg mr-5 mb-3 hover:bg-white text-center transform hover:-translate-y-1 hover:scale-110 "><DiJavascript1 className="text-purple-600 h-16 w-24 " /> <div className="text-purple-600 text-mono">JAVASCRIPT </div> </div>
                    <div className="transition duration-500 ease-in-out h-30 w-24 bg-gray-700 rounded-lg mr-5 mb-3 hover:bg-white text-center transform hover:-translate-y-1 hover:scale-110 "><DiJqueryLogo className="text-purple-600 h-16 w-24 " /> <div className="text-purple-600 text-mono">JQUERY </div> </div>
                    <div className="transition duration-500 ease-in-out h-30 w-24 bg-gray-700 rounded-lg mr-5 mb-3 hover:bg-white text-center transform hover:-translate-y-1 hover:scale-110 "><SiTailwindcss className="text-purple-600 h-16 w-24 " /> <div className="text-purple-600 text-mono">TAILWIND </div> </div>

                </div>
            </> :
                <>
                    {tool === 'backend' ? <>
                        <div class="flex flex-wrap justify-center pl-10 sm:justify-center md:justify-start">
                            <div className="transition duration-500 ease-in-out h-30 w-24 bg-gray-700 rounded-lg mr-5 mb-3 hover:bg-white text-center transform hover:-translate-y-1 hover:scale-110 "><DiNodejsSmall className="text-purple-600 h-16 w-24 " /> <div className="text-purple-600 text-mono">NODE JS </div> </div>
                            <div className="transition duration-500 ease-in-out h-30 w-24 bg-gray-700 rounded-lg mr-5 mb-3 hover:bg-white text-center transform hover:-translate-y-1 hover:scale-110 "><SiJsonwebtokens className="text-purple-600 h-16 w-24 " /> <div className="text-purple-600 text-mono">JWT </div> </div>
                            <div className="transition duration-500 ease-in-out h-30 w-24 bg-gray-700 rounded-lg mr-5 mb-3 hover:bg-white text-center transform hover:-translate-y-1 hover:scale-110 "><SiFirebase className="text-purple-600 h-16 w-24 " /> <div className="text-purple-600 text-mono">FIREBASE </div> </div>
                            <div className="transition duration-500 ease-in-out h-30 w-24 bg-gray-700 rounded-lg mr-5 mb-3 hover:bg-white text-center transform hover:-translate-y-1 hover:scale-110 "><DiMongodb className="text-purple-600 h-16 w-24 " /> <div className="text-purple-600 text-mono">Mongo DB </div> </div>


                        </div>
                    </> :
                        <>
                            <div class="flex flex-wrap justify-center pl-10 sm:justify-center md:justify-start">
                                <div className="transition duration-500 ease-in-out h-30 w-24 bg-gray-700 rounded-lg mr-5 mb-3 hover:bg-white text-center transform hover:-translate-y-1 hover:scale-110 "><SiPostman className="text-purple-600 h-16 w-24 " /> <div className="text-purple-600 text-mono">POSTMAN </div> </div>
                                <div className="transition duration-500 ease-in-out h-30 w-24 bg-gray-700 rounded-lg mr-5 mb-3 hover:bg-white text-center transform hover:-translate-y-1 hover:scale-110 "><DiGithubBadge className="text-purple-600 h-16 w-24 " /> <div className="text-purple-600 text-mono">GITHUB </div> </div>
                                <div className="transition duration-500 ease-in-out h-30 w-24 bg-gray-700 rounded-lg mr-5 mb-3 hover:bg-white text-center transform hover:-translate-y-1 hover:scale-110 "><DiVisualstudio className="text-purple-600 h-16 w-24 " /> <div className="text-purple-600 text-mono">VS CODE </div> </div>
                                <div className="transition duration-500 ease-in-out h-30 w-24 bg-gray-700 rounded-lg mr-5 mb-3 hover:bg-white text-center transform hover:-translate-y-1 hover:scale-110 "><SiNetlify className="text-purple-600 h-16 w-24 " /> <div className="text-purple-600 text-mono">NETLIFY </div> </div>
                                <div className="transition duration-500 ease-in-out h-30 w-24 bg-gray-700 rounded-lg mr-5 mb-3 hover:bg-white text-center transform hover:-translate-y-1 hover:scale-110 "><DiHeroku className="text-purple-600 h-16 w-24 " /> <div className="text-purple-600 text-mono">HEROKU </div> </div>


                            </div>
                        </>} </>}

            <br />
        </div>
    );
}

export default Tools;