import { ExtraServiceItem } from "@/types/types";

describe("ExtraService Component", () => {
  beforeEach(() => {
    // Load the fixture data and intercept the API request with the mock data
    cy.fixture("extraServicesData.json").then(
      (extraServices: ExtraServiceItem[]) => {
        cy.intercept("GET", "/api/extraServices", { body: extraServices });
      }
    );
    cy.visit("/help"); // Update this URL to the page where the component is rendered
  });

  it("Displays the headline section with title and description", () => {
    cy.get(".headline .title").should("contain.text", "Extra Services");
    cy.get(".headline .description").should(
      "contain.text",
      "Enhance your journey with our additional services, tailored to your travel needs."
    );
  });

  it("Renders each extra service card correctly", () => {
    cy.fixture("extraServicesData.json").then(
      (extraServices: ExtraServiceItem[]) => {
        extraServices.forEach((service, index) => {
          cy.get(".extra-service-card")
            .eq(index)
            .within(() => {
              cy.get(".extra-service-icon-content")
                .should("exist")
                .should("have.attr", "data-icon", service.icon);
              cy.get(".extra-service-header")
                .should(
                  "have.css",
                  "background-image",
                  `url("${service.backgroundImage}")`
                )
                .within(() => {
                  cy.get("h3").should("contain.text", service.title);
                });
              cy.get(".extra-service-details p").should(
                "contain.text",
                service.description
              );
              cy.get(".details-button")
                .should("have.attr", "href", service.link)
                .should("contain.text", "Details");
            });
        });
      }
    );
  });

  it("Navigates to the correct service page on 'Details' button click", () => {
    cy.fixture("extraServicesData.json").then(
      (extraServices: ExtraServiceItem[]) => {
        cy.get(".extra-service-card").each(($el, index) => {
          cy.wrap($el).find(".details-button").click();
          cy.url().should("include", extraServices[index].link);
          cy.go("back"); // Go back to test the next item
        });
      }
    );
  });
});
