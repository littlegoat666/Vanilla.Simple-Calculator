# Vanilla.Simple-Calculator

![License](https://img.shields.io/badge/license-MIT-blue.svg)
![Language](https://img.shields.io/badge/language-JavaScript-yellow.svg)

> A stylish, lightweight calculator web application built with raw HTML, CSS, and Vanilla JavaScript.

## 📋 Table of Contents
- [Vanilla.Simple-Calculator](#vanillasimple-calculator)
  - [📋 Table of Contents](#-table-of-contents)
  - [ℹ️ About The Project](#ℹ️-about-the-project)
  - [✨ Features](#-features)
  - [🛠 Built With](#-built-with)
  - [🚀 Getting Started](#-getting-started)
    - [Installation](#installation)
  - [💡 Usage](#-usage)
  - [📂 Project Structure](#-project-structure)

## ℹ️ About The Project

This project is a fully functional calculator designed with a modern dark UI. It handles basic arithmetic operations as well as more complex logic like order of operations (via brackets) and percentage calculations without relying on external libraries.

The interface features smooth transitions where the input equation moves up and the result takes focus upon calculation.

## ✨ Features

Based on the source code, this calculator supports:
* **Basic Arithmetic:** Addition, Subtraction, Multiplication (`×`), and Division (`÷`).
* **Advanced Operations:**
    * **Brackets `( )`:** Automatically balances open/close brackets for complex equations.
    * **Percentage `%`:** Custom logic to handle percentage calculations in equations.
* **Smart Editing:**
    * **Backspace:** Deletes the last character (or resets if the calculation is done).
    * **AC (All Clear):** Resets the entire calculator state.
* **UI/UX:**
    * Responsive display with the 'Jersey 10' pixel-style font.
    * Visual feedback when the "Equals" button is pressed.
    * Glassmorphism-inspired design with a gradient background.

## 🛠 Built With

* **HTML5** - Structure of the application.
* **CSS3** - Styling, Flexbox/Grid layouts, and Animations.
* **JavaScript (Vanilla)** - Logic handling (DOM manipulation, event listeners, and calculation algorithms).
* **Font:** [Jersey 10](https://fonts.google.com/specimen/Jersey+10) from Google Fonts.

## 🚀 Getting Started

Since this is a static web project, you don't need to install any complex dependencies.

### Installation

1.  **Clone the repository**
    ```sh
    git clone [https://github.com/littlegoat666/Vanilla.Simple-Calculator.git](https://github.com/littlegoat666/Vanilla.Simple-Calculator.git)
    ```
2.  **Open the project**
    * Navigate to the folder.
    * Double-click `index.html` to open it in your default web browser.

## 💡 Usage

1.  Click the numbers to enter values.
2.  Use operators (+, -, ×, ÷) to build your equation.
3.  Use `( )` to prioritize operations.
4.  Press `=` to see the result.
5.  Press `AC` to clear everything or use the `Backspace` icon to correct mistakes.

## 📂 Project Structure

```text
Vanilla.Simple-Calculator/
├── index.html      # Main HTML structure
├── style.css       # All styles and responsive design
├── script.js       # Calculator logic and event handling
├── favicon.svg     # Browser tab icon
└── README.md       # Project documentation