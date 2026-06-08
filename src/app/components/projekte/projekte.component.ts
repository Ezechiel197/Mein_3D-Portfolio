import { Component, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Subscription } from 'rxjs';
import { Language, LanguageService } from '../../language.service';
import { SceneControlService } from '../../scene-control.service';
import { GithubService, GithubRepo } from '../../github.service';

interface Project {
  name: string;
  description: string;
  tags: string[];
  link?: string;
  updated_at?: string;
}

@Component({
  selector: 'app-projekte',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './projekte.component.html',
  styleUrls: ['./projekte.component.css']
})
export class ProjekteComponent implements OnInit, OnDestroy {

  currentLanguage: Language = 'de';
  private langSub!: Subscription;

  projectsData: { [key in Language]: { title: string, projects: Project[] } } = {
    de: {
      title: 'Ausgewählte Projekte',
      projects: [
        {
          name: 'RTOS_Kernel_STM32',
          description: 'Dieses Projekt implementiert einen funktionalen Echtzeit-Kernel auf einem STM32L4-Mikrocontroller. Der Kernel nutzt ein präemptives Round-Robin-Scheduling-Verfahren mit konfigurierbaren Zeitscheiben (Time-Slicing). Er verwaltet Task-Zustände (Running, Ready, Blocked) und stellt eine präzise zeitliche Steuerung über einen dedizierten SysTick-Timer-Handler bereit. Wenn kein Anwendertask bereit ist, übernimmt automatisch ein vordefinierter Idle-Task die CPU-Kontrolle, um einen stabilen Systemzustand zu gewährleisten.',
          tags: [ 'C']
        },
        {
          name: 'Mein 3D-Portfolio',
          description: 'Dieses interaktive 3D-Portfolio stellt eine innovative Verschmelzung moderner Webtechnologien dar, bei der ein robustes Angular-Frontend mit der grafischen Leistungsfähigkeit von Three.js (WebGL) kombiniert wird. Anstelle eines klassischen Lebenslaufs bietet das Projekt eine dynamische, stilisiert generierte nächtliche Bahnhofsszene, die vollständig interaktiv erkundet werden kann. Zu den technischen Highlights gehören eine benutzerdefinierte Maussteuerung, ein dynamisches Laden von Inhalten beim Klick auf interaktive Schilder sowie eine innovative Angular-zu-Three.js-Schnittstelle, die Angular-Komponenten via html2canvas als Texturen auf 3D-Objekten rendert. Ergänzt durch Server-Side Rendering (SSR) für optimierte Ladezeiten und SEO sowie eine detailreiche Umgebung mit animierten Elementen und atmosphärischer Beleuchtung, demonstriert das Projekt tiefgehendes Know-how im Bereich der kreativen Frontendentwicklung und modernen Webarchitektur.',
          tags: [ 'JavaScript', 'HTML','Angular']
        },
        {
          name: 'Intelligentes Druckregelsystem mit Raspberry Pi Pico',
          description: 'Dieses Projekt umfasst die Entwicklung eines präzisen Mess- und Steuerungssystems für Gasdrucktests (z. B. Kaltgastriebwerke). Durch die Nutzung beider Kerne des RP2040 wird eine latenzfreie Modbus-RTU-Kommunikation bei gleichzeitiger Sicherheitsüberwachung gewährleistet. Zu den Highlights zählen eine energiesparende "Kick-and-Hold"-Ventilsteuerung per PWM, eine Hysterese-Regelung zur Schonung der Hardware sowie ein integrierter Watchdog-Failsafe-Mechanismus für maximale Betriebssicherheit. Die Visualisierung erfolgt über ein maßgeschneidertes PySide6-Dashboard.',
          tags: [ 'Embedded C', 'Synthesizer', 'Timers', 'Interrupts', 'Drucksensor']
        },
        {
          name: 'STM32-basierte Aufzugssteuerung (MCU)',
          description: 'Entwicklung der zentralen Steuerungseinheit für eine Aufzugssimulation auf Basis eines STM32-Mikrocontrollers. Das System koordiniert in Echtzeit Etagenrufe, Kabinenbewegung und Türzustände mittels einer eventgesteuerten Architektur. Die Kommunikation mit Sensoren und Aktoren erfolgt über ein selbst implementiertes Modbus-RTU-Protokoll, während eine UART-Schnittstelle die Anbindung an eine PC-Visualisierung ermöglicht. Ein integriertes Terminal-Interface erlaubt zudem die dynamische Konfiguration von Systemparametern im laufenden Betrieb.',
          tags: [ 'Embedded C', 'PWM', 'USART', 'Serial']
        },
        {
          name: 'Modellbasierte Aufzugssteuerung | MATLAB, Simulink & Stateflow',
          description: 'In diesem Projekt wurde der vollständige Entwicklungszyklus einer 3-Etagen-Aufzugssteuerung abgebildet. Das System kombiniert die physikalische Modellierung der Kabinendynamik in Simulink mit einer komplexen, ereignisdiskreten Zustandslogik in Stateflow. Über eine maßgeschneiderte MATLAB-App (GUI) können Nutzer Hall- und Kabinenrufe tätigen, die in Echtzeit verarbeitet werden. Besondere Highlights sind die intelligente Priorisierung von Etagenrufen zur Wegeoptimierung sowie die Implementierung einer Sicherheitslogik mittels virtueller Endschalter.',
          tags: ['MATLAB', 'Simulink', 'Stateflow']
        },
        {
          name: 'Simulation einer industriellen Mischanlage | CODESYS',
          description: 'Entwicklung einer vollautomatisierten Mischanlage inklusive Prozesssimulation und HMI-Visualisierung. Die Steuerung basiert auf einer Zustandsmaschine (State Machine), die in Strukturierter Text (ST) umgesetzt wurde, während die physikalische Simulation von Füllstand und Temperatur mittels Funktionsplan (FUP) erfolgt. Das System umfasst einen sequenziellen Prozess (Befüllen, Heizen, Mischen, Entleeren) sowie eine sicherheitskritische Not-Aus-Logik. Die Bedienung und Überwachung erfolgt über eine integrierte Visualisierung mit Echtzeit-Statusanzeigen.',
          tags: ['CODESYS', 'TIA-Portal']
        },
    
        {
          name: 'Regelung mechatronischer Mehrgroessensysteme',
          description: 'Nutzung des eingebauten 12-Bit-Analog-Digital-Wandlers (ADC) des AVR, um eine anliegende Spannung zu messen. Das Ergebnis wurde in Volt und als Prozentsatz umgerechnet und auf einem LCD-Display flimmerfrei (nur bei Wertänderung) angezeigt.',
          tags: [ 'MATLAB', 'Simulink']
        },
        {
          name: 'Regelung eines elektromagnetischen Systems',
          description: '1. Elektromagnetisches Schwebesystem: Stabilisierung einer Metallkugel im Magnetfeld durch nichtlineare Modellierung und präzise Stromsteuerung unter strikten Stellgrößenbeschränkungen. \n\t 2. Ball-on-Beam System: Positionsregelung einer Kugel auf einer schwenkbaren Schiene. Dies beinhaltete die Linearisierung der Systemdynamik sowie den Entwurf von Zustandsreglern und Beobachtern, um anspruchsvolle Anforderungen an das Überschwingverhalten (< 1%) und die Stabilität zu erfüllen.',
          tags: ['MATLAB', 'Simulink']
        },
        {
          name: 'Automatisierte Logo-Zeichnung mit ABB Industrierobotern (RAPID)',
          description: 'Entwicklung eines dynamischen Steuerungsprogramms in der Programmiersprache RAPID für einen ABB-Roboter (z. B. IRB 120). Das System zeichnet das THM-Logo basierend auf Benutzereingaben für Skalierung und Farbe. Ein besonderes technisches Highlight ist die integrierte Binärkodierung von Fachbereichsnummern direkt in die Grafik. Die Implementierung umfasst zudem ein automatisiertes Tool-Handling (Stiftwechsel) mit präzise kalibrierten Tool Center Points (TCP) sowie effiziente Schraffur-Algorithmen zur Flächenfüllung.',
          tags: ['RAPID']
        },
        {
          name: 'Datenerfassung und Analyse mit dem Red-Pitaya',
          description: 'Entwicklung eines spezialisierten Python-Tools zur Analyse und Darstellung von radioaktiven Zerfallsdaten, optimiert für Natrium-22 (Na-22) Histogramme. Das Skript ermöglicht eine duale Achsen-Visualisierung, um Hardware-Spannungswerte direkt mit physikalischen Energieniveaus (keV) zu korrelieren. Durch den Einsatz von pandas und matplotlib bietet das Tool eine robuste Datenverarbeitung (CSV) sowie publikationsreife Grafiken für die wissenschaftliche Auswertung der Spektroskopie-Messungen.',
          tags: ['C/C++', 'Python']
        },
        {
          name: 'MVC-basierter Schaltkreis-Simulator fuer elektrische Filter',
          description: 'Entwicklung eines Visualisierungstools zur Analyse von Einschwingvorgängen und Glättungseffekten in elektrischen Netzwerken (L, RC, LC-Filter). Die Software basiert auf dem MVC-Entwurfsmuster und nutzt einen numerischen Solver für die zugrunde liegenden Differentialgleichungen. Zu den technischen Highlights zählen eine flimmerfreie Grafik-Engine mittels nativer Win32-GDI-Programmierung, ein dynamisches Koordinatensystem sowie ein striktes Speichermanagement (Rule of Three), um maximale Performance und Stabilität zu gewährleisten',
          tags: ['C/C++']
        },
        
      ]
    },
    en: {
      title: 'Featured Projects',
      projects: [
        {
          name: 'RTOS_Kernel_STM32',
          description: 'This repository contains a lightweight, custom preemptive Real-Time Operating System (RTOS) kernel tailored for ARM Cortex-M4 microcontrollers (STM32L4xx). The operating system implements a preemptive Round-Robin scheduling algorithm with configurable time slices. It handles distinct task states (Running, Ready, Blocked) and provides deterministic delay tracking via the SysTick timer. An integrated Idle task guarantees continuous and safe CPU execution even when all user application tasks are currently blocked.',
          tags: [ 'C']
        },
        {
          name: 'Mein 3D-Portfolio',
          description: 'This interactive 3D portfolio represents an innovative fusion of modern web technologies, combining a robust Angular frontend with the graphical capabilities of Three.js (WebGL). Instead of a traditional resume, the project features a dynamic, procedurally generated night train station scene that allows for fully interactive exploration. Technical highlights include custom mouse controls, dynamic content loading via interactive signs, and an innovative Angular-to-Three.js bridge that renders Angular components onto 3D objects as textures using html2canvas. Supported by Server-Side Rendering (SSR) for optimized loading performance and SEO, as well as a highly detailed environment with animated elements and atmospheric lighting, this project demonstrates deep expertise in creative frontend development and modern web architecture.',
          tags: [ 'JavaScript', 'HTML','Angular']
        },
        {
          name: 'Intelligentes Druckregelsystem mit Raspberry Pi Pico',
          description: 'This project focuses on a high-precision measurement and control system for testing environments like cold gas thrusters. Utilizing the RP2040  dual-core architecture, it separates high-speed Modbus RTU communication from safety-critical regulation logic. Key innovations include energy-efficient "Kick-and-Hold" PWM valve control, hysteresis-based regulation to prevent hardware wear, and a robust failsafe watchdog mechanism. The system features a custom-built PySide6 dashboard for real-time data visualization and monitoring.',
          tags: ['AVR', 'Embedded C', 'Synthesizer', 'Timers', 'Interrupts',]
        },
        {
          name: 'STM32-basierte Aufzugssteuerung (MCU)',
          description: 'Firmware development for the central control unit of an elevator simulation using an STM32 microcontroller. The system manages real-time floor requests, motion control, and door states through an efficient event-driven architecture. Key technical features include a custom Modbus RTU implementation for peripheral communication and a UART-based link for PC visualization. An integrated terminal interface enables real-time parameter configuration, showcasing advanced skills in Embedded C and industrial protocols.',
          tags: [ 'Embedded C', 'PWM', 'USART', 'Serial']
        },
        {
          name: 'Modellbasierte Aufzugssteuerung | MATLAB, Simulink & Stateflow',
          description: 'This project demonstrates the full development cycle of a 3-floor elevator control system. It integrates physical cabin dynamics modeled in Simulink with complex discrete-event state logic designed in Stateflow. A custom-built MATLAB GUI serves as the human-machine interface, allowing real-time interaction through hall and car station buttons via set_param commands. Key features include an intelligent request prioritization queue for efficient pathfinding and robust safety logic utilizing virtual limit switches to ensure operational boundaries.',
          tags: ['MATLAB', 'Simulink', 'Stateflow']
        },
        {
          name: 'Simulation einer industriellen Mischanlage | CODESYS',
          description: 'Design and implementation of a fully automated mixing plant featuring a comprehensive process simulation and HMI. The core control logic is developed in Structured Text (ST) using a robust state machine, while the physical simulation of analog values (fill level, temperature) is handled via Function Block Diagrams (FBD). The project covers the entire sequence from component filling to thermal processing and includes an integrated Emergency Stop (E-Stop) safety function. Real-time monitoring and control are facilitated through a custom-built CODESYS visualization',
          tags: ['CODESYS', 'TIA-Portal']
        },
        {
          name: 'Regelung mechatronischer Mehrgroessensysteme',
          description: ' This project focuses on the modeling and controller design for complex mechatronic systems. The first part addresses the static and dynamic decoupling of a multi-input multi-output (MIMO) handling device to eliminate cross-axis interference. The second part involves the stabilization of an unstable inverted pendulum using discrete-time state-space control. By applying pole placement techniques, the system was stabilized to meet specific dynamic requirements. The design accounts for fixed sampling rates, ensuring the controller is optimized for implementation on real-world microcontrollers.',
          tags: ['MATLAB', 'Simulink', 'Stateflow']
        },
        {
          name: 'Regelung eines elektromagnetischen Systems',
          description: "1. Electromagnetic Levitation System: Stabilizing a metal sphere in a magnetic field. Tasks included non-linear differential equation modeling and implementing current-limited control logic to maintain a stable hover position. \n\t 2. Ball-on-Beam System: egulating a ball's position on a tilting track via servo-actuation. The project involved system linearization at the operating point and the design of state-space controllers and observers to achieve high precision with minimal overshoot (< 1%) and strict command limits.",
          tags: ['MATLAB', 'Simulink']
        },
        {
          name: 'Automatisierte Logo-Zeichnung mit ABB Industrierobotern (RAPID)',
          description: "Development of a dynamic control module in RAPID for an ABB industrial robot (e.g., IRB 120). The program renders the THM logo with user-defined scaling and color selection. A unique technical feature is the binary encoding of department numbers integrated into the drawing's matrix. The implementation covers automated tool handling (pen pickup/return) using calibrated Tool Center Points (TCP) and custom hatching algorithms for surface filling, ensuring a highly flexible and autonomous process.",
          tags: ['RAPID']
        },

        {
          name: 'Datenerfassung und Analyse mit dem Red-Pitaya',
          description: 'Developed a specialized Python-based tool for plotting and analyzing radioactive decay data, specifically tailored for Sodium-22 (Na-22) histograms. The script features a dual-axis visualization to correlate raw hardware voltage readings with physical energy levels (keV). Utilizing pandas and matplotlib, the tool ensures robust CSV data ingestion and generates publication-quality spectroscopy plots, facilitating precise calibration and isotope analysis..',
          tags: ['C/C++', 'Python']
        },
        {
          name: 'MVC-basierter Schaltkreis-Simulator fuer elektrische Filter',
          description: 'Developed a visual analysis tool for transient responses and ripple reduction in electrical networks (L, RC, and LC filters). The project follows a strict MVC architecture, utilizing a numerical ODE solver for circuit dynamics. Key technical features include a custom, flicker-free rendering engine built with the native Win32 GDI, dynamic coordinate scaling, and robust memory management (Rule of Three). The use of polymorphism for control strategies demonstrates advanced software engineering principles applied to electrical engineering problems.',
          tags: ['C/C++']
        }
        
      ]
    }
  };

