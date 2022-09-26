import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BookModule } from './book/book.module';

const routes: Routes = [
  {
    path: "blog",
    loadChildren: () => import('./blog/blog.module').then(m => m.BlogModule)
  },
  {
    path: "book",
    loadChildren: () => import('./book/book.module').then(m => m.BookModule)
  },
  {
    path: "user",
    loadChildren: () => import('./user/user.module').then(m => m.UserModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
