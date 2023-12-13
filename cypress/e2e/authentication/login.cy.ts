describe("Login User", () => {
  it("should Login user", () => {
    cy.visit("/");
    cy.get('[data-testid="emailTestId"]').type("test@test.com");
    cy.get('[data-testid="passwordTestId"]').type("kflsdfklsdfk");
    cy.get('[data-testid="submitFormTestId"]').click();
    cy.get('[data-testid="loggedInUser"]');
    cy.reload();
  });
});
