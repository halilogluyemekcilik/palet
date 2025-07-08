document.addEventListener('DOMContentLoaded', function() {
    const mobileMenuButton = document.getElementById('mobile-menu');
    const mainNav = document.getElementById('main-nav');
    
    // Hamburger menü toggle işlevi
    if (mobileMenuButton && mainNav) {
        mobileMenuButton.addEventListener('click', function() {
            mainNav.classList.toggle('active');
            const icon = mobileMenuButton.querySelector('i');
            
            if (mainNav.classList.contains('active')) {
                icon.classList.replace('fa-bars', 'fa-times');
                document.body.style.overflow = 'hidden'; // Sayfa kaydırmayı engelle
            } else {
                icon.classList.replace('fa-times', 'fa-bars');
                document.body.style.overflow = ''; // Sayfa kaydırmayı geri yükle
            }
        });
    }
    
    // Menüyü kapatmak için tıklama dışı alan
    document.addEventListener('click', function(event) {
        if (mainNav.classList.contains('active') && 
            !event.target.closest('#main-nav') && 
            !event.target.closest('#mobile-menu')) {
            mainNav.classList.remove('active');
            document.getElementById('mobile-menu').querySelector('i')
                .classList.replace('fa-times', 'fa-bars');
            document.body.style.overflow = '';
        }
    });
});