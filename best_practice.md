## 📁 Project Architecture Overview — Quick Notes 📝

> GitHub Repo: [RohitTholada/quick_notes](https://github.com/RohitTholada/quick_notes)

---

### 🧾 Overview

**Quick Notes** is a lightweight note-taking application built using React. It supports creating, editing, deleting, pinning, and searching notes, all managed in the browser via `localStorage`. Upcoming enhancements include grammar correction using AI (OpenAI/Ollama).

---

### 🏗️ Folder Structure and Descriptions

```plaintext
quick_notes/
├── public/                      # Contains static files and the base HTML
│   ├── favicon.ico              # Browser tab icon
│   ├── index.html               # Root HTML file where React is mounted
│   ├── logo192.png              # App icon (192px)
│   ├── logo512.png              # App icon (512px)
│   ├── manifest.json            # PWA configuration file
│   └── robots.txt               # Search engine crawling instructions
│
├── src/                         # Core React app source
│   ├── App.css                  # Global component styling
│   ├── App.js                   # Root React component managing app logic
│   ├── App.test.js              # Sample unit test created by CRA
│   ├── NewNote.js               # Component for adding new notes
│   ├── index.css                # Application-wide styles
│   ├── index.js                 # React DOM entry point
│   ├── logo.svg                 # Default logo for display
│   ├── reportWebVitals.js       # Optional web performance analytics
│   └── setupTests.js            # Setup config for running tests
│
├── .gitignore                   # Files and folders ignored by Git
├── README.md                    # Project documentation (to be updated)
├── package.json                 # Project dependencies and scripts
└── package-lock.json            # Exact version tree of installed packages
✅ Key Features
Feature	Status
Create Note	✅ Implemented
Edit Note	✅ Implemented
Delete Note	✅ Implemented
Pin Note	✅ Implemented
Search Note	✅ Implemented
Font Style/Theme	✅ Implemented
Set Reminders	✅ Implemented

⚙️ Tech Stack
Tech	Usage
React	Frontend Framework
JavaScript	App logic
CSS	Styling
localStorage	Note persistence
Git + GitHub	Version control
Jest (CRA)	Testing setup
OpenAI/Ollama (Planned)	AI for grammar

📦 Dependencies
These are the core dependencies used in the Quick Notes project as listed in package.json.

Package Name	Version	Purpose
react	^18.x	Core library for building UI components
react-dom	^18.x	Enables React to interact with the DOM
react-scripts	5.0.1	Scripts and configs for Create React App
web-vitals	^2.x	Collects performance metrics (optional)

📦 Dev Dependencies (from CRA)
Package Name	Purpose
@testing-library/jest-dom	Adds custom Jest matchers
@testing-library/react	Utilities for testing React components
@testing-library/user-event	Simulates user actions in tests

📄 To view exact versions, see the package.json or package-lock.json.
