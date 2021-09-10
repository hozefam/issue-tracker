import { Issue } from './issue';
import { Injectable } from '@angular/core';

import { issues } from '../assets/mock-issues';

@Injectable({
  providedIn: 'root',
})
export class IssuesService {
  private issues: Issue[] = [];

  constructor() {
    this.issues = issues;
  }

  getPendingIssues(): Issue[] {
    return this.issues.filter((issue) => !issue.completed);
  }
}
