import { animated, useSpring } from "react-spring"

const Accordion = (props:any) => {

    const menuAppear = useSpring({
        transform: props.isOpen ? "translate3D(0,0,0)" : "translate3D(0,-2px,0)",
        opacity: props.isOpen ? 1 : 0
    });

 
  return (
    <div className='question_answer_accordion' key={props.id} onClick={() => props.toggle(props.id)}>
        <div className="question" >
            <h4 className={`${props.isOpen ? "question question_selected" : "question"}`}>{props.question}</h4>
            {props.isOpen ? 
            <img src="./images/icon-arrow-down.svg" alt="arrow" className="up_arrow" /> : 
            <img src="./images/icon-arrow-down.svg" alt="arrow" className="up_down"/>}
            
            
        </div>
        {props.isOpen &&  (<animated.p className='answer' style={menuAppear}> {props.answer}</animated.p>)}
  </div>
  )
}

export default Accordion