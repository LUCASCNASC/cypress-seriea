export class MenuInicioPage {

    //clicar no menu Inicio
    clickInicio() {
        cy.get('#pv_id_1_0 > .p-menubar-item-content > [data-test="menu-item"]').click()
    }
}