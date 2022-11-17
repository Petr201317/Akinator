/*
// создать div
const div = document.createElement('div');
// добавить к нему класс wrapper
div.classList.add('wrapper');
// поместить его внутрь тега body
const body = document.body;
body.insertAdjacentElement('beforebegin', div);
// создать заголовок h1 с текстом
const title = document.createElement('h1');
title.textContent = 'Akinator';
// добавить h1 внутрь div с классом wrapper
div.appendChild(title);

//------------------------------------------------------------
// изменим текст вопроса
const question__text = document.getElementsByClassName('question__text');
question__text[0].textContent = 'How are you?';
// создадим обработчик события click
const yes_btn = document.querySelector('.yes-btn');
const no_btn = document.querySelector('.no-btn');
function handleClickYes() {
    console.log('click Yes');                 
};
function handleClickNo() {
    console.log('click No') 
}

yes_btn.addEventListener('click', handleClickYes);
no_btn.addEventListener('click', handleClickNo);
*/

database = [
    {'name':'Петр Драчен','ты мальчик?':true,'Твой день рождения летом?':false,'У тебя есть родной брат?':true,'У тебя есть родная сестра?':false,
    'У тебя есть собака?':false,'у тебя есть кошка?':false,
    'Ты живешь на 7 этаже или выше?':true,'Ты ходишь в школу пешком?':true, 'Ты учитель?':false,'Твой день рождения осенью?':false
    },
    {'name':'Федосеев Илья',
    'ты мальчик?':true,'Твой день рождения летом?':true,'У тебя есть родной брат?':true,'У тебя есть родная сестра?':false,
    'У тебя есть собака?':true,'у тебя есть кошка?':false,
    'Ты живешь на 7 этаже или выше?':true,'Ты ходишь в школу пешком?':true, 'Ты учитель?':false,'Твой день рождения осенью?':false
    },
   
    {'name':'Шерайзин Родион','ты мальчик?':true,'Твой день рождения летом?':false,'У тебя есть родной брат?':true,'У тебя есть родная сестра?':true,
    'У тебя есть собака?':true,'у тебя есть кошка?':true,
    'Ты живешь на 7 этаже или выше?':false,
    'Ты ходишь в школу пешком?'
    :false, 'Ты учитель?':false,'Твой день рождения осенью?':false
    },
    {'name':'Лысова	Алиса','ты мальчик?':false,'Твой день рождения летом?':false,'У тебя есть родной брат?':false,'У тебя есть родная сестра?':true,
    'У тебя есть собака?':false,'у тебя есть кошка?':false,
    'Ты живешь на 7 этаже или выше?':true,'Ты ходишь в школу пешком?'
    :false, 'Ты учитель?':false,'Твой день рождения осенью?':false
    },
    {'name':'Беркало Иван','ты мальчик?':true,'Твой день рождения летом?':true,'У тебя есть родной брат?':false,'У тебя есть родная сестра?':true,
    'У тебя есть собака?':true,'у тебя есть кошка?':false,
    'Ты живешь на 7 этаже или выше?':false,'Ты ходишь в школу пешком?'
    :false, 'Ты учитель?':false,'Твой день рождения осенью?':false
    },
    {'name':'Кучерук Дарина','ты мальчик?':false,'Твой день рождения летом?':true,'У тебя есть родной брат?':false,'У тебя есть родная сестра?':true,
    'У тебя есть собака?':false,'у тебя есть кошка?':false,
    'Ты живешь на 7 этаже или выше?':false,'Ты ходишь в школу пешком?'
    :true, 'Ты учитель?':false,'Твой день рождения осенью?':false
    },
    {'name':'Синявская 	Ангелина','ты мальчик?':false,'Твой день рождения летом?':true,'У тебя есть родной брат?':false,'У тебя есть родная сестра?':true,
    'У тебя есть собака?':true,'у тебя есть кошка?':false,
    'Ты живешь на 7 этаже или выше?':true,'Ты ходишь в школу пешком?'
    :false, 'Ты учитель?':false,'Твой день рождения осенью?':false
    },
    {'name':'Шишкина Ксения','ты мальчик?':false,'Твой день рождения летом?':false,'У тебя есть родной брат?':true,'У тебя есть родная сестра?':false,
    'У тебя есть собака?':true,'у тебя есть кошка?':false,
    'Ты живешь на 7 этаже или выше?':true,'Ты ходишь в школу пешком?'
    :false, 'Ты учитель?':false,'Твой день рождения осенью?':false
    },
    {'name':'Наумов	Иван','ты мальчик?':true,'Твой день рождения летом?':false,'У тебя есть родной брат?':true,'У тебя есть родная сестра?':true,
    'У тебя есть собака?':false,'у тебя есть кошка?':false,
    'Ты живешь на 7 этаже или выше?':false,'Ты ходишь в школу пешком?'
    :false, 'Ты учитель?':false,'Твой день рождения осенью?':true
    },
    {'name':'Зубарева Милана','ты мальчик?':false,'Твой день рождения летом?':true,'У тебя есть родной брат?':true,'У тебя есть родная сестра?':false,
    'У тебя есть собака?':false,'у тебя есть кошка?':true,
    'Ты живешь на 7 этаже или выше?':false,'Ты ходишь в школу пешком?'
    :false, 'Ты учитель?':false,'Твой день рождения осенью?':false
    },
    {'name':'Береза	Антон','ты мальчик?':true,'Твой день рождения летом?':true,'У тебя есть родной брат?':false,'У тебя есть родная сестра?':false,
    'У тебя есть собака?':true,'у тебя есть кошка?':false,
    'Ты живешь на 7 этаже или выше?':true,'Ты ходишь в школу пешком?'
    :true, 'Ты учитель?':false,'Твой день рождения осенью?':false
    },
    {'name':'Петрухин Никита','ты мальчик?':true,'Твой день рождения летом?':true,'У тебя есть родной брат?':false,'У тебя есть родная сестра?':true,
    'У тебя есть собака?':false,'у тебя есть кошка?':false,
    'Ты живешь на 7 этаже или выше?':true,'Ты ходишь в школу пешком?':false, 'Ты учитель?':false,'Твой день рождения осенью?':false
    },
    {'name':'Рытенко София','ты мальчик?':false,'Твой день рождения летом?':false,'У тебя есть родной брат?':true,'У тебя есть родная сестра?':false,
    'У тебя есть собака?':false,'у тебя есть кошка?':true,
    'Ты живешь на 7 этаже или выше?':false,'Ты ходишь в школу пешком?':false, 'Ты учитель?':false,'Твой день рождения осенью?':false
    },
    {'name':'Быковская	Дарья','ты мальчик?':false,'Твой день рождения летом?':false,'У тебя есть родной брат?':true,'У тебя есть родная сестра?':false,
    'У тебя есть собака?':false,'у тебя есть кошка?':true,
    'Ты живешь на 7 этаже или выше?':true,'Ты ходишь в школу пешком?':false, 'Ты учитель?':false,'Твой день рождения осенью?':true
    },
    {'name':'Митюкова	София','ты мальчик?':false,'Твой день рождения летом?':true,'У тебя есть родной брат?':true,'У тебя есть родная сестра?':false,
    'У тебя есть собака?':true,'у тебя есть кошка?':false,
    'Ты живешь на 7 этаже или выше?':false,'Ты ходишь в школу пешком?':false, 'Ты учитель?':false,'Твой день рождения осенью?':false
    },
    {'name':'Чепушканова Аделия','ты мальчик?':false,'Твой день рождения летом?':false,'У тебя есть родной брат?':true,'У тебя есть родная сестра?':false,
    'У тебя есть собака?':false,'у тебя есть кошка?':false,
    'Ты живешь на 7 этаже или выше?':false,'Ты ходишь в школу пешком?':false, 'Ты учитель?':false,'Твой день рождения осенью?':true
    },
    {'name':'Лыков	Матвей','ты мальчик?':true,'Твой день рождения летом?':true,'У тебя есть родной брат?':false,'У тебя есть родная сестра?':true,
    'У тебя есть собака?':true,'у тебя есть кошка?':false,
    'Ты живешь на 7 этаже или выше?':true,'Ты ходишь в школу пешком?':false, 'Ты учитель?':false,'Твой день рождения осенью?':false
    },
    {'name':'Кощеева Вероника','ты мальчик?':false,'Твой день рождения летом?':false,'У тебя есть родной брат?':true,'У тебя есть родная сестра?':false,
    'У тебя есть собака?':false,'у тебя есть кошка?':true,
    'Ты живешь на 7 этаже или выше?':true,'Ты ходишь в школу пешком?':false, 'Ты учитель?':false,'Твой день рождения осенью?':false
    },
    {'name':'Захаров Владимир','ты мальчик?':true,'Твой день рождения летом?':false,'У тебя есть родной брат?':true,'У тебя есть родная сестра?':false,
    'У тебя есть собака?':true,'у тебя есть кошка?':false,
    'Ты живешь на 7 этаже или выше?':true,'Ты ходишь в школу пешком?':false, 'Ты учитель?':false,'Твой день рождения осенью?':false
    },
    {
    'name':'Кошелькова	Мария', 'ты мальчик?': false, 'Твой день рождения летом?': false, 'У тебя есть родной брат?': true, 'У тебя есть родная сестра?': true,
    'У тебя есть собака?': true, 'у тебя есть кошка?': true,
    'Ты живешь на 7 этаже или выше?': false, 'Ты ходишь в школу пешком?': false, 'Ты учитель?':false,'Твой день рождения осенью?':true
    },
    {
    'name': 'Лебедева Ксения', 'ты мальчик?': false, 'Твой день рождения летом?': false, 'У тебя есть родной брат?': false, 'У тебя есть родная сестра?': false,
    'У тебя есть собака?': false, 'у тебя есть кошка?': false,
    'Ты живешь на 7 этаже или выше?': false, 'Ты ходишь в школу пешком?': true, 'Ты учитель?':false,'Твой день рождения осенью?':false
    },
    {'name':'Шульмейстер Елена','ты мальчик?':false,'Твой день рождения летом?':false,'У тебя есть родной брат?':true,'У тебя есть родная сестра?':false,
    'У тебя есть собака?':false,'у тебя есть кошка?':true,
    'Ты живешь на 7 этаже или выше?':true,'Ты ходишь в школу пешком?':false, 'Ты учитель?':true,'Твой день рождения осенью?':false
    }
]

