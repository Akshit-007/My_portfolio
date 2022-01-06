import React from 'react';
import fileSaver from 'file-saver';
import MyPhoto from './akshit_photo.jpg'
import ReactRoundedImage from "react-rounded-image";
import './Home.css'

function Home() {

    const saveFile = () => {
        fileSaver.saveAs(
            "https://drive.google.com/file/d/1hXZ_Vx9bq_Ay4pAZ1inM6tQ-AQ8AA_0N/view?usp=sharing",
            "Akshit Resume.pdf"
        );
    }
    return (
        <div className="w-9/10 h-9/10 bg-gray-800 mx-auto mt-10">

            <div className="flex flex-col  lg:flex-row">

                <div className="  w-full lg:w-2/4 h-full order-last text-white external txt" >
                    <div className="  text-lg md:text-xl xl:text-4xl text-mono"><div>Hello 👋 ,</div>I'm <span className="text-purple-700 font-medium">AKSHIT TRIVEDI</span></div>
                    <div className="text-white text-opacity-50 text-sm md:text-lg"> I am a web developer</div><br />
                    <button className="cv w-40 h-10 bg-white text-red-600 text-xl border-2 border-red-500 border-dotted transition duration-500 ease-in-out hover:bg-red-500 hover:text-white hover:border-white transform hover:-translate-y-1 hover:scale-110" onClick={saveFile}>
                        My Resume &nbsp;<i class="fa fa-arrow-down"></i>
                    </button>
                </div>
                <div className="w-2/4 h-full  text-white external">
                    <div className=" block lg:hidden "><ReactRoundedImage image={MyPhoto} roundedColor="#8A2BE2" imageWidth="230" imageHeight="230" hoverColor="#FFFFFF" /></div>
                    <div className=" hidden lg:block "><ReactRoundedImage image={MyPhoto} roundedColor="#8A2BE2" imageWidth="300" imageHeight="300" hoverColor="#FFFFFF" /></div>
                </div>

            </div>

        </div>
    );
}

export default Home;