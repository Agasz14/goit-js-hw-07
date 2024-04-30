const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const ulIngredients = document.querySelector('#ingrediends')

ingredients.forEach(ingredient => {
  const li = document.createElement('li'); // Utworzy oddzielny element <li></li>
  li.textContent = ingredient; // Dodanie nazwy składnika jako jego zawartość tekstową
  li.classList.add('item'); // Dodanie klasy item do elementu.
  ulIngredients.append(lastItem) // Wstawienie wszystkich <li> do listy ul#ingredients
  
})

