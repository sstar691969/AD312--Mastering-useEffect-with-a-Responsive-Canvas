# AD312--Mastering-useEffect-with-a-Responsive-Canvas
 Mastering useEffect with a Responsive Canvas


William Anderson

AD312

Responsive Card (React + useEffect)

Overview

This project is a Responsive Card built using React. It demonstrates how to use the useEffect hook to listen to browser window resize events and dynamically update UI state in real time.

The component tracks window width and height and changes its layout and background color between Mobile and Desktop views.

---

Tech Stack

- React (Create React App)
- JavaScript (ES6+)
- React Hooks (useState, useEffect)

---

How to Run the Project

Install dependencies
npm install

Start the development server
npm start

Open in browser
http://localhost:3000

---
How It Works

- useState stores window width and height
- useEffect listens to browser resize events
- window.addEventListener("resize", handler) updates state in real time
- cleanup function removes event listener when component unmounts
- UI updates dynamically based on screen size breakpoint (768px)

---

## 📁 Project Structure

src/
├── components/
│   └── ResponsiveCard.jsx
├── App.js
├── index.js

---

Test Cases

Normal Test Cases

Test Case 1: Initial load
Action: Open application in browser  
Expected Result: Window width and height display correctly  

---
Test Case 2: Resize window slightly
Action: Drag browser window to change size  
Expected Result: Width and height update in real time  

---

Test Case 3: Switch between sizes
Action: Expand browser to full screen  
Expected Result: UI switches to Desktop View with correct background color  

---

## ⚠️ Edge Cases

Test Case 4: Small screen (mobile simulation)
Action: Resize window below 768px  
Expected Result: UI switches to Mobile View and changes background color  

---

Test Case 5: Rapid resizing
Action: Quickly resize browser multiple times  
Expected Result: No lag, no crashes, smooth updates  

---

Test Case 6: Component unmount
Action: Navigate away or refresh page  
Expected Result: Event listener is properly removed (no memory leaks)  

---

Cleanup Explanation

The useEffect cleanup function removes the resize event listener to prevent memory leaks and unnecessary performance issues when the component unmounts.

---

Key Features

- Real-time window size tracking
- Responsive UI (Mobile/Desktop breakpoints)
- useEffect lifecycle management
- Event listener cleanup
- Dynamic styling based on screen width

---

Author

Responsive Card Assignment – React useEffect Project
