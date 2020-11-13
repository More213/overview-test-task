import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuBarComponent } from './components/menu-bar/menu-bar.component';
import { OverviewComponent } from './components/overview/overview.component';
import { CloudComponent } from './components/cloud/cloud.component';
import { SketchComponent } from './components/sketch/sketch.component';
import { ExperimentsComponent } from './components/experiments/experiments.component';
import { SecurityComponent } from './components/security/security.component';
import { OwnershipComponent } from './components/ownership/ownership.component';
import { ABTestComponent } from './components/abtest/abtest.component';
import { ColorsComponent } from './components/colors/colors.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuBarComponent,
    OverviewComponent,
    CloudComponent,
    SketchComponent,
    ExperimentsComponent,
    SecurityComponent,
    OwnershipComponent,
    ABTestComponent,
    ColorsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
