import { BreakpointObserver } from '@angular/cdk/layout';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent implements OnInit {
  opened: boolean = false
  hideHamburguer: boolean = true

  constructor(private responsive: BreakpointObserver, private router: Router) { }

  ngOnInit(): void {
    this.responsive.observe(['(min-width: 750px)'])
      .subscribe(result => {
        if (result.matches) {
          this.hideHamburguer = false;
        } else {

          this.hideHamburguer = true;
        }
      });
  }
  iniciarSesion() {
    this.router.navigateByUrl('/landing');

  }
}
