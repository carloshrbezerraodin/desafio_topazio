"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var personJson = require("./person.json");
var person = JSON.parse(JSON.stringify(personJson));
console.log('::::::::::::JSON ANTES DO FILTRO:::::::::');
console.log(person);
// Função para remover campos vazios ou que contenham apenas "#"
function removeEmptyFields(obj) {
    var newObj = {};
    Object.keys(obj).forEach(function (key) {
        if (typeof obj[key] === 'string') {
            if (obj[key].trim() !== "" && obj[key].trim() !== "#") {
                newObj[key] = obj[key];
            }
        }
        else if (Array.isArray(obj[key])) {
            var filteredArray = obj[key].filter(function (item) { return item.trim() !== "" && item.trim() !== "#"; });
            if (filteredArray.length > 0) {
                newObj[key] = filteredArray;
            }
        }
        else if (typeof obj[key] === 'object') {
            newObj[key] = removeEmptyFields(obj[key]);
        }
    });
    return newObj;
}
// Remover campos vazios ou que contenham apenas "#"
console.log('::::::::::::JSON DEPOIS DO FILTRO:::::::::');
var personFilter = removeEmptyFields(person);
console.log(personFilter);
