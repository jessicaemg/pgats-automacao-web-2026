import * as loginValida from "../../modules/cadastro/index.js";

describe('', () => {


  it('CT1 - Usuário novo que não possui conta', () => {
    cy.visit("/login");
    //Iniciar cadastro 
    loginValida.iniciarCadastro();
    //Preencher dados pessoais 
    loginValida.preencherDadosPessoais();
    //validação do cadastro realizado com sucesso
    loginValida.validacaoComSucesso();
  });

  //Test Case 2: Login User with correct email and password
  it('CT2 - logando com usuário criado e validando se está exibindo o nome correto', () => {
    cy.visit("/login");
    loginValida.loginComSucesso('marcostststs@gmail.com', '12345');
    loginValida.validacaoUsuariologado();

  });

  //Test Case 3: Login User with incorrect email and password
  it('CT3 - Não deve permitir usuário logar pois o e-mail está incorreto', () => {

    cy.visit("/login");
    loginValida.loginComSucesso('mar@gmail.com', '12345');
    loginValida.verificarMensagemErroExibidaLogin();
  });

  //Test Case 4: Logout User
  it('CT4 - usuário deslogando do sistema', () => {

    cy.visit("/login");
    loginValida.loginComSucesso('marcostststs@gmail.com', '12345');
    loginValida.validacaoUsuariologado();
    loginValida.usuarioDeslogandoSistema();
    
  });

  //Test Case 5: Register User with existing email
  it('CT5 - Não deve permitir criar usuário pois o email informado já possue usuário cadastrado', () => {

    cy.visit("/login");
    loginValida.verificarNaoPermitirIniciarCadastro();    
    cy.contains('Email Address already exist!')
      .should('be.visible');

  });


});