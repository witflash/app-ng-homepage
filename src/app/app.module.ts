import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { Routes, RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/Forms';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { FavoriteComponent } from './favorite/favorite.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { NavComponent } from './components/nav/nav.component';
import { ApiService } from './api.service';
import { DataLinkService } from './data-link.service';
import { TileComponent } from './home/tile/tile.component';
import { GlobalService } from './global.service';

const appRoutes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'favorites', component: FavoriteComponent },
  { path: '**', component: HomeComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    FavoriteComponent,
    HeaderComponent,
    FooterComponent,
    NavComponent,
    TileComponent,
  ],
  imports: [BrowserModule, RouterModule.forRoot(appRoutes), HttpClientModule, FormsModule],
  providers: [ApiService, DataLinkService],
  bootstrap: [AppComponent],
})
export class AppModule {}
