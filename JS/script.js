document.addEventListener('DOMContentLoaded', () => {
    const esSubdominioMas = location.hostname.startsWith('catedra.');
    const bloques = document.querySelectorAll('.bloque-mas');
    const botonMas = document.querySelector('.ir-a-mas');
    const hash = window.location.hash;
  
    // 👉 NUEVO: si el hash es #catedra
    if (hash === '#catedra') {
      bloques.forEach(bloque => bloque.classList.add('activo'));
      if (botonMas) botonMas.classList.add('activo');
  
      const contenedor = document.getElementById('catedra');
      if (contenedor) {
        setTimeout(() => {
          contenedor.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
          });
        }, 100);
      }
    }
  
    // ✅ /catedra como ruta
    if (window.location.pathname === '/catedra') {
      bloques.forEach(bloque => bloque.classList.add('activo'));
      if (botonMas) botonMas.classList.add('activo');
  
      if (bloques.length > 0) {
        setTimeout(() => {
          bloques[0].scrollIntoView({
            behavior: 'smooth',
            block: 'start'
          });
        }, 100);
      }
    }
  
    // Subdominio tipo catedra.*
    if (esSubdominioMas) {
      bloques.forEach(bloque => bloque.classList.add('activo'));
      if (botonMas) botonMas.classList.add('activo');
  
      if (bloques.length > 0) {
        setTimeout(() => {
          bloques[0].scrollIntoView({
            behavior: 'smooth',
            block: 'start'
          });
        }, 100);
      }
    }
  
    // Si hay otro hash (ej: #ir_mas), activarlo si es bloque-mas
    if (hash && hash !== '#catedra') {
      const target = document.querySelector(hash);
      if (target && target.classList.contains('bloque-mas')) {
        target.classList.add('activo');
        if (botonMas) botonMas.classList.add('activo');
  
        setTimeout(() => {
          target.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
          });
        }, 100);
      }
    }
  
    // Navegación por secciones
    document.querySelectorAll('.enlace').forEach(enlace => {
      enlace.addEventListener('click', function(e) {
        e.preventDefault();
        const targetId = this.getAttribute('data-target');
        const target = document.getElementById(targetId);
  
        if (target.classList.contains('activo')) {
          target.classList.remove('activo');
          this.classList.remove('activo');
        } else {
          document.querySelectorAll('.contenido').forEach(c => c.classList.remove('activo'));
          document.querySelectorAll('.enlace').forEach(enlace => enlace.classList.remove('activo'));
          target.classList.add('activo');
          this.classList.add('activo');
        }
      });
    });
  
    // Botón "Ver más"
    if (botonMas) {
      botonMas.addEventListener('click', function(e) {
        e.preventDefault();
        const estaActivo = this.classList.contains('activo');
        this.classList.toggle('activo');
  
        bloques.forEach(bloque => {
          if (estaActivo) {
            bloque.classList.remove('activo');
          } else {
            bloque.classList.add('activo');
          }
        });
  
        if (!estaActivo && bloques.length > 0) {
          setTimeout(() => {
            bloques[0].scrollIntoView({
              behavior: 'smooth',
              block: 'start'
            });
          }, 100);
        }
      });
    }
  });