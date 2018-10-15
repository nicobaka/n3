//Создание объектов для демонстрации работы модуля
let o1 = {
    x1: 300,
    x2:{x:200},
    x3:{x:1},
};
let o2 = {
    x3: {y:999,x:{x:888,}},
};
let o3 = {
    x5: {x5:123},
};
// Вывод свойств объекта в консоль
console.log('Объект o1:');
console.log(o1);
console.log('Объект o2:');
console.log(o2);
console.log('Объект o3:');
console.log(o3);
//вызов модуля с полифилом функции extend
require(["dist/modules/extendjq.js"], (extendjq)=>{
    extendjq(o1,true,o2,o3);
    testing(o1);
});//вывод объекта с обновленными свойствами
console.log('Результат выполнения функции с параметром deep=true:');
console.log(o1);

//вывод объекта с обновленными свойствами для IE10 для демонстрации работоспособности функции в данном браузере

let test = document.getElementById('test');
test.appendChild(document.createTextNode('Проверка результата для IE10 (т.к. в нем нельзя открыть свойства объектов)'));
test.appendChild(document.createElement("br"));
test.appendChild(document.createElement("br"));
test.appendChild(document.createTextNode('Объект o1:'));
test.appendChild(document.createElement("br"));
let testing=(obj)=> {

    for(let key in obj) {//вывод свойств объекта через цикл
       if(typeof obj[key] === "object")
       {
           test.appendChild(document.createTextNode(" "+key+':{' ));
           test.appendChild(document.createElement("br"));
           testing(obj[key]);
           test.appendChild(document.createTextNode('};' ));
           test.appendChild(document.createElement("br"));

       }else{
        test.appendChild(document.createTextNode(" "+key+':'+obj[key]+" "));
        test.appendChild(document.createElement("br"));
    }}
}
