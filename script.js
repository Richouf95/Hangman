let win = document.getElementById('win');
let lose = document.getElementById('lose');
let replay = document.getElementById('replay');
let canvas = document.getElementById('canvas');
    let context = canvas.getContext('2d');
let nbredegame = document.getElementById('nbredegame');
let nbredelettreatrouve = document.getElementById('nbredelettreatrouve');
let score = document.getElementById('score');
let tentatives = document.getElementById('tentatives');
let saisi = document.getElementById('saisi');
let body = document.body;
let pText = document.getElementById('pText');

win.style.visibility = 'hidden';
lose.style.visibility = 'hidden';
replay.style.visibility = 'hidden';
pText.style.visibility = 'hidden';


function line(x1, x2, y1, y2){
    context.beginPath();
        context.lineWidth = '10';
        context.strokeStyle = '#151549';
        context.moveTo(x1,y1);
        context.lineTo(x2,y2);
    context.stroke();
}

function tete(){
    context.beginPath();
        context.lineWidth = '5';
        context.fillStyle = '#ff0000';
        context.arc(250,150,50,0,2*Math.PI)
    context.fill();
}

function yeux (x1,x2,y1,y2) {
    context.beginPath();
        context.lineWidth = '2';
        context.strokeStyle = '#151549';
        context.moveTo(x1,y1);
        context.lineTo(x2,y2);
    context.stroke();
}

function visage() {
    yeux(230,240,140,130);
    yeux(230,240,130,140);
    yeux(260,270,130,140);
    yeux(270,260,130,140);

    context.beginPath();
        context.lineWidth = '5';
        context.strokeStyle = 'rgb(0,0,0)';
        context.arc(250,180,15,Math.PI,2*Math.PI)
    context.stroke();
}

function corps() {
    line(250,250,199,300);
    line(250,180,204,250);
    line(250,318,204,250);
    line(250,200,298,380);
    line(250,300,298,380);
}

let tableau = ['richouf', 'javascript', 'programmation', 'librairie', 'langage', 'merde'];
let x = Math.floor(Math.random() * 6);
let t3 = ["_".repeat(tableau[x].length)];
t3 = t3[0].split("")
    nbredelettreatrouve.textContent = t3;
let t4 = ["line(100,400,500,500)","line(400,400,505,75)","line(405,300,75,75)","line(305,250,74,110)","tete()","visage()","corps()"]


let t2 = [];
let y = 7;
let j = 0;
score.textContent = y;
body.addEventListener("keydown",(e)=>{

    let indexes = [];
    let valeur = e.key;
    t2.push(tableau[x].split(''));

    if (valeur == 'Enter') {
        location.reload();
    } else {

    }
        
    if(y > 0) {
        if(t2[0].indexOf(valeur)>=0) {
            for (let i = 0; i < t2[0].length; i++) {
                if (t2[0][i] === valeur) {
                    indexes.push(i);
                }
            }
            for (let i = 0; i < indexes.length; i++) {
                t3.splice(indexes[i], 1, valeur)
            }
            
        }else{
            y--;
            score.textContent = y;
            eval(t4[j])
            j++
            
        }
    } else{
        lose.style.visibility = 'visible';
        replay.style.visibility = 'visible';
    }

    nbredelettreatrouve.textContent = t3;
    tentatives.textContent += valeur;

    let t20JSON = JSON.stringify(t2[0]);
    let t3JSON = JSON.stringify(t3);

    if (t3JSON === t20JSON) {
        win.style.visibility = 'visible';
        replay.style.visibility = 'visible';
        lose.textContent = 'Assassin !'
        lose.style.color = 'red';
        lose.style.marginTop = '5px';
        body.addEventListener('keydown', assassin);
            function assassin(a) {
                if (a) {
                    pText.style.visibility = 'visible';
                }
            }
    } else {

    }            
            
})