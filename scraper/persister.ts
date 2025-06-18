import { prisma } from '../common/db'
import { logger } from '../common/logger'

type CarData = Record<string, Record<string, string[]>> // make → model → [parts]

export class CarDataPersister {
  async save(data: CarData): Promise<void> {
    for (const [makeName, models] of Object.entries(data)) {
      const make = await prisma.carMake.create({
        data: { name: makeName }
      })

      for (const [modelName, parts] of Object.entries(models)) {
        const model = await prisma.carModel.create({
          data: {
            name: modelName,
            makeId: make.id
          }
        })

        if (parts.length > 0) {
          await prisma.carPart.createMany({
            data: parts.map((partName) => ({
              name: partName,
              modelId: model.id
            }))
          })
        }
      }
    }

    logger.info('Car data persisted successfully.')
  }
}
