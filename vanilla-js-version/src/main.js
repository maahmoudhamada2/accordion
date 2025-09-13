const qnaList = [
    {
        question: "What is roadmap.sh?",
        answer:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut doloribus delectus sed architecto vero nisi quod explicabo voluptate. Cum a dolorum id vitae, nostrum blanditiis hic in? Ab, laboriosam eaque?",
    },
    {
        question: "What are the plans for roadmap.sh?",
        answer:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut doloribus delectus sed architecto vero nisi quod explicabo voluptate. Cum a dolorum id vitae, nostrum blanditiis hic in? Ab, laboriosam eaque?",
    },
    {
        question: "How is roadmap.sh built?",
        answer:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut doloribus delectus sed architecto vero nisi quod explicabo voluptate. Cum a dolorum id vitae, nostrum blanditiis hic in? Ab, laboriosam eaque?",
    },
    {
        question: "Can i use roadmap.sh in my team ?",
        answer:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut doloribus delectus sed architecto vero nisi quod explicabo voluptate. Cum a dolorum id vitae, nostrum blanditiis hic in? Ab, laboriosam eaque?",
    },
    {
        question: "How can i create custom roadmaps?",
        answer:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut doloribus delectus sed architecto vero nisi quod explicabo voluptate. Cum a dolorum id vitae, nostrum blanditiis hic in? Ab, laboriosam eaque?",
    },
    {
        question: "is roadmap.sh really 7th most starred project on Github?",
        answer:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut doloribus delectus sed architecto vero nisi quod explicabo voluptate. Cum a dolorum id vitae, nostrum blanditiis hic in? Ab, laboriosam eaque?",
    },
];



function createAccordionItem({ question, answer }) {
    const section = document.createElement("section");
    const questionBtn = document.createElement("button");
    const answerDiv = document.createElement("div");

    const handleClick = () => {
        if (answerDiv.classList.value.includes('expand')) {
            answerDiv.classList.replace('expand', 'collapse')
        } else {
            document.querySelectorAll('.accordion-answer').forEach((answer) => {
                answer.classList.replace('expand', 'collapse')
            })
            answerDiv.classList.replace('collapse', 'expand')
        }
    }

    questionBtn.textContent = question;
    questionBtn.classList.add('accordion-question')
    questionBtn.addEventListener('click', handleClick)

    answerDiv.textContent = answer;
    answerDiv.classList.add('accordion-answer', 'collapse')


    section.append(questionBtn, answerDiv);
    return section;
}


const container = document.querySelector('.container');

function renderAccordionItems() {
    const qnaElements = []
    for (let qna of qnaList) {
        qnaElements.push(createAccordionItem(qna))
    }

    qnaElements.forEach((elem, idx) => {
        if (idx === 0) elem.children[1].classList.replace('collapse', 'expand')
        container.appendChild(elem)
    })

}

renderAccordionItems()