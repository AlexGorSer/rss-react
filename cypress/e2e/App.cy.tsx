describe('Just visit e2e test', () => {
  it('should visit', () => {
    cy.visit('/');
    cy.get('input[type=text]').type('test');
    cy.get('form').submit();
  });
});
