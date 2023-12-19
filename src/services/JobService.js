import { dbContext } from "../db/DbContext.js"

class JobService{
  async createJob(jobData) {
    const job = await dbContext.Jobs.create(jobData)
    return job
  }

  async getJobs() {
    const jobs = await dbContext.Jobs.find()
    return jobs
  }
  async getOneJob(jobId) {
    const job = await dbContext.Jobs.findById(jobId)
    if(!job){
      throw new Error(`No can do chief, no job at id: ${jobId}`)
    }
    return job
  }
  async removeJob(jobId) {
    const jobToRemove = await dbContext.Jobs.findById(jobId)
    if(!jobToRemove){
      throw new Error(`No can do chief, deletion failed. No job at id: ${jobId}`)
    }
    await jobToRemove.remove()
    return `Your ${jobToRemove.title} job has been eradicated. Enjoyment.`
  }
  async updateJob(jobId, updateData) {
    const originalJob = await this.getOneJob(jobId)
    originalJob.title = updateData.title ? updateData.title : originalJob.title
    originalJob.wage = updateData.wage ? updateData.wage : originalJob.wage
    originalJob.requirements = updateData.requirements ? updateData.requirements : originalJob.requirements
    originalJob.description = updateData.description ? updateData.description : originalJob.description
    await originalJob.save()
    return originalJob
  }
}

export const jobService = new JobService()
