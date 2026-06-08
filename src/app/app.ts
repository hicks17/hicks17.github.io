import { Component, signal, HostBinding, effect, computed } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { CommonModule } from '@angular/common';
import { MatCard, MatCardContent, MatCardFooter, MatCardHeader, MatCardTitle } from '@angular/material/card';
import { MatChip, MatChipSet, MatChipsModule } from '@angular/material/chips';
import { ExperienceCardComponent } from './components/experience-card/experience-card.component';
import { WorkExperience } from './models/work-experience.model';
import { Project } from './models/project.model';
import { MatDivider } from '@angular/material/list';

@Component({
  selector: 'app-root',
  imports: [
    RouterOutlet,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatButtonToggleModule,
    CommonModule,
    MatCard,
    MatCardHeader,
    MatCardTitle,
    MatCardContent,
    MatCardFooter,
    MatChipsModule,
    ExperienceCardComponent,
    MatDivider,
  ],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  protected readonly title = signal('DevPortfolio');

  experiencesEsp = signal<WorkExperience[]>([
    {
      title: 'Desarrollador Móvil',
      company: 'Suma Te Lleva',
      period: 'Jul 2025 - presente',
      location: 'Zapopan, México',
      descriptions: [
        'Desarrollo completo de una aplicación para pasajeros (Ionic, Angular, Capacitor). Incluyó el diseño de UI, definición de arquitectura por features y publicación en App Store y Google Play.',
        'Implementación de geolocalización en tiempo real en mapas y notificaciones push para el monitoreo de proximidad de unidades.',
        'Mantenimiento y desarrollo de nuevas funcionalidades para la aplicación de choferes, integrando capacidades nativas del dispositivo como cámara, GPS y escáner QR.',
        'Desarrollo de módulos para el ERP interno de la empresa utilizando React.',
        'Construcción de servicios backend con Express.js y diseño de tablas en SQL Server, dando soporte a las múltiples apps.',
      ],
    },
    {
      title: 'Practicante en Desarrollo Móvil',
      company: 'Grupo STI',
      period: 'Ene 2025 - Jun 2025',
      location: 'Mazatlán, Mexico',
      descriptions: [
        'Mantenimiento y despliegue de nuevas versiones en tiendas de una aplicación de retail de accesorios deportivos con más de 500,000 usuarios (Ionic legacy y Cordova).',
        'Desarrollo desde cero de una aplicación para la gestión de eventos utilizando Capacitor.',
      ],
    },
  ]);

  experiencesEng = signal<WorkExperience[]>([
    {
      title: 'Mobile Developer',
      company: 'Suma Te Lleva',
      period: 'Jul 2025 - now',
      location: 'Zapopan, Mexico',
      descriptions: [
        'End-to-end development of a passenger application (Ionic, Angular, Capacitor). Included UI design, feature-based architecture definition, and publication on the App Store and Google Play.',
        'Implemented real-time geolocation tracking on maps and push notifications for vehicle proximity monitoring.',
        'Maintained and developed new features for the driver application (Ionic, Angular, Capacitor), integrating native device capabilities such as camera, GPS, and ML kit.',
        'Developed internal ERP modules using React.',
        'Built backend services with Express.js and designed SQL Server database tables',
      ],
    },
    {
      title: 'Mobile Developer Intern',
      company: 'Grupo STI',
      period: 'Ene 2025 - Jun 2025',
      location: 'Mazatlán, Mexico',
      descriptions: [
        'Maintained and released new store versions for a sports retail application with over 500,000 users (Legacy Ionic and Cordova).',
        'Developed an event management application from scratch using Capacitor.',
      ],
    },
  ]);

  projects = signal<Project[]>([
    {
      title: 'Red Ibai Sinaloa',
      descriptionEn:
        'A comprehensive system for a university including a landing page for prospective students, promotion, and panels for teachers, students, and directors. I was in charge of the entire freelance project over 3 months.',
      descriptionEs:
        'Un sistema completo para una universidad que incluye landing page para aspirantes y promoción, y paneles para maestros, alumnos y director. Me encargué de todo el proyecto como freelance durante 3 meses.',
      image: 'assets/images/redibae.png',
      webUrl: 'https://www.redibaesinaloa.com/',
      technologies: ['Angular', 'Firebase', 'Hostinger'],
    },
    {
      title: 'Recipebook: mi recetario',
      descriptionEn:
        'An app to create, save and search recipes online. Save your own recipes locally or download from thousands of online recipes. 100% Jetpack Compose design.',
      descriptionEs:
        'Una app para crear, guardar y buscar recetas en línea. Guarda localmente tus propias recetas o descarga de entre miles de recetas online. Diseño 100% en Jetpack Compose.',
      image: 'assets/images/recipebook.png',
      playStoreUrl:
        'https://play.google.com/store/apps/details?id=js.apps.recipesapp&pcampaignid=web_share',
      githubUrl: 'https://github.com/hicks17/MyRecipebook.git',
      technologies: [
        'Kotlin',
        'Jetpack Compose',
        'MVVM',
        'Dagger Hilt',
        'Retrofit',
        'Room',
        'Google Play Billing',
      ],
    },
    {
      title: 'Guess The Value',
      descriptionEn: 'A football game that consist in guessing the value of a player',
      descriptionEs: 'Un juego de fútbol que consiste en adivinar el valor de un jugador.',
      image: 'assets/images/guessthevalue.png',
      playStoreUrl:
        'https://play.google.com/store/apps/details?id=js.apps.guessthevalue&pcampaignid=web_share',
      githubUrl: 'https://github.com/hicks17/GuessTV.git',
      technologies: ['Room', 'Dagger Hilt', 'Coroutines', 'MVVM'],
    },
    {
      title: 'Geo Quiz Mx',
      descriptionEn: 'A quiz of geography in Mexico and the world, with a global ranking of scores',
      descriptionEs: 'Un quiz de geografía en México y el mundo, con un ranking de puntajes global',
      image: 'assets/images/geoquiz.png',
      playStoreUrl:
        'https://play.google.com/store/apps/details?id=app.geoquiz.geoquizmx&pcampaignid=web_share',
      githubUrl: 'https://github.com/hicks17/GeoQuizMX.git',
      technologies: [
        'Room',
        'Dagger Hilt',
        'Coroutines',
        'MVVM',
        'Realtime Database',
        'Google Play Billing',
      ],
    },
  ]);

  techStack = signal([
    { name: 'Angular', logo: 'https://angular.io/assets/images/logos/angular/angular.svg' },
    {
      name: 'TypeScript',
      logo: 'https://raw.githubusercontent.com/remojansen/logo.ts/master/ts.png',
    },
    { name: 'Kotlin', logo: 'https://upload.wikimedia.org/wikipedia/commons/7/74/Kotlin_Icon.png' },
    {
      name: 'Express',
      logo: 'https://www.pngfind.com/pngs/m/136-1363736_express-js-icon-png-transparent-png.png',
    },
    {
      name: 'Android',
      logo: 'https://upload.wikimedia.org/wikipedia/commons/d/d7/Android_robot.svg',
    },
    { name: 'Ionic', logo: 'https://avatars.githubusercontent.com/u/3171503?s=200&v=4' },
  ]);

  contactLinks = signal([
    {
      name: 'jc.canedo16@gmail.com',
      url: 'mailto:contact@jc.canedo16@gmail.com',
      icon: 'email',
      isSvg: false,
    },
    {
      name: 'GitHub',
      url: 'https://github.com/hicks17',
      icon: 'https://cdn-icons-png.flaticon.com/512/25/25231.png',
      isSvg: true,
    },
    {
      name: 'LinkedIn',
      url: 'https://linkedin.com/in/jc-canedo-android',
      icon: 'https://cdn-icons-png.flaticon.com/512/145/145807.png',
      isSvg: true,
    },
  ]);

  isDarkTheme = signal(window.matchMedia('(prefers-color-scheme: dark)').matches);
  language = signal<'en' | 'es'>('en');
  aboutMeText = computed(() => {
    if (this.language() === 'en') {
      return (
        "My name is José Carlos, and I'm a Software Engineer from the Universidad Autónoma de Occidente with experience in web and mobile development. " +
        "I specialize in native Android and cross-platform development using the Ionic Framework and Angular. Since the beginning of my studies, I've been interested in learning how to create Android apps. Since 2023, " +
        "I've released four native apps on the Play Store and created a couple more for school projects, applying all the technologies recommended by Google and commonly used in the industry, such as Jetpack Compose, MVVM, Room, " +
        'Dagger Hilt, Retrofit, Coroutines, and threads. Currently, I work developing hybrid apps with the Ionic Framework and Angular. I handle the visual and architectural design of the projects and their publication to the app stores' +
        ' (Play Store and App Store), as well as backend development and API creation using Express.\n'
      );
    }

    return (
      'Soy José Carlos, un Ingeniero en Software de la Universidad Autónoma de Occidente con experiencia en desarrollo web y móvil, ' +
      'sin embargo me especializo en el desarrollo nativo Android y multiplataforma con Ionic Framework con Angular. ' +
      'Desde el inicio de la carrera me ha interesado aprender a crear apps con Android. Desde 2023 he lanzado 4 apps nativas a la Play Store y he creado un par más por proyectos escolares, en los que he aplicado todas las tecnologías recomendadas por Google y principalmente utilizadas en la industria, ' +
      'tales como Jetpack Compose, MVVM, Room, Dagger Hilt, Retrofit, Corrutinas e hilos, etc. Actualmente trabajo desarrollando apps híbridas con Ionic Framework y Angular. Me encargo del diseño visual y arquitectónico de los proyectos y de su publicación a las tiendas (Play Store y App Store), así como el desarrolo del backend y creación de APIs mediante Express '
    );
  });
  @HostBinding('class.dark-theme') get themeClass() {
    return this.isDarkTheme();
  }

  constructor() {
    const darkModeMediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    darkModeMediaQuery.addEventListener('change', (e) => {
      this.isDarkTheme.set(e.matches);
    });

    effect(() => {
      const mode = this.isDarkTheme() ? 'dark' : 'light';
      document.body.style.colorScheme = mode;
      if (this.isDarkTheme()) {
        document.body.classList.add('dark-theme');
      } else {
        document.body.classList.remove('dark-theme');
      }
    });
  }

  toggleTheme() {
    this.isDarkTheme.update((v) => !v);
  }

  changeLanguage(lang: 'en' | 'es') {
    this.language.set(lang);
  }

  downloadCV() {
    const fileName = this.language() === 'en' ? 'cv-en.pdf' : 'cv-es.pdf';
    const filePath = `assets/docs/${fileName}`;

    const link = document.createElement('a');
    link.href = filePath;
    link.download = fileName;
    link.target = '_blank';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }
}
