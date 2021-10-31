import { SideNavModule } from './components/side-nav/side-nav.module';
import { SideNavComponent } from './components/side-nav/side-nav.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {
    path: '',
    loadChildren: () =>
      import('./pages/login/login.module').then(
        m => m.LoginModule
      )
  },
  
  {
    path:'pages',component:SideNavComponent,
    children: [
      {
        path: 'places',
        loadChildren: () =>
          import('./pages/places/places.module').then(
            m=>m.PlacesModule
          )
       },
      {
        path: 'dashboard/:id',
        loadChildren: () =>
          import('./pages/dashboard/dashboard.module').then(
            m=>m.DashboardModule
          )
       },
       {
        path: 'users',
        loadChildren: () =>
          import('./pages/users/users.module').then(
            m=>m.UsersModule
          )
       },
       {
        path: 'charts',
        loadChildren: () =>
          import('./pages/charts/charts.module').then(
            m=>m.ChartsModule
          )
       },
       {
        path: 'sensors',
        loadChildren: () =>
          import('./pages/sensors/sensors.module').then(
            m=>m.SensorsModule
          )
       },
       {
        path: 'equipments',
        loadChildren: () =>
          import('./pages/equipments/equipments.module').then(
            m=>m.EquipmentsModule
          )
       },
       {
        path: 'alerts',
        loadChildren: () =>
          import('./pages/alerts/alerts.module').then(
            m=>m.AlertsModule
          )
       },
       {
        path: 'calendar',
        loadChildren: () =>
          import('./pages/calendar/calendar.module').then(
            m=>m.CalendarModule
          )
       },
       {
        path: 'setting',
        loadChildren: () =>
          import('./pages/setting/setting.module').then(
            m=>m.SettingModule
          )
       },
    ] 
  },

  // {
  //   path:'test',component:WeatherComponent
  // }
  // {path:'**',component:NotFoundComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes),SideNavModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
