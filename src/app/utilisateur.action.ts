"use server";

import { prisma } from "@/prisma";
import { action } from "@/safe-actions";
import { MailSchema } from "./mail.schema";

export const createUtilisateur = action(
  MailSchema,
  async (input, context) => {
    console.log("TEST GUI createUtilisateur1");
    const user = await prisma.utilisateur.create({
      data: {
        email: "test2@gmail.com"
      },
    });
    console.log("TEST GUI createUtilisateur2");
    return user;
  }
);

// export const createProductAction = userAction(
//   ProductSchema,
//   async (input, context) => {
//     await verifySlugUniqueness(input.slug);
//     await verifyUserPlan(context.user);

//     const product = await prisma.product.create({
//       data: {
//         ...input,
//         userId: context.user.id,
//       },
//     });

//     await sendEmailIfUserCreatedFirstProduct(context.user);

//     return product;
//   }
// );