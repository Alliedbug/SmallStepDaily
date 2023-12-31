/* Class for a step (daily challenge) */
class DailyStep {
  constructor(step, fact1, fact2, fact3, image)
  {
    this.step = step;
    this.fact1 = fact1;
    this.fact2 = fact2;
    this.fact3 = fact3;
    this.image = image;
  }

  // Getters
  
  getStep()
  {
    return this.step;
  }

  getFact1()
  {
    return this.fact1;
  }

  getFact2()
  {
    return this.fact2;
  }

  getFact3()
  {
    return this.fact3;
  }

  getImage()
  {
    return this.image;
  }
}

// Get current day of week (0-6)
const currentDate = new Date();
const dayNum = currentDate.getDay();

// Initialize Days, creates DailyStep objects
const day0 = createDailyStep0();
const day1 = createDailyStep1();
const day2 = createDailyStep2();
const day3 = createDailyStep3();
const day4 = createDailyStep4();
const day5 = createDailyStep5();
const day6 = createDailyStep6();

const dayArr = [day0, day1, day2, day3, day4, day5, day6];

// Set elements on page to display text, and image
console.log(dayArr[dayNum].getStep())
document.getElementById('challengeText').textContent = dayArr[dayNum].getStep();
document.getElementById('fact1Text').textContent = dayArr[dayNum].getFact1();
document.getElementById('fact2Text').textContent = dayArr[dayNum].getFact2();
document.getElementById('fact3Text').textContent = dayArr[dayNum].getFact3();
const imageElement = document.getElementById("stepImage");
imageElement.src = dayArr[dayNum].getImage();

// Function for creating Sunday's daily step
function createDailyStep0()
{
  const step = "Daily Challenge: Don't throw away any food today! Idea: If you have bananas that have gone bad, make banana bread!";
  const fact1 = "40% of all food in the United States is wasted.";
  const fact2 = "135 million tons of GHG emissions are created by the food we never eat";
  const fact3 = "One third of all food produced is lost or wasted – costing $940 billion globally each year.";
  const image = "./images/foodWaste.PNG";
  return new DailyStep(step, fact1, fact2, fact3, image);
}

// Function for creating Monday's daily step
function createDailyStep1()
{
  const step = "Daily Challenge: Donate a piece of clothing you no longer wear or make it into something you love! Idea: Cut off sleeves from a t-shirt you like but no longer fits and make it into a tank top!";
  const fact1 = "The equivalent of one garbage truck full of clothes is burned or dumped in a landfill every second.";
  const fact2 = "The fashion industry is responsible for 8-10% of all carbon emissions – more than all international flights!";
  const fact3 = "Approximately 60% of all materials used by the fashion industry are made from plastic.";
  const image = "./images/clothes.jpeg";
  return new DailyStep(step, fact1, fact2, fact3, image);
}

// Function for creating Tuesday's daily step
function createDailyStep2()
{
  const step = "Daily Challenge: Don’t buy any plastic today!";
  const fact1 = "The top 3 most commonly found plastic items in waters are plastic bottles, food wrappers, and takeout containers.";
  const fact2 = "90% of plastic is made from fossil fuels.";
  const fact3 = "2.5 tonnes of carbon dioxide is generated by producing 1 tonne of plastic.";
  const image = "./images/plastic.jpeg";
  return new DailyStep(step, fact1, fact2, fact3, image);
}

// Function for creating Wednesday's daily step
function createDailyStep3()
{
  const step = "Daily Challenge: Buy reusable or compostable produce bags or buy/make reusable shopping tote bags! If you already have some, make sure they are located somewhere in your house or vehicle that makes them hard to forget!";
  const fact1 = "The average reusable bag has a lifespan equal to that of more than 700 disposable plastic bags.";
  const fact2 = "Over 100 billion plastic bags are consumed every year. ";
  const fact3 = "Plastic bags do not degrade; rather they break down into microplastics.";
  const image = "./images/bags.jpeg";
  return new DailyStep(step, fact1, fact2, fact3, image);
}

// Function for creating Thursday's daily step
function createDailyStep4()
{
  const step = "Daily Challenge: Use public transit/carpool/bike instead of using a car today if possible!";
  const fact1 = "Vehicles emit carbon dioxide, the most common human-caused greenhouse gas.";
  const fact2 = "Car engines release poisonous gases that pollute the air, especially the extremely harmful greenhouse gas called carbon monoxide.";
  const fact3 = "A typical passenger vehicle emits about 4.6 metric tons of CO2 per year.";
  const image = "./images/cars.jpeg";
  return new DailyStep(step, fact1, fact2, fact3, image);
}

// Function for creating Friday's daily step
function createDailyStep5()
{
  const step = "Daily Challenge: Cut meat out of your diet today!";
  const fact1 = "Meat production significantly contributes to the release of greenhouse gases including carbon dioxide, methane and nitrous oxide.";
  const fact2 = "Meat accounts for nearly 60% of all greenhouse gases from food production.";
  const fact3 = "The use of animals for meat causes twice the pollution of producing plant-based foods.";
  const image = "./images/meat.jpeg";
  return new DailyStep(step, fact1, fact2, fact3, image);
}

// Function for creating Saturday's daily step
function createDailyStep6()
{
  const step = "Daily Challenge: Reduce you water usage and use more colder water! Saving water reduces greenhouse gas emissions and cuts down the amount of water that goes into rivers and seas, keeping them at normal levels!";
  const fact1 = "3% of the nation's energy is used to pump and treat water.";
  const fact2 = "Less water going down the drain means more water available in waters that we use and that wildlife uses to survive.";
  const fact3 = "While a bath can hold up to 80 litres, a typical eight minute electric shower will use 62 litres.";
  const image = "./images/water.jpeg";
  return new DailyStep(step, fact1, fact2, fact3, image);
}
