import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";

import { HomeModule } from "./modules/home/home.module";
import { ExperiencePointsModule } from "./modules/experience-points/experience-points.module";

@NgModule({
	declarations: [AppComponent],
	imports: [BrowserModule, AppRoutingModule, HomeModule, ExperiencePointsModule],
	providers: [],
	bootstrap: [AppComponent],
})
export class AppModule {}
