import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { SvgWrapperComponent } from './components/svg-wrapper/svg-wrapper.component';
import { BrandComponent } from './components/brand/brand.component';
import { IconComponent } from './components/icon/icon.component';
import { SearchInputComponent } from './components/search-input/search-input.component';
import { HeaderComponent } from './components/header/header.component';
import { CardWrapperComponent } from './components/card-wrapper/card-wrapper.component';
import { CardHeaderComponent } from './components/card/header/card-header.component';
import { CardComponent } from './components/card/card.component';
import { WeaponCardComponent } from './components/card/weapon/weapon-card.component';
import { DropdownComponent } from './components/dropdown/dropdown.component';
import { DropdownCategoriesComponent } from './components/dropdown/categories/dropdown-categories.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatInputModule } from '@angular/material/input';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { MatSelectModule } from '@angular/material/select';
import { HttpClientModule } from '@angular/common/http';

import { WeaponsService } from './services/weapons.service';

@NgModule({
  declarations: [
    AppComponent,
    SvgWrapperComponent,
    BrandComponent,
    IconComponent,
    HeaderComponent,
    SearchInputComponent,
    CardWrapperComponent,
    CardHeaderComponent,
    CardComponent,
    WeaponCardComponent,
    DropdownComponent,
    DropdownCategoriesComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatInputModule,
    MatGridListModule,
    MatButtonModule,
    MatIconModule,
    MatCardModule,
    MatSelectModule,
    HttpClientModule
  ],
  providers: [
    WeaponsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
