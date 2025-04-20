document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('.enlace').forEach(link => {
    link.addEventListener('click', function (e) {
      e.preventDefault();

      const targetId = this.dataset.target;
      const section = document.getElementById(targetId);
      const container = this.closest('.bloque-enlace');

      // Cerrar otras secciones
      document.querySelectorAll('.contenido').forEach(sec => {
        if (sec !== section) sec.classList.remove('activo');
      });

      // Alternar clase
      const isActive = section.classList.contains('activo');
      section.classList.toggle('activo');

      // Scroll hasta el contenedor
      if (!isActive) {
        setTimeout(() => {
          container.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }, 200);
      }
    });
  });
});
