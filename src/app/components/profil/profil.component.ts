import { Component, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Subscription } from 'rxjs';
import { Language, LanguageService } from '../../language.service';
import { SceneControlService } from '../../scene-control.service';

@Component({
  selector: 'app-profil',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './profil.component.html',
  styleUrls: ['./profil.component.css']
})
export class ProfilComponent implements OnInit, OnDestroy {
  
  currentLanguage: Language = 'de';
  private langSub!: Subscription;

  profileData = {
    de: {
      title: 'Profil',
      greeting: 'Hallo! Ich bin Ezechiel Tonkeme.',
      bio: `Ich bin ein angehender Ingenieur im Masterstudium mit der Vertiefung 
            Robotik und Automation. Mein technischer Schwerpunkt liegt auf der Ent
            wicklung eingebetteter Systeme, der Regelungstechnik sowie der industriellen
             Automatisierung. Ich verfüge über umfassende praktische Erfahrung 
            in der Programmierung mit C/C++, Python und MATLAB/Simulink sowie 
            in der Mikrocontrollerprogrammierung und der Entwicklung von Echtzeit
            systemen unter Verwendung von Feldbussystemen wie EtherCAT, PROFI
            NET und Modbus. Ergänzend hierzu besitze ich fundierte Kenntnisse in der 
            Schaltungssimulation mit LTSpice und PLECS sowie in der 3D-CAD-Konstruktion
           und Simulation mit AutoCAD, SolidWorks und ADAMS. Neben 
            der Arbeit mit ABB-Industrierobotern und anspruchsvollen Projekten in 
            der Signalverarbeitung und Datenkompression konnte ich meine Teamfähigkeit
           bereits in der Automobilproduktion bei Mercedes-Benz sowie als 
            Dozent für technische Fächer unter Beweis stellen.`,
      highlights: [
        { icon: '💻', text: 'Fundierte Kenntnisse in <strong>C/C++</strong> und <strong>SPS-Programmierung</strong> für robuste Softwarelösungen.' },
        { icon: '🔧', text: 'Erfahrung mit <strong>Git</strong>, <strong>Docker</strong> und agilen Methoden für eine effiziente Entwicklung.' },
        { icon: '🔌', text: 'Kenntnisse in <strong>IoT</strong>,UART,I²C, SPI und Sensorintegration für IoT-Anwendungen.' },
        { icon: '🌍', text: 'Teamfähig und motiviert, in einem <strong>internationalen Umfeld</strong> zu wachsen.' }
      ]
    },
    en: {
      title: 'Profile',
      greeting: "Hello! I'm Ezechiel Tonkeme.",
      bio: ` I am a graduate engineer currently pursuing a Masters degree with a specialization in Robotics and Automation. My technical focus lies in embedded systems development, control engineering, and industrial automation. I have extensive hands-on experience in programming with C/C++, Python, and MATLAB/Simulink, as well as in microcontroller programming and real-time systems utilizing fieldbus protocols such as EtherCAT, PROFINET, and Modbus.

        Furthermore, I possess sound knowledge in circuit simulation using LTSpice and PLECS, as well as in 3D CAD design and simulation with AutoCAD, SolidWorks, and ADAMS. In addition to my work with ABB industrial robots and complex projects in signal processing and data compression, I have proven my ability to work effectively in teams within the automotive production environment at Mercedes-Benz and through my experience as a lecturer for technical subjects`,
      highlights: [
        { icon: '💻', text: 'Profound knowledge in <strong>C/C++</strong> and <strong>SPS-Programmcode</strong> for robust software solutions.' },
        { icon: '🔧', text: 'Experience with <strong>Git</strong>, <strong>Docker</strong>, and agile methodologies for efficient development.' },
        { icon: '🔌', text: 'Knowledge in <strong>IoT</strong>, UART, I²C, SPI, and sensor integration .' },
        { icon: '🌍', text: 'A team player, motivated to grow in an <strong>international environment</strong>.' }
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
