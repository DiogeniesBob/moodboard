const emotion = document.getElementById('input');
const box = document.getElementById('colorbox');
emotion. addEventListener('input', colorchange);

function colorchange(){
    if (emotion.value == 'sad'){
        colorbox.style.backgroundColor = 'darkblue';
    }
    else if (emotion.value == 'angry'){
        colorbox.style.backgroundColor = 'red';
    }
    else if (emotion.value == 'hungry'){
        colorbox.style.backgroundColor = 'green';
    }
    else if (emotion.value == 'happy'){
        colorbox.style.backgroundColor = 'yellow';
    }
    else {
        colorbox.style.backgroundColor = 'gray';
    }
}