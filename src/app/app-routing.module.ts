import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { HomeComponent } from "./modules/home/home/home.component";
import { ExperiencePointsComponent } from "./modules/experience-points/experience-points/experience-points.component";
import { TasksComponent } from "./modules/tasks/tasks/tasks.component";

const routes: Routes = [
	{ path: "", component: HomeComponent },
	{ path: "experience-points", component: ExperiencePointsComponent },
	{ path: "tasks", component: TasksComponent },
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule],
})
export class AppRoutingModule {}
