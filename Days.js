const date = new Date();
const day1 = date.getDay() - 1;
const day2 = date.getDay();
const day3 = date.getDay() + 1;
const day4 = date.getDay() + 2;
const day5 = date.getDay() + 3;
const day6 = date.getDay() + 4;
const day7 = date.getDay() + 5;

const days = [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday"
]

document.getElementById("day1").innerText = days[day1];
document.getElementById("day2").innerText = days[day2];
document.getElementById("day3").innerText = days[day3];
document.getElementById("day4").innerText = days[day4];
document.getElementById("day5").innerText = days[day5];
document.getElementById("day6").innerText = days[day6];
document.getElementById("day7").innerText = days[day7];