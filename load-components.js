// Conteúdo de load-components.js (versão final com fechamento automático)
document.addEventListener("DOMContentLoaded", function() {
    const loadHtml = (selector, url) => {
        return fetch(url)
            .then(response => response.ok ? response.text() : Promise.reject(`Erro ao carregar ${url}`))
            .then(data => {
                const element = document.querySelector(selector);
                if (element) element.innerHTML = data;
            });
    };

    Promise.all([
        loadHtml("#navbar-placeholder", "header.html"),
        loadHtml("#footer-placeholder", "footer.html"),
        loadHtml("#modal-placeholder", "doacao-modal.html")
    ]).then(() => {
        AOS.init({ duration: 800, easing: 'ease-in-out', once: true, offset: 100 });

        const navbar = document.querySelector('.navbar-glass');
        if (navbar) {
            window.addEventListener('scroll', () => {
                navbar.classList.toggle('scrolled', window.scrollY > 50);
            });
        }
        
        const doacaoBtn = document.getElementById("doacaoBtn");
        const doacaoModalEl = document.getElementById("doacaoModal");
        if (doacaoBtn && doacaoModalEl) {
            const modal = new bootstrap.Modal(doacaoModalEl);
            doacaoBtn.addEventListener("click", () => modal.show());
        }

        // --- INÍCIO DO NOVO CÓDIGO ---
        // Lógica para fechar o menu ao clicar fora
        const navMenu = document.querySelector('#navbarNav');
        const navToggler = document.querySelector('.navbar-toggler');

        document.addEventListener('click', function(event) {
            const isClickInsideNav = navbar.contains(event.target);
            const isMenuOpen = navMenu.classList.contains('show');

            if (isMenuOpen && !isClickInsideNav) {
                // Programaticamente clica no botão do menu para fechá-lo
                navToggler.click();
            }
        });
        // --- FIM DO NOVO CÓDIGO ---

    }).catch(error => console.error("Falha ao carregar componentes:", error));
});