import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { DashboardComponent } from "./dashboard/dashboard.component";
import { NotFoundComponent } from "./not-found/not-found.component";
import { NewSurveyFormComponent } from "./new-survey-form/new-survey-form.component";

const routes: Routes = [
    { path: "", redirectTo: '/surveys', pathMatch: "full" },
    { path: "surveys", component: DashboardComponent, pathMatch: "full" },
    { path: "surveys/new", component: NewSurveyFormComponent, pathMatch: "full" },
    { path: "**", component: NotFoundComponent }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
    declarations: []
})

export class AppRoutingModule { }
