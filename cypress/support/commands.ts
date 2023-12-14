/// <reference types="cypress" />

Cypress.Commands.add("loginUI", (email, password) => {
  cy.visit("/");
  cy.get('[data-testid="emailTestId"]').type(email);
  cy.get('[data-testid="passwordTestId"]').type(password);
  cy.get('[data-testid="submitFormTestId"]').click();
});

// @ts-ignore
Cypress.Commands.add("loginPR", (email, password) => {
  cy.request("GET", "/api/auth/csrf").then((csrfResponse: any) => {
    const csrfToken = csrfResponse.body.csrfToken;
    console.log("email", email);
    console.log("password", password);
    console.log("csrfToken", csrfToken);
    cy.request("POST", "/api/auth/signin/credentials", {
      email,
      password,
      csrfToken,
    }).then((loginResponse) => {
      console.log("loginResponse", loginResponse);
      expect(loginResponse.status).to.equal(200);
      cy.log("Response Body:", loginResponse.body);
      cy.log("Response Headers:", loginResponse.headers);
    });
  });

  return cy.wrap(null);
});

// ***********************************************
// This example commands.ts shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
//
// declare global {
//   namespace Cypress {
//     interface Chainable {
//       login(email: string, password: string): Chainable<void>
//       drag(subject: string, options?: Partial<TypeOptions>): Chainable<Element>
//       dismiss(subject: string, options?: Partial<TypeOptions>): Chainable<Element>
//       visit(originalFn: CommandOriginalFn, url: string, options: Partial<VisitOptions>): Chainable<Element>
//     }
//   }
// }
