import { useState } from "react";
import "./styles.css";

const faqs = [
  {
    title: "Where are these chairs assembled?",
    text:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Accusantium, quaerat temporibus quas dolore provident nisi ut aliquid ratione beatae sequi aspernatur veniam repellendus."
  },
  {
    title: "How long do I have to return my chair?",
    text:
      "Pariatur recusandae dignissimos fuga voluptas unde optio nesciunt commodi beatae, explicabo natus."
  },
  {
    title: "Do you ship to countries outside the EU?",
    text:
      "Excepturi velit laborum, perspiciatis nemo perferendis reiciendis aliquam possimus dolor sed! Dolore laborum ducimus veritatis facere molestias!"
  }
];

export default function App() {
  return (
    <div>
      <Accordion data={faqs} />
    </div>
  );
}

function Accordion({ data }) {
  const [currOpen, setCurOpen] = useState(null);
  return (
    <div className="accordion">
      {data.map((el, i) => (
        <AccordionItem
          num={i < 9 ? `0${i + 1}` : i + 1}
          title={el.title}
          text={el.text}
          key={i + 1}
          currOpen={currOpen}
          onOpen={setCurOpen}
          index={i}
        />
      ))}
    </div>
  );
}

function AccordionItem({ num, title, text, currOpen, onOpen, index }) {
  const isActive = index === currOpen;

  const handleToggle = () => {
    onOpen(isActive ? "null" : index);
  };
  return (
    <div
      onClick={() => handleToggle()}
      className={`item ${isActive ? "open" : ""}`}
    >
      <p className="number">{num}</p>
      <p className="title">{title}</p>
      <p className="icon">{isActive ? "-" : "+"}</p>
      {isActive && <div className="content-box">{text}</div>}
    </div>
  );
}
