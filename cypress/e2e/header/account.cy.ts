describe("Account Component", () => {
  it("Should navigate to the contact page when clicking Sign In", () => {
    cy.visit("/");
    cy.get(".account a").click();
    cy.url().should("include", "/contact"); // Check if the URL contains "/contact"
  });
});
