const itemInput = document.getElementById('item-input');

const onKeyPress = (e) => {
    console.log('keypress');
};

const onKeyUp = (e) => {
    console.log('keyUp');
};

const onKeyDown = (e) => {
    //console.log('keyDown');

    // key
    console.log(e.key);
    document.querySelector('h1').innerText = e.key;

    if (e.key === 'Enter'){
        alert('Pressed enter');
    }

    // keyCode
    // https://www.toptal.com/developers/keycode/table-of-all-keycodes
    if (e.keyCode === 13) {
        alert('Pressed enter');
    }

    // code
    console.log(e.code);

    if (e.code === 'Digit1'){
        console.log('Pressed 1');
    }


    if (e.repeat){
        console.log('You are holding down ' + e.key);
    }

};


itemInput.addEventListener('keypress', onKeyPress);
itemInput.addEventListener('keyup', onKeyUp);
itemInput.addEventListener('keydown', onKeyDown);