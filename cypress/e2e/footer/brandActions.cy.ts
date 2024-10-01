import { MarketLink } from "@/types/types"; // Import the correct type

describe("BrandActions Component", () => {
  let marketLinks: MarketLink[]; // Correctly define the type for marketLinks

  beforeEach(() => {
    // Visit the page that contains the BrandActions component
    cy.visit("/"); // Adjust according to your project structure

    // Load the fixture data for market links and assign to the correct type
    cy.fixture("marketLinks").then((data: { marketLinks: MarketLink[] }) => {
      marketLinks = data.marketLinks;
      cy.intercept("GET", "/api/marketLinks", marketLinks); // Use the correctly typed data
    });
  });

  it("Should render the copyright text", () => {
    // Check if the copyright text is visible
    cy.contains("© 2024 Flight Routes. All Rights Reserved.").should(
      "be.visible"
    );
  });

  it("Should render all market links", () => {
    // Check if all market links are rendered correctly
    marketLinks.forEach((market) => {
      cy.get(`a[href="${market.url}"]`).should("be.visible");
    });
  });

  it("Should open market links in a new tab", () => {
    // Check if the links open in a new tab by verifying 'target' attribute
    cy.get('a[target="_blank"]').should(
      "have.attr",
      "rel",
      "noopener noreferrer"
    );
  });
});
