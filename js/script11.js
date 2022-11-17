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
    'Ты живешь на 7 этаже или выше?':true,'Ты ходишь в школу пешком?'
    :true
    },
    {'name':'Федосеев Илья',
    'ты мальчик?':true,'Твой день рождения летом?':true,'У тебя есть родной брат?':true,'У тебя есть родная сестра?':false,
    'У тебя есть собака?':true,'у тебя есть кошка?':false,
    'Ты живешь на 7 этаже или выше?':true,'Ты ходишь в школу пешком?'
    :true
    },
   
    {'name':'Шерайзин	Родион','Ты ходишь в школу пешком?'
    :false,'Твой день рождения летом?':false,'У тебя есть родной брат?':true,'У тебя есть родная сестра?':true,
    'У тебя есть собака?':true,'у тебя есть кошка?':true,
    'Ты живешь на 7 этаже или выше?':false,'ты мальчик?':true
    },
    {'name':'Лысова	Алиса','Ты ходишь в школу пешком?'
    :false,'Твой день рождения летом?':false,'У тебя есть родной брат?':false,'У тебя есть родная сестра?':true,
    'У тебя есть собака?':false,'у тебя есть кошка?':false,
    'Ты живешь на 7 этаже или выше?':true,'ты мальчик?':false
    },
    {'name':'Беркало Иван','Ты ходишь в школу пешком?'
    :false,'Твой день рождения летом?':true,'У тебя есть родной брат?':false,'У тебя есть родная сестра?':true,
    'У тебя есть собака?':true,'у тебя есть кошка?':false,
    'Ты живешь на 7 этаже или выше?':false,'ты мальчик?':true
    },
    {'name':'Кучерук Дарина','Ты ходишь в школу пешком?'
    :true,'Твой день рождения летом?':true,'У тебя есть родной брат?':false,'У тебя есть родная сестра?':true,
    'У тебя есть собака?':false,'у тебя есть кошка?':false,
    'Ты живешь на 7 этаже или выше?':false,'ты мальчик?':false
    },
    {'name':'Синявская 	Ангелина','ты мальчик?':false,'Твой день рождения летом?':true,'У тебя есть родной брат?':false,'У тебя есть родная сестра?':true,
    'У тебя есть собака?':true,'у тебя есть кошка?':false,
    'Ты живешь на 7 этаже или выше?':false,'Ты ходишь в школу пешком?'
    :false
    },
    {'name':'Шишкина Ксения','ты мальчик?':false,'Твой день рождения летом?':false,'У тебя есть родной брат?':true,'У тебя есть родная сестра?':false,
    'У тебя есть собака?':true,'у тебя есть кошка?':false,
    'Ты живешь на 7 этаже или выше?':true,'Ты ходишь в школу пешком?'
    :false
    },
    {'name':'Наумов	Иван','ты мальчик?':true,'Твой день рождения летом?':false,'У тебя есть родной брат?':true,'У тебя есть родная сестра?':true,
    'У тебя есть собака?':false,'у тебя есть кошка?':false,
    'Ты живешь на 7 этаже или выше?':false,'Ты ходишь в школу пешком?'
    :false
    },
    {'name':'Зубарева Милана','ты мальчик?':false,'Твой день рождения летом?':true,'У тебя есть родной брат?':true,'У тебя есть родная сестра?':false,
    'У тебя есть собака?':false,'у тебя есть кошка?':true,
    'Ты живешь на 7 этаже или выше?':false,'Ты ходишь в школу пешком?'
    :false
    },
    {'name':'Береза	Антон','ты мальчик?':true,'Твой день рождения летом?':true,'У тебя есть родной брат?':false,'У тебя есть родная сестра?':false,
    'У тебя есть собака?':true,'у тебя есть кошка?':false,
    'Ты живешь на 7 этаже или выше?':true,'Ты ходишь в школу пешком?'
    :true
    },
    {'name':'Петрухин Никита','ты мальчик?':true,'Твой день рождения летом?':true,'У тебя есть родной брат?':false,'У тебя есть родная сестра?':true,
    'У тебя есть собака?':false,'у тебя есть кошка?':false,
    'Ты живешь на 7 этаже или выше?':true,'Ты ходишь в школу пешком?':false
    },
    {'name':'Рытенко София','ты мальчик?':false,'Твой день рождения летом?':false,'У тебя есть родной брат?':true,'У тебя есть родная сестра?':false,
    'У тебя есть собака?':false,'у тебя есть кошка?':true,
    'Ты живешь на 7 этаже или выше?':false,'Ты ходишь в школу пешком?':false
    },
    {'name':'Быковская	Дарья','ты мальчик?':false,'Твой день рождения летом?':false,'У тебя есть родной брат?':true,'У тебя есть родная сестра?':false,
    'У тебя есть собака?':false,'у тебя есть кошка?':false,
    'Ты живешь на 7 этаже или выше?':true,'Ты ходишь в школу пешком?':false
    },
    {'name':'Митюкова	София','ты мальчик?':false,'Твой день рождения летом?':true,'У тебя есть родной брат?':true,'У тебя есть родная сестра?':false,
    'У тебя есть собака?':true,'у тебя есть кошка?':false,
    'Ты живешь на 7 этаже или выше?':false,'Ты ходишь в школу пешком?':false
    },
    {'name':'Чепушканова Аделия','ты мальчик?':false,'Твой день рождения летом?':false,'У тебя есть родной брат?':true,'У тебя есть родная сестра?':false,
    'У тебя есть собака?':false,'у тебя есть кошка?':false,
    'Ты живешь на 7 этаже или выше?':false,'Ты ходишь в школу пешком?':false
    },
    {'name':'Лыков	Матвей','ты мальчик?':true,'Твой день рождения летом?':true,'У тебя есть родной брат?':false,'У тебя есть родная сестра?':true,
    'У тебя есть собака?':true,'у тебя есть кошка?':false,
    'Ты живешь на 7 этаже или выше?':true,'Ты ходишь в школу пешком?':false
    },
    {'name':'Кощеева Вероника','ты мальчик?':false,'Твой день рождения летом?':false,'У тебя есть родной брат?':true,'У тебя есть родная сестра?':false,
    'У тебя есть собака?':false,'у тебя есть кошка?':true,
    'Ты живешь на 7 этаже или выше?':true,'Ты ходишь в школу пешком?':false
    },
    {'name':'Захаров Владимир','ты мальчик?':true,'Твой день рождения летом?':false,'У тебя есть родной брат?':true,'У тебя есть родная сестра?':false,
    'У тебя есть собака?':true,'у тебя есть кошка?':false,
    'Ты живешь на 7 этаже или выше?':true,'Ты ходишь в школу пешком?':false
    },
    {'name':'Кошелькова	Мария','ты мальчик?':false,'Твой день рождения летом?':false,'У тебя есть родной брат?':true,'У тебя есть родная сестра?':true,
    'У тебя есть собака?':true,'у тебя есть кошка?':true,
    'Ты живешь на 7 этаже или выше?':false,'Ты ходишь в школу пешком?':false
    },
    {'name':'Лебедева Ксения','ты мальчик?':false,'Твой день рождения летом?':false,'У тебя есть родной брат?':false,'У тебя есть родная сестра?':false,
    'У тебя есть собака?':false,'у тебя есть кошка?':false,
    'Ты живешь на 7 этаже или выше?':false,'Ты ходишь в школу пешком?':true
    },
    {'name':'Шульмейстер Елена','ты мальчик?':false,'Твой день рождения летом?':false,'У тебя есть родной брат?':true,'У тебя есть родная сестра?':false,
    'У тебя есть собака?':false,'у тебя есть кошка?':true,
    'Ты живешь на 7 этаже или выше?':true,'Ты ходишь в школу пешком?':true
    }
]
const yes_btn = document.querySelector('.yes-btn');
const no_btn = document.querySelector('.no-btn');
const question__text = document.querySelector('.question__text');
const questionList = ['ты мальчик?','Твой день рождения летом?','У тебя есть родной брат?','У тебя есть родная сестра?','У тебя есть собака?','у тебя есть кошка?','Ты живешь на 7 этаже или выше?','Ты ходишь в школу пешком?'
];

