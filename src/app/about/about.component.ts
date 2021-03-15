import { Component, OnInit } from '@angular/core';
import {interval, Observable} from 'rxjs';
import { mergeMap } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';

interface Age {
  years: number;
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.sass']
})
export class AboutComponent implements OnInit {
  readme = '';
  age: Age;

  constructor(private http: HttpClient) { }

  private static calcAge(): Age {
    const birthday = new Date(672913800 * 1000);
    const diff = Date.now() - birthday.getTime();
    const years = Math.floor(diff / (365.24 * 60 * 60 * 24 * 1000));
    const totalDays = Math.floor(diff / (60 * 60 * 24 * 1000));
    const days = Math.floor(diff / (60 * 60 * 24 * 1000)) - Math.floor((years * 365.24));
    const hours = Math.floor(diff / (60 * 60 * 1000)) - (totalDays * 24);
    const minutes = Math.floor(diff / (60 * 1000)) - ((totalDays * 24 * 60) + (hours * 60));
    const seconds = Math.floor(diff / 1000) - ((totalDays * 24 * 60 * 60) + (hours * 60 * 60) + (minutes * 60));
    return { years, days, hours, minutes, seconds };
  }

  ngOnInit(): void {
    this.age = AboutComponent.calcAge();
    this.getReadmeRaw()
      .pipe(mergeMap(text => this.renderMarkdown(text)))
      .subscribe(response => this.readme = response);
    interval(1000).subscribe(_ => this.age = AboutComponent.calcAge());
  }

  private renderMarkdown(text: string): Observable<string> {
    return this.http.post('https://api.github.com/markdown', {text}, { responseType: 'text' });
  }

  private getReadmeRaw(): Observable<string> {
    return this.http.get('https://raw.githubusercontent.com/aerabi/aerabi/master/README.md', {responseType: 'text'});
  }
}
