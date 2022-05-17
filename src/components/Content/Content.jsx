import './Content.css'

import kvadrat from '../../assets/img/kvadrat.png'
import aylana from '../../assets/img/aylana.png'
import garden from '../../assets/img/garden.png'
 
import * as React from 'react';
const label = { inputProps: 
    { 'aria-label': 'Checkbox demo' } };

const Content =() =>{


    const nameRef =  React.useRef(null)
    const telRef =  React.useRef(null)



  var kurslar=[];
  const selectCourses = (e)=>{
  // console.log(e.target.value)
 if(kurslar.includes(e.target.value)){
     kurslar.splice(kurslar.findIndex(l=>{
         l=e.target.value
     }),1)
 }
 else{
     kurslar.push(e.target.value)
 }

}
const formBtn = (e)=>{

  e.preventDefault();

      if (e.target[0].value
           && e.target[1].value
            && kurslar.length>0 ) {

         


          let botMessege = `
               Salom, Yangi Xabar!😊%0A
               Ismi 👤: ${e.target[0].value}%0A
               Raqam ☎: ${e.target[1].value}%0A                 Xabari ✍🏻: ${kurslar}%0A     
                
          `;

   
          let url =`https://api.telegram.org/bot5136951868:AAEbk5iaJ1l89mI2H7LXacKLS3ZcMbLHkAE/sendMessage?chat_id=-1001328953154&text=${botMessege}`;
          async function fetchAsync(url) {
            let response = await fetch(url);
            console.log(response,"1-si")
            let data = await response.json();
            console.log(data,"2-si")
            return data;
             
          }
          fetchAsync(url);

 

          if(document.querySelector("#name").matches(".input-error")){
              document.querySelector("#name").classList.remove("input-error")
              document.querySelector("#errorText").classList.remove("error-text1")
          }
          if(document.querySelector("#phone").matches
          (".tel-error")){
              document.querySelector("#phone").classList.remove("tel-error")
               document.querySelector("#errorTel").classList.remove("error-tel1")
          }
          if(document.querySelector(".checkBtn").matches(".check-errors")){
              document.querySelector(".checkBtn").classList.remove("check-errors")
              document.querySelector("#checkError").classList.remove("error-check1")
          }


          e.target[0].value=""
          document.querySelector(".sections-input").value=""  
          e.target[1].value="+998"          
          
          openGreatModal()
          
  } 
  else{
      if(e.target[0]){
          document.querySelector("#name").classList.add("input-error")
         document.querySelector("#errorText").classList.add("error-text1")
      }
      if(e.target[1]){
          document.querySelector("#phone").classList.add("tel-error")
          document.querySelector("#errorTel").classList.add("error-tel1")
      } 
      if(document.querySelector(".checkBtn").matches(".check-errors")){
          document.querySelector(".checkBtn").classList.add("check-errors")
          document.querySelector("#checkError").classList.add("error-check1")
      }    
  }

}


const [greatModal, setGreatModal] =  React.useState(false);

function openGreatModal(){
  setGreatModal(!greatModal)
}  



    return(
        <div className="content">
            <div className="container">
                <div className="content-left">
                    <img src={kvadrat} alt="" className="content-img" />
                </div>
                <div className="content-box">
                    <div className="content-page">
                        <img src={garden} alt="" className="content-pic" />

                        <h3 className="content-name">STILL ARE YOU HESITATING?</h3>
                        <p className="content-text">Your work is going to fill a large part of your life, and the only way to be truly satisfied</p>
                    </div>

                    <form  id="myForm" onSubmit={formBtn} className="content-form">
                        <span className="content-span">
                            <input ref={nameRef}  id='name' type="text"    className="content-input" placeholder='Enter your name' />
                            <div className="error-text" id='errorText'>Siz ismingizni kiritmadingiz</div>
                            <input ref={nameRef}  id='name' type="text" className="content-input"  placeholder='Enter your phone' />
                            <div className="error-text" id='errorText'>Siz familyangiz kiritmadingiz</div>
                        </span>
                        <textarea className="checkBtn content-texts" onChange={selectCourses} type="text" placeholder='Enter your subject'  ></textarea>
                        <button type='submit' id='btnSubmit' className="content-btn">Send Message</button>
                    </form>
                </div>

                <div className="content-right">
                    <img src={aylana} alt="" className="content-pics" />
                </div>
            </div>
        </div>
    )
}
export default Content