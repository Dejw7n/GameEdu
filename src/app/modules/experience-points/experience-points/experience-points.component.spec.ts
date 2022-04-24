import { ComponentFixture, TestBed } from "@angular/core/testing";

import { ExperiencePointsComponent } from "./experience-points.component";

describe("ExperiencePointsComponent", () => {
	let component: ExperiencePointsComponent;
	let fixture: ComponentFixture<ExperiencePointsComponent>;

	beforeEach(async () => {
		await TestBed.configureTestingModule({
			declarations: [ExperiencePointsComponent],
		}).compileComponents();
	});

	beforeEach(() => {
		fixture = TestBed.createComponent(ExperiencePointsComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it("should create", () => {
		expect(component).toBeTruthy();
	});
});
