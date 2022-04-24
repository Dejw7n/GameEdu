import { Component, OnInit } from "@angular/core";

@Component({
	selector: "app-learning-points",
	templateUrl: "./experience-points.component.html",
	styleUrls: ["./experience-points.component.scss"],
})
export class LearningPointsComponent implements OnInit {
	constructor() {}

	ngOnInit(): void {}

	getCalculatedPointsLeft(var1: number, var2: number, var3: number) {
		return Math.abs(var1 - var2 - var3);
	}
	getCalculatedPointsLeftInDegrees(var1: number, var2: number) {
		return 385 - (var1 / var2) * 100 * (360 / 100);
	}

	subjects = [
		{
			name: "Datové síťě",
			earnedPoints: 1354,
			lostPoints: 214,
			nextLevel: 2000,
		},
		{
			name: "Programování",
			earnedPoints: 742,
			lostPoints: 321,
			nextLevel: 2000,
		},
		{
			name: "Aplikační software",
			earnedPoints: 1823,
			lostPoints: 15,
			nextLevel: 2000,
		},
	];
}
