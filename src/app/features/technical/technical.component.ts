import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-technical',
  templateUrl: './technical.component.html',
  styleUrls: ['./technical.component.css']
})
export class TechnicalComponent implements OnInit {
  skills: [["Java",
    "Angular",
    "Python",
    "R/RStudio",
    "HTML/CSS"],
    ["Javascript",
      "React-native",
      "Spring",
      "MySQL",
      "Bootstrap"],
    ["Jquery",
      "Scrum",
      "Perl",
      "Git/Github",
      "VS Code"],
    ["Eclipse",
      "MSOfficeSuite",
      "Spyder",
      "Maven/Gradle",
      "Typescript"]]

  constructor() { }

  ngOnInit() {
  }

}
