import { ProxyState } from "../AppState.js";
import { Job } from "../Models/Job.js";


class JobServices{
  addJobs(jobData) {
    const testJob = new Job(jobData);
     ProxyState.jobs = [...ProxyState.jobs,testJob ]
  }
}

export const jobServices = new JobServices