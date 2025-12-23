import { MenuInformacoesPage } from '../../page/menus/MenuInformacoesPage';

describe('menus Informações', () => {

  const menuInformacoesPage = new MenuInformacoesPage(); // ✅ cria instância

  beforeEach(() => {
    cy.visit('/');
    menuInformacoesPage.clickInformacoes(); // ✅ usa o método da instância
  });

  it('Informações -> Datas Comemorativas', () => {
    menuInformacoesPage.clickDatasComemorativas(); // ✅ usa o método da instância
  });

  it('Informações -> Consultar Protocolo de Formulário', () => {
    menuInformacoesPage.clickConsultarProtocoloFormulario(); // ✅ usa o método da instância
  });

  it('Informações -> Área de Esportes e Lazer', () => {
    menuInformacoesPage.clickAreaEsportesLazer(); // ✅ usa o método da instância
  });

  it('Informações -> Feiras', () => {
    menuInformacoesPage.clickFeiras(); // ✅ usa o método da instância
  });

  it('Informações -> Hortas Comunitárias', () => {
    menuInformacoesPage.clickHortasComunitarias(); // ✅ usa o método da instância
  });

  it('Informações -> Informativos', () => {
    menuInformacoesPage.clickInformativos(); // ✅ usa o método da instância
  });

  it('Informações -> Telefones e Endereços', () => {
    menuInformacoesPage.clickTelefonesEnderecos(); // ✅ usa o método da instância
  });

  it('Informações -> Unidades de Saúde', () => {
    menuInformacoesPage.clickUnidadesSaude(); // ✅ usa o método da instância
  });

  it('Informações -> Unidades Escolares', () => {
    menuInformacoesPage.clickUnidadesEscolares(); // ✅ usa o método da instância
  });
});
