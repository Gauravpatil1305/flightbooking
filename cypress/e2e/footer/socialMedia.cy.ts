describe("SocialMedia Component", () => {
  beforeEach(() => {
    cy.visit("/"); // Visit the homepage before each test
    cy.window().then((win) => {
      cy.stub(win, "open").as("windowOpen"); // Stub the window.open method
    });
  });

  it("Should render all social media icons passed", () => {
    cy.get(".footer-socialmedia a").should("have.length", 6); // Check that there are 3 social media icons
  });

  it("Should open the correct URL in a new tab when clicking on an icon", () => {
    const expectedUrl = "https://facebook.com"; // The expected URL to open

    cy.get(".footer-socialmedia a").first().click(); // Click on the first social media icon
    cy.get("@windowOpen").should("be.calledWith", expectedUrl); // Assert that window.open was called with the expected URL
  });
});
