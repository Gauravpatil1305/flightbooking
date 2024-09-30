describe("Footer Logo Component", () => {
  beforeEach(() => {
    cy.visit("/"); // Navigate to the homepage before each test
  });

  it("Should render the FlightRoutes logo in the footer", () => {
    cy.get(".footer-logo img")
      .should("be.visible") // Verify the logo is visible
      .and("have.attr", "alt", "FlightRoutes Logo"); // Check if alt text is correct
  });

  it("Should navigate to the homepage when clicking the footer logo", () => {
    cy.visit("/contact"); // Visit another page
    cy.get(".footer-logo a").click(); // Click the logo in the footer
    cy.url().should("eq", Cypress.config().baseUrl + "/"); // Check redirection to the homepage
  });
});
