import { Injectable, Output, EventEmitter } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService{
  constructor() {
    this.aboutMeDataLoad();
    this.experienceDataLoad();
    this.projectDataLoad();
    this.skillsDataLoad();
   }
  logData: boolean[] = JSON.parse(sessionStorage.getItem('log')!) || [false];
  aboutMeData: string[] = [];
  bannerData: string =  '/assets/images/banner.avif';
  experienceData :  [string, string, string[][], string[][]] = ['','',[],[]];
  projectData: string[][] = []
  skillsData: [string, string[][]] = ['', []]

  logDataSave(state:boolean):void {
    this.logData = [state];
    sessionStorage.setItem('log', JSON.stringify(this.logData));
  }

  aboutMeDataLoad():void{
    this.aboutMeData = JSON.parse(localStorage.getItem('aboutMe')!) || ['Facundo Del VIgo', 'Ciudad de Formosa, Argentina.', 'Acerca De', 'Estudiante de desarrollo web','../../../assets/images/profile.jpg'] || JSON.parse(localStorage.getItem('aboutMe')|| '');
  }

  experienceDataLoad():void{
    let experienceArr: [string, string[][]] = JSON.parse(localStorage.getItem('experience')!) || ['Experiencia', [['Argentina Programa.', '(2022-2023)']]];
    let educationArr: [string, string[][]] = JSON.parse(localStorage.getItem('education')!) || ['Educacion', [['Abogacia - Univesidad Nacional de Rosario.', '(2022-2023)'], ['Bachiller en Economia y Finanzas - Instituto Privado General San Martin (Formosa).', '(2008-2014)']]]
    this.experienceData = [experienceArr[0], educationArr[0], experienceArr[1], educationArr[1]];
  }

  projectDataLoad():void {
    this.projectData = [JSON.parse(localStorage.getItem('project1')!) || ['/assets/images/portfolio.png',
    'Portfolio Personal',
    'Portolio personal que incluye informacion personal, habilidades, experiencia, educacion y una recopilacion de los proyectos de apliaciones web propias.',
    '#'],
    JSON.parse(localStorage.getItem('project2')!) ||  ['/assets/images/stocker.png',
    'Simulador de Stock',
    'SPA de un simulador de stock simple aplicando conocimientos de HTML CSS Y Javascript.',
    '#']];
  }

  skillsDataLoad():void {
    this.skillsData = JSON.parse(localStorage.getItem('skills')!) || ['Soft and Hard Skills',
    [['Trabajo en Equipo', '50%'], [`Ingles`, '90%'], ['Solucion de Problemas', '75%'],]];
  }

  aboutSave():void{
    localStorage.setItem('aboutMe',JSON.stringify(this.aboutMeData));
  }


  experienceSave():void{
    let experienceArr: [string, string[][]] = [this.experienceData[0], this.experienceData[2]]
    localStorage.setItem('experience',JSON.stringify(experienceArr));
  }

  educationSave():void{
    let educationArr: [string, string[][]] = [this.experienceData[1], this.experienceData[3]]
    localStorage.setItem('education',JSON.stringify(educationArr));
  }

  project1Save():void{
    let project1Arr: string[] = this.projectData[0];
    localStorage.setItem('project1',JSON.stringify(project1Arr));
  }

  project2Save():void{
    let project2Arr: string[] = this.projectData[1];
    localStorage.setItem('project2',JSON.stringify(project2Arr));
  }


  skillsSave():void{
    localStorage.setItem('skills',JSON.stringify(this.skillsData));
  }

  aboutClear():void {
    localStorage.removeItem('aboutMe');
    this.aboutMeDataLoad();
    this.aboutReload.emit(this.aboutMeData);
  }

  educationClear():void {
    localStorage.removeItem('education');
    this.experienceDataLoad();
    this.experienceReload.emit(this.experienceData);
  }

  experienceClear():void {
    localStorage.removeItem('experience');
    this.experienceDataLoad();
    this.experienceReload.emit(this.experienceData);
  }


  project1Clear():void {
    localStorage.removeItem('project1');
    this.projectDataLoad();
    this.projectReload.emit(this.projectData);
  }

  project2Clear():void {
    localStorage.removeItem('project2');
    this.projectDataLoad();
    this.projectReload.emit(this.projectData);
  }

  skillsClear():void {
    localStorage.removeItem('skills');
    this.skillsDataLoad();
    this.skillsReload.emit(this.skillsData);
  }

  @Output() aboutReload = new EventEmitter<string[]>();
  @Output() experienceReload = new EventEmitter<[string, string, string[][], string[][]]>();
  @Output() projectReload = new EventEmitter<string[][]>();
  @Output() skillsReload = new EventEmitter<[string, string[][]]>();
}