import { useState } from "react";
import AccordionItem from "./AccordionItem";

export default function AccordionList({ qnasList }) {
  const [isOpenIdx, setIsOpenIdx] = useState(0);
  return (
    <section>
      {qnasList.map((elem, idx) => {
        return (
          <AccordionItem
            key={elem.id}
            question={elem.question}
            answer={elem.answer}
            isOpen={isOpenIdx === idx}
            onClick={() => setIsOpenIdx(idx)}
          />
        );
      })}
    </section>
  );
}
