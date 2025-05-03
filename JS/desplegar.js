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
      
   // Cerramos otros contenidos si están abiertos (para asegurar que solo uno esté abierto)
   document.querySelectorAll('.contenido').forEach(c => {
    if (c !== target) { // Excluimos el contenido actual
      c.classList.remove('activo');
    }
  });
  
    });
  });
});

document.addEventListener('DOMContentLoaded', () => {
  const botonMas = document.querySelector('.ir-a-mas');
  const bloquesMas = document.querySelectorAll('.bloque-mas');

  botonMas.addEventListener('click', function(e) {
    e.preventDefault();

    const estaActivo = this.classList.contains('activo');

    // Alternar clase 'activo' en el botón
    this.classList.toggle('activo');

    // Mostrar u ocultar todos los bloques
    bloquesMas.forEach(bloque => {
      if (estaActivo) {
        bloque.classList.remove('activo'); // ocultar
      } else {
        bloque.classList.add('activo');    // mostrar
      }
    });
  });
});
