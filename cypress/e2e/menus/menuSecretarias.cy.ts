import { MenuSecretariasPage } from '../../page/menus/MenuSecretariasPage';

describe('menus Secretarias', () => {

  const menuSecretariasPage = new MenuSecretariasPage(); // ✅ cria instância

  beforeEach(() => {
    cy.visit('/');
    menuSecretariasPage.clickSecretarias(); // ✅ usa o método da instância
  });

  it('Secretarias -> Prefeitos', () => {
    menuSecretariasPage.clickPrefeitos(); // ✅ usa o método da instância
  });

  it('Secretarias -> Estrutura Organizacional / Organograma (abrir uma nova aba)', () => {
    menuSecretariasPage.clickEstruturaOrganizacional(); // ✅ usa o método da instância
  });

  it('Secretarias -> Secretarias -> Gabinete do Prefeito', () => {
    menuSecretariasPage.clickSubSecretarias(); // ✅ usa o método da instância
    menuSecretariasPage.clickGabinetePrefeito(); // ✅ usa o método da instância
  });

  it('Secretarias -> Secretarias -> Aceleração Econômica E Turismo', () => {
    menuSecretariasPage.clickSubSecretarias(); // ✅ usa o método da instância
    menuSecretariasPage.clickAceleracaoEconomicaTurismo(); // ✅ usa o método da instância
  });

  it('Secretarias -> Secretarias -> Aeroporto', () => {
    menuSecretariasPage.clickSubSecretarias(); // ✅ usa o método da instância
    menuSecretariasPage.clickAeroporto(); // ✅ usa o método da instância
  });

  it('Secretarias -> Secretarias -> Agência Maringaense de Regulação - AMR', () => {
    menuSecretariasPage.clickSubSecretarias(); // ✅ usa o método da instância
    menuSecretariasPage.clickAgenciaMaringaenseRegulacaoAMR(); // ✅ usa o método da instância
  });

  it('Secretarias -> Secretarias -> Assistência Social', () => {
    menuSecretariasPage.clickSubSecretarias(); // ✅ usa o método da instância
    menuSecretariasPage.clickAssistenciaSocial(); // ✅ usa o método da instância
  });

  it('Secretarias -> Secretarias -> Assuntos Metropolitanos e Comunitários', () => {
    menuSecretariasPage.clickSubSecretarias(); // ✅ usa o método da instância
    menuSecretariasPage.clickAssuntosMetropolitanosComunitarios(); // ✅ usa o método da instância
  });

  it('Secretarias -> Secretarias -> Chefia de Gabinete', () => {
    menuSecretariasPage.clickSubSecretarias(); // ✅ usa o método da instância
    menuSecretariasPage.clickChefiaGabinete(); // ✅ usa o método da instância
  });

  it('Secretarias -> Secretarias -> Compliance E Controle', () => {
    menuSecretariasPage.clickSubSecretarias(); // ✅ usa o método da instância
    menuSecretariasPage.clickComplianceControle(); // ✅ usa o método da instância
  });

  it('Secretarias -> Secretarias -> Comunicação', () => {
    menuSecretariasPage.clickSubSecretarias(); // ✅ usa o método da instância
    menuSecretariasPage.clickComunicacao(); // ✅ usa o método da instância
  });

  it('Secretarias -> Secretarias -> Criança e do Adolescente', () => {
    menuSecretariasPage.clickSubSecretarias(); // ✅ usa o método da instância
    menuSecretariasPage.clickCriançaAdolescente(); // ✅ usa o método da instância
  });

  it('Secretarias -> Secretarias -> Cultura', () => {
    menuSecretariasPage.clickSubSecretarias(); // ✅ usa o método da instância
    menuSecretariasPage.clickCultura(); // ✅ usa o método da instância
  });

  it('Secretarias -> Secretarias -> Educação', () => {
    menuSecretariasPage.clickSubSecretarias(); // ✅ usa o método da instância
    menuSecretariasPage.clickEducacao(); // ✅ usa o método da instância
  });

  it('Secretarias -> Secretarias -> Esportes e Lazer', () => {
    menuSecretariasPage.clickSubSecretarias(); // ✅ usa o método da instância
    menuSecretariasPage.clickEsportesLazer(); // ✅ usa o método da instância
  });

  it('Secretarias -> Secretarias -> Fazenda', () => {
    menuSecretariasPage.clickSubSecretarias(); // ✅ usa o método da instância
    menuSecretariasPage.clickFazenda(); // ✅ usa o método da instância
  });

  it('Secretarias -> Secretarias -> Gestão De Pessoas', () => {
    menuSecretariasPage.clickSubSecretarias(); // ✅ usa o método da instância
    menuSecretariasPage.clickGestaoPessoas(); // ✅ usa o método da instância
  });

  it('Secretarias -> Secretarias -> Governo', () => {
    menuSecretariasPage.clickSubSecretarias(); // ✅ usa o método da instância
    menuSecretariasPage.clickGoverno(); // ✅ usa o método da instância
  });

  it('Secretarias -> Secretarias -> Infraestrutura', () => {
    menuSecretariasPage.clickSubSecretarias(); // ✅ usa o método da instância
    menuSecretariasPage.clickInfrastrutura(); // ✅ usa o método da instância
  });

  it('Secretarias -> Secretarias -> Instituto Ambiental de Maringá', () => {
    menuSecretariasPage.clickSubSecretarias(); // ✅ usa o método da instância
    menuSecretariasPage.clickInstitutoAmbientalMaringa(); // ✅ usa o método da instância
  });

  it('Secretarias -> Secretarias -> Instituto de Pesquisa E Planejamento Urbano De Maringá - IPPLAM', () => {
    menuSecretariasPage.clickSubSecretarias(); // ✅ usa o método da instância
    menuSecretariasPage.clickInstitutoPesquisaPlanejamentoUrbanoMaringa(); // ✅ usa o método da instância
  });

  it('Secretarias -> Secretarias -> Juventude Cidadania E Migrantes', () => {
    menuSecretariasPage.clickSubSecretarias(); // ✅ usa o método da instância
    menuSecretariasPage.clickJuventudeCidadaniaMigrantes(); // ✅ usa o método da instância
  });

  it('Secretarias -> Secretarias -> Limpeza Urbana', () => {
    menuSecretariasPage.clickSubSecretarias(); // ✅ usa o método da instância
    menuSecretariasPage.clickLimpezaUrbana(); // ✅ usa o método da instância
  });

  it('Secretarias -> Secretarias -> Logística E Compras', () => {
    menuSecretariasPage.clickSubSecretarias(); // ✅ usa o método da instância
    menuSecretariasPage.clickLogísticaCompras(); // ✅ usa o método da instância
  });

  it('Secretarias -> Secretarias -> Maringá Previdência', () => {
    menuSecretariasPage.clickSubSecretarias(); // ✅ usa o método da instância
    menuSecretariasPage.clickMaringaPrevidencia(); // ✅ usa o método da instância
  });

  it('Secretarias -> Secretarias -> Mobilidade Urbana', () => {
    menuSecretariasPage.clickSubSecretarias(); // ✅ usa o método da instância
    menuSecretariasPage.clickMobilidadeUrbana(); // ✅ usa o método da instância
  });

  it('Secretarias -> Secretarias -> Obras Públicas', () => {
    menuSecretariasPage.clickSubSecretarias(); // ✅ usa o método da instância
    menuSecretariasPage.clickObrasPublicas(); // ✅ usa o método da instância
  });

  it('Secretarias -> Secretarias -> Pessoa com Deficiência', () => {
    menuSecretariasPage.clickSubSecretarias(); // ✅ usa o método da instância
    menuSecretariasPage.clickPessoaDeficiencia(); // ✅ usa o método da instância
  });

  it('Secretarias -> Secretarias -> Políticas Públicas Para Mulheres', () => {
    menuSecretariasPage.clickSubSecretarias(); // ✅ usa o método da instância
    menuSecretariasPage.clickPoliticasPublicasMulheres(); // ✅ usa o método da instância
  });

  it('Secretarias -> Secretarias -> Procon', () => {
    menuSecretariasPage.clickSubSecretarias(); // ✅ usa o método da instância
    menuSecretariasPage.clickProcon(); // ✅ usa o método da instância
  });

  it('Secretarias -> Secretarias -> Procuradoria Geral do Município', () => {
    menuSecretariasPage.clickSubSecretarias(); // ✅ usa o método da instância
    menuSecretariasPage.clickProcuradoriaGeralMunicipio(); // ✅ usa o método da instância
  });

  it('Secretarias -> Secretarias -> Proteção E Bem Estar Animal', () => {
    menuSecretariasPage.clickSubSecretarias(); // ✅ usa o método da instância
    menuSecretariasPage.clickProtecaoBemEstarAnimal(); // ✅ usa o método da instância
  });

  it('Secretarias -> Secretarias -> Saúde', () => {
    menuSecretariasPage.clickSubSecretarias(); // ✅ usa o método da instância
    menuSecretariasPage.clickSaude(); // ✅ usa o método da instância
  });

  it('Secretarias -> Secretarias -> Segurança', () => {
    menuSecretariasPage.clickSubSecretarias(); // ✅ usa o método da instância
    menuSecretariasPage.clickSeguranca(); // ✅ usa o método da instância
  });

  it('Secretarias -> Secretarias -> Tecnologia e Inovação', () => {
    menuSecretariasPage.clickSubSecretarias(); // ✅ usa o método da instância
    menuSecretariasPage.clickTecnologiaInovacao(); // ✅ usa o método da instância
  });

  it('Secretarias -> Secretarias -> Trabalho, Renda e Agricultura Familiar', () => {
    menuSecretariasPage.clickSubSecretarias(); // ✅ usa o método da instância
    menuSecretariasPage.clickTrabalhoRendaAgriculturaFamiliar(); // ✅ usa o método da instância
  });

  it('Secretarias -> Secretarias -> Urbanismo e Habitação', () => {
    menuSecretariasPage.clickSubSecretarias(); // ✅ usa o método da instância
    menuSecretariasPage.clickUrbanismoHabitação(); // ✅ usa o método da instância
  });
});
