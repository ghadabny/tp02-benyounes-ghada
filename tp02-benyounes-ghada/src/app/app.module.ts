import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { TotemComponent } from './totem/totem.component';
import { BodyComponent } from './body/body.component';
import { LoginComponent } from './login/login.component';
import { TetiereComponent } from './tetiere/tetiere.component';
import { FormulaireComponent } from './formulaire/formulaire.component';
import { RecapitulatifComponent } from './recapitulatif/recapitulatif.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    TotemComponent,
    BodyComponent,
    LoginComponent,
    TetiereComponent,
    FormulaireComponent,
    RecapitulatifComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    RecapitulatifComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
