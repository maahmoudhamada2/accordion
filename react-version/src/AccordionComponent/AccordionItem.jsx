export default function AccordionItem({ question, answer, isOpen, onClick }) {
  return (
    <section>
      <button
        className="
        bg-black
        text-white
        w-[100%]
        text-left
        border-0 
        rounded-md
        p-[0.9rem] 
        my-[0.5rem] 
        cursor-pointer
        text-[1.1rem]
        relative
        before:absolute
        before:w-[0.2rem]
        before:h-[0.7rem]
        before:bg-white
        before:right-[1.2rem]
        before:top-[1rem]
        before:rotate-45
        after:absolute
        after:w-[0.2rem]
        after:h-[0.7rem]
        after:bg-white
        after:right-[1.55rem]
        after:top-[1rem]
        after:-rotate-45
        "
        onClick={onClick}>
        {question}
      </button>
      {isOpen ? (
        <div
          className="
        p-[0.9rem]
        border-2
        rounded-md
        ">
          {answer}
        </div>
      ) : null}
    </section>
  );
}
