# TDD String Calculator

## How to Run

```bash
npm install
npm test
```

## TDD Practice
This project demonstrates TDD (Test-Driven Development) principles. Each function was developed by writing a failing test first, writing just enough code to pass the test, and refactoring where needed.

## Features Implemented
- Empty string returns 0
- One number returns the number
- Two comma-separated numbers return their sum
- New line as a delimiter
- Custom delimiters (`//;\n1;2`)
- Exception on negative numbers
- Numbers greater than 1000 are ignored
- Delimiters of any length (`//[***]\n1***2***3`)
- Multiple custom delimiters (`//[*][%]\n1*2%3`)
- Multiple custom delimiters of varying lengths (`//[**][%%]\n1**2%%3`)

## TDD Evolution
Commits are structured to follow each TDD step:
1. Red: Write a failing test
2. Green: Make the test pass
3. Refactor: Clean up code

---

**Made by Akhtar Parveen - TDD String Calculator Node.js assessment.**