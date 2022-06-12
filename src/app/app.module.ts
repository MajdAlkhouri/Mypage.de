import { NgModule  } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { MyWorkComponent } from './my-work/my-work.component';
import { ContactComponent } from './contact/contact.component';
import { FirstComponent } from './first/first.component';
import { AboutMeComponent } from './about-me/about-me.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { NgParticlesModule } from 'ng-particles';
import { MySkillsComponent } from './my-skills/my-skills.component';
import { SocialMediaComponent } from './social-media/social-media.component';






@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    MyWorkComponent,
    ContactComponent,
    FirstComponent,
    AboutMeComponent,
    MySkillsComponent,
    SocialMediaComponent,
       
  ],

  imports: [

    NgParticlesModule,
    CommonModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,

  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
