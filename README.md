# 🧰 My Projects — Web Tools Collection

[![CI](https://github.com/Mohammedkhaled96/My-Projects/actions/workflows/ci.yml/badge.svg)](https://github.com/Mohammedkhaled96/My-Projects/actions/workflows/ci.yml)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?logo=javascript&logoColor=black)
![HTML5](https://img.shields.io/badge/HTML5-E34F26?logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?logo=css3&logoColor=white)
![PHP](https://img.shields.io/badge/PHP-777BB4?logo=php&logoColor=white)

A collection of small, practical web applications — each folder is a standalone project you can open directly in the browser (PHP projects need a PHP server).

## 📂 Projects

| Project | Description | Tech |
|---|---|---|
| [Online HTML/CSS/JS Live Editor](online%20HTMl%20CSS%20javascript%20LiveEditor) | Write HTML, CSS and JavaScript and see the result live | JavaScript |
| [Online Python Compiler](online%20python%20compiler) | Run Python code in the browser | JavaScript |
| [Touch Typing Game](touch%20typing%20game) | Practice typing speed and accuracy | JavaScript |
| [Note Taker](note%20taker%20application) | Simple note-taking app | JavaScript |
| [Wi-Fi QR Code](Waifai%20QR%20code) | Generate a QR code to share Wi-Fi credentials | JavaScript · qrcode.js |
| [Email Signature Generator](Email%20signature%20generater) | Build a professional HTML email signature | JavaScript |
| [Email Generator](email%20generater) | Generate email addresses from name patterns | JavaScript |
| [Data Generator](data%20generater) | Generate sample data for testing | JavaScript |
| [ID Card Creation](ID%20creation) | Design and export ID cards | JavaScript |
| [IT Standard Requests](IT%20standerd%20requests) | IT request form and document viewer | JavaScript |
| [Contact Form with PHPMailer + reCAPTCHA](contact%20form%20by%20using%20php%20mailer%20and%20google%20recaptcha) | Contact form protected by Google reCAPTCHA | PHP · PHPMailer |
| [Contact Form to WhatsApp](contact%20form%20to%20WhatsApp) | Send contact form submissions to WhatsApp | JavaScript |
| [Profile](Profile) | Personal profile page | HTML · CSS · JavaScript |
| [About](about) | About page | HTML · CSS · JavaScript |

## 🚀 Running locally

- **Static projects:** open the folder's `index.html` in your browser.
- **PHP projects:** from the project folder run
  ```bash
  php -S localhost:8000
  ```

## 🔐 Configuration

The reCAPTCHA contact form needs your own keys. Replace `YOUR_RECAPTCHA_SECRET_KEY` in `sendemail.php` with your secret key (better: load it from an environment variable) — never commit real keys.

## ⚙️ CI/CD

GitHub Actions checks PHP syntax and README links on every push and pull request.
