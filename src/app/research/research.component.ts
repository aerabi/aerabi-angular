import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {mergeMap} from 'rxjs/operators';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-research',
  templateUrl: './research.component.html',
  styleUrls: ['./research.component.sass']
})
export class ResearchComponent implements OnInit {
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
    return this.http.get('https://raw.githubusercontent.com/aerabi/talks/master/README.md', {responseType: 'text'});
  }
}
