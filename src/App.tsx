import Accordion from './components/Accordion'
import './App.scss'
import { faqs } from './data'
import { useState } from 'react';

function App() {
  const [openID, setOpenID] = useState();


  const handleAnswer = (id:any) => {
    setOpenID(openID !== id ? id : null);
  } 

  return (
    <>
    <main>
    <div className='faq_card_container'>
      <div className='faq_image_container'>
        <img className='box_image desktop' src="./images/illustration-box-desktop.svg" alt="faq_image_1" />
      </div>

      <div className='accordion__wrapper'>
        <h3>FAQ</h3>
        <div className='questions_accordions'>
          {faqs.map((item) => (
            <Accordion question={item.question}
            answer={item.answer}
            isAccordionOpen={item.isAccordionOpen}
            toggle={handleAnswer}
            isOpen={openID === item.id}
            id={item.id}/>
          ))}
        </div>
      </div>

      </div>
    </main>

     
    </>
  )
}

export default App
