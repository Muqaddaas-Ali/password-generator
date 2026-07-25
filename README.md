# 🔐 Password Generator

A lightweight, browser-based password generator built with vanilla HTML, CSS, and JavaScript. Generate secure, customizable passwords instantly — no frameworks, no dependencies, no backend.

## 📋 Overview

This project lets users generate random passwords with full control over length and character composition. It's built for simplicity and clarity, making it a good reference project for practicing DOM manipulation and event handling in plain JavaScript.

## ✨ Features

- **Adjustable length** — choose a password length between 4 and 32 characters using a slider
- **Character type toggles** — include/exclude uppercase letters, lowercase letters, numbers, and symbols
- **One-click copy** — copy the generated password to your clipboard instantly
- **Input validation** — warns the user if no character type is selected
- **Zero dependencies** — pure HTML, CSS, and JavaScript

## 🛠️ Tech Stack

| Technology | Purpose |
|---|---|
| HTML5 | Structure and markup |
| CSS3 | Styling and layout |
| JavaScript (ES5+) | Password generation logic and DOM interaction |

## 📁 Project Structure

```
password-generator/
├── index.html      # Markup and structure
├── style.css       # Styling
├── script.js       # Password generation logic
└── README.md       # Project documentation
```

## 🚀 Getting Started

### Prerequisites

None — just a web browser.

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/<your-username>/password-generator.git
   ```
2. Navigate to the project folder:
   ```bash
   cd password-generator
   ```
3. Open `index.html` in your browser (double-click it, or right-click → Open With → Browser).

No build tools, package installs, or servers required.

## 🎯 How It Works

1. Move the slider to set the desired password length (4–32 characters).
2. Check or uncheck the character type options: uppercase, lowercase, numbers, symbols.
3. Click **Generate Password**.
4. Click the 📋 icon next to the password field to copy it to your clipboard.

If no character type is selected, the app will prompt you to choose at least one before generating.

## 🌐 Browser Support

Works in all modern browsers (Chrome, Firefox, Edge, Safari) that support standard DOM APIs and `document.execCommand`.

## 🔮 Possible Improvements

- Password strength indicator
- Option to exclude ambiguous characters (e.g. `l`, `1`, `O`, `0`)
- `navigator.clipboard` API instead of the deprecated `execCommand`
- Dark mode toggle

## 👤 Author

**Muqaddas Ali**

## 📄 License

This project is licensed under the MIT License — free to use, modify, and distribute.
