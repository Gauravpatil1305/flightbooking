describe("Alert Component", () => {
  beforeEach(() => {
    cy.fixture("alertData.json").then((alerts) => {
      cy.intercept("GET", "/api/alerts", { body: alerts }); // Dummy data for alerts
      cy.visit("/"); // Visit the homepage or relevant page where the Alert component is mounted
    });
  });

  it("Should display the alert if 'headerShow' is 1", () => {
    cy.get(".alert").should("exist"); // Check that the alert is visible
    cy.get(".alert-title").should("not.be.empty"); // Verify that the title is not empty
  });

  it("Should hide the alert when the close button is clicked", () => {
    cy.get(".close-button").click(); // Close the alert
    cy.get(".alert").should("not.exist"); // Verify that the alert is no longer visible
  });

  it("Should navigate through alerts using next and prev buttons", () => {
    cy.get(".alert-title").then(($title1) => {
      const firstAlertTitle = $title1.text();
      cy.get(".next-button").click(); // Go to next alert
      cy.get(".alert-title").should(($title2) => {
        const secondAlertTitle = $title2.text();
        expect(firstAlertTitle).not.to.eq(secondAlertTitle); // Titles should be different
      });
      cy.get(".prev-button").click(); // Go back to the previous alert
      cy.get(".alert-title").should("have.text", firstAlertTitle); // Should be the first title again
    });
  });

  it("Should display a 'More' link if the alert has one", () => {
    cy.get(".more-button").should("exist"); // Check that the 'More' button exists
    cy.get(".more-button").invoke("attr", "href").should("not.be.empty"); // Ensure the link is not empty
  });
});
