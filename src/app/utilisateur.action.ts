"use server";

import { prisma } from "@/prisma";
import { action } from "@/safe-actions";
import { MailSchema } from "./mail.schema";

export const createUtilisateur = action(
  MailSchema,
  async (input, context) => {
    const user = await prisma.utilisateur.create({
      data: {
        // email: "test2@gmail.com"
        email: input.email
      },
    });
    return user;
  }
);