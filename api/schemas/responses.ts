import { CarMake, CarModel, CarPart } from '../../common/db'

export type MakeOut = Pick<CarMake, 'id' | 'name'>
export type ModelOut = Pick<CarModel, 'id' | 'name' | 'makeId'>
export type PartOut = Pick<CarPart, 'id' | 'name' | 'modelId'>

export type HealthResponse = {
  status: string
}
