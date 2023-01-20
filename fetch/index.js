let url = 'https://jsonplaceholder.typicode.com/posts';

document.addEventListener('DOMContentLoaded', () => {
let arr = [];
function fetchCall(){
    fetch(url)
    .then(response => 
        response.json()
    )
    .then(value => {
        dataConverter(value);
    })
    .catch(err => controlError(err))
}

fetchCall();

function dataConverter(param){
    for(const data of param) {
        arr.push(data);
        console.log('arr -> ', arr.push(data));
    }
}

/*              OR

function dataConverter(param){
    for(i = 0; i < param.length; i++)console.log(param[i])
}
*/

function controlError(params){
    console.log(params);
}
const container = document.createElement('div');
const firstPTag  = document.createElement('p');
const secondPTag = document.createElement('p');
const thirdPTag = document.createElement('p');
const fourthPTag= document.createElement('p');

container.className = 'container';
firstPTag.className = 'firstPTag';
secondPTag.className = 'secondPTag';
thirdPTag.className = 'thirdPTag';
fourthPTag.className = 'fourthPTag';

firstPTag.textContent = 'First P Tag';
secondPTag.textContent = "Second P Tag";
thirdPTag.textContent = 'Third P Tag';
fourthPTag.textContent = "Fourth P Tag";

container.style.backgroundColor = 'red';

firstPTag.style.fontSize = '30px';
firstPTag.style.color = 'green';
firstPTag.style.fontWeight = '700';

container.append(firstPTag, secondPTag, thirdPTag, fourthPTag);
const mainBody =  document.querySelector('.mainBody');
mainBody.append(container);
mainBody.append(container);
mainBody.style.width = '100%';
mainBody.style.backgroundColor = 'black';
})
