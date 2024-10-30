import { PopularDestinationsRegion } from "@/types/types";

describe("Popular Destinations Component", () => {
  beforeEach(() => {
    // Mock the popular destinations data
    cy.intercept("GET", "/api/popular-destinations", {
      fixture: "popularDestinationsData.json",
    });
    cy.visit("/"); // Update with the correct URL for the PopularDestinations component
  });

  it("Displays the Popular Destinations title and description correctly", () => {
    cy.get(".headline .title").should("contain.text", "Popular Destinations");
    cy.get(".headline .description").should(
      "contain.text",
      "Uncover the world’s hidden gems and start your journey to extraordinary experiences."
    );
  });

  it("Renders the correct tabs for each region", () => {
    cy.fixture<PopularDestinationsRegion[]>(
      "popularDestinationsData.json"
    ).then((data) => {
      data.forEach((region) => {
        cy.get(".tabs .tab").contains(region.region).should("exist");
      });
    });
  });

  it("Activates the correct tab and displays corresponding destinations", () => {
    // Click on the first tab
    cy.get(".tabs .tab").first().click();

    // Check that the first region's destinations are displayed
    cy.fixture<PopularDestinationsRegion[]>(
      "popularDestinationsData.json"
    ).then((data) => {
      const firstRegion = data[0];
      firstRegion.destinations.forEach((destination) => {
        cy.get(".countries").contains(destination.country).should("exist");
      });
    });

    // Click on the second tab
    cy.get(".tabs .tab").eq(1).click();

    // Check that the first region's destinations are hidden
    cy.fixture<PopularDestinationsRegion[]>(
      "popularDestinationsData.json"
    ).then((data) => {
      const firstRegion = data[0];
      firstRegion.destinations.forEach((destination) => {
        cy.get(".countries").contains(destination.country).should("not.exist");
      });
    });

    // Check that the second region's destinations are displayed
    cy.fixture<PopularDestinationsRegion[]>(
      "popularDestinationsData.json"
    ).then((data) => {
      const secondRegion = data[1];
      secondRegion.destinations.forEach((destination) => {
        cy.get(".countries").contains(destination.country).should("exist");
      });
    });
  });

  it("Updates the active tab correctly when clicked", () => {
    // Click the second tab
    cy.get(".tabs .tab").eq(1).click();
    cy.get(".tabs .tab").eq(1).should("have.class", "active");

    // Click the first tab
    cy.get(".tabs .tab").first().click();
    cy.get(".tabs .tab").first().should("have.class", "active");
  });
});
