import React, { useState } from 'react';

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
import './Tools.css';
function Tools() {

    const [tool, settool] = useState('frontend');

    const fendactive = () => {

        settool('frontend')


    }

    const bendactive = () => {

        settool('backend')


    }
    const toolactive = () => {

        settool('tools')
    }
    return (
        <div className="w-9/10   min-h-screen  bg-gray-800 mx-auto my-10 rounded-lg shadow-2xl p-8">


            <div class="inline-flex">
                <div class="flex h-4 w-4 mt-3">
                    <span class="animate-ping absolute inline-flex h-4 w-4 rounded-full bg-purple-400 opacity-75"></span>
                    <span class="relative inline-flex rounded-full h-4 w-4 bg-purple-500"></span>
                </div>
                <div className="font-mono ml-6 text-white text-3xl">TOOLS 👨‍🔧</div>
            </div>


            <br />
            <br />



            {tool === 'frontend' ? <>
                <div className="active" onClick={fendactive}>Front-End </div>
                <br />
                <div class="tech-known">
                    <div className="tech-single "><DiReact className="text-purple-600 h-16 w-24 " /> <div className="tech-text">REACT </div> </div>
                    <div className="tech-single "><DiBootstrap className="text-purple-600 h-16 w-24 " /> <div className="tech-text">BOOTSTRAP </div> </div>
                    <div className="tech-single "><DiCss3 className="text-purple-600 h-16 w-24 " /> <div className="tech-text">CSS </div> </div>
                    <div className="tech-single "><DiHtml5 className="text-purple-600 h-16 w-24 " /> <div className="tech-text">HTML </div> </div>
                    <div className="tech-single "><DiJavascript1 className="text-purple-600 h-16 w-24 " /> <div className="tech-text">JAVASCRIPT </div> </div>
                    <div className="tech-single "><DiJqueryLogo className="text-purple-600 h-16 w-24 " /> <div className="tech-text">JQUERY </div> </div>
                    <div className="tech-single "><SiTailwindcss className="text-purple-600 h-16 w-24 " /> <div className="tech-text">TAILWIND </div> </div>

                </div>
                <br />
                <br />
                <div className="not-active " onClick={bendactive}> Back-End </div>
                <br />
                <div className="not-active " onClick={toolactive}>Tools</div>
            </> :
                <>

                    {tool === 'backend' ? <>
                        <div className="not-active " onClick={fendactive}>Front-End </div>
                        <br />
                        <div className="active" onClick={bendactive}> Back-End </div>
                        <br />
                        <div class="tech-known">
                            <div className="tech-single "><DiNodejsSmall className="text-purple-600 h-16 w-24 " /> <div className="tech-text">NODE JS </div> </div>
                            <div className="tech-single "><SiJsonwebtokens className="text-purple-600 h-16 w-24 " /> <div className="tech-text">JWT </div> </div>
                            <div className="tech-single "><SiFirebase className="text-purple-600 h-16 w-24 " /> <div className="tech-text">FIREBASE </div> </div>
                            <div className="tech-single "><DiMongodb className="text-purple-600 h-16 w-24 " /> <div className="tech-text">Mongo DB </div> </div>
                        </div>
                        <br />
                        <br />
                        <div className="not-active " onClick={toolactive}>Tools</div>

                    </> :
                        <>
                            <div className="not-active " onClick={fendactive}>Front-End </div>
                            <br />
                            <div className="not-active " onClick={bendactive}> Back-End </div>
                            <br />
                            <div className="active" onClick={toolactive}>Tools</div>
                            <br />

                            <div class="tech-known">
                                <div className="tech-single "><SiPostman className="text-purple-600 h-16 w-24 " /> <div className="tech-text">POSTMAN </div> </div>
                                <div className="tech-single "><DiGithubBadge className="text-purple-600 h-16 w-24 " /> <div className="tech-text">GITHUB </div> </div>
                                <div className="tech-single "><DiVisualstudio className="text-purple-600 h-16 w-24 " /> <div className="tech-text">VS CODE </div> </div>
                                <div className="tech-single "><SiNetlify className="text-purple-600 h-16 w-24 " /> <div className="tech-text">NETLIFY </div> </div>
                                <div className="tech-single "><DiHeroku className="text-purple-600 h-16 w-24 " /> <div className="tech-text">HEROKU </div> </div>


                            </div>
                        </>} </>}

            <br />
        </div>
    );
}

export default Tools;