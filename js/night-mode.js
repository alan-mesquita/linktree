function night(){
    document.querySelector("#background").classList.remove('light');
    document.querySelector("#background").classList.add('night');
    document.querySelector("#checkbox").setAttribute('onclick','light()' );
}

function light(){
    document.querySelector("#background").classList.remove('night');
    document.querySelector("#background").classList.add("light")
    document.querySelector("#checkbox").setAttribute('onclick','night()');
}

// function night(){
//     document.querySelector("#background").classList.remove('light');
//     document.querySelector("#background").classList.add('night');
//     document.querySelector('#checkbox').setAttribute('onclick','light()');
// }

// function light(){
//     document.querySelector("#background").classList.remove('night');
//     document.querySelector("#background").classList.add('light');
//     document.querySelector('#checkbox').setAttribute('onclick','night()')
// }