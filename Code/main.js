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
const PARKING_OBSERVATION_ZONE = 3;
const PARKING_NONE = 0;
const LEVEL_1_ASCENT = 3;
const LEVEL_2_ASCENT = 15;
const LEVEL_3_ASCENT = 30;

var autoSamplesInNet = 0;  // Auto Net Samples (2 points each)
var autoLowBasket = 0;     // Auto Low Basket (4 points each)
var autoHighBasket = 0;    // Auto High Basket (8 points each)
var autoLowChamber = 0;    // Auto Low Chamber (6 points each)
var autoHighChamber = 0;   // Auto High Chamber (10 points each)
var autoParking = 0;       // Parking Score (Based on selection each)var
var teleSamplesInNet = 0;  // Teleop Net Samples (2 points each)
var teleLowBasket = 0;     // Teleop Low Basket (4 points each)
var teleHighBasket = 0;    // Teleop High Basket (8 points each)
var teleLowChamber = 0;    // Teleop Low Chamber (6 points each)
var teleHighChamber = 0;   // Teleop High Chamber (10 points each)
var teleAscent = 0; // Teleop Ascent Points

function updateTotalScore() {
    let totalScore = (autoSamplesInNet + teleSamplesInNet) * NET_POINTS +
                        (autoLowBasket * 2) + teleLowBasket) * LOW_BASKET_POINTS +
                        (autoHighBasket * 2) + teleHighBasket) * HIGH_BASKET_POINTS +
                        (autoLowChamber * 2) + teleLowChamber) * LOW_CHAMBER_POINTS +
                        (autoHighChamber * 2) + teleHighChamber) * HIGH_CHAMBER_POINTS +
                        (autoParking + teleAscent)
                          

    // Display the total score on the page
    document.getElementById("totalScore").innerText = totalScore;
    }

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
    
    
    // teleop
    else if (scoreType === 'teleSamplesInNet') {
        teleSamplesInNet += increment;
        if (teleSamplesInNet < 0) teleSamplesInNet = 0;
        document.getElementById("teleNetLabel").innerText = teleSamplesInNet
    } else if (scoreType === 'teleLowBasket') {
        teleLowBasket += increment;
        if (teleLowBasket < 0) teleLowBasket = 0;
        document.getElementById("teleLowBasketLabel").innerText = teleLowBasket
    }else if (scoreType === 'teleHighBasket') {
        teleHighBasket += increment;
        if (teleHighBasket < 0) teleHighBasket = 0;
        document.getElementById("teleHighBasketLabel").innerText = teleHighBasket
    } else if (scoreType === 'teleLowChamber') {
        teleLowChamber += increment;
        if (teleLowChamber < 0) teleLowChamber = 0;
        document.getElementById("teleLowChamberLabel").innerText = teleLowChamber
    } else if (scoreType === 'teleHighChamber') {
        teleHighChamber += increment;
        if (teleHighChamber < 0) teleHighChamber = 0;
        document.getElementById("teleHighChamberLabel").innerText = teleHighChamber
    } 

    // Update the total score whenever a value changes
    updateTotalScore();
}
x``
function setParking(parkingType) {
    if (parkingType === 'None') {
        autoParking = PARKING_NONE;
        document.getElementById("AutoParkingNone").style.backgroundColor = 'red';
    document.getElementById("AutoParkingOBS").style.backgroundColor = '';
    document.getElementById("AutoParkingLevel1Ascent").style.backgroundColor = '';
    } else if (parkingType === 'ObservationZone') {
        autoParking = PARKING_OBSERVATION_ZONE;
        document.getElementById("AutoParkingNone").style.backgroundColor = '';
    document.getElementById("AutoParkingOBS").style.backgroundColor = 'red';
    document.getElementById("AutoParkingLevel1Ascent").style.backgroundColor = '';
    } else if (parkingType === 'Level1Ascent') {
        autoParking = LEVEL_1_ASCENT;
        document.getElementById("AutoParkingNone").style.backgroundColor = '';
    document.getElementById("AutoParkingOBS").style.backgroundColor = '';
    document.getElementById("AutoParkingLevel1Ascent").style.backgroundColor = 'red'
    }
    updateTotalScore()
    // Update parking display and total score
    document.getElementById("AutoParkingNone").style.backgroundColor = (parkingType === 'None') ? 'red' : '';
    document.getElementById("AutoParkingOBS").style.backgroundColor = (parkingType === 'ObservationZone') ? 'red' : '';
    document.getElementById("AutoParkingLevel1Ascent").style.backgroundColor = (parkingType === 'Level1Ascent') ? 'red' : '';
}
function setAscent (ascentType) {
    if (ascentType === 'None') {
        teleAscent = 0;
        document.getElementById("teleAscentNone").style.backgroundColor = 'red';
        document.getElementById("teleAscentLevel1").style.backgroundColor = '';
        document.getElementById("teleAscentLevel2").style.backgroundColor = '';
        document.getElementById("teleAscentLevel3").style.backgroundColor = '';
    } else if (ascentType === 'Level 1') {
        teleAscent = LEVEL_1_ASCENT;
        document.getElementById("teleAscentLevel1").style.backgroundColor = 'red';
        document.getElementById("teleAscentNone").style.backgroundColor = '';
        document.getElementById("teleAscentLevel2").style.backgroundColor = '';
        document.getElementById("teleAscentLevel3").style.backgroundColor = '';

    
    } else if (ascentType === 'Level 2') {
        teleAscent = LEVEL_2_ASCENT;
        document.getElementById("teleAscentLevel2").style.backgroundColor = 'red';
        document.getElementById("teleAscentNone").style.backgroundColor = '';
        document.getElementById("teleAscentLevel1").style.backgroundColor = '';
        document.getElementById("teleAscentLevel3").style.backgroundColor = '';


    
    } else if (ascentType === 'Level 3') {
        teleAscent = LEVEL_3_ASCENT
        document.getElementById("teleAscentLevel3").style.backgroundColor = 'red';
        document.getElementById("teleAscentNone").style.backgroundColor = '';
        document.getElementById("teleAscentLevel1").style.backgroundColor = '';
        document.getElementById("teleAscentLevel2").style.backgroundColor = '';
    }
    updateTotalScore();

    
}


