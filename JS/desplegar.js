document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('.enlace').forEach(link => {
      link.addEventListener('click', function (e) {
        e.preventDefault();
  
        const targetId = this.dataset.target;
        const section = document.getElementById(targetId);
  
        // Cierra otras secciones
        document.querySelectorAll('.contenido').forEach(sec => {
          if (sec !== section) sec.classList.remove('activo');
        });
  
        // Alterna clase activa
        const isActive = section.classList.contains('activo');
        section.classList.toggle('activo');
  
        // Solo hace scroll si se activó
        if (!isActive) {
          setTimeout(() => {
            section.scrollIntoView({ behavior: 'smooth', block: 'start' });
          }, 300); // espera un poco para que la sección empiece a desplegarse
        }
      });
    });
  });