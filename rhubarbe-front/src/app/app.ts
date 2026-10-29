import { Component } from '@angular/core';
import { HeroComponent } from './hero/hero.component';
import { GalerieComponent } from './galerie/galerie.component';
import { InfosComponent } from './infos/infos.component';

@Component({
  selector: 'app-root',
  imports: [HeroComponent, GalerieComponent, InfosComponent],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {}
