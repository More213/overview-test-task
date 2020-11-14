import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { EffectsModule } from '@ngrx/effects';
import { environment } from '../environments/environment';
import { metaReducers, reducers } from './reducers';



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
import { OverviewTableComponent } from './components/overview-table/overview-table.component';
import { OverviewFormComponent } from './components/overview-form/overview-form.component';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { StoreRouterConnectingModule } from '@ngrx/router-store';

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
    ColorsComponent,
    OverviewTableComponent,
    OverviewFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    StoreModule.forRoot(reducers, {
      metaReducers,
      runtimeChecks: {
        strictStateImmutability: true,
        strictActionImmutability: true,
      }
    }),
    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: environment.production }),
    EffectsModule.forRoot([]),
    StoreRouterConnectingModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
