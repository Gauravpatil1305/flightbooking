describe("Header Component", () => {
  beforeEach(() => {
    cy.visit("/"); // Opens the page specified as the home
  });

  it("Should render the Logo component correctly", () => {
    cy.get(".logo").should("be.visible");
    cy.get(".logo img").should("have.attr", "alt", "FlightRoutes Logo");
  });

  it("Should open and close the mobile menu", () => {
    cy.viewport("iphone-x"); // Set screen size for mobile view
    cy.get(".menu-btn").click();
    cy.get(".mobile-navbar").should("have.class", "open");
    cy.get(".close-btn").click();
    cy.get(".mobile-navbar").should("not.have.class", "open");
  });
});
