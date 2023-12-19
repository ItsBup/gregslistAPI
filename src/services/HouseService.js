import { dbContext } from "../db/DbContext.js"

class HouseService{
  async createHouse(houseData) {
    const house = await dbContext.Houses.create(houseData)
    return house
  }

  async getHouses() {
    const houses = await dbContext.Houses.find()
    return houses
  }
  async getOneHouse(houseId) {
    const house = await dbContext.Houses.findById(houseId)
    if(!house){
      throw new Error(`No can do chief, no house at id: ${houseId}`)
    }
    return house
  }
  async removeHouse(houseId) {
    const houseToRemove = await dbContext.Houses.findById(houseId)
    if(!houseToRemove){
      throw new Error(`No can do chief, deletion failed. No house at id: ${houseId}`)
    }
    await houseToRemove.remove()
    return `Your home with ${houseToRemove.bedroom} bedroom(s) and ${houseToRemove.bathroom} bathroom(s) has been eradicated. Enjoyment.`
  }
  async updateHouse(houseId, updateData) {
    const originalHouse = await this.getOneHouse(houseId)
    originalHouse.bedroom = updateData.bedroom ? updateData.bedroom : originalHouse.bedroom
    originalHouse.bathroom = updateData.bathroom ? updateData.bathroom : originalHouse.bathroom
    originalHouse.year = updateData.year ? updateData.year : originalHouse.year
    originalHouse.imgUrl = updateData.imgUrl ? updateData.imgUrl : originalHouse.imgUrl
    originalHouse.description = updateData.description ? updateData.description : originalHouse.description
    await originalHouse.save()
    return originalHouse
  }
}

export const houseService = new HouseService()
