# My Personal Website

## For users
View it by visiting https://immedha.com/. This is a custom domain from Hostinger.

The original domain for this project, provided by Github Pages, is https://immedha.github.io.

## For developers

This project is made with Vite, Typescript, React.js, and Tailwind CSS. It is set up on Github Pages (nojekyll) as a User page. 

### Running it

There are 2 branches: 
* `main/`: the main branch to commit/push changes to
* `gh-pages/`: the branch which is used to deploy changes

To make changes:
* clone the repo by doing `git clone https://github.com/immedha/immedha.github.io.git`
* make sure you are on main branch (`git checkout main`)
* do `npm install`
* make changes
* push changes: `git add .`, `git commit -m "changes"`, `git push`
* to run the app locally, do `npm run dev`

To deploy:
* `npm run build`
* `npm run deploy`

This should automatically commit the static files to the `gh-pages` branch and deploy using a Github Action. 

Troubleshooting: If the deployment stops working (going to the urls shows 404), go to the `gh-pages` branch and check if the `CNAME` file still exists! There must be a file called `CNAME` in the root with content being the custom domain: `immedha.com`. Also, go to the repo settings >> pages >> custom domain and make sure it is filled in and the checkbox for "enfore HTTPs" is checked.

NOTE: NEVER manually change the branch `gh-pages`!!

### Repo structure (main branch)

`./index.html`: the HTML file for the project

`src/main.tsx`: the entry point that renders the app

`src/App.tsx`: the main component that sets up the router and Tailwind CSS theme for styling

`src/components/`: all the small components rendered within pages
  - `Navbar.tsx`: the navbar that handles clicking on different pages

`src/pages/`: a component for each page in the website
  - `Building.tsx`: the page for all my projects
  - `Connect.tsx`: the contact page
  - `Favorites.tsx`: the page with all my favorite resources, youtube channels, etc that I recommend
  - `Me.tsx`: the homepage describing me
  - `UW.tsx`: the page for all my classes

`public/`: all static assets like images and resume

`node_modules/`: all installed dependencies

`dist/`: the build folder that holds all files after running 
`npm run build`

`.nojekyll`: a file Github Pages requires you to create if you don't want to use Jekyll

### Use of AI in this project
* I coded all the components for this project, and used AI tools for styling. 
* I used ChatGPT to brainstorm the color scheme of this app. Prompt used:
```
I am trying to make a personal website as a computer science student, and I want to brainstorm the color scheme of my website.
I want it to be aesthetic, colorful but not too bright, simple, and I really like Notion's styling so I want to mimic that minimalism. Also, my favorite color is dark green. I need a light and dark mode in my website. Give me an idea for the fonts and color scheme of the project
```
* I used the Github Copilot extension in VSCode to style all the components with TailwindCSS. For every component, I selected all of it and prompted Copilot with "here is the styling I want: {}. Add inline tailwindcss to it."

### My note when I set up the custom domain

"While you make changes to the TLD registry, note how your DNS entry populates across the network. Is it available somewhere (e.g., 8.8.8.8) before it is available locally?"

My answer:
I got a custom domain through Hostinger, and I made changes to the TLD registry in it by updating the A records to the IP addresses of Github pages, and the CNAME record. I checked how the DNS entry populates across the network by using the `dig` command on terminal. I saw that when I did `dig immedha.com @8.8.8.8` and `dig immedha.com`, the @8.8.8.8 showed the new IP address a few minutes before my local DNS. This is interesting because it shows how propogating the domain can be laggy.