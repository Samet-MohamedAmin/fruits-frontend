import { OnInit } from '@angular/core';
import { Component } from '@angular/core';
import { ActivatedRoute, NavigationEnd, NavigationStart, Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'fruits';
  displayPath: string | undefined = '';
  urlMap: Map<string, string> = new Map([
    ['/fruits/list', 'List all fruits'],
    ['/fruits/create', 'Create a new fruit'],
  ]);

  sideNavItems: {name: string, link: string}[] = [
    {name: 'List', link: '/fruits/list'},
    {name: 'Create', link: '/fruits/create'},
  ]


  constructor(private router: Router){}

  ngOnInit() {
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        this.displayPath = this.urlMap.get(event.url)
      }
    });
  }
}
