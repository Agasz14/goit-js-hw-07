// zliczenie i wyświetlenie w konsoli liczby kategorii w ul#categories
const categories = document.querySelectorAll('#categories .item')
console.log('Number of categories: ' + categories.length)

//wyciągnięcie nazwy każdego elementu z categories
categories.forEach(category => {
const categoryName = category.querySelector('h2').textContent
console.log('Category: ' + categoryName) //wyświetlenie w konsoli tekst tytułu elementu

const categoriesNumber = category.querySelectorAll("li")
console.log('Elements: ' + categoriesNumber.length) //wyświetlenie liczby elementów w kategorii
})

