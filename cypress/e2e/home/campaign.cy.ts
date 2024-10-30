import { CampaignItem } from "@/types/types";

describe("Campaign Component", () => {
  beforeEach(() => {
    // Load campaign JSON data and set up API interception
    cy.fixture("campaignData.json").then((campaigns: CampaignItem[]) => {
      cy.intercept("GET", "/api/campaigns", { body: campaigns });
    });
    cy.visit("/"); // Update to the URL where the Campaign component is rendered
  });

  it("Displays the title and description correctly", () => {
    cy.get(".headline .title").should("contain.text", "Campaigns");
    cy.get(".headline .description").should(
      "contain.text",
      "Discover amazing deals that make your travels unforgettable."
    );
  });

  it("Renders all campaign slides with images and details", () => {
    cy.fixture("campaignData.json").then((campaigns: CampaignItem[]) => {
      cy.get(".campaignSwiper .swiper-slide").should(
        "have.length",
        campaigns.length
      );

      campaigns.forEach((campaign, index) => {
        cy.get(".campaignSwiper .swiper-slide")
          .eq(index)
          .within(() => {
            cy.get("img")
              .should("have.attr", "src")
              .and("include", campaign.imageUrl);
            cy.get("h3").should("contain.text", campaign.title);
            cy.get("p").should("contain.text", campaign.description);
          });
      });
    });
  });

  it("Tests Swiper navigation", () => {
    // Check if Swiper navigation buttons work as expected
    cy.get(".campaignSwiper .swiper-button-next").click();
    cy.get(".campaignSwiper .swiper-button-prev").click();
  });
});
