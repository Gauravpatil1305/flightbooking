describe("Newsletter Component", () => {
  beforeEach(() => {
    cy.visit("/"); // Go to the homepage where the newsletter component is located
  });

  it("Should show an error message if the email is invalid", () => {
    cy.get("input[type='email']").type("invalid-email"); // Type an invalid email
    cy.get("form").submit(); // Submit the form
    cy.get(".popUpMessage").should(
      "contain",
      "Please enter a valid email address"
    ); // Check for error message
  });

  it("Should show a success message when a valid email is submitted", () => {
    cy.get("input[type='email']").type("test@example.com"); // Type a valid email
    cy.get("form").submit(); // Submit the form
    cy.get(".popUpMessage").should(
      "contain",
      "Thank you! You've subscribed to our newsletter."
    ); // Check for success message
  });

  it("Should keep the email input and button visible after successful submission", () => {
    cy.get("input[type='email']").type("test@example.com"); // Type a valid email
    cy.get("form").submit(); // Submit the form
    cy.get("input[type='email']").should("be.visible"); // Check that the email input is still visible
    cy.get("button.submitButton").should("be.visible"); // Check that the subscribe button is still visible
  });
});
