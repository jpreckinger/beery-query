# beery-query

This application allows a user to search for a beer by name. The results are displayed,
and a user can click on one. When clicked, more information is displayed, including an image.

To run, type 'npm install', and then 'npm start' in the terminal, and navigate to localhost:3000 in your browser.

## Design note

I chose to conditionally render the extra beer information, as opposed to displaying a separate view. Had I done it the other way, I could have passed the selected beer as props to the child component, or used React-Redux for state management, and dispatched the selected beer to the redux store, and then used it to render the expanded display on a seperate page, using something like react-router-dom. I went with the conditional render because it seemed like a more elegant solution.

Built using React.js and Material-UI.
