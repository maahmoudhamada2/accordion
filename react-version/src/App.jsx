import AccordionList from "./AccordionComponent/AccordionList";

const qnaList = [
  {
    id: "1",
    question: "What is roadmap.sh?",
    answer:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut doloribus delectus sed architecto vero nisi quod explicabo voluptate. Cum a dolorum id vitae, nostrum blanditiis hic in? Ab, laboriosam eaque?",
  },
  {
    id: 2,
    question: "What are the plans for roadmap.sh?",
    answer:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut doloribus delectus sed architecto vero nisi quod explicabo voluptate. Cum a dolorum id vitae, nostrum blanditiis hic in? Ab, laboriosam eaque?",
  },
  {
    id: 3,
    question: "How is roadmap.sh built?",
    answer:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut doloribus delectus sed architecto vero nisi quod explicabo voluptate. Cum a dolorum id vitae, nostrum blanditiis hic in? Ab, laboriosam eaque?",
  },
  {
    id: 4,
    question: "Can i use roadmap.sh in my team ?",
    answer:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut doloribus delectus sed architecto vero nisi quod explicabo voluptate. Cum a dolorum id vitae, nostrum blanditiis hic in? Ab, laboriosam eaque?",
  },
  {
    id: 5,
    question: "How can i create custom roadmaps?",
    answer:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut doloribus delectus sed architecto vero nisi quod explicabo voluptate. Cum a dolorum id vitae, nostrum blanditiis hic in? Ab, laboriosam eaque?",
  },
  {
    id: 6,
    question: "is roadmap.sh really 7th most starred project on Github?",
    answer:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut doloribus delectus sed architecto vero nisi quod explicabo voluptate. Cum a dolorum id vitae, nostrum blanditiis hic in? Ab, laboriosam eaque?",
  },
];

export default function App() {
  return (
    <article>
      <header>
        <h1>Frequently Asked Questions</h1>
        <p>Here are some of the frequently asked questions</p>
      </header>
      <AccordionList qnasList={qnaList} />
    </article>
  );
}
