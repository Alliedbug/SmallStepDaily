const daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

const currentDate = new Date();
const dayName = daysOfWeek[currentDate.getDay()];

console.log(dayName);