// Conteúdo de load-components.js
document.addEventListener("DOMContentLoaded", function() {
    // Função para carregar um componente HTML
    const loadComponent = (selector, url) => {
        fetch(url)
            .then(response => response.text())
            .then(data => {
                document.querySelector(selector).innerHTML = data;
            })
            .catch(error => console.error(`Erro ao carregar ${url}:`, error));
    };

    // Carrega o header e o footer
    loadComponent("#navbar-placeholder", "header.html");
    loadComponent("#footer-placeholder", "footer.html");
});