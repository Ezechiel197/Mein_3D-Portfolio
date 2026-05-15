import { Component, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Subscription } from 'rxjs';
import { Language, LanguageService } from '../../language.service';
import { SceneControlService } from '../../scene-control.service';

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent implements OnInit, OnDestroy {

  currentLanguage: Language = 'de';
  private langSub!: Subscription;

  skillsData = {
    de: {
      title: 'Technische Fähigkeiten',
      categories: [
        {
          name: 'Programmiersprachen',
          skills: [
            { name: 'C/C++', level: 100, description: 'Umfassende Erfahrung in Systemprogrammierung und Embedded-Anwendungen.' },
            { name: 'SPS-Programmierung', level: 100, description: 'Automatisierung von Maschinenanlagen mit den Feldbussystemen EtherCAT, PROFINET und Modbus ' },
            { name: 'Python', level: 70, description: ' Automatisierung und Datenverarbeitung.' },
        
          ]
        },

        {
          name: 'Tools & Technologien',
          skills: [
            { name: 'Git & GitHub', level: 90, description: 'Effiziente Versionskontrolle und kollaborative Entwicklung.' },
            { name: 'SolidWorks, AutoCAD, Adams ', level: 90, description: '3D-Konstruktion komplexer Baugruppen, Erstellung technischer Zeichnungen und computergestützte Simulation von Mehrkörpersystemen.' },
            { name: 'LTSpice und Plecs', level: 90, description: 'Simulation und Analyse leistungselektronischer Schaltungen sowie thermische Modellierung von Halbleiterkomponenten.' },
            { name: 'Matlab/Simulink', level: 100, description: 'Modellierung komplexer dynamischer Systeme, Entwurf von Regelungsalgorithmen und Durchführung physikalischer Simulationen.' },
            
          ]
        }
      ]
    },
    en: {
      title: 'Technical Skills',
      categories: [
        {
          name: 'Programming Languages',
          skills: [
            { name: 'C/C++', level: 90, description: 'Extensive experience in system programming and embedded applications.' },
            
            { name: 'SPS-Programmierung', level: 100, description: 'Automation of industrial machinery using EtherCAT, PROFINET and Modbus fieldbus systems' },
            { name: 'Python', level: 70, description: ' Automation and Data Processing.' },
          ]
        },
      
        {
          name: 'Tools & Technologies',
          skills: [
            { name: 'Git & GitHub', level: 90, description: 'Efficient version control and collaborative development.' },
            { name: 'SolidWorks, AutoCAD, Adams ', level: 90, description: '3D design of complex assemblies, creation of technical drawings, and multi-body dynamics simulation (MBD)' },
            { name: 'LTSpice und Plecs', level: 90, description: 'Simulation and analysis of power electronic circuits and thermal modeling of semiconductor components.' },
            { name: 'Matlab/Simulink', level: 100, description: 'Modeling of complex dynamic systems, design of control algorithms, and execution of physical simulations.' },
          ]
        }
      ]
    }
  };

  constructor(public languageService: LanguageService, private sceneControlService: SceneControlService) {}

  ngOnInit(): void {
    this.langSub = this.languageService.language$.subscribe(lang => {
      this.currentLanguage = lang;
    });
  }

  ngOnDestroy(): void {
    if (this.langSub) {
      this.langSub.unsubscribe();
    }
  }

  toggleLanguage(): void {
    this.languageService.toggleLanguage();
  }

  goBack(): void {
    this.sceneControlService.requestCameraReset();
  }
}