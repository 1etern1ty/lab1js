//Завдання 1
let exams = [
    {subject: "Проєктування інформаційних систем", date: "2026-11-02", room: "209"},
    {subject: "Бази даних", date:"2026-11-07", room:"115"},
    {subject: "Технології компʼютерного проєктування", date:"2026-11-08", room:"306"},
    {subject: "Проєктування та розробка веб-застосувань", date:"2026-11-11", room:""}
];

function checkExams(){
    let today = new Date();
    today.setHours(0,0,0,0); //прибрання часу
    let result = "";

    for(let i = 0; i<exams.length; i++){
        let exam = exams[i];
        let examDate = new Date(exam.date + "T00:00:00"); //перетворення дати
        let difference = examDate - today;
        let days = Math.round(difference/(1000*60*60*24)); //округлення до днів

        if(days < 0){
            result+= "<p>Іспит уже відбувся: "+exam.subject+"</p>";
        } else if(days === 0){
            result+= "<p>Сьогодні іспит: "+exam.subject+"</p>";
        } else if (days === 1){
            result+= "<p>Сьогодні консультація: "+exam.subject+"</p>";
        } else{
            result+= "<p>" + exam.subject + ": до іспиту " + days + " дні </p>";
        }

        if(exam.room === "" && (days === 0 || days === 1)){
            result+= "<p>Невідоме місце проведення консультації/іспиту</p>"
        } else if(days === 0 || days === 1){
            result+= "<p>Аудиторія: "+exam.room+"</p>";
        }
    }
    document.getElementById("examResult").innerHTML = result;
}
document.getElementById("examButton").addEventListener('click', checkExams);
