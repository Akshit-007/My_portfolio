import React, { useState, useEffect } from 'react';
import fileSaver from 'file-saver';
import MyPhoto from './akshit_photo-removebg.png'
import ReactRoundedImage from "react-rounded-image";
import './Home.css';



function Home() {

    // countapi.set('empty', 'test', 0).then((result) =>);
    // countapi.create('akshit-portfolio.netlify.app', 'test').then((result) => (console.log(result)));
    // countapi.get('ecf1fdea-b420-4636-a643-6d482d1d3457', 'test').then((result) => (console.log(result)));


    const [ind, setind] = useState(0);
    useEffect(() => {
        const interval = setInterval(() => {
            setind(ind => ((ind + 1) % 3));
        }, 1500);
        return () => clearInterval(interval);
    }, []);
    const saveFile = () => {
        fileSaver.saveAs(
            "https://drive.google.com/file/d/1hXZ_Vx9bq_Ay4pAZ1inM6tQ-AQ8AA_0N/view?usp=sharing",
            "Akshit Resume.pdf"
        );
    }

    let array = ["Student", "Developer", "Coder"]
    return (
        <div className="w-9/10 h-min bg-gray-800 mx-auto my-10 rounded-lg ">


            <div className="flex flex-col-reverse xl:flex-row">
                <div className="main_info">
                    <div className="info">
                        <div className="intro"><div className="hello">Hello 👋 ,</div>I'm <span className="name">AKSHIT TRIVEDI,</span></div>
                        <div className="text_rotate"> a <span className="text_dec"> {array[ind]} </span>.</div><br />
                        <button className="cv w-40 h-10 bg-white text-red-600 text-xl border-2 border-red-500 border-dotted transition duration-500 ease-in-out hover:bg-red-500 hover:text-white hover:border-white transform hover:-translate-y-1 hover:scale-110" onClick={saveFile}>
                            My Resume &nbsp;<i class="fa fa-arrow-down"></i>
                        </button>
                    </div>

                </div>
                <div className="picture">
                    <img src={MyPhoto} className="myphoto" />
                </div>
            </div>

            <br />
            <div className="small_description">

                <div className="education_heading">
                    About Me &#128519;
                </div>
                <br />
                <div className="personal_info">
                    Currently I am pursuing B.Tech in the field of Information Technology from BVM , Anand. I have interest in web development , both front-end and back-end  ,and  I am also interested in competitive programming. I am always passionate to learn new tools and technologies.
                </div>
                <br />
                <div className="fun_fact">PS: I &#128151; tea more than coffee &#128517; </div>
            </div>
            <br />
            <div className="eductaion">
                <div className="education_heading">Education 👨‍🎓</div>
                <br />
                <div className="education1">
                    <div claaName="edu_info">
                        <span className="college">Birla Vishvakarma Mahavidyalaya</span>
                        <span className="cpi">9.2 CPI</span>
                    </div>
                    <div claaName="edu_info_light">
                        <span className="degree">B.Tech , Information Technology</span>
                        <span className="date">2019-23</span>

                    </div>
                    <br />
                </div>
                <br />



                <div className="education1">
                    <div claaName="edu_info">
                        <span className="college">Baroda Public School </span>
                        <span className="cpi">81%</span>
                    </div>
                    <div claaName="edu_info_light">
                        <span className="degree">12th, PCM</span>
                        <span className="date">2017-19</span>

                    </div>
                    <br />
                </div>
                <br />

            </div>
        </div>
    );
}

export default Home;