question__text.textContent = 'How are you?';

function getQuestion() {
    console.log("test")
    let currentQuestion = null;
    let dx = database.length;
    let trueCount = 0;
    let falseCount = 0;
    for(i=0;i<questionList.length;i++) {
        trueCount = 0;
        falseCount = 0;
        for(j=0;j<database.length;j++) {
            console.log(questionList[i]);
            console.log(database[j][questionList[i]]);
            if (database[j][questionList[i]]==true) {
                trueCount++;
            } else if (database[j][questionList[i]]==false) {
                falseCount++;
            }
        }
        if (Math.abs(trueCount-falseCount)<dx) {
            dx = Math.abs(trueCount-falseCount);
            currentQuestion = questionList[i];
        }  
    }
    //console.log(dx);
    return currentQuestion;
}
//console.log(getQuestion());

function setQuestion() {
    let question = getQuestion();
    question__text.textContent = question;
}

//setQuestion();
function handleClickYes() {
    console.log('click Yes');
    for (i=0;i<questionList.length;i++) {
        for (j=0;i<database.length;j++) {
            if (database[i][questionList[j]]==true) {
                delete database[i][questionList[j]];
            }                 
        }
    } 
    setQuestion();                   
};

function handleClickNo() {
    console.log('click No');
    for (i=0;i<questionList.length;i++) {
        for (j=0;i<database.length;j++) {
            if (database[i][questionList[j]]==false) {
                delete database[i][questionList[j]];
            }         
        } 
    }
    setQuestion();                   
};
yes_btn.addEventListener('click', handleClickYes);
no_btn.addEventListener('click', handleClickNo);

//console.log(database[0]['Ты ходишь в школу пешком?'])
//console.log(database.length)