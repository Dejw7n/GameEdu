import { Component, OnInit } from "@angular/core";

@Component({
	selector: "app-tasks",
	templateUrl: "./tasks.component.html",
	styleUrls: ["./tasks.component.scss"],
})
export class TasksComponent implements OnInit {
	constructor() {}

	ngOnInit(): void {}

	tasks = [
		{
			subject: "Aplikační software",
			title: "Dodělejte ER diagram z hodiny",
			message: "Zašlete v PDF formě",
			xpRating: 50,
			required: false,
			deadline: "27.04.2022",
		},
		{
			subject: "Programování",
			title: "CookieClicker",
			message: "Zašlete v PDF formě",
			xpRating: 50,
			required: true,
			deadline: "27.04.2022",
		},
	];
}
