import { HttpClient } from '@angular/common/http';
import { Injectable, Output, EventEmitter} from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  constructor(private http: HttpClient) {
  }

  /*                                               Contenedores de informacion.
   Decidi utilizar Arrays porque me parecio la forma mas simple de renderizar los datos y vincular los formularios de edicion.
   Los titulos de las secciones secundarias (Educacion, Experiencia, Proyectos, Skills) forman parte de los Array pero no se pueden modificar
   debido a que no me parecio relevante la posibilidad de modificarlos para la funcionalidad de la aplicacion.
   */

  logData: boolean[] = JSON.parse(sessionStorage.getItem('log')!) || [false];
  aboutMeData: string[] = [];
  bannerData: string =  'assets/images/banner.avif';
  experienceData :  [string, string, string[][], string[][]] = ['Experiencia','Educacion',[],[]];
  projectData: string[][] = []
  skillsData: [string, string[][]] = ['Hard and Soft Skills', []]

  /* Fin Contenedores de informacion */

  /* Fetch inicial, toda la informacion que contienen las secciones se guarda en la API, al momento de la carga inicial se recupera la infomacion
  y se la emite hacia los componentes para que lo que se renderiza tenga la informacion actualizada. */


  /* HTTP REQUIESTS INICIO
  - Los GET son recibidos en los componentes de las secciones para ser renderizados.
  - Los PUT son enviados al accionarse el boton Guardar de los modales de edicion.
  - Se usan 2 PATCH debido a que en la tabla de Persona de la base de datos
   se encuentra tanto la informacion del componente About Me, como del componente Banner.*/

   /*VINCULAR DELETE, JWT Y DEPLOY. */
  getAboutMeData(): Observable<string[]> {
    return this.http.get<string[]>("https://ap-portfolio-api-l5ed.onrender.com/api/v1/personas/safe");
  }

  putAboutMeData(data:string[]): Observable<Object> {
    return this.http.put("https://ap-portfolio-api-l5ed.onrender.com/api/v1/personas", data);
  }

  patchAboutMeData(data: string[]): Observable<Object>{
    return this.http.patch("https://ap-portfolio-api-l5ed.onrender.com/api/v1/personas/aboutMe", data);
  }

  patchBannerData(data: string): Observable<Object>{
    return this.http.patch("https://ap-portfolio-api-l5ed.onrender.com/api/v1/personas/banner", data);
  }

  deleteAboutSection(): Observable<Object>{
    return this.http.delete("https://ap-portfolio-api-l5ed.onrender.com/api/v1/personas");
  }

  getExperienceData(): Observable<string[][]>{
    return this.http.get<string[][]>("https://ap-portfolio-api-l5ed.onrender.com/api/v1/experiencia/safe");
  }

  putExperienceData(data: string[][]): Observable<Object>{
    return this.http.put("https://ap-portfolio-api-l5ed.onrender.com/api/v1/experiencia", data);
  }

  deleteExperienceData(): Observable<Object>{
    return this.http.delete("https://ap-portfolio-api-l5ed.onrender.com/api/v1/experiencia");
  }

  getEducationData(): Observable<string[][]>{
    return this.http.get<string[][]>("https://ap-portfolio-api-l5ed.onrender.com/api/v1/educacion/safe");
  }

  putEducationData(data: string[][]): Observable<Object>{
    return this.http.put("https://ap-portfolio-api-l5ed.onrender.com/api/v1/educacion", data);
  }

  deleteEducationData():Observable<Object>{
    return this.http.delete("https://ap-portfolio-api-l5ed.onrender.com/api/v1/educacion");
  }

  getProyectData(): Observable<string[][]>{
    return this.http.get<string[][]>("https://ap-portfolio-api-l5ed.onrender.com/api/v1/proyectos/safe");
  }

  putProyectData(data: string[], id: number): Observable<Object>{
    let fullLink: string = "https://ap-portfolio-api-l5ed.onrender.com/api/v1/proyectos/" + id;
    return this.http.put(fullLink, data);
  }

  deleteProyectData(id:number): Observable<Object>{
    let fullLink: string = "https://ap-portfolio-api-l5ed.onrender.com/api/v1/proyectos/" + id;
    console.log(id + "deleted");
    return this.http.delete(fullLink);
  }

  putAllProyectData(data: string[][]): Observable<Object>{
    return this.http.put("https://ap-portfolio-api-l5ed.onrender.com/api/v1/proyectos", data)
  }

  getSkillsData(): Observable<string[][]>{
    return this.http.get<string[][]>("https://ap-portfolio-api-l5ed.onrender.com/api/v1/skills/safe")
  }

  putSkillsData(data: string[][]): Observable<Object> {
    return this.http.put("https://ap-portfolio-api-l5ed.onrender.com/api/v1/skills", data);
  }

  deleteSkillData(): Observable<Object> {
    return this.http.delete("https://ap-portfolio-api-l5ed.onrender.com/api/v1/skills");
  }

  // HTTP REQUIESTS FIN//


  /* Esta funcion permite enviar la informacion sobre el estado de la sesion a los componentes para mostrar los botones de edicion,
  una vez que se cierra el navegador se requere al usuario un nuevo inicio de sesion para poder continuar con la edicion*/
  logDataSave(state:boolean):void {
    this.logData = [state];
    sessionStorage.setItem('log', JSON.stringify(this.logData));
  }

  /* Funcion para revertir todos los cambios realizados y recargar el contenido de la pagina */

  reloadData(): void{
    let aboutMeInitiaData: string[] = ["Facundo Del Vigo", "Ciudad de Formosa, Argentina.", "Acerca De", "Estudiante de desarrollo", "assets/images/profile.jpg", "assets/images/banner.avif"];
    let experienceInitialData :  [string, string, string[][], string[][]] = ['Experiencia','Educacion',[["Argentina Programa", "(2022-2023)"]],[["Abogacia - Univesidad Nacional de Rosario.", "(2018-2023)"], ["Bachiller en Economia y Finanzas - Instituto Privado General San Martin (Formosa).", "(2008-2014)"]]];
    let projectInitialData: string[][] = [    ["assets/images/portfolio.png", "Portfolio Web", "Portolio personal que incluye informacion personal, habilidades, experiencia, educacion y una recopilacion de los proyectos de apliaciones web propias", "https://fdv-2022.github.io/portfolio-FrontEnd/"],["assets/images/stocker.png","Simulador de Stock","SPA de un simulador de stock simple aplicando conocimientos de HTML CSS Y Javascript","#"]]
    let skillsInitialData: [string, string[][]] = ['Hard and Soft Skills', [["Trabajo en Equipo","50%"],["Ingles","90%"],["Solucion de Problemas", "75%"]]]
    this.putAboutMeData(aboutMeInitiaData).subscribe();
    this.putEducationData(experienceInitialData[3]).subscribe();
    this.putExperienceData(experienceInitialData[2]).subscribe();
    this.putAllProyectData(projectInitialData).subscribe();
    this.putSkillsData(skillsInitialData[1]).subscribe();
    this.aboutReload.emit(aboutMeInitiaData);
    this.experienceReload.emit(experienceInitialData);
    this.projectReload.emit(projectInitialData);
    this.skillsReload.emit(skillsInitialData);
  }

  /*Event Emitters para enviar informacion que no se recarga de manera automatica, caso contrario seria necesario actualizar la pagina para mostrarla*/
  @Output() aboutReload = new EventEmitter<string[]>();
  @Output() experienceReload = new EventEmitter<[string, string, string[][], string[][]]>();
  @Output() projectReload = new EventEmitter<string[][]>();
  @Output() skillsReload = new EventEmitter<[string, string[][]]>();
  @Output() bannerReload = new EventEmitter<string>();
}