  constructor(
    public languageService: LanguageService, 
    private sceneControlService: SceneControlService,
    private githubService: GithubService
  ) {}

  ngOnInit(): void {
    this.langSub = this.languageService.language$.subscribe(lang => {
      this.currentLanguage = lang;
    });
    this.loadGithubProjects();
  }

  ngOnDestroy(): void {
    if (this.langSub) {
      this.langSub.unsubscribe();
    }
  }

  private loadGithubProjects(): void {
    this.githubService.getRepositories().subscribe({
      next: (repos) => {
        this.mergeProjects(repos);
      },
      error: (err) => console.error('Failed to load GitHub projects', err)
    });
  }

  private mergeProjects(repos: GithubRepo[]): void {
    (['de', 'en'] as Language[]).forEach(lang => {
      const existingProjects = this.projectsData[lang].projects;
      
      repos.forEach(repo => {
        // Simple name matching (case insensitive, ignoring dashes/spaces)
        const match = existingProjects.find(p => 
          p.name.toLowerCase().replace(/[^a-z0-9]/g, '') === 
          repo.name.toLowerCase().replace(/[^a-z0-9]/g, '')
        );

        if (match) {
          match.link = repo.html_url;
          match.updated_at = repo.updated_at;
        } else {
          // Add as new project
          existingProjects.push({
            name: repo.name,
            description: repo.description,
            tags: repo.topics,
            link: repo.html_url,
            updated_at: repo.updated_at
          });
        }
      });

      // Sort projects: priority to projects with links, then by update date
      this.projectsData[lang].projects.sort((a, b) => {
        if (a.updated_at && b.updated_at) {
          return new Date(b.updated_at).getTime() - new Date(a.updated_at).getTime();
        }
        if (a.updated_at) return -1;
        if (b.updated_at) return 1;
        return 0;
      });
    });
  }

  toggleLanguage(): void {
    this.languageService.toggleLanguage();
  }

  goBack(): void {
    this.sceneControlService.requestCameraReset();
  }

  openProject(link?: string): void {
    if (link) {
      window.open(link, '_blank');
    }
  }
}
