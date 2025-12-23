import { MenuServicosPage } from '../../page/menus/MenuServicosPage';

describe('menus Serviços', () => {

  const menuServicosPage = new MenuServicosPage(); // ✅ cria instância

  beforeEach(() => {
    cy.visit('/');
    menuServicosPage.clickServicos(); // ✅ usa o método da instância
  });

  it('Portais -> Publicações Oficiais', () => {
    menuServicosPage.clickPublicacoesOficiais(); // ✅ usa o método da instância
  });

  it('Portais -> Portal de Serviços', () => {
    menuServicosPage.clickPortalServicos(); // ✅ usa o método da instância
  });

  it('Portais -> Portal do Servidor', () => {
    menuServicosPage.clickPortalServidor(); // ✅ usa o método da instância
  });

  it('Portais -> Portal do Estagiário', () => {
    menuServicosPage.clickPortalEstagiario(); // ✅ usa o método da instância
  });

  it('Portais -> Acesso Rapido -> Farmácio Móvel', () => {
    menuServicosPage.clickSubAcessoRapido(); // ✅ usa o método da instância
    menuServicosPage.clickFarmaciaMovel();
  });

  it('Portais -> Acesso Rapido -> Resid. Médica Edital 2026', () => {
    menuServicosPage.clickSubAcessoRapido(); // ✅ usa o método da instância
    menuServicosPage.clickResidenciaMedicaEdital();
  });

  it('Portais -> Acesso Rapido -> PSS Educação 2025', () => {
    menuServicosPage.clickSubAcessoRapido(); // ✅ usa o método da instância
    menuServicosPage.clickPSSEducacao();
  });

  it('Portais -> Acesso Rapido -> PSS Saúde 2025', () => {
    menuServicosPage.clickSubAcessoRapido(); // ✅ usa o método da instância
    menuServicosPage.clickPSSSaude();
  });

  it('Portais -> Acesso Rapido -> Sistema Elotech Oxy', () => {
    menuServicosPage.clickSubAcessoRapido(); // ✅ usa o método da instância
    menuServicosPage.clickSistemaElotechOxy();
  });

  it('Portais -> Acesso Rapido -> Agenda Previsão de Pagamentos', () => {
    menuServicosPage.clickSubAcessoRapido(); // ✅ usa o método da instância
    menuServicosPage.clickAgendaPrevisaoPagamentos();
  });

  it('Portais -> Acesso Rapido -> 1550 - Ouvidoria do Servidor', () => {
    menuServicosPage.clickSubAcessoRapido(); // ✅ usa o método da instância
    menuServicosPage.clickOuvidoriaServidor();
  });

  it('Portais -> Acesso Rapido -> Vacinação', () => {
    menuServicosPage.clickSubAcessoRapido(); // ✅ usa o método da instância
    menuServicosPage.clickVacinacao();
  });

  it('Portais -> Acesso Rapido -> leis do Município', () => {
    menuServicosPage.clickSubAcessoRapido(); // ✅ usa o método da instância
    menuServicosPage.clickLeisMunicipio();
  });

  it('Portais -> Acesso Rapido -> Portal do Servidor', () => {
    menuServicosPage.clickSubAcessoRapido(); // ✅ usa o método da instância
    menuServicosPage.clickPortalDoServidor();
  });

  it('Portais -> Acesso Rapido -> Estágio', () => {
    menuServicosPage.clickSubAcessoRapido(); // ✅ usa o método da instância
    menuServicosPage.clickEstagio();
  });

  it('Portais -> Acesso Rapido -> S.I.M', () => {
    menuServicosPage.clickSubAcessoRapido(); // ✅ usa o método da instância
    menuServicosPage.clickSIM();
  });

  it('Portais -> Acesso Rapido -> Carta de Serviços', () => {
    menuServicosPage.clickSubAcessoRapido(); // ✅ usa o método da instância
    menuServicosPage.clickCartaServicos();
  });

  it('Portais -> Acesso Rapido -> SEI', () => {
    menuServicosPage.clickSubAcessoRapido(); // ✅ usa o método da instância
    menuServicosPage.clickSEI();
  });

  it('Portais -> Acesso Rapido -> Passe do Estudante', () => {
    menuServicosPage.clickSubAcessoRapido(); // ✅ usa o método da instância
    menuServicosPage.clickPasseEstudante();
  });

  it('Portais -> Acesso Rapido -> ISS Eletrônico', () => {
    menuServicosPage.clickSubAcessoRapido(); // ✅ usa o método da instância
    menuServicosPage.clickINSSEletronico();
  });
  
  it('Portais -> Acesso Rapido -> Consulta Concursos', () => {
    menuServicosPage.clickSubAcessoRapido(); // ✅ usa o método da instância
    menuServicosPage.clickConsultaConcursos();
  });

  it('Portais -> Acesso Rapido -> Diário Oficial', () => {
    menuServicosPage.clickSubAcessoRapido(); // ✅ usa o método da instância
    menuServicosPage.clickDiarioOficial();
  });

  it('Portais -> Acesso Rapido -> Portal do Estagiário', () => {
    menuServicosPage.clickSubAcessoRapido(); // ✅ usa o método da instância
    menuServicosPage.clickPortalDoEstagiario();
  });

  it('Portais -> Acesso Rapido -> EMISSÃO DE GUIAS/BOLETOS', () => {
    menuServicosPage.clickSubAcessoRapido(); // ✅ usa o método da instância
    menuServicosPage.clickEmissaoGuiasBoletos();
  });

  it('Portais -> Acesso Rapido -> Emissão de Certidões', () => {
    menuServicosPage.clickSubAcessoRapido(); // ✅ usa o método da instância
    menuServicosPage.clickEmissaoCertidoes();
  });

  it('Portais -> Acesso Rapido -> Plano Diretor 2020-2030', () => {
    menuServicosPage.clickSubAcessoRapido(); // ✅ usa o método da instância
    menuServicosPage.clickPlanoDiretor();
  });

  it('Portais -> Acesso Rapido -> FAQ - LGPD', () => {
    menuServicosPage.clickSubAcessoRapido(); // ✅ usa o método da instância
    menuServicosPage.clickFaqLGPD();
  });

  it('Portais -> Acesso Rapido -> Portal Maringá compra', () => {
    menuServicosPage.clickSubAcessoRapido(); // ✅ usa o método da instância
    menuServicosPage.clickPortalMaringaCompra();
  });

  it('Portais -> Acesso Rapido -> Notifica Saúde', () => {
    menuServicosPage.clickSubAcessoRapido(); // ✅ usa o método da instância
    menuServicosPage.clickNotificaSaude();
  });

  it('Portais -> Acesso Rapido -> Portal Saúde Maringá', () => {
    menuServicosPage.clickSubAcessoRapido(); // ✅ usa o método da instância
    menuServicosPage.clickPortalSaudeMaringa();
  });

  it('Portais -> Acesso Rapido -> Sala digital do microempreendedor', () => {
    menuServicosPage.clickSubAcessoRapido(); // ✅ usa o método da instância
    menuServicosPage.clickSalaDigitalMicroempreendedor();
  });

  it('Portais -> Acesso Rapido -> Agência do Trabalhador', () => {
    menuServicosPage.clickSubAcessoRapido(); // ✅ usa o método da instância
    menuServicosPage.clickAgenciaTrabalhador();
  });

  it('Portais -> Acesso Rapido -> Vacinação Covid-19', () => {
    menuServicosPage.clickSubAcessoRapido(); // ✅ usa o método da instância
    menuServicosPage.clickVacinacaoCovid19();
  });

  it('Portais -> Acesso Rapido -> Acesso à Informação', () => {
    menuServicosPage.clickSubAcessoRapido(); // ✅ usa o método da instância
    menuServicosPage.clickAcessoInformacao();
  });

  it('Portais -> Acesso Rapido -> Portal Covid-19', () => {
    menuServicosPage.clickSubAcessoRapido(); // ✅ usa o método da instância
    menuServicosPage.clickPortalCovid19();
  });
});
