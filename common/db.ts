import { PrismaClient } from './prisma/generated/prisma'
import { logger } from './logger'

export const prisma = new PrismaClient()
export type { CarMake, CarModel, CarPart } from './prisma/generated/prisma'


export async function provisionDatabaseSchema() {
  logger.info('Provisioning the Models')
  // `db push` or `migrate dev` should be handled externally, but if needed:
  logger.info('Models Provisioned (handled via CLI or CI)')
}

// Optional alias if you want a FastAPI-like DI helper
export const getSession = () => prisma

export async function dataExists(): Promise<boolean> {
  const make = await prisma.carMake.findFirst()
  return make !== null
}
