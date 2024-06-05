
import { PrismaClient } from '@prisma/client'

declare global {
  // Allow use of global variables in TypeScript
  var cachedPrisma: PrismaClient | undefined
}

const prisma = global.cachedPrisma || new PrismaClient()

if (process.env.NODE_ENV !== 'production') {
  global.cachedPrisma = prisma
}

export const db = prisma
