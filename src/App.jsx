import { useState } from 'react'
import './App.css'

const FaqItem = ({question, answer}) => {
  const [show, setShow] = useState(false)

  const toggleShow = () => {
    setShow(!show)
  }
  return (
    <div className={`faq-item ${show ? "active" : ""}`}>
      <div className='faq-item-header' onClick={toggleShow}>{question}</div>
      <div className='faq-item-body'>
        <div className='faq-item-body-content'>
          {answer}
        </div>
      </div>
    </div>
  )
}

const Faq = ({ data }) => {
  return (
    <div className='faq-accordion'>
      <h2>FAQs</h2>
      {/* <FaqItem />
      <FaqItem />
      <FaqItem />
      <FaqItem />
      <FaqItem /> */}

      {data.map((item) => (
        <FaqItem key={item.id} question={item.question} answer={item.answer} />
      ))}


    </div>
  )
}

const data = [
  { id: 1, question: "What is React?", answer: "React.js, also known as React or ReactJS, is a JavaScript library that helps developers build user interfaces (UIs) for web and mobile applications"},
  { id: 2, question: "What is Bootstrap?", answer: "Bootstrap is a free, open source front-end development framework for the creation of websites and web apps. Designed to enable responsive development of mobile-first websites, Bootstrap provides a collection of syntax for template designs."},
  { id: 3, question: "What is NodeJS", answer: "Node. js is not a programming language; it is a runtime environment allowing you to execute JavaScript code on the server side, outside a web browser."},
  { id: 4, question: "What is framework", answer: " a framework is often a layered structure indicating what kind of programs can or should be built and how they would interrelate."},
]

function App() {
  return (
    <div className='App'>
      <Faq data={data} />
    </div>
  )
}

export default App
