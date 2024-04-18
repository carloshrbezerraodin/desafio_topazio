import { Person } from "./person";

const personJson = require("./person.json");

const person: Person = JSON.parse(JSON.stringify(personJson));

console.log('::::::::::::JSON ANTES DO FILTRO:::::::::')
console.log(person);

// Função para remover campos vazios ou que contenham apenas "#"
function removeEmptyFields(obj: any): any {
    const newObj: any = {};
    Object.keys(obj).forEach((key) => {
        if (typeof obj[key] === 'string') {
            if (obj[key].trim() !== "" && obj[key].trim() !== "#") {
                newObj[key] = obj[key];
            }
        } else if (Array.isArray(obj[key])) {
            const filteredArray = obj[key].filter((item: string) => item.trim() !== "" && item.trim() !== "#");
            if (filteredArray.length > 0) {
                newObj[key] = filteredArray;
            }
        } else if (typeof obj[key] === 'object') {
            newObj[key] = removeEmptyFields(obj[key]);
        }
    });
    return newObj;
}

// Remover campos vazios ou que contenham apenas "#"
console.log('::::::::::::JSON DEPOIS DO FILTRO:::::::::')
const personFilter = removeEmptyFields(person);

console.log(personFilter);