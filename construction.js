/**
 *   @author Essmaker, JoAnne (joannessmaker@gmail.com)
 *   @summary Project 1 || created: 09.25.2017
 */

"use strict";
const PROMPT = require('readline-sync');

let BASEPRICE;
const LANGUAGE = 'English';

function main() {
    setLot();
    setNumberBedrooms();
    setNumberBathrooms();
    setNumberCars();
    totalBedrooms();
    totalBathrooms();
    totalCars();
    setBASEPRICE();
    totalHomePrice();
    printResults();
}

main();

function setLot() {
    setLot = PROMPT.question(`\nWELCOME TO RIVER FALLS SUBDIVISION \n\n\tPlease enter lot number: `);
}
function setNumberBedrooms() {
    setNumberBedrooms = PROMPT.question(`\n\tNumber of Bedrooms: `);
}
function totalBedrooms() {
    totalBedrooms = setNumberBedrooms * 17000;
}
function setNumberBathrooms() {
    setNumberBathrooms = PROMPT.question(`\tNumber of Bathrooms: `);
}
function totalBathrooms() {
        totalBathrooms = setNumberBathrooms * 12500;
}
function setNumberCars() {
    setNumberCars = PROMPT.question(`\tNumber of Cars: `);
}
function totalCars() {
        totalCars = setNumberCars * 6000;
}
function setBASEPRICE() {
    setBASEPRICE = 50000;
}
function totalHomePrice() {
    totalHomePrice = setBASEPRICE + totalBathrooms + totalBedrooms + totalCars;
}
function printResults() {
    console.log (`\n\tTOTAL HOME PRICE $${totalHomePrice}`);
    console.log(`\n(Your primary language is ${LANGUAGE})`);
}

/*
Design the logic for a program for the River Falls Homes Construction Company.
Design a program that prompts the user for a lot number in the River Falls subdivision,
and data about the home to be built there including number of bedrooms, number of bathrooms,
and size of garage in number of cars it holds.  Output is the price of the home which
is $50,000 base price plus $17,000 for each bedroom, $12,500 for each bathroom,
and $6,000 for each car the garage holds.
 */
