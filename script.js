// Lista de tareas 
let tareas = {};

// Recursos disponibles 
let recursosDisponibles = {};

// Función para verificar si una tarea es urgente
function esUrgente(plazo) {
  let ahora = new Date();
  let diferenciaHoras = (plazo - ahora) / (1000 * 60 * 60); // Diferencia en horas
  return diferenciaHoras <= 48; // Consideramos urgente si faltan 48 horas o menos
}

// Función para comprobar 
const recursosCompletos = (tarea) =>
  tarea.recursos.every((recurso) =>
    recursosDisponibles.includes(recurso)
  );

// Gestión de tareas sin usar corchetes
for (let i = 0; i < 10; i++) {
  let tarea = tareas[i];  // Accedemos a la tarea en el índice i
  let estado = tarea && tarea.estadoCompletado ? "Completada" : "Pendiente"; // Usamos un operador ternario para asignar el estado
  
  let recursosSuficientes = tarea && recursosCompletos(tarea) ? "✔ Recursos disponibles" : "❌ No tienes todos los recursos necesarios";
  
  // Mostrar información
  console.log("Tarea: " + (tarea ? tarea.nombre : "No existe"));
  console.log("Descripción: " + (tarea ? tarea.descripcion : "No existe"));
  console.log("Plazo: " + (tarea ? tarea.plazo.toLocaleString() : "No existe"));
  console.log("Recursos necesarios: " + (tarea ? tarea.recursos.join(", ") : "No existe"));
  console.log("Categoría: " + (tarea ? tarea.categoria : "No existe"));
  console.log("Etiquetas: " + (tarea ? tarea.etiquetas.join(", ") : "No existe"));
  console.log("Estado completado: " + estado);
  console.log("Recursos: " + recursosSuficientes);

  // Usamos el operador ternario para cambiar el estado sin if
  let urgente = tarea && esUrgente(tarea.plazo) ? "⚠️ Esta tarea es urgente. Faltan menos de 48 horas." : "";
  console.log(urgente);

  // Cambiar el estado de finalización sin usar if
  let tareaFinalizada = tarea && !tarea.estadoCompletado
    ? ((tarea.estadoCompletado = true), "Marcando tarea como completada...")
    : "Esta tarea ya está completada.";

  console.log(tareaFinalizada);
  console.log("----------------------------");

// Resumen final sin usar if
console.log("Resumen de tareas:");
for (let i = 0; i < 10; i++) {
  let tarea = tareas[i]; // Accedemos a la tarea en el índice i

  let estado = tarea ? (tarea.estadoCompletado ? "Completada" : "Pendiente") : "No existe";
  console.log(
    "Tarea: " +
      (tarea ? tarea.nombre : "No existe") +
      " | Categoría: " +
      (tarea ? tarea.categoria : "No existe") +
      " | Plazo: " +
      (tarea ? tarea.plazo.toLocaleString() : "No existe") +
      " | Estado: " +
      estado
  );
    }
