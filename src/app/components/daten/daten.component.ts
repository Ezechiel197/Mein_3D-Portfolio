import { Component, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Subscription } from 'rxjs';
import { Language, LanguageService } from '../../language.service';
import { SceneControlService } from '../../scene-control.service';

@Component({
  selector: 'app-daten',
  standalone: true,
  imports: [CommonModule], 
  templateUrl: './daten.component.html',
  styleUrl: './daten.component.css'
})
export class DatenComponent implements OnInit, OnDestroy {
  
  currentLanguage: Language = 'de';
  private langSub!: Subscription;

  contactData = {
    de: {
      title: 'Kontaktdaten',
      items: [
        { icon: '📧', text: 'Email', value: 'ezechiel146@gmail.com',href: 'mailto:ezechiel146@gmail.com' },
        { icon: '📞', text: 'Telefon', value: '+49 157 53673269',href: 'tel:+4915753673269' },
        { icon: '📍', text: 'Standort', value: 'Gießen, Deutschland' },
        { icon: '🚗', text: 'Führerschein', value: 'Klasse B' },
        { icon: '🌐', text: 'GitHub', value: 'Mein Profil', href: 'https://github.com/Ezechiel197' }
      ]
    },
    en: {
      title: 'Contact Data',
      items: [
        { icon: '📧', text: 'Email', value: 'ezechiel146@gmail.com',href: 'mailto:ezechiel146@gmail.com' },
        { icon: '📞', text: 'Phone', value: '+49 157 53673269',href: 'tel:+4915753673269' },
        { icon: '📍', text: 'Location', value: 'Gießen, Germany' },
        { icon: '🚗', text: 'Driving License', value: 'Class B' },
        { icon: '🌐', text: 'GitHub', value: 'My profil', href: 'https://github.com/Ezechiel197' }
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