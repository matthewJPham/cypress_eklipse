
  let landingPageLocator = {
  "text_searchBar": '.elementor-widget-container > .form-stream_request > .wrapper > input',
  "btn_uploadFile": '.btn-secondary',
  "btn_searchTwitchName": '.btn-primary',
  "btn_signIn": '.btn-login',
  "btn_signUp": '.header-main__col--right > .btn-register',
  "popUp_welcomeBar":'.mysticky-welcomebar-fixed-wrap',
  "btn_learnMore":'.mysticky-welcomebar-btn',
  "btn_closeWelcomeBar":'mysticky-welcomebar-close close-btn-widget-3',
  "li_annual":'#annual',
  "li_monthly":'#monthly',
  "lbl_premiumPrice_monthly":'.elementor-element-1754e5f8 > .elementor-widget-container > .card > .card-header > .card-price > strong',
  "lbl_premiumPrice_annual":'.elementor-element-1f215e5d > .elementor-widget-container > .card > .card-header > .card-price > strong'
}


describe('the landing page TCs', () => {
  it('TC1: User can see the price of membership package in the landing page', () => {
    cy.visit('https://eklipse.gg/')
    cy.get(landingPageLocator.li_annual).click()
      .get(landingPageLocator.lbl_premiumPrice_annual).should('have.text','$8.33')
    
    cy.get(landingPageLocator.li_monthly).click()
    .get(landingPageLocator.lbl_premiumPrice_monthly).should('have.text','$11.99')
  })

  it('TC2: User can go to the register page by clicking on the sign up for free button of Welcome bar', ()=>{
    cy.visit('https://eklipse.gg/')
      .get(landingPageLocator.btn_signUp)
      .click()
      .url().should('include','https://app.eklipse.gg/register')
  })

})
