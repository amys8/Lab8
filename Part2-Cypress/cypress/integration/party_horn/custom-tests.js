describe('Party Horn Tests', () => {
  beforeEach(() => {
    cy.visit('http://127.0.0.1:5500/Part2-Cypress/index.html');
  });

  it('First Test', () => {
    expect(true).to.equal(true);
  });

  it('Slider changes when volume input changes', () => {
    cy.get('#volume-number').clear().type('75');
    cy.get('#volume-slider').then(($el) => {
      expect($el).to.have.value(75);
    })
  });

  it('Volume input changes when slider changes', () => {
    cy.get('#volume-slider').invoke('val', 33).trigger('input');
    cy.get('#volume-number').then(($el) => {
      expect($el).to.have.value(33);
    })
  });

  it('Volume changes when slider changes', () => {
    cy.get('#volume-slider').invoke('val', 33).trigger('input');
    cy.get('#horn-sound').then(($el) => {
      expect($el).to.have.prop('volume', 0.33);
    })
  });

  it('Image & sound sources change when party horn radio button is selected', () => {
    cy.get('#radio-party-horn').click();
    cy.get('#sound-image').then(($el) => {
      expect($el).to.have.prop('src', 'http://127.0.0.1:5500/Part2-Cypress/assets/media/images/party-horn.svg');
    })
    cy.get('#horn-sound').then(($le) => {
      expect($le).to.have.prop('src', 'http://127.0.0.1:5500/Part2-Cypress/assets/media/audio/party-horn.mp3');
    })
  });

  it('Volume image changes when increasing volumes', () => {
    cy.get('#volume-slider').invoke('val', 69).trigger('input');
    cy.get('#volume-image').then(($el) => {
      expect($el).to.have.prop('src', 'http://127.0.0.1:5500/Part2-Cypress/assets/media/icons/volume-level-3.svg');
    })
    cy.get('#volume-slider').invoke('val', 40).trigger('input');
    cy.get('#volume-image').then(($el) => {
      expect($el).to.have.prop('src', 'http://127.0.0.1:5500/Part2-Cypress/assets/media/icons/volume-level-2.svg');
    })
    cy.get('#volume-slider').invoke('val', 8).trigger('input');
    cy.get('#volume-image').then(($el) => {
      expect($el).to.have.prop('src', 'http://127.0.0.1:5500/Part2-Cypress/assets/media/icons/volume-level-1.svg');
    })
    cy.get('#volume-slider').invoke('val', 0).trigger('input');
    cy.get('#volume-image').then(($el) => {
      expect($el).to.have.prop('src', 'http://127.0.0.1:5500/Part2-Cypress/assets/media/icons/volume-level-0.svg');
    })
  });

  it('Honk button is disabled when textbox input is empty or non-number', () => {
    cy.get('#volume-number').clear().type('0');
    cy.get('#honk-btn').then(($el) => {
      expect($el).to.have.attr('disabled');
    })
    cy.get('#volume-number').clear().type('abc');
    cy.get('#honk-btn').then(($el) => {
      expect($el).to.have.attr('disabled');
    })
  });

  it('Error is shown when volume textbox input is out of range', () => {
    cy.get('#volume-number').clear().type('101');
    cy.get('input:invalid').should('have.length', 1);
  })
});
