import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PathPage } from './common/constants/path-page';

const routes: Routes = [
  {
    path: '',
    redirectTo: PathPage.ARTICLES,
    pathMatch: 'full',
  },
  {
    path: PathPage.ARTICLES,
    loadChildren: () =>
      import('./pages/articles/articles.module').then((module) => module.ArticlesModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
