'use strict';

function parseJSON(jsonString) {
    try {
        const jsonObject = JSON.parse(jsonString);
        return jsonObject;
    } catch (error) {
        console.error('Error parsing JSON:', error);
        return null;
    }
}

const jsonString = '{"name": "John", "age": 30}';
const jsonObject = parseJSON(jsonString);

if (jsonObject) {
    console.log( jsonObject);
} else {
    console.log('Invalid JSON string');
}