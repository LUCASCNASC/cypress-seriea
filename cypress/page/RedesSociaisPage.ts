export class RedesSociaisPage {

    //clicar no FACEBOOK
    clickFacebook() {
        cy.get(':nth-child(1) > :nth-child(1) > .flex > img').click()
        cy.url().should('include', 'https://www.maringa.pr.gov.br/')
    }

    //clicar no INSTAGRAM
    clickInstagram() {
        cy.get('.container > :nth-child(1) > :nth-child(2) > .flex > img').click()
        cy.url().should('include', 'https://www.maringa.pr.gov.br/')
    }

    //clicar no TIKTOK
    clickTikTok() {
        cy.get(':nth-child(3) > .flex > img').click()
        cy.url().should('include', 'https://www.maringa.pr.gov.br/')
    }

    //clicar no X (Twitter)
    clickX() {
        cy.get('.container > :nth-child(1) > :nth-child(4) > .flex > img').click()
        cy.url().should('include', 'https://www.maringa.pr.gov.br/')
    }

    //clicar no YOUTUBE
    clickYoutube() {
        cy.get(':nth-child(5) > .flex > img').click()
        cy.url().should('include', 'https://www.maringa.pr.gov.br/')
    }
}