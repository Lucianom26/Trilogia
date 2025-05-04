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
        this.classList.remove('activo'); // Remover la clase activa de este enlace
      } else {
        // Cerramos todos los contenidos
        document.querySelectorAll('.contenido').forEach(c => c.classList.remove('activo'));
        document.querySelectorAll('.enlace').forEach(enlace => enlace.classList.remove('activo')); // Remover la clase activa de todos los enlaces
        
        // Abrimos el contenido seleccionado
        target.classList.add('activo');
        this.classList.add('activo'); // Agregar la clase activa a este enlace para cambiar la imagen
      }
      
      // Cerramos otros contenidos si están abiertos (para asegurar que solo uno esté abierto)
      document.querySelectorAll('.contenido').forEach(c => {
        if (c !== target) { // Excluimos el contenido actual
          c.classList.remove('activo');
        }
      });
    });
  });
});

// Manejo de la lógica del botón "Ver más"
document.addEventListener('DOMContentLoaded', () => {
  const botonMas = document.querySelector('.ir-a-mas');
  const bloquesMas = document.querySelectorAll('.bloque-mas');

  botonMas.addEventListener('click', function(e) {
    e.preventDefault();

    const estaActivo = this.classList.contains('activo');

    // Alternar clase 'activo' en el botón
    this.classList.toggle('activo');

    // Mostrar u ocultar los bloques
    bloquesMas.forEach(bloque => {
      if (estaActivo) {
        bloque.classList.remove('activo');
      } else {
        bloque.classList.add('activo');
      }
    });

    // Si lo estamos abriendo, hacer scroll al primer bloque
    if (!estaActivo) {
      const primerBloque = bloquesMas[0];
      if (primerBloque) {
        primerBloque.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      }
    }
  });
});
