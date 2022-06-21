import { EventEmitter, Injectable, Output } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';
import Weapon from "../../types/Weapon";

type sortOption = 'specs' | 'category' | 'damage' | 'rateOfFire' | 'rating' | ''

@Injectable({
  providedIn: 'root'
})
export class WeaponsService {
  private readonly BASE_URL: string;
  @Output() weaponEmitter: EventEmitter<Weapon | Weapon[]> = new EventEmitter();

  constructor(private http: HttpClient) {
    this.BASE_URL = environment.apiUrl
  }

  get(option: sortOption = '') {
    return this.http.get<Weapon[]>(this.getUrl(`/arsenal?sort=${option}`));
  }

  getByName(name: string) {
    return this.http.get<Weapon>(this.getUrl(`/arsenal/${name}`));
  }

  getByCategory(category: string) {
    return this.http.get<Weapon[]>(this.getUrl(`/arsenal/category/${category}`));
  }

  getCategories() {
    return this.http.get<string[]>(this.getUrl('/arsenal/category'));
  }

  private getUrl(path: string): string {
    return `${this.BASE_URL}${path}`;
  }
}
