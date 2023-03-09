import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SiteRoutingModule } from './site-routing.module';
import { SiteComponent } from './site.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { AboutPageComponent } from './pages/about-page/about-page.component';
import { AdminModule } from '../admin/admin.module';
import { SiteSharedFeatureModule } from './pages/features/site-shared-feature/site-shared-feature.module';
import { AdminSharedFeatureModule } from '../admin/pages/dashboard-page/features/admin-shared-feature/admin-shared-feature.module';
import { UserGridComponent } from '../admin/pages/features/components/user-grid/user-grid.component';

@NgModule({
  declarations: [SiteComponent, HomePageComponent, AboutPageComponent],
  imports: [
    CommonModule,
    SiteRoutingModule,
    UserGridComponent,
    //AdminSharedFeatureModule, // AdminModule reften kurtulduk
    SiteSharedFeatureModule,
  ],
})
export class SiteModule {}
