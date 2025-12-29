# Vanilla.Simple-Calculator

![HTML5](https://img.shields.io/badge/html5-%23E34F26.svg?style=for-the-badge&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/css3-%231572B6.svg?style=for-the-badge&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E)

> A lightweight, retro-styled calculator web application built with raw HTML, CSS, and Vanilla JavaScript.

## ℹ️ About The Project

This project is a fully functional calculator designed with a modern dark UI using a linear gradient background. It goes beyond basic arithmetic by handling complex operations like **brackets balancing** and **percentage logic** without relying on external libraries.

The interface features smooth CSS transitions where the input equation moves up and the result takes focus upon calculation.

## ✨ Key Features

Based on the source code, this calculator includes:

### 🧮 Functionality
* **Standard Operations:** Addition, Subtraction, Multiplication (`×`), and Division (`÷`).
* **Advanced Logic:**
    * **Brackets `( )`:** Automatically balances open/close brackets for complex equations.
    * **Percentage `%`:** Custom algorithm to handle percentage calculations contextually.
* **Editing Tools:**
    * **Backspace:** A custom CSS-styled button to delete the last character.
    * **AC (All Clear):** Resets the calculator state entirely.

### 🎨 Design & UI
* **Retro Typography:** Uses the **'Jersey 10'** font from Google Fonts for a digital look.
* **Glassmorphism Style:** Buttons and container feature soft shadows and transparency.
* **Interactive Animations:** The display area animates when the `=` button is pressed, shifting focus from the input string to the calculated result.
* **Responsive Layout:** Centered design using CSS Flexbox.

## 🛠️ Built With

* **HTML5** - Semantic structure.
* **CSS3** - Grid layout for buttons, CSS variables, and custom pseudo-elements (used for the Backspace icon).
* **Vanilla JavaScript** - DOM manipulation and calculation logic using `eval()` with sanitized inputs.

## 🚀 Getting Started

Since this is a static web project, no installation of Node.js or packages is required.

### Prerequisites
* A modern web browser (Chrome, Firefox, Safari, Edge).

### Installation
1.  **Clone the repository**
    ```sh
    git clone [https://github.com/littlegoat666/Vanilla.Simple-Calculator.git](https://github.com/littlegoat666/Vanilla.Simple-Calculator.git)
    ```
2.  **Open the project**
    * Navigate to the project folder.
    * Double-click `index.html` to launch it in your browser.

## 💡 Usage

1.  **Input:** Click numbers and operators to form an equation.
2.  **Brackets:** Use `( )` to prioritize parts of your calculation. The script automatically detects whether to open or close a bracket.
3.  **Calculate:** Press `=` to see the result with a smooth animation.
4.  **Clear:** Press `AC` to start over.

## 📂 Project Structure

```text
Vanilla.Simple-Calculator/
├── index.html      # Main application structure
├── style.css       # Styling, animations, and 'Jersey 10' font import
├── script.js       # Core logic (Calculation, Event Listeners)
├── favicon.svg     # Project icon
└── README.md       # Documentation
