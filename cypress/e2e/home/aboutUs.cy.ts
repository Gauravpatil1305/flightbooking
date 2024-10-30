import { AboutUsItem } from "@/types/types";

describe("AboutUs Component", () => {
  beforeEach(() => {
    // Load JSON data and mock API integration
    cy.fixture("aboutUsData.json").then((aboutUsData: AboutUsItem[]) => {
      cy.intercept("GET", "/api/aboutUs", { body: aboutUsData });
    });
    cy.visit("/"); // Update the URL where the component is rendered
  });

  it("Displays the title and description correctly", () => {
    cy.get(".headline .title").should("contain.text", "About Us");
    cy.get(".headline .description").should(
      "contain.text",
      "Learn more about who we are and what drives our commitment to connect the world."
    );
  });

  it("Displays animated values when component is in viewport", () => {
    cy.fixture("aboutUsData.json").then((aboutUsData: AboutUsItem[]) => {
      cy.get(".about-us").scrollIntoView();

      // Verify each animated value
      aboutUsData.forEach((data) => {
        cy.get(".data .circle").each(($el, index) => {
          cy.wrap($el).should(($div) => {
            const animatedValue = Math.floor(
              Number($div.text().replace(/[^0-9]/g, ""))
            );
            const expectedValue = Object.values(data)[index];
            expect(animatedValue).to.equal(expectedValue);
          });
        });
      });
    });
  });
});
