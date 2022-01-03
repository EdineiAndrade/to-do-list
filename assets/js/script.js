'use strict';
/*
let base =  [
    {'assignment': 'Estudar JS', 'status': ''},
    {'assignment': 'Estudar JS', 'status': 'checked'}
 ];
*/

 let banco =  [
   
 ];

/*
const getBanco = () => JSON.parse(localStorage.getItem('tList')) ?? [];
const setBanco = (banco) => localStorage.setItem('tList', JSON.stringify(banco));
*/

const createItem = (assignment, status,indice) => {
    const item = document.createElement('label');
    item.classList.add('td-item');
    item.innerHTML =  `
        <input type="checkbox" ${status} data-indice=${indice}>
        <div>${assignment}</div>
        <input type="button" value="x" data-indice=${indice}>
    `;
    document.getElementById('tdList').appendChild(item);
}

const cleanAssignment =() => {
    const tdList = document.getElementById('tdList');
    while (tdList.firstChild){
        tdList.removeChild(tdList.lastChild);
    }
}

const updateScreen =() => {
    cleanAssignment();
    //const banco  = getBanco();
    banco.forEach((item, indice )=> createItem(item.assignment, item.status,indice));
}
const addItem =(event) => {
    const keyPress = event.key;
    const text = event.target.value;
    if (keyPress=== 'Enter'){
        //const banco = getBanco();
        banco.push({'assignment': text,'status':''});
       // setBanco();
        updateScreen();
        event.target.value = '';
    }

} 
const removeItem =(indice) => {
    //const banco = getBase();
    banco.splice(indice,1);
    //setBase();
    updateScreen();
}
const updateItem =(indice) => {
    //const banco = getBanco();
    banco[indice].status = banco[indice].status === '' ? 'checked':'';
    //setBanco();
    updateScreen();
}


const clickItem =(event) => {
    const element = event.target;
    if (element.type === 'button'){
       const indice = element.dataset.indice;
       removeItem(indice);
    }else if(element.type === 'checkbox') {
        const indice = element.dataset.indice;
        updateItem(indice);
    }
 
} 


document.getElementById('tdNewItem').addEventListener('keypress',addItem);
document.getElementById('tdList').addEventListener('click',clickItem);

updateScreen();
  
