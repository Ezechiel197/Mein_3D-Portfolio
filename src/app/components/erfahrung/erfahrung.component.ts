import { Component, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Subscription } from 'rxjs';
import { Language, LanguageService } from '../../language.service';
import { SceneControlService } from '../../scene-control.service';

@Component({
  selector: 'app-erfahrung',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './erfahrung.component.html',
  styleUrls: ['./erfahrung.component.css']
})
export class ErfahrungComponent implements OnInit, OnDestroy {

  currentLanguage: Language = 'de';
  private langSub!: Subscription;

  experienceData = {
    de: {
      title: 'Berufserfahrung',
      timeline: [
        {
          title: 'Nachhilfe-Dozent',
          company: 'GoStudent',
          location: 'Online',
          date: 'März 2022 - Laufend',
          description: 'Nachhilfedozent für den Fächer Programmierung in C,C++ Mathe, Physik, Elektrotechnik und Französisch'
        },

        {
          title: 'Forschung & Entwicklung im Bereich Embedded Systems',
          company: 'Technische Hochschule Mittelhessen',
          location: 'Gießen, Deutschland',
          date: 'Oktober 2023 - Laufend',
          description: 'Mitarbeit an einem Forschungsprojekt zur Entwicklung eines Microcontroller-basierten Remote-Labors. Meine Aufgaben umfassen die Implementierung, das Testen und die Optimierung von Embedded-Systemen, um eine zuverlässige und performante Fernsteuerung der Laborumgebung zu gewährleisten.'
        },
        {
          title: 'Praktikant',
          company: 'Advanced Space Technologies (AST)',
          location: 'Osterholz-Scharmbeck, Deutschland',
          date: 'März 2024 - Juli 2024',
          description: 'Ganzheitliche Entwicklung eines mobilen Messsystems: Von der Hardware-Integration via RS485 über die Embedded-Linux-Konfiguration bis hin zur Echtzeit-Visualisierung von Sensordaten.'
        },
        {
          title: 'Ferienjob',
          company: 'Mercedes Benz',
          location: 'Deutschland',
          date: 'August 2023 - Oktober 2023',
          description: 'Unterstützung in der Automobilproduktion und Sicherstellung effizienter Abläufe. Erfolgreiche Integration in ein Produktionsteam zur Optimierung von Arbeitsprozessen. Erfahrungen in der Teamarbeit gesammelt und zur Verbesserung der Produktionsprozesse beigetragen'
        }
        
      ]
    },
    en: {
      title: 'Work Experience',
      timeline: [
        {
          title: 'Technical Tutor',
          company: 'GoStudent',
          location: 'Online',
          date: 'March 2022 - Present',
          description: 'Tutor for C/C++ programming, Mathematics, Physics, Electrical Engineering, and French language.'
        },
        {
          title: 'Research & Development in Embedded Systems',
          company: 'THM - University of Applied Sciences',
          location: 'Giessen, Germany',
          date: 'October 2023 - Present',
          description: 'Contributing to a research project focused on developing a microcontroller-based remote laboratory. My responsibilities include implementing, testing, and optimizing embedded systems to ensure reliable and high-performance remote control of the lab environment.'
        },
        {
          title: 'Engineering Intern',
          company: 'Advanced Space Technologies (AST)',
          location: 'Osterholz-Scharmbeck, Germany',
          date: 'March 2024 - July 2024',
          description: 'End-to-end development of a mobile measurement system: From hardware integration via RS485 and embedded Linux configuration to real-time sensor data visualization.'
        },
        {
          title: 'Summer Job',
          company: 'Mercedes-Benz',
          location: 'Germany',
          date: 'August 2023 - October 2023',
          description: 'Supported automotive production and ensured efficient workflows. Successfully integrated into a production team to optimize work processes. Gained hands-on experience in teamwork and contributed to the enhancement of manufacturing operations.'
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