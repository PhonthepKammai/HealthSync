// Vanilla JavaScript for HealthSync Thailand Landing Page

document.addEventListener('DOMContentLoaded', () => {
  // 1. Smooth scrolling สำหรับ Anchor Links
  const anchorLinks = document.querySelectorAll('a[href^="#"]');
  
  anchorLinks.forEach(link => {
    link.addEventListener('click', function(e) {
      const targetId = this.getAttribute('href');
      if (targetId.length > 1) {
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
          e.preventDefault();
          targetElement.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
          });

          // ปิด Mobile Navbar อัตโนมัติหลังกดคลิก
          const navbarCollapse = document.getElementById('navbarContent');
          if (navbarCollapse && navbarCollapse.classList.contains('show')) {
            const bsCollapse = bootstrap.Collapse.getInstance(navbarCollapse);
            if (bsCollapse) {
              bsCollapse.hide();
            }
          }
        }
      }
    });
  });

  // 2. Dynamic Active State Tracking สำหรับ Navbar
  window.addEventListener('scroll', () => {
    const sections = document.querySelectorAll('header, section, footer');
    const navLinks = document.querySelectorAll('.navbar-nav .nav-link');
    let currentSectionId = '';

    sections.forEach(section => {
      const sectionTop = section.offsetTop - 120;
      if (window.scrollY >= sectionTop) {
        currentSectionId = section.getAttribute('id');
      }
    });

    navLinks.forEach(link => {
      link.classList.remove('active');
      if (link.getAttribute('href') === `#${currentSectionId}`) {
        link.classList.add('active');
      }
    });
  });
});