import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {MDBBootstrapModule} from 'angular-bootstrap-md';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import {BannerComponent} from './components/banner/banner.component';
import {AboutSectionComponent} from './components/about-section/about-section.component';
import { TitleComponent } from './components/shared/title/title.component';
import { CardComponent } from './components/shared/card/card.component';
import { SkillsComponent } from './components/skills/skills.component';
import { ToolsComponent } from './components/tools/tools.component';
import { ServicesComponent } from './components/services/services.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    BannerComponent,
    AboutSectionComponent,
    TitleComponent,
    CardComponent,
    SkillsComponent,
    ToolsComponent,
    ServicesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MDBBootstrapModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
