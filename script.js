import { DailyStep } from './DailyStep.js';

const currentDate = new Date();
const dayNum = currentDate.getDay();

// Initialize Days
const day0 = createDailyStep0();
const day1 = createDailyStep1();
const day2 = createDailyStep2();
const day3 = createDailyStep3();
const day4 = createDailyStep4();
const day5 = createDailyStep5();
const day6 = createDailyStep6();

const dayArr = [day0, day1, day2, day3, day4, day5, day6];

document.getElementById('challengeText').textContent = dayArr[dayNum].getStep();

function createDailyStep0()
{
  const step = "Don't waste any food today!";
  const fact1 = "40% of all food in the United States is wasted.";
  const fact2 = "135 million tons of GHG emissions are created by the food we never eat";
  const fact3 = "One third of all food produced is lost or wasted – costing the global economy close to $940 billion each year.";
  const image = "croppedFoodWaste.png";
  return new DailyStep(step, fact1, fact2, fact3, image);
}

function createDailyStep1()
{
  const step = "Don’t buy any plastic today!";
  const fact1 = "sdjhfkjsdhkfjhsxdkjfhskdhj";
  const fact2 = "lkaslalalalalalalallalalala";
  const fact3 = "akkakakakakakakakakakakakka";
  const image = "croppedFoodWaste.png";
  return new DailyStep(step, fact1, fact2, fact3, image);
}

function createDailyStep2()
{
  const step = "Don’t buy any plastic today!";
  const fact1 = "sdjhfkjsdhkfjhsxdkjfhskdhj";
  const fact2 = "lkaslalalalalalalallalalala";
  const fact3 = "akkakakakakakakakakakakakka";
  const image = "croppedFoodWaste.png";
  return new DailyStep(step, fact1, fact2, fact3, image);
}

function createDailyStep3()
{
  const step = "Don’t buy any plastic today!";
  const fact1 = "sdjhfkjsdhkfjhsxdkjfhskdhj";
  const fact2 = "lkaslalalalalalalallalalala";
  const fact3 = "akkakakakakakakakakakakakka";
  const image = "croppedFoodWaste.png";
  return new DailyStep(step, fact1, fact2, fact3, image);
}

function createDailyStep4()
{
  const step = "Don’t buy any plastic today!";
  const fact1 = "sdjhfkjsdhkfjhsxdkjfhskdhj";
  const fact2 = "lkaslalalalalalalallalalala";
  const fact3 = "akkakakakakakakakakakakakka";
  const image = "croppedFoodWaste.png";
  return new DailyStep(step, fact1, fact2, fact3, image);
}

function createDailyStep5()
{
  const step = "Don’t buy any plastic today!";
  const fact1 = "sdjhfkjsdhkfjhsxdkjfhskdhj";
  const fact2 = "lkaslalalalalalalallalalala";
  const fact3 = "akkakakakakakakakakakakakka";
  const image = "croppedFoodWaste.png";
  return new DailyStep(step, fact1, fact2, fact3, image);
}

function createDailyStep6()
{
  const step = "Don’t buy any plastic today!";
  const fact1 = "sdjhfkjsdhkfjhsxdkjfhskdhj";
  const fact2 = "lkaslalalalalalalallalalala";
  const fact3 = "akkakakakakakakakakakakakka";
  const image = "croppedFoodWaste.png";
  return new DailyStep(step, fact1, fact2, fact3, image);
}

