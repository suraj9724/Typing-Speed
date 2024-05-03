
let startTime;
let endTime;



const timer = () => {
    setInterval(() => {
        if (startTime == 0.00) return;
        let date = new Date();
        endTime = date.getTime();
        let timeDifference = (endTime - startTime) / 1000;
        document.getElementById('time').innerHTML = timeDifference.toFixed(2) + " seconds";
    }, 100);
}
timer();

const sentences = ['The various tools that were used for making the study report includes information with the help of internet from various websites.The news and information were used to study more about the effects of gaming on mental health. The research related to project are described using various canvases including AEIOU, Mind-Map, Empathy, Ideation, Product Development and Prototype, which are the basics of the idea thinking process', 'The various tools that were used for making the study report includes information with the help of internet from various websites.The news and information were used to study more about the effects of gaming on mental health.', 'The research related to project are described using various canvases including AEIOU, Mind-Map, Empathy, Ideation, Product Development and Prototype, which are the basics of the idea thinking process', 'Here, you should gain an empathetic understanding of the problem you’re trying to solve,typically through user research. Empathy is crucial to a human-centered design process such as design thinking because it allows you to set aside your own assumptions about the world and gain real insight into users and their needs'];

const showdata = document.getElementById('show');
const typing_ground = document.getElementById('typeground');
const score = document.getElementById('score');
let total_time;

let stat = document.getElementById('btn')

let num = Math.floor(Math.random() * sentences.length);
const show_data = () => {
    let num = Math.floor(Math.random() * sentences.length);
    // console.log(num);
    showdata.innerHTML = sentences[num];
    typing_ground.removeAttribute('disabled');
    timer();
    let date = new Date();
    startTime = date.getTime();
    btn.innerHTML = "NEXT";
    // let sentenceLength = sentences[num].length;
    // let box1 = document.getElementById('box1');
    // box1.style.height = (sentenceLength) + 'px';
}
stat.addEventListener("click", show_data);
const endtyping = () => {
    // console.log("hiii i am also working");
    let date = new Date();
    endTime = date.getTime();
    total_time = (endTime - startTime) / 1000;
    typingSpeed(total_time);
    accuracy(num);
    show_data.innerHTML = "";
    typing_ground.value = "";
    startTime = 0.00;
}

let end = document.getElementById("done");
end.addEventListener("click", endtyping);

const typingSpeed = (total_time) => {

    let totalword = typing_ground.value.trim();
    let actualword = totalword === '' ? 0 : totalword.split(" ").length;

    if (actualword !== 0) {
        let typing_speed = (actualword / total_time) * 60;
        typing_speed = Math.round(typing_speed);
        score.innerHTML = `"your <b>TYPING SPEED</b> is <b>${typing_speed} </b> <b>WORDS PER MIN</b> and you wrote <b>${actualword} </b>words and time taken ${total_time} sec`;
    }
    else
        score.innerHTML = `"your <b>TYPING SPEED</b> is 0 <b>WORDS PER MIN</b> and you wrote <b>${actualword} </b> and time taken <b>${total_time}</b> sec`;
}
const accuracy = (num) => {
    let totalChars = sentences[num].length;
    let correctChars = 0;
    for (let i = 0; i < totalChars; i++) {
        if (sentences[num][i] === typing_ground.value[i]) {
            correctChars++;
        }
    }
    accu = (correctChars / totalChars) * 100;
    accu = Math.round(accu * 100) / 100;
    score.innerHTML += `<br>"Your <b>ACCURACY</b> is ${accu}%"`;
}