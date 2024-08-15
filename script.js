"use strict";

let baseIngredientAmount = [0.25, 0.5, 125, 0.5, 50, 0.25,0, 0.25, 31.25, 0]

function showDropdown () {
    document.getElementById('burger-dropdown').classList.toggle('burger-dropdown-resp');
}

function calculateIngredients() {
    let ingredients = document.getElementById('ingredient-list').getElementsByTagName('li');
    let servings =  document.getElementById('servings').value;

    for(let i = 0; i < ingredients.length; i++) {

        let elem = document.getElementById('ingredient' + (i + 1));
        if(elem.innerHTML !== '') {
            let newAmount = baseIngredientAmount[i] * servings;
            elem.innerText = newAmount;
        } 
    }
}


async function includeHTML() {
    let includeElements = document.querySelectorAll('[w3-include-html]');
    for (let i = 0; i < includeElements.length; i++) {
        const element = includeElements[i];
        file = element.getAttribute("w3-include-html");
        let resp = await fetch(file);
        if (resp.ok) {
            element.innerHTML = await resp.text();
        } else {
            element.innerHTML = 'Page not found';
        }
    }
}