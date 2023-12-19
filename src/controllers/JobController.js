
import { jobService } from "../services/JobService.js";
import BaseController from "../utils/BaseController.js";



export class JobController extends BaseController{
  constructor(){
    super('api/jobs')
    this.router
      .post('', this.createJob)
      .get('', this.getJobs)
      .get('/:jobId', this.getOneJob)
      .delete('/:jobId', this.removeJob)
      .put('/:jobId', this.updateJob)
  }

  async createJob(request, response, next){
    try {
      const jobData = request.body
      const job = await jobService.createJob(jobData)
      response.send(job)
    } catch (error) {
      next(error)
    }
  }

  async getJobs(request, response, next){
    try {
      const jobs = await jobService.getJobs()
      response.send(jobs)
    } catch (error) {
      next(error)
    }
  }

  async getOneJob(request, response, next){
    try {
      const jobId = request.params.jobId
      const job = await jobService.getOneJob(jobId)
      response.send(job)
    } catch (error) {
      next(error)
    }
  }

  async removeJob(request, response, next){
    try {
      const jobId = request.params.jobId
      const message = await jobService.removeJob(jobId)
      response.send(message)
    } catch (error) {
      next(error)
    }
  }

  async updateJob(request, response, next){
    try {
      const jobId = request.params.jobId
      const updateData = request.body
      const job = await jobService.updateJob(jobId, updateData)
      response.send(job)
    } catch (error) {
      next(error)
    }
  }
}
