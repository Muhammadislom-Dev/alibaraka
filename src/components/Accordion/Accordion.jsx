import './Accordion.css'
import { useState } from 'react';
import DownIcon from '../../assets/img/down.svg'

import * as React from 'react';

const Accordions = (props)=>{

  const [selected, setSelected] = useState(null);

function toggler(i){
    if(selected === i){
      return setSelected(null)
    }
     setSelected(i)
   }


return(
<div className="accordion">

    <ul className={`faq_list ${props.className ? props.className : "" }`}>
      {props.faqs.map( (element, i) => {
    return(
      <li key={i} className="faq_list__item" onClick={()=> toggler(i)}>
        <div className="text_wrap faq_list__item__question_wrapper">
          <p className="faq_header">
            {element.question}
          </p>
          <span className={`icon ${selected===i ? 'closer' : 'opener' }`}>
            <img className="down-icon" src={DownIcon} alt="" />
          </span>
        </div>
        <div className={`text_wrap ${selected===i ? 'faq_list__item__answer_wrapper show'
          : 'faq_list__item__answer_wrapper' }`}>
          <p className="faq_text">
            {element.answer}
          </p>
        </div>
      </li>
      )})}
    </ul>
</div>
)
}
export default Accordions