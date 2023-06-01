import { PrismaClient } from '@prisma/client';

const prisma = require("./prismaClient");

async function createUser(name, birth, gender, email) {
  try {
    const newUser = await prisma.user.create({
      data: {
        name,
        birth,
        gender,
        email,
      },
    });
    console.log("User created:", newUser);
  } catch (error) {
    console.error("Error creating user:", error);
  } finally {
    await prisma.$disconnect();
  }
}

createUser("John Doe", new Date(1990, 0, 1), "Male", "johndoe@example.com");
