import './commands';
import 'cypress-mochawesome-reporter/register';

Cypress.on('test:after:run', (test, runnable) => {
    if (test.state === 'failed') {
        const screenshotFileName = `${runnable.parent.title} -- ${test.title} (failed).png`;

        // Ensure task runs only after all Cypress commands
        cy.once('command:end', () => {
            cy.task("attachScreenshot", screenshotFileName);
        });
    }
});
