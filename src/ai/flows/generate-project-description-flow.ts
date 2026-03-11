'use server';
/**
 * @fileOverview Un flujo de Genkit para generar descripciones iniciales de proyectos e identificar tecnologías clave.
 */

import { ai } from '@/ai/genkit';
import { z } from 'genkit';

const GenerateProjectDescriptionInputSchema = z
  .object({
    githubRepoMetadata: z
      .string()
      .optional()
      .describe(
        'Metadatos opcionales del repositorio de GitHub, como el nombre del repositorio, la descripción y el lenguaje principal.'
      ),
    projectSummary: z
      .string()
      .optional()
      .describe('Un breve resumen del proyecto.'),
  })
  .refine(
    data => data.githubRepoMetadata || data.projectSummary,
    'Debe proporcionarse githubRepoMetadata o projectSummary.'
  );

export type GenerateProjectDescriptionInput = z.infer<
  typeof GenerateProjectDescriptionInputSchema
>;

const GenerateProjectDescriptionOutputSchema = z.object({
  description: z
    .string()
    .describe('Una descripción detallada y atractiva del proyecto en español.'),
  technologies: z
    .array(z.string())
    .describe('Una lista de tecnologías clave utilizadas en el proyecto.'),
});

export type GenerateProjectDescriptionOutput = z.infer<
  typeof GenerateProjectDescriptionOutputSchema
>;

export async function generateProjectDescription(
  input: GenerateProjectDescriptionInput
): Promise<GenerateProjectDescriptionOutput> {
  return generateProjectDescriptionFlow(input);
}

const technologyList = [
  'Laravel',
  'Vue',
  'Spring',
  'Angular',
  'Next',
  'Django',
  '.Net',
  'Nestjs',
  'PostgreSQL',
  'MySQL',
  'SQL Server',
  'MongoDB',
  'Cursor',
  'Claude',
  'Gemini',
  'ChatGPT',
].join(', ');

const prompt = ai.definePrompt({
  name: 'generateProjectDescriptionPrompt',
  input: { schema: GenerateProjectDescriptionInputSchema },
  output: { schema: GenerateProjectDescriptionOutputSchema },
  prompt: `Eres un asistente de IA especializado en generar descripciones de proyectos para portafolios de desarrolladores.
Tu tarea es crear una descripción de proyecto convincente y profesional en español, e identificar las tecnologías clave utilizadas en el proyecto a partir de la información proporcionada.

Aquí está la información sobre el proyecto:
{{#if githubRepoMetadata}}
Metadatos del Repositorio de GitHub: {{{githubRepoMetadata}}}
{{/if}}
{{#if projectSummary}}
Resumen del Proyecto: {{{projectSummary}}}
{{/if}}

Identifica las tecnologías de la siguiente lista: ${technologyList}.
Solo incluye tecnologías de esta lista que estén mencionadas explícitamente o fuertemente implicadas por la información del proyecto proporcionada.

Genera una descripción del proyecto que resalte el propósito del proyecto, las características y el impacto. TODO EL TEXTO DEBE ESTAR EN ESPAÑOL.`,
});

const generateProjectDescriptionFlow = ai.defineFlow(
  {
    name: 'generateProjectDescriptionFlow',
    inputSchema: GenerateProjectDescriptionInputSchema,
    outputSchema: GenerateProjectDescriptionOutputSchema,
  },
  async (input) => {
    const { output } = await prompt(input);
    return output!;
  }
);
