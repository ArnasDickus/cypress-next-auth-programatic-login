describe("Login User", () => {
  it("should Login user", () => {
    // Working Example:
    cy.loginUI("test@test.com", "kflsdfklsdfk");
    cy.get('[data-testid="loggedInUser"]');

    // DOES NOT WORK
    // cy.visit("/");
    // cy.loginPR("test@test.com", "kflsdfklsdfk");
    // cy.reload();
    // cy.get('[data-testid="loggedInUser"]');
  });
});
