/// <reference types="cypress" />

describe("get info", () => {
  it("a user can find info about a country with a click", () => {
    cy.visit("http://localhost:5173/");
    cy.get("input").type("Bel");
    cy.get('li[data-name="Belize"]').click();
    cy.get("button").click();
  });

  it("a user can find info about a country using keyboard", () => {
    cy.visit("http://localhost:5173/");
    cy.get("input")
      .type("Bel")
      .type("{downArrow}{downArrow}{downArrow}{enter}", { delay: 100 });
    cy.get("button").click();
  });
});
