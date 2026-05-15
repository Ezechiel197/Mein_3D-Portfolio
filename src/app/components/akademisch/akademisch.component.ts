import { Component, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Subscription } from 'rxjs';
import { Language, LanguageService } from '../../language.service';
import { SceneControlService } from '../../scene-control.service';

@Component({
  selector: 'app-akademisch',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './akademisch.component.html',
  styleUrls: ['./akademisch.component.css']
})
export class AkademischComponent implements OnInit, OnDestroy {

  currentLanguage: Language = 'de';
  private langSub!: Subscription;

  academicData = {
    de: {
      title: 'Akademische Laufbahn',
      timeline: [
        {
          degree: ' Master of Science: Elektrotechnik mit der Vertiefung in Robotik und Automation',
          institution: 'Technische Hochschule Mittelhessen (THM)',
          date: "Okt 2025 - Heute" ,
          description: 'Praxisnahes Studium mit Fokus auf Software-Engineering, Embedded-System-Programmierung, Regelungstechnik mit MATLAB/Simulink, Automatisierungstechnik und Datenverarbeitung.'
        },
        {
          degree: 'Bachelor of Science: Physik und Technologie für Raumfahrtanwendungen',
          institution: 'Justus-Liebig-Universität Gießen — JLU ',
          date: 'Okt 2021 - Jun 2025',
          description: 'Kernbereiche umfassen die Elektrotechnik, Systemtheorie und Regelungstechnik sowie spezialisierte Tutorien zur Raumfahrttechnologie.'
        },
        {
          degree: 'Deutsch-Sprachkurs (A1-C1) mit Telc-C1-Zertifikat',
          institution: 'Mariaspring in Claustahl',
          date: 'Sep 2019 - Aug 2021',
          description: 'Intensivkurs zur Erlangung der sprachlichen Hochschulzugangsberechtigung für Deutschland.'
        },
        {
          degree: 'Allgemeine Hochschulreife (Abitur)',
          institution: 'Kolleg Anguissa - Jaunde',
          date: 'Sep 2003 - Aug 2019',
          description: 'Abschluss mit Leistungskursen in Mathematik, Physik und Informatik als solide Grundlage für ein Ingenieurstudium.'
        }
      ]
    },
    en: {
      title: 'Education',
      timeline: [
        {
          degree: ' Master of Science: Electrical Engineering with a specialization in Robotics and Automation',
          institution: 'Technische Hochschule Mittelhessen (THM)',
          date: "Okt 2025 - today" ,
          description: 'Practice-oriented studies with a focus on software engineering, embedded systems programming, control engineering using MATLAB/Simulink, automation technology, and data processing. '
        },
        {
          degree: 'Bachelor of Science: Aerospace Physics and Technology',
          institution: 'Justus-Liebig-Universität Gießen — JLU ',
          date: 'Okt 2021 - Jun 2025',
          description: 'Key areas of expertise include electrical engineering, systems theory, and control engineering, complemented by specialized space technology modules.'
        },
        {
          degree: 'German Language Course (A1-C1) with Telc-C1 Certificate',
          institution: 'Mariaspring - Claustahl',
          date: 'Sep 2019 - Aug 2021',
          description: 'Intensive course to obtain the language proficiency required for university admission in Germany.'
        },
        {
          degree: 'General University Entrance Qualification (Abitur)',
          institution: 'Kolleg Anguissa - Jaunde',
          date: 'Sep 2003 - Aug 2019',
          description: 'Graduated with advanced courses in Mathematics, Physics, and Computer Science, providing a strong foundation for engineering studies.'
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
