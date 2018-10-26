import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-objective',
  templateUrl: './objective.component.html',
  styleUrls: ['./objective.component.css']
})
export class ObjectiveComponent implements OnInit {
  title: "Software Developer";
  objective: "Driven developer seeking opportunities in Java Software/Web development,technical analysis or data science. Previous experience in Biology research doing data analysis on highly dimensional datasets and experience working with computer hardware in the ARMY. Adapting and learning to solve complex problems fuels my passion. Life-long obsession inquiring about the nature of how things work. Proven success independently and as a leader/member of a team.";

constructor() { }

ngOnInit() {

}

}
