document.addEventListener('DOMContentLoaded', () => {
  // Seleccionamos todos los enlaces de la navegación
  document.querySelectorAll('.enlace').forEach(enlace => {
    enlace.addEventListener('click', function(e) {
      e.preventDefault(); // Prevenir el comportamiento por defecto del enlace

      const targetId = this.getAttribute('data-target');
      const target = document.getElementById(targetId); // Obtener el contenido con el id correspondiente

      // Si el contenido ya está abierto, lo cerramos
      if (target.classList.contains('activo')) {
        target.classList.remove('activo');
      } else {
        // Cerramos todos los contenidos
        document.querySelectorAll('.contenido').forEach(c => c.classList.remove('activo'));
        
        // Abrimos el contenido seleccionado
        target.classList.add('activo');
      }

      // Si el enlace tiene el data-target="mas", expandimos la navegación
      const nav = document.querySelector('.navegacion');
      if (this.getAttribute('data-target') === 'mas') {
        nav.classList.toggle('expandido');
      }

      // Cerramos otros contenidos si están abiertos (para asegurar que solo uno esté abierto)
      document.querySelectorAll('.contenido').forEach(c => {
        if (c !== target) { // Excluimos el contenido actual
          c.classList.remove('activo');
        }
      });

      // Expande la navegación si es el enlace con data-target="mas"
      if (this.getAttribute('data-target') === 'mas') {
        nav.classList.toggle('expandido');
      }
    });
  });
});
