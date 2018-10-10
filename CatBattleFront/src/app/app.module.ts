import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { FileUploadModule } from 'ng2-file-upload';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './route/app-routing.module';
import { CatSearchComponent } from './component/cat-search/cat-search.component';
import { CatComponent } from './component/cat/cat.component';
import { CatListComponent } from './component/cat-list/cat-list.component';
import { CatDetailComponent } from './component/cat-detail/cat-detail.component';
import { CatListDataComponent } from './component/cat-list-data/cat-list-data.component';
import { EnemyListComponent } from './component/enemy-list/enemy-list.component';
import { EnemyListDataComponent } from './component/enemy-list-data/enemy-list-data.component';
import { EnemyDetailComponent } from './component/enemy-detail/enemy-detail.component';
import { EnemySearchComponent } from './component/enemy-search/enemy-search.component';
import { CatAddComponent } from './component/cat-add/cat-add.component';
import { LoadingCoverComponent } from './component/loading-cover/loading-cover.component';
import { EnemyAddComponent } from './component/enemy-add/enemy-add.component';

@NgModule({
  declarations: [
    AppComponent,
    CatSearchComponent,
    CatComponent,
    CatListComponent,
    CatDetailComponent,
    CatListDataComponent,
    EnemyListComponent,
    EnemyListDataComponent,
    EnemyDetailComponent,
    EnemySearchComponent,
    CatAddComponent,
    LoadingCoverComponent,
    EnemyAddComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    FileUploadModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
