import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function Contact() {

    const [emil, setemil] = useState("");

    function sendEmail(e) {
        e.preventDefault();
        if (emil == "") {
            console.log('hi');
            toast.error("There might be some error !", {
                position: toast.POSITION.TOP_RIGHT
            });
            return;
        }
        toast.success("Response sent !", {
            position: toast.POSITION.TOP_RIGHT
        });
        emailjs.sendForm("service_a8irsqt", "template_ryc88xq", e.target, "user_DQsAF466J4yLM2nQ25J2n"
        ).then(res => {
            setemil("")
        }).catch(err => { console.log(err) });
    }
    return (
        <div className="w-9/10 h-screen xl:h-4/5 bg-gray-800 mx-auto my-10 rounded-lg shadow-2xl p-8">


            <div class="inline-flex">
                <div class="flex h-4 w-4 mt-3">
                    <span class="animate-ping absolute inline-flex h-4 w-4 rounded-full bg-purple-400 opacity-75"></span>
                    <span class="relative inline-flex rounded-full h-4 w-4 bg-purple-500"></span>
                </div>
                <div className="font-mono ml-6 text-white text-3xl">CONTACT 💬 </div>

            </div>
            <br />
            <br />

            <div className="flex flex-col">
                <div className="mx-auto">

                    <form className="bg-gray-200 p-4 w-56 md:w-64 lg:w-80 rounded-xl" onSubmit={sendEmail} >
                        <div class="text-black font-bold text-3xl">Let's <span className="text-purple-500 font-bold">talk </span></div>
                        <br />
                        <div className="text-xs text-gray-400">If you have any interesting opportunity for me , or if you want to casually talk with me , you can write your message here. </div>
                        <br />
                        <div className="text-purple-600 text-xs md:text-sm lg:text-sm"><i class="fa fa-envelope-o"></i> - akshittrivedi1002@gmail.com <br /><br /></div>
                        <input type="email" onChange={e => setemil(e.target.value)} value={emil} name="email" placeholder="Your Email" className=" shadow-lg rounded-lg h-8 w-44 md:w-56 lg:w-72 pl-2 focus:outline-none focus:ring-1 focus:ring-purple-600 focus:border-transparent " />
                        <br />
                        <br />

                        <textarea name="w3review" name="message" placeholder="Your message" className="shadow-lg resize-none rounded-lg h-40 w-44 md:w-56 lg:w-72 pl-2 focus:outline-none focus:ring-1 focus:ring-purple-600 focus:border-transparent ">

                        </textarea>
                        <br />
                        <br />

                        <input type="submit" className="h-8 w-24 bg-white shadow-lg rounded-lg hover:bg-purple-600 hover:text-white hover:font-bold transform transition duration-500 ease-in-out hover:scale-125" />
                    </form>
                    <br />

                </div>
                <div className="mx-auto">
                    <div className="bg-gray-200 h-10 w-56 md:w-64 lg:w-80 rounded-xl flex flex-row justify-around">
                        <div className="text-white pt-1"><a href="https://www.instagram.com/akshit_1005/" target="_blank"><i className=" transition duration-500 ease-in-out fa fa-instagram rounded-full text-2xl pl-2 bg-white text-purple-600 shadow-lg w-9 h-8 hover:bg-purple-600 hover:text-white"></i></a></div>
                        <div className="text-white pt-1"><a href="https://www.linkedin.com/in/akshittrivedi07/" target="_blank"><i className=" transition duration-500 ease-in-out fa fa-linkedin rounded-full text-2xl pl-2 bg-white text-purple-600 shadow-lg w-9 h-8 hover:bg-purple-600 hover:text-white"></i></a></div>
                        <div className="text-white pt-1"><a href="https://twitter.com/Akshit_1002/" target="_blank"><i className=" transition duration-500 ease-in-out fa fa-twitter rounded-full text-2xl pl-2 bg-white text-purple-600 shadow-lg w-9 h-8 hover:bg-purple-600 hover:text-white"></i></a></div>
                    </div>
                </div>
            </div>




            <ToastContainer />
        </div>
    );
}

export default Contact;