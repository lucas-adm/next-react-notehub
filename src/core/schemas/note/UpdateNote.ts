import { z } from "zod";

export const noteUpdateFormSchema = z.object({
    title: z
        .string().trim()
        .min(2, 'Mínimo de 4 caracteres.')
        .max(48, 'Máximo de 48 caracteres.'),
    description: z
        .string().trim()
        .max(255, 'Máximo de 255 caracteres.'),
    hidden: z.boolean(),
    closed: z.boolean(),
    tags: z
        .array(z
            .string()
            .trim()
            .min(2, 'Mínimo de 2 caracteres por tag.')
            .max(20, 'Máximo de 20 caracteres por tag.')
            .regex(/^(?!.*[\u00A0\u2007\u202F\s]).*$/, 'Não use espaços.')
        )
        .max(12, "Máximo de 12 tags.")
        .default([] as string[])
})

export type NoteUpdateFormData = z.infer<typeof noteUpdateFormSchema>;