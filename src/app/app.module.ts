import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";

import { HomeModule } from "./modules/home/home.module";
import { LearningPointsComponent } from "./modules/learning-points/learning-points/learning-points.component";

@NgModule({
	declarations: [AppComponent, LearningPointsComponent],
	imports: [BrowserModule, AppRoutingModule, HomeModule],
	providers: [],
	bootstrap: [AppComponent],
})
export class AppModule {}
