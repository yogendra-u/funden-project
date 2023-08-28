# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

Rules:

1. No inline styles
2. use classnames package ( already in package.json ) to add multiple styles conditionally
3. Keep common classes in index.css
4. Keep pages ( components with routes ) in pages
5. Keep components without routes in components
6. Must export components using components/index
7. All components and pages must be in title case with .jsx file
8. if any component or page need, then create folder inside the component or page with the component or page's name and inside create index.jsx and index.css ( check pages/About structure )
9. Use alias path import ( already created setup in jsconfig.json, vite.config.js ).
10. Every css class name should follow BEM: https://css-tricks.com/bem-101/
11. Ensure that every page has a route defined for it in pages ( check pages/pages.jsx )
12. Don't start with the development. First create a checklist. This checklist, you should divide each page into components, components into sub-components. Not more than 3 levels unless necessary. Ensure that you mention the name each component in the checklist itself (TitleCase)
13. Start with smallest components and then its parent and finally the page.
14. To test the development of component, you can create a dummy test page and directly import it.
15. Ensure that only once you are done with a page, then go to the next page
16. It should behave exactly the way the web app that has been assigned.
17. Ensure that you create a clone of the repo and then change the remote by creating a new repo in your own Github account
18. Ensure that for every component you create a new branch
19. Ensure that once you are done with a component, push that code and merge that branch into main branch and then create a new branch from main for the next component
