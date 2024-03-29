import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', loadChildren: './tabs/tabs.module#TabsPageModule' },
  { path: 'tab1', loadChildren: './tab1/tab1.module#Tab1PageModule'},
    { path: 'tab2', loadChildren: './tab2/tab2.module#Tab2PageModule'},

   { path: 'session', loadChildren: './session/session.module#SessionPageModule' },  
    { path: 'test', loadChildren: './test/test.module#TestPageModule' },
   { path: 'depression-test', loadChildren: './depression-test/depression-test.module#DepressionTestPageModule' },
   { path: 'results/:myid', loadChildren: './results/results.module#ResultsPageModule' },
     { path: 'success/:myid', loadChildren: './success/success.module#SuccessPageModule' },
     { path: 'tab2/:myid', loadChildren: './tab2/tab2.module#Tab2PageModule'},
  { path: 'editprofile', loadChildren: './editprofile/editprofile.module#EditprofilePageModule' },
  { path: 'enrolled-class', loadChildren: './enrolled-class/enrolled-class.module#EnrolledClassPageModule' },
  { path: 'askquestion', loadChildren: './askquestion/askquestion.module#AskquestionPageModule' },


];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
