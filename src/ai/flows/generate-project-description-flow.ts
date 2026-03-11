'use server';
/**
 * @fileOverview A Genkit flow to generate initial project descriptions and identify key technologies.
 *
 * - generateProjectDescription - A function that handles the project description generation process.
 * - GenerateProjectDescriptionInput - The input type for the generateProjectDescription function.
 * - GenerateProjectDescriptionOutput - The return type for the generateProjectDescription function.
 */

import { ai } from '@/ai/genkit';
import { z } from 'genkit';

const GenerateProjectDescriptionInputSchema = z
  .object({
    githubRepoMetadata: z
      .string()
      .optional()
      .describe(
        'Optional GitHub repository metadata, such as repository name, description, and primary language.'
      ),
    projectSummary: z
      .string()
      .optional()
      .describe('A brief summary of the project.'),
  })
  .refine(
    data => data.githubRepoMetadata || data.projectSummary,
    'Either githubRepoMetadata or projectSummary must be provided.'
  );

export type GenerateProjectDescriptionInput = z.infer<
  typeof GenerateProjectDescriptionInputSchema
>;

const GenerateProjectDescriptionOutputSchema = z.object({
  description: z
    .string()
    .describe('A detailed and engaging description of the project.'),
  technologies: z
    .array(z.string())
    .describe('A list of key technologies used in the project.'),
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
  'Cursor',
  'Claude',
  'Gemini',
  'ChatGPT',
].join(', ');

const prompt = ai.definePrompt({
  name: 'generateProjectDescriptionPrompt',
  input: { schema: GenerateProjectDescriptionInputSchema },
  output: { schema: GenerateProjectDescriptionOutputSchema },
  prompt: `You are an AI assistant specialized in generating project descriptions for developer portfolios.
Your task is to create a compelling project description and identify key technologies used in the project from the provided information.

Here is the information about the project:
{{#if githubRepoMetadata}}
GitHub Repository Metadata: {{{githubRepoMetadata}}}
{{/if}}
{{#if projectSummary}}
Project Summary: {{{projectSummary}}}
{{/if}}

Identify technologies from the following list: ${technologyList}.
Only include technologies from this list that are explicitly mentioned or strongly implied by the provided project information.

Generate a project description that highlights the project's purpose, features, and impact.`,
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
