import { z } from "zod";

export const MailSchema = z.object({
  email: z.string()
});

export type MailType = z.infer<typeof ProductSchema>;
