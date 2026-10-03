# Navigation Calculator

A calculator for the three classic navigation problems: **time, speed and distance**. Built by a navigation student, for quick checks on the bridge or while studying.

**Live demo:** https://dianhristovv.github.io/Maritime-calculator/

## Features

- **Time to arrival**: enter distance (NM) and speed (knots), get the time in hours and minutes
- **Speed**: enter distance and time (hours + minutes), get the speed in knots
- **Distance**: enter speed and time (hours + minutes), get the distance in nautical miles
- **Navigator-friendly answers**: "8 hours 20 minutes" instead of "8.333 hours"
- **Rounding handled correctly**: a result never shows "60 minutes", it rolls over to the next hour
- **Input checks**: impossible values like a speed of 0 or negative time are caught
- **Mobile-friendly design** with a dark nautical theme

## Formulas

| Calculation | Formula |
|---|---|
| Time | distance / speed |
| Speed | distance / time |
| Distance | speed x time |

Time is entered as hours and minutes and converted to decimal hours (minutes / 60) before calculating.

## Built with

- HTML
- CSS
- JavaScript (no frameworks or libraries)

## What I learned

- Reading input values and converting text to numbers
- Math in JavaScript: `Math.floor`, `Math.round`, `toFixed`
- Converting decimal hours to hours and minutes, and back
- Handling edge cases with `if / else`
- Reusing logic with a helper function that returns a value
- Styling a clean, mobile-friendly interface with CSS
- Version control with Git and hosting with GitHub Pages

## How to use

1. Open the live demo
2. Choose the calculator you need
3. Enter the two known values and click **Calculate**

## Ideas for the future

- ETA with a real departure time and date
- Fuel consumption calculator
- Distance between two positions (latitude / longitude)
