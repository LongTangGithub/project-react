/**
 * @fileoverview Environment variable validation and configuration using Zod.
 * This module provides type-safe access to environment variables with runtime validation.
 */

import * as z from 'zod';

/**
 * Schema definition for environment variables.
 * @type {z.ZodObject}
 * @property {z.ZodString} BASE_URL - The base URL of the application
 * @property {z.ZodString} COURSE_URL - The URL for course-related content
 * @property {z.ZodString} COSDEN_SOLUTIONS_URL - The URL for Cosden solutions
 * @property {z.ZodString} DB_KEY - Database key for authentication
 * @property {z.ZodString} DISCORD_URL - Discord server URL
 * @property {z.ZodString} USE_AUTH - String that gets transformed to boolean indicating if authentication is enabled
 */
const envSchema = z.object({
  BASE_URL: z.string().url(),
  COURSE_URL: z.string().url(),
  COSDEN_SOLUTIONS_URL: z.string().url(),
  DB_KEY: z.string(),
  DISCORD_URL: z.string().url(),
  USE_AUTH: z.string().transform((value) => value === 'true'),
});

/**
 * Validated environment variables.
 * @type {{
 *   BASE_URL: string,
 *   COURSE_URL: string,
 *   COSDEN_SOLUTIONS_URL: string,
 *   DB_KEY: string,
 *   DISCORD_URL: string,
 *   USE_AUTH: boolean
 * }}
 * @throws {z.ZodError} If any environment variable is missing or invalid
 */
export const env = envSchema.parse({
  BASE_URL: import.meta.env.VITE_BASE_URL,
  COURSE_URL: import.meta.env.VITE_COURSE_URL,
  COSDEN_SOLUTIONS_URL: import.meta.env.VITE_COSDEN_SOLUTIONS_URL,
  DB_KEY: import.meta.env.VITE_DB_KEY,
  DISCORD_URL: import.meta.env.VITE_DISCORD_URL,
  USE_AUTH: import.meta.env.VITE_USE_AUTH,
});
