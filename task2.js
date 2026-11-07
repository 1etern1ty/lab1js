//Завдання 2.1
function cutText(){
    let div = document.querySelectorAll(".text-div"); //змінна з текстами

    for(let i = 0; i<div.length; i++){
        let text = div[i].textContent;
        div[i].textContent = text.slice(0,10) + "...";
    }
}
document.getElementById("textButton").addEventListener('click', cutText);

//Завдання 2.2
function calculateSums(){
    let table = document.getElementById("table"); //змінна таблиці
    let rows = table.rows; //отримання рядків
    let lastRow = rows[rows.length-1]; //останній рядок

    for(let i = 0; i<rows[0].cells.length; i++){ //цикл ствопців
        let sum = 0;

        for(let j=0; j<rows.length-1; j++){ //цикл рядків
            sum+= Number(rows[j].cells[i].textContent);
        }
        lastRow.cells[i].textContent = sum; //запис сум у останній рядок
    }      
}
document.getElementById("tableButton").addEventListener('click', calculateSums);