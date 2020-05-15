/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */
import { Component, OnInit } from '@angular/core';
import { AnalyticsService } from './@core/utils/analytics.service';
import { SeoService } from './@core/utils/seo.service';
import { NbMenuService } from '@nebular/theme';
import {  NbAuthModule } from '@nebular/auth';
import {Router} from '@angular/router';


@Component({
  selector: 'ngx-app',
  template: '<router-outlet></router-outlet>',
})
export class AppComponent implements OnInit {

  constructor (private analytics: AnalyticsService, private seoService: SeoService, private menuService:NbMenuService, private router: Router) {
    this.menuService.onItemClick()
      .subscribe((event) => {
        this.onContecxtItemSelection(event.item.title);
      });


  }
onContecxtItemSelection(title) {
  if (title === 'Log out') {
    localStorage.removeItem('auth_app_token');
    this.router.navigate(['/auth/login']);
  }
}
  ngOnInit(): void {
    this.analytics.trackPageViews();
    this.seoService.trackCanonicalChanges();
  }
}
