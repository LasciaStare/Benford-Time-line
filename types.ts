
export enum Era {
  ERA_1 = "ERA 1: Descubrimiento y Formalización Matemática",
  ERA_2 = "ERA 2: La Revolución Forense y la Falsificación Humana",
  ERA_3 = "ERA 3: Transición hacia la Ciencia de Datos",
  ERA_4 = "ERA 4: El Estado del Arte (ML, IA y Datos Sintéticos)",
}

export interface TimelineEvent {
  id: string;
  year: string;
  author: string;
  title: string;
  role: string;
  era: Era;
  reference: string;
  url?: string;
  doi?: string;
}
