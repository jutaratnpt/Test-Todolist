# Todo List Website
# first install

1. install nodeJs https://nodejs.org
2. install extension "Playwright Test for VSCode" on vscode (https://marketplace.visualstudio.com/items?itemName=ms-playwright.playwright)
3. Run "npm install"
4. Run "npx playwright install"
5. Add libs/text.ts for random text to input 

# how to run automate

1. Run "npm run test" test from Console
2. Run "npm run test-ui" test from UI
3. Run "npm run report" show report
4. Run "npx playwright codegen" for open mode generate script to UI test

# how to run test todo only

1. Run "npx playwright test tests/claim/ui/master-setup/todo.spec.ts"

# how to run test ui folder

1. Run "npm run test-ui --workers=1"