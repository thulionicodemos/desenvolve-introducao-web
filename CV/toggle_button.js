document.addEventListener('DOMContentLoaded', function() {
    const menuToggle = document.getElementById('menu-toggle');
    const navList = document.getElementById('nav-list');
    const content = document.querySelector('.main-content');
    const navItems = document.querySelectorAll('.nav-list li');

    menuToggle.addEventListener('click', function() {
        navList.classList.toggle('open');
        content.classList.toggle('shifted');

        // Altera a altura do contêiner principal
        if (navList.classList.contains('open')) {
            content.style.height = 'calc(100vh - 200px)';
        } else {
            content.style.height = '';
        }
    });

    // Adiciona um event listener para cada item do menu
    navItems.forEach(item => {
        item.addEventListener('click', function(event) {
            // Fecha o menu ao clicar em um item
            navList.classList.remove('open');
            content.classList.remove('shifted');
            content.style.height = ''; // Restaura a altura do contêiner principal
            
            // Impede o comportamento padrão de seguir o link
            event.preventDefault();
            
            // Obtém o ID da seção correspondente ao item do menu
            const targetId = item.querySelector('a').getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);

            // Obtém a posição do início da seção em relação ao topo da página
            let offsetTop = targetElement.offsetTop;
            
            // Verifica se o media query está ativo
            if (window.matchMedia('(max-width: 600px)').matches) {
                offsetTop += 75; // Se o media query estiver ativo, ajusta o deslocamento para baixo
            }     
            
            // Rola suavemente para o início da seção
            window.scrollTo({
                top: offsetTop -75,
                behavior: 'smooth'
            });
        });
    });
});
