let quizData = null

$.ajax({
    url: '/data/quiz.json',
    async: false,
    success: function (data) {
        quizData = data;
    }
});

let fatherContainer = document.getElementById('quizmain');

for (let key in quizData) {
    console.log(quizData[key]);
    let quizContainer = document.createElement('div');
    quizContainer.setAttribute('id', 'quizcontainer');
    let number = document.createElement('h3');
    number.innerText = `Question ${(parseInt(key) + 1)} of ${getJsonObjLength(quizData)}:`;
    quizContainer.append(number);

    let questionTitle = document.createElement('p');
    questionTitle.setAttribute('id', 'qtext');
    questionTitle.innerText = quizData[key]['question'];
    quizContainer.append(questionTitle);

    let div = document.createElement('div');
    div.setAttribute('style', 'position:relative;width:100%;');
    let altContainer = document.createElement('div');
    altContainer.setAttribute('class', 'altcontainer');
    altContainer.setAttribute('id', `quiz_${key}`);
    for (let i = 1; i <= getJsonObjLength(quizData[key]['choices']); i++) {
        const item = quizData[key]['choices'][`choice_${i}`];
        altContainer.innerHTML += `<label class="radiocontainer" id="quiz_${key}_choice_${i}"> ${item}<input type="radio" name="quiz_${key}" value="choice_${i}"><span class="checkmark"></span></label>`
    }
    div.append(altContainer);
    quizContainer.append(div);

    let answerDiv = document.createElement('div');
    answerDiv.setAttribute('id', 'answerbuttoncontainer');
    answerDiv.innerHTML = `<button class="answerbutton ej-btn" type="submit" onclick="handleConfirmClick(${key})">Confirm ❯</button>`
    quizContainer.append(answerDiv);

    fatherContainer.append(quizContainer);
    fatherContainer.innerHTML += '<hr>';
}

function handleConfirmClick(key) {
    console.log(`quiz_${key}`);
    var obj = document.getElementsByName(`quiz_${key}`);
    var altDiv = document.getElementById(`quiz_${key}`);
    for (let i = 0; i < altDiv.children.length; i++) {
        altDiv.children.item(i).classList.remove('wrong-answer');
        altDiv.children.item(i).classList.remove('right-answer');
    }
    console.log(obj);
    for(var i = 0; i < obj.length; i ++) {
        if (obj[i].checked) {
            var type = obj[i].value;
            var chooseLabel = document.getElementById(`quiz_${key}_${type}`)
            if (type === quizData[key]['correct']) {
                chooseLabel.classList.add('right-answer');
                console.log('right');
            } else {
                chooseLabel.classList.add('wrong-answer');
                console.log('wrong')
            }
        }
    }
}

function getJsonObjLength(jsonObj) {
    var Length = 0;
    for (var item in jsonObj) {
        Length++;
    }
    return Length;
}