const h1 = document.querySelector("header#header h1");
const btn = document.querySelector("header#header .btn");

function ubahWarna(){
    h1.style.color = 'blue';
}

// function ubahBackground(){
//     btn.style.backgroundColor = "red";
// }

// btn.onclick =ubahBackground; 

const header = document.querySelector("#header");
btn.addEventListener('click', function(){
    const pBaru = document.createElement('p');
    const textBaru = document.createTextNode('Ini paragraf baru');

    pBaru.appendChild(textBaru);
    header.appendChild(pBaru);
})

btn.addEventListener('mouseenter', function(){
    btn.style.color = "blue";
    btn.style.backgroundColor = "yellow";
})

btn.addEventListener('mouseleave', function(){
    btn.style.color = "red";
    btn.style.backgroundColor = "green";
})

const bagian = document.getElementById("bagian");

bagian.style.color = "red";
