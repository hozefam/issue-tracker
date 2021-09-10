import { Issue } from './issue';
import { Injectable } from '@angular/core';

import { issues } from '../assets/mock-issues';

@Injectable({
  providedIn: 'root',
})
export class IssuesService {
  // private issues: Issue[] = [];

  constructor() {
    // this.issues = issues;
  }

  getPendingIssues(): Issue[] {
    console.log(issues);
    return issues.filter((issue) => !issue.completed);
  }

  createIssue(issue: Issue) {
    issue.issueNo = this.getPendingIssues.length + 1;
    issues.push(issue);
  }

  completeIssue(issue: Issue) {
    const selectedIssue: Issue = {
      ...issue,
      completed: new Date(),
    };
    const index = issues.findIndex((i) => i === issue);
    issues[index] = selectedIssue;
  }

  getSuggestions(title: string): Issue[] {
    if (title.length > 3) {
      return issues.filter((issue) => issue.title.indexOf(title) !== -1);
    }
    return [];
  }
}