const questionList = ['ты мальчик?','Твой день рождения летом?','У тебя есть родной брат?','У тебя есть родная сестра?','У тебя есть собака?','у тебя есть кошка?','Ты живешь на 7 этаже или выше?','Ты ходишь в школу пешком?', 'Ты учитель?','Твой день рождения осенью?']
const yes_btn = document.querySelector('.yes-btn');
const no_btn = document.querySelector('.no-btn');
const question__text = document.querySelector('.question__text');
const start = document.querySelector('.start');
const btn = document.querySelectorAll('.btn');
const start__text = document.querySelector('.start__text');

function getQuestion() {
    let dx = database.length;
    let trueCount = 0;
    let falseCount = 0;
    let currentQuestion = null;
    for (i = 0; i < questionList.length; i++) {
        trueCount = 0;
        falseCount = 0;
        for (j = 0; j < database.length; j++) {
            console.log(questionList[i]);
            console.log(database[j][questionList[i]]);
            if (database[j][questionList[i]] == true) {
                trueCount++;
            } else if (database[j][questionList[i]] == false) {
                falseCount++;
            }
        }
        console.log("--------");
        if (Math.abs(trueCount-falseCount)<dx) {
            dx = Math.abs(trueCount-falseCount);
            currentQuestion = questionList[i]; //!
        }
    }
    //console.log(currentQuestion);
    return currentQuestion
}
/*
function deleteQuestion() {
    for (i = 0; i < database.length; i++) {
        console.log(database[i][getQuestion()])
    }
}
*/

