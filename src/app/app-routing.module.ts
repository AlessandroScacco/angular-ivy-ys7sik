import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PathPage } from './common/constants/path-page';

const routes: Routes = [
  {
    path: '',
    redirectTo: PathPage.POSTS,
    pathMatch: 'full',
  },
  {
    path: PathPage.POSTS,
    loadChildren: () =>
      import('./pages/posts/posts.module').then((module) => module.PostsModule),
  },
  {
    path: PathPage.USERS + '/:id',
    loadChildren: () =>
      import('./pages/user/user.module').then((module) => module.UserModule),
  },
  {
    path: PathPage.NOT_FOUND,
    redirectTo: PathPage.POSTS,
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
