📁 Project Architecture Overview — Quick Notes 📝

🧾 Overview

Quick Notes is a lightweight note-taking application built using React. It supports creating, editing, deleting, pinning, and searching notes, all managed in the browser via localStorage. Upcoming enhancements include grammar correction using AI (OpenAI/Ollama).

````markdown
quick_notes/
├── public/                 # Contains static files and the base HTML
│   ├── favicon.ico         # Browser tab icon
│   ├── index.html          # Root HTML file where React is mounted
│   ├── logo192.png         # App icon (192px)
│   ├── logo512.png         # App icon (512px)
│   ├── manifest.json       # PWA configuration file
│   └── robots.txt          # Search engine crawling instructions
│
├── src/                    # Core React app source
│   ├── App.css             # Global component styling
│   ├── App.js              # Root React component managing app logic
│   ├── App.test.js         # Sample unit test created by CRA
│   ├── NewNote.js          # Component for adding new notes
│   ├── index.css           # Application-wide styles
│   ├── index.js            # React DOM entry point
│   ├── logo.svg            # Default logo for display
│   ├── reportWebVitals.js  # Optional web performance analytics
│   └── setupTests.js       # Setup config for running tests
│
├── .gitignore              # Files and folders ignored by Git
├── README.md               # Project documentation (to be updated)
├── package.json            # Project dependencies and scripts
└── package-lock.json       # Exact version tree of installed packages

✅ Features Implemented
| Feature                      | Status                 |
| ---------------------------- | ---------------------- |
| Create a Note                | ✅                      |
| View Notes                   | ✅                      |
| Edit Notes                   | ✅                      |
| Delete Notes                 | ✅                      |
| Pin Notes                    | ✅                      |
| Search Notes                 | ✅                      |
| Change Font Style            | ✅                      |
| Set Reminders                | ✅                      |



🧪 Testing Setup
App.test.js and setupTests.js are preconfigured with Create React App (CRA).
No additional unit or integration tests written yet.


