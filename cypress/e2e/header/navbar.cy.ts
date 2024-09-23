describe("Navbar Component", () => {
  beforeEach(() => {
    cy.fixture("headerNavbarItems.json").then((items) => {
      cy.intercept("GET", "/api/navbar", { body: items }); // Add dummy data for navbar
      cy.visit("/");
    });
  });

  it("Should render DesktopNavbar on large screens", () => {
    cy.viewport("macbook-15"); // Desktop size
    cy.get("nav ul li").should("have.length", 5); // Check that there are 5 items in the navbar
  });

  it("Should switch to MobileNavbar on mobile screens", () => {
    cy.viewport("iphone-x");
    cy.get(".menu-btn").click();
    cy.get(".mobile-navbar").should("have.class", "open");
  });

  it("Should highlight the active menu item", () => {
    cy.get("nav ul li.active").should("exist");
  });
});
