import { BlogItem } from "@/types/types"; // Import the BlogItem type

describe("Blog Component", () => {
  beforeEach(() => {
    // Mock the blog data API call
    cy.intercept("GET", "/api/blogs", {
      fixture: "blogData.json", // Set the fixture path
    }).as("getBlogs");

    cy.visit("/"); // Navigate to the correct URL for the Blog component
  });

  it("Displays the Blog title and description correctly", () => {
    cy.get(".headline .title").should("contain.text", "Blog");
    cy.get(".headline .description").should(
      "contain.text",
      "Discover inspiring articles and tips to enhance your travel experiences."
    );
  });

  it("Renders the correct number of blog slides", () => {
    cy.fixture<BlogItem[]>("blogData.json").then((data) => {
      // Check if the number of blog slides matches the fixture length
      cy.get(".blog-slide").should("have.length", data.length);
      data.forEach((blog) => {
        cy.get(".blog-slide").contains(blog.title).should("exist");
      });
    });
  });

  it("Displays blog images with correct alt text", () => {
    cy.fixture<BlogItem[]>("blogData.json").then((data) => {
      data.forEach((blog) => {
        cy.get(".blog-slide")
          .contains(blog.title)
          .parents(".blog-slide")
          .find("img")
          .should("have.attr", "alt", blog.title);
      });
    });
  });

  it("Navigates to the correct URL when a blog is clicked", () => {
    cy.fixture<BlogItem[]>("blogData.json").then((data) => {
      cy.get(".blog-slide").first().find("a").click();
      const firstBlogUrl = data[0].url;
      cy.url().should("include", firstBlogUrl);
    });
  });

  it("Allows navigation through blog slides", () => {
    // Check the initial number of visible slides
    cy.get(".blogSwiper .swiper-slide").should("have.length", 4); // Adjust based on the `slidesPerView` value

    // Click the next button and check if new slides are displayed
    cy.get(".swiper-button-next").click();
    cy.wait(1000); // Wait for slide transition if needed
    cy.get(".blogSwiper .swiper-slide").should("have.length", 4); // Confirm the number of slides remains constant
  });
});
