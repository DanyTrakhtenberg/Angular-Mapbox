import { MapboxTaskComponent } from './mapbox-task/mapbox-task.component';
import { AppComponent } from './app.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
   { path: '', redirectTo: '/MapboxTaskComponent', pathMatch: 'full' },
   { path: '**', component: MapboxTaskComponent  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
