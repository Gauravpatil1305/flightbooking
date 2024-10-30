import { CabinClass } from "@/types/types";

describe("CabinClass Component", () => {
  beforeEach(() => {
    // Load fixture data and intercept API request with mock data
    cy.fixture("cabinClassData.json").then((cabinClassData: CabinClass[]) => {
      cy.intercept("GET", "/api/cabinClass", { body: cabinClassData });
    });
    cy.visit("/"); // Update this URL to where the component is rendered
  });

  it("Displays the headline section with title and description", () => {
    cy.get(".headline .title").should("contain.text", "Cabin Classes");
    cy.get(".headline .description").should(
      "contain.text",
      "Choose the class that matches your style and make every journey unforgettable."
    );
  });

  it("Renders each cabin class card correctly", () => {
    cy.fixture("cabinClassData.json").then((cabinClassData: CabinClass[]) => {
      cabinClassData.forEach((cabin, index) => {
        cy.get(".cabin-card")
          .eq(index)
          .within(() => {
            cy.get("h3").should("contain.text", cabin.title);
            cy.get("ul li").each(($li, liIndex) => {
              expect($li.text()).to.contain(cabin.features[liIndex]);
            });
            cy.get(".more-button")
              .should("have.attr", "href", cabin.link)
              .should("contain.text", "More");
          });
      });
    });
  });

  it("Navigates to the correct page on 'More' button click", () => {
    cy.fixture("cabinClassData.json").then((cabinClassData: CabinClass[]) => {
      cy.get(".cabin-card").each(($el, index) => {
        cy.wrap($el).find(".more-button").click();
        cy.url().should("include", cabinClassData[index].link);
        cy.go("back"); // Return to test the next item
      });
    });
  });
});
