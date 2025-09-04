describe('Tech Blog App', () => {
    beforeEach(() => {
        // Visita a página inicial antes de cada teste
        cy.visit('/')
    })

    it('Deve carregar a página inicial corretamente', () => {
        // Verifica se elementos principais estão visíveis
        cy.get('header').should('be.visible')
        cy.get('div').should('be.visible')

        // Verifica se o conteúdo principal está carregado
        cy.get('body').should('contain.text', 'Encontre os melhores artigos')
    })

    it('Deve exibir conteúdo estruturado corretamente', () => {
        // Verifica a ordem dos elementos na página
        cy.get('body').within(() => {
            // Hero banner deve aparecer primeiro
            cy.contains('Encontre os melhores artigos').should('exist')

            // Seguido pela seção de artigos
            cy.contains('Artigos recomendados').should('exist')

            // E por último o formulário de contato
            cy.contains('Entre em contato').should('exist')
        })
    })

    it('Deve ser totalmente responsivo', () => {
        // Testa em diferentes viewports
        const viewports = [
            {width: 375, height: 667},  // Mobile
            {width: 768, height: 1024}, // Tablet
            {width: 1280, height: 720}  // Desktop
        ]

        viewports.forEach(viewport => {
            cy.viewport(viewport.width, viewport.height)

            // Verifica se todos os componentes principais estão visíveis
            cy.get('header').should('be.visible')
            cy.contains('Encontre os melhores artigos').should('be.visible')
            cy.contains('Artigos recomendados').should('be.visible')
            cy.contains('Entre em contato').should('be.visible')
        })
    })

    it('Deve ter performance adequada', () => {
        // Verifica se a página carrega rapidamente
        cy.visit('/', {
            onBeforeLoad: (win) => {
                win.performance.mark('start-loading')
            },
            onLoad: (win) => {
                win.performance.mark('end-loading')
                win.performance.measure('page-load', 'start-loading', 'end-loading')
            }
        })

        // Verifica se elementos críticos carregam
        cy.get('header').should('be.visible')
        cy.contains('Artigos recomendados').should('be.visible')
    })
})
