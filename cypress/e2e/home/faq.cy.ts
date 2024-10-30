import { FaqItem } from "@/types/types";

describe("FAQ Component", () => {
  beforeEach(() => {
    // Load the FAQ JSON data
    cy.fixture("faqData.json").then((faqData: FaqItem[]) => {
      cy.intercept("GET", "/api/faq", { body: faqData });
    });
    cy.visit("/"); // Update with the correct URL for the FAQ component
  });

  it("Displays the FAQ title and description correctly", () => {
    cy.get(".headline .title").should("contain.text", "Ask Any Question?");
    cy.get(".headline .description").should(
      "contain.text",
      "Check out our FAQs for helpful tips and answers to make your travel effortless!"
    );
  });

  it("Renders all FAQ items with correct questions and answers", () => {
    cy.fixture("faqData.json").then((faqData: FaqItem[]) => {
      faqData.forEach((item, index) => {
        cy.get(".accordion-item")
          .eq(index)
          .within(() => {
            cy.get(".accordion-header h3").should(
              "contain.text",
              item.question
            );
          });
      });
    });
  });

  it("Expands and collapses FAQ items when clicked", () => {
    cy.get(".accordion-item").first().as("firstItem");

    // Initially, the answer should not be visible
    cy.get("@firstItem").find(".accordion-content").should("not.be.visible");

    // Click to expand
    cy.get("@firstItem").find(".accordion-header").click();
    cy.get("@firstItem").find(".accordion-content").should("be.visible");

    // Click to collapse
    cy.get("@firstItem").find(".accordion-header").click();
    cy.get("@firstItem").find(".accordion-content").should("not.be.visible");
  });

  it("Redirects to the correct URL when 'All Questions' is clicked", () => {
    cy.get(".all-button").click();
    cy.url().should("include", "/help"); // Update URL if necessary
  });
});
