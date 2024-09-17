"use server";

import { prisma } from "@/prisma";
import { action } from "@/safe-actions";
import { MailSchema } from "./mail.schema";
import { revalidatePath } from 'next/cache'

export const createUtilisateur = action(
  MailSchema,
  async (input, context) => {
    const user = await prisma.utilisateur.create({
      data: {
        email: input.email
      },
    });
    revalidatePath("/");
    return user;
  }
);