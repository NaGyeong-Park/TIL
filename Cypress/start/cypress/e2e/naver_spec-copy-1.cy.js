describe("empty spec", () => {
  it("passes", () => {
    cy.visit("https://naver.com");
    cy.get(".input_text").type("네이버 검색 타이핑 테스트{enter}");
  });
});
