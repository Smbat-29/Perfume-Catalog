// const button = document.createElement('button');
// button.textContent = 'Click For Create';
// button.className = 'createCircle';
// document.body.append(button);

// button.setAttribute('style', `padding : .4rem 7rem; 
//                               font-family : sans-serif; 
//                               color : dodgerblue;
//                               background : #000;
//                               cursor : pointer;
//                               border : 1px outset dodgerblue;
//                               font-size : 3rem;
//                               `);
// // classList.toggle() => Create and Delete;

// // Erb Detaly Stexcumen Kayq Mtneluc Ayn linume 1 hat;
// // Ayd Jamanak Toggle_y awelacnume ew jnjume Mer Poxaren;
// // Partadir Styler_y talisenq Css Fayloum Jnjelu hamar;

// const circle = document.createElement('div');
// button.onclick = function () {
//     // const circle = document.createElement('div');
//     // circle.classList.add("circle");
//     circle.classList.toggle('circle');
//     document.body.append(circle);
// }


const container = document.querySelector('.container');

// Create Box;
const box = document.createElement('div');
box.className = 'box';
container.append(box);

// Create Box;
const forReg = document.createElement('button');
forReg.className = 'forReg';
forReg.textContent = 'Catalog See?';
container.append(forReg);

//////////////////////////////// Run Catalog Box;
let i = 0;
forReg.onclick = function() {
    i++
    if(i == 1){
        forReg.style.top = "0%";
        box.style.left = "0%";
    }
    else{
        i = 0
        forReg.style.top = "50%";
        box.style.left = "-500%";
    } 
}

const arr = [
    { picture : '1.jpg',  name : 'Channel' },
    { picture : '2.jpg',  name : 'Orion' },
    { picture : '3.jpg',  name : 'Cride' },
    { picture : '4.jpg',  name : 'Shakhe' },
    { picture : '5.jpg',  name : 'Molecule' },
    { picture : '1.jpg',  name : 'Channel' },
    { picture : '2.jpg',  name : 'Orion' },
    { picture : '3.jpg',  name : 'Cride' },
    { picture : '4.jpg',  name : 'Shakhe' },
    { picture : '5.jpg', name : 'Molecule' },
    { picture : '1.jpg', name : 'Channel' },
    { picture : '2.jpg', name : 'Orion' },
    { picture : '3.jpg', name : 'Cride' },
    { picture : '4.jpg', name : 'Shakhe' },
    { picture : '5.jpg', name : 'Molecule' },
    { picture : '2.jpg', name : 'Channel' },
    { picture : '3.jpg', name : 'Orion' },
    { picture : '4.jpg', name : 'Cride' }
]

arr.forEach((elem, index) => {
    // Create Items;

    let pictures = document.createElement('div');
    pictures.className = 'pictures';
    box.appendChild(pictures);

    let miniPic = document.createElement('div');
    miniPic.className = 'miniPic';
    pictures.appendChild(miniPic);

    const text = document.createElement('p');
    text.className = 'text';
    pictures.appendChild(text);

    miniPic.style.backgroundImage = `url(${elem.picture})`;
    text.textContent = `${elem.name}`;

});