function setQuestion() {
    question = getQuestion();
    question__text.textContent = question;
}

function handleClickYes() {
    console.log('click Yes');
    for (j = database.length-1; j > -1; j--) {
        if (database[j][question__text.textContent] == false) {
            database.splice(j,1);
            //questionList.splice(j,1);
        }
    }
    for (i = 0; i < questionList.length; i++) {
        if (questionList[i] == question__text.textContent) 
        {
            questionList.splice(i,1);
        }        
    }
    console.log(database)
    if (database.length==1) {
        console.log(database[0]['name']);
        setResult(database[0]['name']);
    } else {
        setQuestion();
    }
}




function handleClickNo() {
    console.log('click Yes');
    for (j = database.length-1; j > -1; j--) {
        if (database[j][question__text.textContent] == true) {
            database.splice(j,1);
            //delete questionList[j]
        }
    }

    for (i = 0; i < questionList.length; i++) {
        if (questionList[i] == question__text.textContent) 
        {
            questionList.splice(i,1);
        }        
    }
    if (database.length==1) {
        console.log(database[0]['name']);
        setResult(database[0]['name']);
    } else {
        setQuestion();
    } 
}

function startProgram() {  
    if (start__text.textContent == 'Старт') {
        start.style.display = 'none';
        btn.forEach(element => {
            element.style.display = 'flex'; 
        });
        setQuestion();  
    } else {
        location.reload();
    }
}

function retry() {
    start.style.display = 'flex';
    btn.forEach(element => {
        element.style.display = 'none'; 
    });
    start__text.textContent = 'Начать заново';

}

function setResult(result) {
    question__text.textContent = 'Ты загадал: ' + result; 
    console.log('11111111')   
    retry() 
}
yes_btn.addEventListener('click', handleClickYes);
no_btn.addEventListener('click', handleClickNo);
start.addEventListener('click', startProgram);



//!!Object.keys(database[i]).length==1





//console.log(getQuestion())
/*
for (i = 0; i < database.length; i++) {
    //for (j = 0; j < questionList.length; j++) {
        
        // if (database[i][questionList[j]] == true) {
        //     delete database[i][questionList[j]];
        // }
        //if (database[i][j] == true) {
            if (database[i][getQuestion()] == false) {
                delete database[i]["name"];
            }
       // }
    //}
}
console.log(database)
*/
/*
for(i=0;i<database.length;i++) {
    for(j=0;j<questionList.length;j++) {
        console.log(questionList[j]);
        console.log(database[i][questionList[j]]);
        if (database[i][questionList[j]]) {
            trueCount++;
        } else {
            falseCount++;
        }
    }
    console.log("--------");
    if (Math.abs(trueCount-falseCount)<dx) {
        dx = Math.abs(trueCount-falseCount);
        currentQuestion = questionList[j] //!
    }
}
console.log(currentQuestion);
*/