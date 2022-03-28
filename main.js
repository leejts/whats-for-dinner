//Selectors
const addARecipeBtn = document.querySelector('#addRecipeBtn');
const letsCookBtn = document.querySelector('#letsCookBtn');
const clearBtn = document.querySelector('#clearBtn');
const addNewRecipeBtn = document.querySelector('#addNewRecipeBtn')

const dishType = document.getElementsByTagName('dishType');
const insertDish = document.getElementById('insertDish');
const cookPotImg = document.querySelector('#cookPotImg');

const mealContainer = document.querySelector('.mealContainer');



//Recipe storage arrays
let sideDishes = [
  'Mac N Cheese',
  'Side Salad',
  'Edamame',
  'Cambell\'s Soup',
  'Fingerling Potatoes',
  'A Single Carrot',
  'Crimini Mushrooms in Escargot Butter'
];
let entree = [
  '24oz Wagyu Ribeye with a wild berry & merlot reduc. sauce',
  'Cup Ramen',
  'Avocado Toast'
];
let dessert = [
  'Skittles',
  'Chocolate volcano',
  'Rocky Road Ice Cream',
  'Mochi',
  'An Orange'
];
let entireMeal; //random pick from 1 of each above array

//Event listeners
letsCookBtn.addEventListener('click', typeOfDishToCook);
clearBtn.addEventListener('click', clear);
addNewRecipeBtn.addEventListener('click', addNewRecipe);


//Functions

function getRandomIndex(array) {
  return Math.floor(Math.random() * array.length);
}

function suggestSide() {
  let suggest = sideDishes[getRandomIndex(sideDishes)];
  insertDish.textContent = suggest;
}

function suggestEntree() {
  let suggest = entree[getRandomIndex(entree)];
  insertDish.textContent = suggest;
}

function suggestDessert() {
  let suggest = dessert[getRandomIndex(dessert)];
  insertDish.textContent = suggest;
}

function suggestEntireMeal() {
  let tempEntree = (entree[getRandomIndex(entree)]);
  let tempSide =  sideDishes[getRandomIndex(sideDishes)];
  let tempDessert = dessert[getRandomIndex(dessert)];
  insertDish.textContent = `${tempEntree} with a side of ${tempSide} and ${tempDessert} for dessert!`
}

function cookpotOff() {
  mealContainer.classList.remove('hidden');
  cookPotImg.classList.add('hidden');
}

function clear() {
  mealContainer.classList.add('hidden');
  cookPotImg.classList.remove('hidden')
}

function typeOfDishToCook() {
  let tempDishValue = document.querySelector('input[name="dishType"]:checked').value;
  cookpotOff();
  if (tempDishValue === 'side') {
    suggestSide();
  }
  if (tempDishValue === 'entree') {
    suggestEntree();
  }
  if (tempDishValue === 'dessert') {
    suggestDessert();
  }
  if (tempDishValue === 'entireMeal') {
    suggestEntireMeal();
  }
}

function addNewRecipe() {
  let dishType = document.querySelector('input[name="recipeType"]').value;
  let dishName = document.querySelector('input[name="recipeName"]').value;
  let dishTypeLower = dishType.toLowerCase();
  if (dishTypeLower === 'side') {
    if (!sideDishes.includes(dishName)) {
      sideDishes.push(dishName);
      insertDish.textContent = dishName;
      alert(dishName + ' added!');
      return
    }
    alert('You already put that in, foo!');
    return
  }
  if (dishTypeLower === 'entree') {
    if (!entree.includes(dishName)) {
      entree.push(dishName);
      insertDish.textContent = dishName;
      alert(dishName + ' added!');
      return
    }
    alert('You already put that in, foo!');
    return
  }
  if (dishTypeLower === 'dessert') {
    if (!dessert.includes(dishName)) {
    dessert.push(dishName);
    insertDish.textContent = dishName;
    alert(dishName + ' added!');
    return
    }
    alert('You already put that in, foo!');
    return
  }
  alert('Whatchu tryna make?! Side, entree, or dessert?');
  return
}