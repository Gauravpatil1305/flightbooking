describe("Logo Component", () => {
  it("Should navigate to the homepage when clicking the logo", () => {
    cy.visit("/contact"); // Go to another page
    cy.get(".logo a").click(); // Click on the logo link
    cy.url().should("eq", Cypress.config().baseUrl + "/"); // Check if you are redirected to the home
  });
});
