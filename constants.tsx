
import { TimelineEvent, Era } from './types';

export const TIMELINE_DATA: TimelineEvent[] = [
  // ERA 1
  {
    id: "1",
    year: "1881",
    author: "Simon Newcomb",
    title: "Note on the Frequency of Use of the Different Digits in Natural Numbers",
    role: "El verdadero descubridor. Notó el desgaste en las páginas de libros de logaritmos.",
    era: Era.ERA_1,
  },
  {
    id: "2",
    year: "1938",
    author: "Frank Benford",
    title: "The Law of Anomalous Numbers",
    role: "El formalizador. Probó la empíricamente la ley y le dio su fórmula logarítmica exacta que se usará en el código base.",
    era: Era.ERA_1,
  },
  // ERA 2
  {
    id: "3",
    year: "1997",
    author: "Mark Nigrini & Mittermaier",
    title: "The Effective Use of Benford's Law to Assist in Detecting Fraud in Accounting Data",
    role: "Pioneros aplicados. Demuestran la incapacidad humana para inventar números aleatorios (Justifica la Base de Datos #2: Fabricada Manualmente).",
    era: Era.ERA_2,
  },
  {
    id: "4",
    year: "2007",
    author: "Andreas Diekmann",
    title: "Not the first digit! Using Benford's law to detect fraudulent scientific data",
    role: "Demuestra que los humanos fingen bien el primer dígito, pero fallan en el segundo o tercero.",
    era: Era.ERA_2,
  },
  {
    id: "5",
    year: "2014",
    author: "Alex Ely Kossovsky",
    title: "Benford’s law: Theory... and forensic fraud detection applications",
    role: "La 'Biblia' de Benford. Fuente de las fórmulas de validación estadística clásica (Chi-cuadrado, MAD).",
    era: Era.ERA_2,
  },
  // ERA 3
  {
    id: "7",
    year: "2019-2020",
    author: "Kuruppu / Kurien & Chikkamannur",
    title: "Modelos híbridos con árboles y Autoencoders",
    role: "El inicio del ML. La comunidad inyecta Machine Learning básico al notar límites en la estadística pura.",
    era: Era.ERA_3,
  },
  {
    id: "8",
    year: "2021",
    author: "Balado, F. & Silvestre, G.C.M.",
    title: "BENFORD'S LAW: HAMMERING A SQUARE PEG INTO A ROUND HOLE?",
    role: "La crítica fundamental. Advierte sobre forzar la ley y generar falsos positivos.",
    era: Era.ERA_3,
  },
  // ERA 4
  {
    id: "9",
    year: "2022",
    author: "Chen & Tsourakakis",
    title: "AntiBenford Subgraphs: Unsupervised Anomaly Detection...",
    role: "Introduce ML no supervisado para detectar 'Anti-Benford' (estructuras creadas para evadir la ley).",
    era: Era.ERA_4,
  },
  {
    id: "10",
    year: "2023",
    author: "Kim et al. / Sushkov et al.",
    title: "Aplicaciones desde auditorías tradicionales hacia Deep Learning",
    role: "Confirman el paradigma de usar Benford como 'feature' para alimentar algoritmos.",
    era: Era.ERA_4,
  },
  {
    id: "11",
    year: "Febrero 2024",
    author: "Leonov, Sushkov, et al.",
    title: "Improving the Methodology for Integrated Testing...",
    role: "La guía metodológica principal. Uso de Random Forest y K-Means con métricas de Benford.",
    era: Era.ERA_4,
  },
  {
    id: "12",
    year: "2024",
    author: "Di Marzio et al.",
    title: "Validating Benfordness on contaminated data",
    role: "Fundamento de la Base de Datos Híbrida (#5) y detección en datos contaminados.",
    era: Era.ERA_4,
  },
  {
    id: "13",
    year: "2024",
    author: "Mienye & Swart",
    title: "A Hybrid Deep Learning Approach with Generative Adversarial Network",
    role: "Justifica el uso de IA generativa para sintetizar información (Base de datos #3: Generada por IA).",
    era: Era.ERA_4,
  },
  {
    id: "14",
    year: "2025",
    author: "Achary et al.",
    title: "Insurance Claim Fraud Detection using Benford's Method and Machine Learning",
    role: "Demuestra la vigencia absoluta del enfoque híbrido en la investigación actual.",
    era: Era.ERA_4,
  },
];
