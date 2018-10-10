import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { CatComponent } from '../component/cat/cat.component';
import { CatSearchComponent } from '../component/cat-search/cat-search.component';
import { CatListComponent } from '../component/cat-list/cat-list.component';
import { CatListDataComponent } from '../component/cat-list-data/cat-list-data.component';
import { CatDetailComponent } from '../component/cat-detail/cat-detail.component';
import { EnemyListComponent } from '../component/enemy-list/enemy-list.component';
import { EnemyListDataComponent } from '../component/enemy-list-data/enemy-list-data.component';
import { EnemyDetailComponent } from '../component/enemy-detail/enemy-detail.component';
import { EnemySearchComponent } from '../component/enemy-search/enemy-search.component';
import { CatAddComponent } from '../component/cat-add/cat-add.component';
import { EnemyAddComponent } from '../component/enemy-add/enemy-add.component';

const routes: Routes = [
  { path: 'cat', component: CatComponent},
  { path: 'cat-list', component: CatListComponent},
  { path: 'cat-list-data/category/:category', component: CatListDataComponent},
  { path: 'cat-list-data/antiEnemy/:antiEnemy', component: CatListDataComponent},
  { path: 'cat-list-data/skillType/:skillType', component: CatListDataComponent},
  { path: 'cat-detail/:catId', component: CatDetailComponent},
  { path: 'cat-search', component: CatSearchComponent},
  { path: 'cat-add', component: CatAddComponent},
  { path: 'enemy-list', component: EnemyListComponent},
  { path: 'enemy-list-data/category/:category', component: EnemyListDataComponent},
  { path: 'enemy-list-data/skillType/:skillType', component: EnemyListDataComponent},
  { path: 'enemy-detail/:enemyId', component: EnemyDetailComponent},
  { path: 'enemy-search', component: EnemySearchComponent},
  { path: 'enemy-add', component: EnemyAddComponent},
];


@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  declarations: [],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule {
  
}
