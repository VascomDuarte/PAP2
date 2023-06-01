import { PrismaClient } from '@prisma/client'

const client = new PrismaClient

async function createUser(name: string, email: string, password: string, gender: string, birthdate: string) {
  try {
    const newUser = await client.user.create({
    data: {
      name: name,
        email: email,
        password: password,
        gender: gender,
        birthdate: birthdate
    },
    });
    console.log(" User Created: ", newUser);
    } catch (error) {
        console.error(error);
        }
}

export default createUser
