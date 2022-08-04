import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {mergeMap} from 'rxjs/operators';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.sass']
})
export class ProjectsComponent implements OnInit {
  readme = '';

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.getReadmeRaw()
      .pipe(mergeMap(text => this.renderMarkdown(text)))
      .subscribe(response => this.readme = response);
  }

  private renderMarkdown(text: string): Observable<string> {
    return this.http.post('https://api.github.com/markdown', {text}, { responseType: 'text' });
  }

  private getReadmeRaw(): Observable<string> {
    return this.http.get('https://raw.githubusercontent.com/aerabi/git-weekly/master/README.md', {responseType: 'text'});
  }

}
