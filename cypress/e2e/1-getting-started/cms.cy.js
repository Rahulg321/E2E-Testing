describe("example cms app from 100xdevs", () => {
  beforeEach(() => {
    cy.visit("https://app.100xdevs.com/");
  });

  it("it is able to log in", () => {
    cy.contains("Login").should("exist");
    cy.contains("Login").click();
    cy.contains("Sign in to your account").should("exist", { timeout: 10000 });
    cy.get("#email").type("harikirat.ittr@gmail.com");
    cy.get("#password").type("123random");
    cy.get("button").eq(4).click();
    cy.contains("View Content").should("exist", { timeout: 10000 });
  });
});
