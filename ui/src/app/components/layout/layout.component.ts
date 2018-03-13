import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { environment } from '../../../environments/environment';
import { Router, NavigationEnd, RouterStateSnapshot } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
// import { RouterState } from '@angular/router/src/router_state';


@Component({
  selector: 'layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})
export class LayoutComponent implements OnInit {

  projectName = 'Expert spoon';
  currentUrl;
  state;
  currentApp;
  constructor(public auth: AuthService,
    private route: ActivatedRoute,
    private router: Router) {
      // this.state = router.routerState:RouterState;
      // router.events
      //   .subscribe((event) => {
      //     // console.log(event);
      //     if (event instanceof NavigationEnd ) {
      //       this.currentUrl = event.url;

      //       if (event.url.match(/aquapro/g)){
      //         this.projectName = 'Aqua-Pro';
      //         this.currentApp = 'aquapro';
      //         return;
      //       }

      //       if (event.url.match(/aquasmart/g)){
      //         this.projectName = 'Aqua-Smart';
      //         this.currentApp = 'aquasmart';
      //         return;
      //       }
      //     }
      // });
   }

  ngOnInit() {
  }

  logoutUser = () => {
    this.auth.logout();
    this.router.navigate(['']);
  }

}
