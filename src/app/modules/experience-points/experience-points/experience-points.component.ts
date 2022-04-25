import { Component, OnInit } from "@angular/core";

@Component({
	selector: "app-experience-points",
	templateUrl: "./experience-points.component.html",
	styleUrls: ["./experience-points.component.scss"],
})
export class ExperiencePointsComponent implements OnInit {
	constructor() {}

	ngOnInit(): void {}

	getCalculatedXPLeft(var1: number, var2: number, var3: number) {
		return Math.abs(var1 - var2 - var3);
	}
	getCalculatedXPLeftInDegrees(var1: number, var2: number) {
		return 385 - (var1 / var2) * 100 * (360 / 100);
	}

	subjects = [
		{
			name: "Datové síťě",
			earnedXP: 1354,
			lostXP: 214,
			nextLevel: 2000,
		},
		{
			name: "Programování",
			earnedXP: 742,
			lostXP: 321,
			nextLevel: 2000,
		},
		{
			name: "Aplikační software",
			earnedXP: 1823,
			lostXP: 15,
			nextLevel: 2000,
		},
	];
}
