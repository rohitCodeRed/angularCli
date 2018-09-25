import { Component, OnInit} from '@angular/core';
import {DomSanitizer} from '@angular/platform-browser';
import {MatIconRegistry} from '@angular/material';
import {Router, NavigationEnd, ActivatedRoute} from '@angular/router';
import 'rxjs/add/operator/filter';
import 'rxjs/add/operator/map';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app';
  panelOpenState: boolean = false;
  constructor(private router:Router, private activatedRoute: ActivatedRoute,iconRegistry: MatIconRegistry, sanitizer: DomSanitizer) {
    iconRegistry.addSvgIcon(
        'menu',
        sanitizer.bypassSecurityTrustResourceUrl('assets/menu.svg'));

      iconRegistry.addSvgIcon(
          'multi_chart',
          sanitizer.bypassSecurityTrustResourceUrl('assets/multi_chart.svg'));

      iconRegistry.addSvgIcon(
              'home',
              sanitizer.bypassSecurityTrustResourceUrl('assets/home.svg'));

    }

    ngOnInit() {
      // this.router.events
      // .filter((event) => event instanceof NavigationEnd)
      // .map(() => this.activatedRoute)
      // .map((route) => {
      //     while (route.firstChild) route = route.firstChild;
      //     return route;
      //   })
      // .subscribe((event) => {
      //
      //    event.url.subscribe((url)=>{
      //     console.log("URL: ",url);
      //     // if(url[0].path != 'simpleBar'){
      //     //   this.router.navigate(['simpleBar']);
      //     // }
      //
      //   });
        //event.sub
        //this.router.navigate(['simpleBar']);
      });
    }

}
