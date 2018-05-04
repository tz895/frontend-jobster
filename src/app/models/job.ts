import {Company} from './company';

export class Job {
  public jobId: number;
  public company: Company;
  public name: string;
  public location: string;
  public title: string;
  public salary: string;
  public diploma: string;
  public major: string;
  public description: string;
  public post_time: Date;
  public due_time: Date;
  public status: string;
}
