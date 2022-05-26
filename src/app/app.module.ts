import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { SvgWrapperComponent } from './components/svg-wrapper/svg-wrapper.component';
import { BrandComponent } from './components/brand/brand.component';
import { IconComponent } from './components/icon/icon.component';
import { SearchInputComponent } from './components/search-input/search-input.component';
import { HeaderComponent } from './components/header/header.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatInputModule } from '@angular/material/input';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { CardWrapperComponent } from './components/card-wrapper/card-wrapper.component';
import { WeaponCardComponent } from './components/weapon-card/weapon-card.component';

@NgModule({
  declarations: [
    AppComponent,
    SvgWrapperComponent,
    BrandComponent,
    IconComponent,
    HeaderComponent,
    SearchInputComponent,
    CardWrapperComponent,
    WeaponCardComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatInputModule,
    MatGridListModule,
    MatButtonModule,
    MatIconModule,
    MatCardModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
