import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import "../css/contact.css";
// import "../js/contactjs.js";

import { styles } from "../styles";
import { EarthCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { slideIn } from "../utils/motion";


const Contact = () => {
  const formRef = useRef();
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { target } = e;
    const { name, value } = target;

    setForm({
      ...form,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .send(
        'service_uhsbcwg',
        'template_fm25mq8',
        // import.meta.env.VITE_APP_EMAILJS_SERVICE_ID,
        // import.meta.env.VITE_APP_EMAILJS_TEMPLATE_ID,
        {
          from_name: form.name,
          to_name: "Waseem Akram",
          from_email: form.email,
          to_email: "support@hackerwasii.com",
          message: form.message,
        },
        'lspB9U7p7sAqIrbRq'
        // import.meta.env.VITE_APP_EMAILJS_PUBLIC_KEY
      )
      .then(
        () => {
          setLoading(false);
          alert("Thank you. I will get back to you as soon as possible.");

          setForm({
            name: "",
            email: "",
            message: "",
          });
        },
        (error) => {
          setLoading(false);
          console.error(error);

          alert("Ahh, something went wrong. Please try again.");
        }
      );
  };

  const handleValid=()=>{

    const nametxt=document.getElementById('nameText');
    const emailtxt=document.getElementById('emailText');
  
    let nameValid=document.getElementById('nameValid');
    let emailValid=document.getElementById('emailValid');
  
    let regx=/^([_\-a-zA-Z0-9]+)@([_\-a-zA-Z0-9]+)\.([\.a-zA-Z]){3,7}$/;
    //let regx=/^[a-zA-Z0-9.! #$%&'*+/=? ^_`{|}~-]+@[a-zA-Z0-9-]+(?:\. [a-zA-Z0-9-]+)*$/;
    let str=emailtxt.value;
    
    
    if(nametxt.value==""){
        nameValid.innerText="Please enter valid name";
        // document.getElementById('btn-send').disabled=true;
    }
    if(!regx.test(str)){
      emailValid.innerText="Please enter valid email";
      // document.getElementById('btn-send').disabled=true;
    }
    else{
      nameValid.innerText="";
      // document.getElementById('btn-send').disabled=false;
      emailValid.innerText="";
      // document.getElementById('btn-send').disabled=false;
    }
  };

  return (
    <div
      className={`xl:mt-12 flex xl:flex-row flex-col-reverse gap-10 overflow-hidden`}
    >
      <motion.div
        variants={slideIn("left", "tween", 0.2, 1)}
        className='flex-[0.75] bg-black-100 p-8 rounded-2xl'
      >
        <p className={styles.sectionSubText}>Get in touch</p>
        <h3 className={styles.sectionHeadText}>Contact.</h3>

        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className='mt-12 flex flex-col gap-8'
        >
          <label className='flex flex-col'>
            <span className='text-white font-medium mb-4'>Your Name</span>
            <input
              type='text'
              name='name'
              value={form.name}
              onChange={handleChange}
              id="nameText"
              placeholder="What's your good name?"
              className='bg-tertiary py-4 px-6 form-control placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium'
            />
            <small id="nameValid" className="form-text text-muted invalid-feedback" style={{color:"red"}}></small>
          </label>
          <label className='flex flex-col'>
            <span className='text-white font-medium mb-4'>Your email</span>
            <input
              type='email'
              name='email'
              value={form.email}
              id="emailText"
              onChange={handleChange}
              placeholder="What's your web address?"
              className='bg-tertiary py-4 px-6 form-control placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium'
            />
            <small id="emailValid" className="form-text text-muted invalid-feedback" style={{color:"red"}}></small>
          </label>
          <label className='flex flex-col'>
            <span className='text-white font-medium mb-4'>Your Message</span>
            <textarea
              rows={7}
              name='message'
              value={form.message}
              id="msgText"
              onChange={handleChange}
              placeholder='What you want to say?'
              className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium'
            />
          </label>

          <button
            type='submit'
            id="btn-send"
            onClick={handleValid}
            className='bg-tertiary py-3 px-8 rounded-xl outline-none w-fit text-white font-bold shadow-md shadow-primary btn-send'
          >
            {loading ? "Sending..." : "Send"}
          </button>
        </form>
      </motion.div>

      <motion.div
        variants={slideIn("right", "tween", 0.2, 1)}
        className='xl:flex-1 xl:h-auto md:h-[550px] h-[350px]'
      >
        <EarthCanvas />
      </motion.div>
    </div>
  );
};

export default SectionWrapper(Contact, "contact");
