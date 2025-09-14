export default function AccordionItem({ question, answer, isOpen, onClick }) {
  return (
    <section>
      <button onClick={onClick}>{question}</button>
      {isOpen ? <div>{answer}</div> : null}
    </section>
  );
}
