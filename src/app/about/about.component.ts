import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { mergeMap } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.sass']
})
export class AboutComponent implements OnInit {
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
    return this.http.get('https://raw.githubusercontent.com/aerabi/aerabi/master/README.md', {responseType: 'text'});
  }

}
