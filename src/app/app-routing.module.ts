import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { HomeComponent } from "./modules/home/home/home.component";
import { LearningPointsComponent } from "./modules/learning-points/learning-points/learning-points.component";

const routes: Routes = [
	{ path: "", component: HomeComponent },
	{ path: "learning-points", component: LearningPointsComponent },
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule],
})
export class AppRoutingModule {}
