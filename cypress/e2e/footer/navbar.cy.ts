import { FooterNavbarItem } from "@/types/types"; // Import the correct type

describe("Footer Navbar Component", () => {
  let navbarItems: FooterNavbarItem[]; // Define the correct type for navbar items

  beforeEach(() => {
    // Visit the page containing the Footer Navbar
    cy.visit("/"); // Update the page path according to your project

    // Load the data from the fixtures file and assign it to the correct type
    cy.fixture("footerNavbarItems").then((items: FooterNavbarItem[]) => {
      navbarItems = items;
    });
  });

  it("Should render all navbar titles", function () {
    // Check if all navbar titles are rendered correctly
    navbarItems.forEach((item) => {
      cy.contains(item.title).should("be.visible");
    });
  });

  it("Should toggle the accordion when clicking on a title", function () {
    // Click on the first navbar title and check if the accordion opens
    cy.contains(navbarItems[0].title).click();
    cy.get(".navbar-list").first().should("have.class", "open");

    // Click again to check if the accordion closes
    cy.contains(navbarItems[0].title).click();
    cy.get(".navbar-list").first().should("not.have.class", "open");
  });

  it("Should navigate to the correct path when a link is clicked", function () {
    // Click on the first item's first link and check if the navigation works
    cy.contains(navbarItems[0].title).click(); // Open the first accordion
    cy.contains(navbarItems[0].links[0].name).click(); // Click the first link

    // Verify if the URL is correct
    cy.url().should("include", navbarItems[0].links[0].path);
  });
});
