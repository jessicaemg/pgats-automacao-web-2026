

function iniciarCadastro() {
    const emailUnico = `usuario_${Date.now()}@mail.com`;
    cy.get('[action*="signup"]').click();
    cy.get('[data-qa="signup-name"]').type('Marcos');
    cy.get('[data-qa="signup-email"]').type(emailUnico);
    cy.get('[data-qa="signup-button"]').click();
}

function preencherDadosPessoais() {
    cy.get('#id_gender1').check();
    cy.get('[data-qa="password"]').type('12345');
    cy.get('[data-qa="days"]').select('16');
    cy.get('[data-qa="months"]').select('May');
    cy.get('[data-qa="years"]').select('1994');
    cy.get('#newsletter').check();
    cy.get('[data-qa="first_name"]').type('Marcos');
    cy.get('[data-qa="last_name"]').type('Ezequiel');
    cy.get('[data-qa="company"]').type('GFT');
    cy.get('[data-qa="address"]').type('100 Queen Street West, Toronto, ON,');
    cy.get('[data-qa="country"]').select('Canada');
    cy.get('[data-qa="state"]').type('Canada');
    cy.get('[data-qa="city"]').type('Toronto');
    cy.get('[data-qa="zipcode"]').type('M5H 2N2');
    cy.get('[data-qa="mobile_number"]').type('31999999999');
    cy.get('[data-qa="create-account"]').click();

}

function validacaoComSucesso() {
    cy.get('[data-qa="account-created"]').should('be.visible')
        .and('have.text', 'Account Created!');
    cy.contains('Congratulations! Your new account has been successfully created!')
        .should('be.visible');
    cy.contains('You can now take advantage of member privileges to enhance your online shopping experience with us.')
        .should('be.visible');
}

function loginComSucesso(email, senha) {
    cy.get('[action*="login"]').click();
    cy.get('[data-qa="login-email"]').type(email);
    cy.get('[data-qa="login-password"]').type(senha);
    cy.get('[data-qa="login-button"]').click();
}

function validacaoUsuariologado(){
    cy.contains('Logged in as Marcos')
      .should('be.visible');
}

function verificarMensagemErroExibidaLogin(){
    cy.contains('Your email or password is incorrect!')
      .should('be.visible');
}

function usuarioDeslogandoSistema(){
    cy.get('a[href="/logout"]').click();
    cy.contains('Login to your account').should('be.visible');
    cy.get('[action*="login"]').should('be.visible');
}

function verificarNaoPermitirIniciarCadastro(){
    cy.get('[action*="signup"]').click();
    cy.get('[data-qa="signup-name"]').type('Marcos');
    cy.get('[data-qa="signup-email"]').type('marcostststs@gmail.com');
    cy.get('[data-qa="signup-button"]').click();
}

module.exports = {
    iniciarCadastro,
    preencherDadosPessoais,
    validacaoComSucesso,
    loginComSucesso,
    validacaoUsuariologado,
    verificarMensagemErroExibidaLogin,
    usuarioDeslogandoSistema,
    verificarNaoPermitirIniciarCadastro

}