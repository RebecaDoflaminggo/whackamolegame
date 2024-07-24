let soil = document.getElementById('soil');
let pipe;
let mole, mole2, mole3; 
let molePosition, molePosition2, molePosition3;
let plant, plant2, plant3; 
let plantPosition, plantPosition2, plantPosition3;
let score = 0;
let scoreViewer = document.getElementById('score');
let gameOver = false;
let btn = document.getElementById('btn');

function createGame () {
    for (let i = 0; i < 12; i++) {
        pipe = document.createElement('div');
        pipe.id = i.toString();
        pipe.addEventListener('click', checkThePipe);
        soil.appendChild(pipe);
    };
    setInterval(spawner, 1000);
};

function checkThePipe () {
    if (gameOver) {
        return;
    }else {
        if (this == molePosition) {
            score += 10;
            scoreViewer.innerText = score.toString();
            molePosition.innerHTML = '';
        }else if (this == molePosition2) {
            score += 10;
            scoreViewer.innerText = score.toString();
            molePosition2.innerHTML = '';
        }else if (this == molePosition3) {
            score += 10;
            scoreViewer.innerText = score.toString();
            molePosition3.innerHTML = '';
        }
        else if ((this == plantPosition) || (this == plantPosition2) || (this == plantPosition3)) {
            scoreViewer.innerText = 'GAME OVER : ' + score.toString();
            btn.style.display = 'inline';
            gameOver = true;
        }
    }
};

function getNum () {
    let num = Math.floor(Math.random() * 12);
    return num.toString();
};

function getNum2 () {
    let num = Math.floor(Math.random() * 12);
    return num.toString();
};

function getNum3 () {
    let num = Math.floor(Math.random() * 12);
    return num.toString();
};

function spawner () {
    spawnMole();
    spawnPlant();
    if (score >= 100) {
        spawnMole2();
        spawnPlant2();
    };
    if (score >= 400) {
        spawnMole3();
        spawnPlant3();
    };
}

function spawnMole () {
    if (gameOver) {
        return;
    }else {
        if (molePosition) {
            molePosition.innerHTML = '';
        };
        mole = document.createElement('img');
        mole.src = './Assets/monty-mole.png';
        mole.id = 'mole';
        let id = getNum();
        if ((plantPosition && plantPosition.id == id) || 
            (plantPosition2 && plantPosition2.id == id) ||
            (plantPosition3 && plantPosition3.id == id) ||
            (molePosition2 && molePosition2.id == id) ||
            (molePosition3 && molePosition3.id == id)) {
            return;
        };
        molePosition = document.getElementById(id);
        molePosition.appendChild(mole);
    }
};

function spawnMole2 () {
    if (gameOver) {
        return;
    }else {
        if (molePosition2) {
            molePosition2.innerHTML = '';
        };
        mole2 = document.createElement('img');
        mole2.src = './Assets/monty-mole.png';
        mole2.id = 'mole';
        let id = getNum2();
        if ((plantPosition && plantPosition.id == id) ||
            (plantPosition2 && plantPosition2.id == id) ||
            (plantPosition3 && plantPosition3.id == id) || 
            (molePosition && molePosition.id == id) ||
            (molePosition3 && molePosition3.id == id)) {
            return;
        }
        molePosition2 = document.getElementById(id);
        molePosition2.appendChild(mole2);
    };
};

function spawnMole3 () {
    if (gameOver) {
        return;
    }else {
        if (molePosition3) {
            molePosition3.innerHTML = '';
        };
        mole3 = document.createElement('img');
        mole3.src = './Assets/monty-mole.png';
        mole3.id = 'mole';
        let id = getNum3();
        if ((plantPosition && plantPosition.id == id) ||
            (plantPosition2 && plantPosition2.id == id) ||
            (plantPosition3 && plantPosition3.id == id) || 
            (molePosition && molePosition.id == id) || 
            (molePosition2 && molePosition2.id == id)) {
            return;
        }
        molePosition3 = document.getElementById(id);
        molePosition3.appendChild(mole3);
    }
};

function spawnPlant () {
    if (gameOver) {
        return;
    }else {
        if (plantPosition) {
            plantPosition.innerHTML = '';
        }
        plant = document.createElement('img');
        plant.src = './Assets/piranha-plant.png';
        plant.id = 'plant';
        let id = getNum();
        if ((plantPosition2 && plantPosition2.id == id) ||
            (plantPosition3 && plantPosition3.id == id) ||
            (molePosition && molePosition.id == id) ||
            (molePosition2 && molePosition2.id == id) ||
            (molePosition3 && molePosition3.id == id)) {
            return;
        }
        plantPosition = document.getElementById(id);
        plantPosition.appendChild(plant);
    }
};

function spawnPlant2 () {
    if (gameOver) {
        return;
    }else {
        if (plantPosition2) {
            plantPosition2.innerHTML = '';
        }
        plant2 = document.createElement('img');
        plant2.src = './Assets/piranha-plant.png';
        plant2.id = 'plant';
        let id = getNum();
        if ((plantPosition && plantPosition.id == id) ||
            (plantPosition3 && plantPosition3.id == id) ||
            (molePosition && molePosition.id == id) ||
            (molePosition2 && molePosition2.id == id) ||
            (molePosition3 && molePosition3.id == id)) {
            return;
        }
        plantPosition2 = document.getElementById(id);
        plantPosition2.appendChild(plant2);
    }
};

function spawnPlant3 () {
    if (gameOver) {
        return;
    }else {
        if (plantPosition3) {
            plantPosition3.innerHTML = '';
        }
        plant2 = document.createElement('img');
        plant2.src = './Assets/piranha-plant.png';
        plant2.id = 'plant';
        let id = getNum3();
        if ((plantPosition && plantPosition.id == id) ||
            (plantPosition2 && plantPosition2.id == id) ||
            (molePosition && molePosition.id == id) ||
            (molePosition2 && molePosition2.id == id) ||
            (molePosition3 && molePosition3.id == id)) {
            return;
        }
        plantPosition3 = document.getElementById(id);
        plantPosition3.appendChild(plant2);
    }
};

window.onload = () => {
    createGame();
};

btn.addEventListener('click', () => {
    gameOver = false;
    score = 0;
    scoreViewer.innerText = score.toString();
    btn.style.display = 'none';
    molePosition.innerHTML = '';
    plantPosition.innerHTML = '';
    molePosition2.innerHTML = '';
    plantPosition2.innerHTML = '';
    molePosition3.innerHTML = '';
    plantPosition3.innerHTML = '';
});