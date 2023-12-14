export {};

declare global {
  namespace Cypress {
    interface Chainable {
      loginUI(
        email: string,
        password: string
      ): Chainable<{ email: string; password: string }>;
      loginPR(
        email: string,
        password: string
      ): Chainable<{ email: string; password: string }>;
    }
  }
}
