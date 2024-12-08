/*
========================================================
Author: John Boynton
Project: FTC "Into the Deep" Score Calculator
Date Created: 2024-12-07
Description: JavaScript for handling the score calculation logic.
Version: 1.0
Notes:
    - This project calculates the scores based on input data.
    - Designed for teams participating in the 2024 FTC season.
========================================================*/

const NET_POINTS = 2;
const LOW_BASKET_POINTS = 4;
const HIGH_BASKET_POINTS = 8;
const LOW_CHAMBER_POINTS = 6;
const HIGH_CHAMBER_POINTS = 10;
const PARKING_NONE = 0;
const PARKING_OBSERVATION_ZONE = 3;
const PARKING_LEVEL_1_ASCENT = 3;

let autoSamplesInNet = 0;  // Auto Net Samples (2 points each)
let autoLowBasket = 0;     // Auto Low Basket (4 points)
let autoHighBasket = 0;    // Auto High Basket (8 points)
let autoLowChamber = 0;    // Auto Low Chamber (6 points)
let autoHighChamber = 0;   // Auto High Chamber (10 points)
let autoParking = 0;       // Parking Score (Based on selection)

function updateScore(scoreType, increment) {
    // Update scores based on the button clicked
    if (scoreType === 'autoSamplesInNet') {
        autoSamplesInNet += increment;
        if (autoSamplesInNet < 0) autoSamplesInNet = 0; // Prevent negative scores
        document.getElementById("NetLabel").innerText = autoSamplesInNet;
    } else if (scoreType === 'autoLowBasket') {
        autoLowBasket += increment;
        if (autoLowBasket < 0) autoLowBasket = 0; // Prevent negative scores
        document.getElementById("LowBasketLabel").innerText = autoLowBasket;
    } else if (scoreType === 'autoHighBasket') {
        autoHighBasket += increment;
        if (autoHighBasket < 0) autoHighBasket = 0; // Prevent negative scores
        document.getElementById("HighBasketLabel").innerText = autoHighBasket;
    } else if (scoreType === 'autoLowChamber') {
        autoLowChamber += increment;
        if (autoLowChamber < 0) autoLowChamber = 0; // Prevent negative scores
        document.getElementById("LowChamberLabel").innerText = autoLowChamber;
    } else if (scoreType === 'autoHighChamber') {
        autoHighChamber += increment;
        if (autoHighChamber < 0) autoHighChamber = 0; // Prevent negative scores
        document.getElementById("HighChamberLabel").innerText = autoHighChamber;
    }

    // Update the total score whenever a value changes
    updateTotalScore();
}

function setParking(parkingType) {
    if (parkingType === 'None') {
        autoParking = PARKING_NONE;
    } else if (parkingType === 'ObservationZone') {
        autoParking = PARKING_OBSERVATION_ZONE;
    } else if (parkingType === 'Level1Ascent') {
        autoParking = PARKING_LEVEL_1_ASCENT;
    }

    // Update parking display and total score
    document.getElementById("AutoParkingNone").style.backgroundColor = (parkingType === 'None') ? 'red' : '';
    document.getElementById("AutoParkingOBS").style.backgroundColor = (parkingType === 'ObservationZone') ? 'red' : '';
    document.getElementById("AutoParkingLevel1Ascent").style.backgroundColor = (parkingType === 'Level1Ascent') ? 'red' : '';

    updateTotalScore();
}

function updateTotalScore() {
    const totalScore = (autoSamplesInNet * NET_POINTS) +
                        (autoLowBasket * LOW_BASKET_POINTS) +
                        (autoHighBasket * HIGH_BASKET_POINTS) +
                        (autoLowChamber * LOW_CHAMBER_POINTS) +
                        (autoHighChamber * HIGH_CHAMBER_POINTS) +
                        autoParking; // Add parking score

    // Display the total score on the page
    document.getElementById("totalScore").innerText = totalScore;
}
