# Scientific-Calculator-Google-Chrome-extension
Introducing my personal project, the Scientific Calculator Google Chrome extension! As a student and engineer, I needed a convenient and user-friendly tool for complex calculations. With this extension, I have all the essential functions of a scientific calculator right at my fingertips. It's perfect for anyone who needs to simplify mathematical tasks, whether you're a student, professional, or hobbyist. Say goodbye to manual calculations and let this powerful tool do the work for you. Try it out today!

**How to run a the extension on your Chrome Browser?**
---
- Step 1 : Clone the repository. Then change directory to `Scientific-Calculator-Google-Chrome-extension` by running command `cd Scientific-Calculator-Google-Chrome-extension`.

- Step 2 : Now, install required node modules with `npm install` command.

- Step 3 : After installation, go to your Google Chrome browser and click the Extensions Icon from the top-right corner. Now, Click on `Manage extensions`button from there. Or just go to `chrome://extensions/` url.

- Step 4 : You should find a Developer mode toggle button on the top-right corner of the page. Turn it on.

- Step 5 : After enable Developer mode, you should find 3 more buttons appear on the screen. Click on `Load Unpack`.

- Step 6 : Use `npm run build` to build the extension for production.

- Step 7 : Select the `dist` folder from `Scientific-Calculator-Google-Chrome-extension/dist`.

- Final Step : Done! You should see the extension enabled on the browser. Pin it to make it more accessible.

To make it more developer friendly goto `chrome-extension://{extension_id}/popup.html`
`extension_id` should be copied from `chrome://extensions/`. Below our extension.

**Start development**
---
- Use `npm run dev` to make changes.
- Use `npm run build` to build the extension for production. It will be found on `dist` folder.