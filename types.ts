
export enum Era {
  ERA_1 = "ERA 1: Descubrimiento y Formalización Matemática",
  ERA_2 = "ERA 2: La Era de la Auditoría y Falsificación Humana",
  ERA_3 = "ERA 3: Transición, Casos de Estudio y Limitaciones",
  ERA_4 = "ERA 4: El Estado del Arte (ML, IA y Datos Sintéticos)",
}

export interface TimelineEvent {
  id: string;
  year: string;
  author: string;
  title: string;
  role: string;
  era: Era;
  description?: string;
}
