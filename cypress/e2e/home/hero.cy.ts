import { HeroWallpaper } from "@/types/types";

describe("Hero Component", () => {
  let heroWallpapers: HeroWallpaper[];

  beforeEach(() => {
    cy.visit("/"); // Update path to where the Hero component is rendered

    // Load fixture data for hero wallpapers
    cy.fixture("heroWallpapers.json").then((data) => {
      heroWallpapers = data as HeroWallpaper[];
    });
  });

  it("Should display the first image and country name initially", () => {
    cy.get(".slide.active").should("be.visible");
    cy.get(".detail-card h2").should("contain.text", heroWallpapers[0].country);
  });

  it("Should navigate to the next slide on 'Next' button click", () => {
    cy.get(".next-button").click();
    cy.get(".slide.active").should("be.visible");
  });

  it("Should navigate to the previous slide on 'Prev' button click", () => {
    cy.get(".prev-button").click();
    cy.get(".slide.active").should("be.visible");
  });

  it("Should toggle play/pause on playPause button click", () => {
    // Initial click to start autoplay
    cy.get(".playPause-button").click();
    cy.get(".playPause-button .iconify").should(
      "have.attr",
      "data-icon",
      "mingcute:pause-fill"
    );

    // Next click to pause autoplay
    cy.get(".playPause-button").click();
    cy.get(".playPause-button .iconify").should(
      "have.attr",
      "data-icon",
      "mingcute:play-fill"
    );
  });

  it("Should automatically navigate slides when autoplay is enabled", () => {
    cy.get(".playPause-button").click(); // Start autoplay
    cy.wait(6000); // Wait for one interval cycle
    cy.get(".slide.active").should("be.visible"); // Check if slide has changed
  });
});
