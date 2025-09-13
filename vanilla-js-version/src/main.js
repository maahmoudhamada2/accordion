const qnaList = [
    {
        id: 1,
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



function createAccordionItem({ question, answer }) {
    const section = document.createElement("section");
    const questionBtn = document.createElement("button");
    const answerDiv = document.createElement("div");

    questionBtn.textContent = question;
    answerDiv.textContent = answer;

    section.append(questionBtn, answerDiv);
    return section;
}
