let button = document.getElementById('button')
let input  = document.getElementById('input')
let text   = document.getElementById('text')


button.addEventListener('click', function(){
    var paragraph = document.createElement('p')
    paragraph.innerText = input.value;
    text.appendChild(paragraph)
})









