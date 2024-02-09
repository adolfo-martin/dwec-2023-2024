import { Injectable } from '@angular/core';
import { Observable, delay, of } from 'rxjs';

export type AreaT = {
  id: string,
  name: string,
}

export type LanguageT = {
  id: string,
  name: string,
}

export type FrameworkT = {
  id: string,
  name: string,
  area: string,
  languages: Array<string>,
}

@Injectable({
  providedIn: 'root'
})
export class DevelopmentService {

  private static _areas: Array<AreaT> = [
    { id: 'front', name: 'Frontend' },
    { id: 'back', name: 'Backend' },
  ]

  private static _languages: Array<LanguageT> = [
    { id: 'js', name: 'JavaScript' },
    { id: 'ja', name: 'Java' },
    { id: 'py', name: 'Python' },
    { id: 'ts', name: 'TypeScript' },
    { id: 'ph', name: 'PHP' },
    { id: 'ru', name: 'Rush' },
    { id: 'go', name: 'Go' },
    { id: 'rb', name: 'Ruby on Rails' },
    { id: 'ko', name: 'Kotlin' },
  ]

  private static _frameworks: Array<FrameworkT> = [
    { id: 'ang', name: 'Angular', area: 'front', languages: ['js', 'ts'] },
    { id: 'spr', name: 'Spring Boot', area: 'back', languages: ['ja'] },
    { id: 'lrv', name: 'Laravel', area: 'back', languages: ['ph'] },
    { id: 'rea', name: 'React', area: 'front', languages: ['js', 'ts'] },
    { id: 'djg', name: 'Django', area: 'back', languages: ['py'] },
    { id: 'vue', name: 'Vue', area: 'front', languages: ['js', 'ts'] },
    { id: 'sym', name: 'Symphony', area: 'back', languages: ['ph'] },
    { id: 'nod', name: 'Node', area: 'back', languages: ['js'] },
  ]

  constructor() { }

  public getAreas$(): Observable<AreaT[]> {
    return of(DevelopmentService._areas).pipe(delay(1000));
  }

  public getAreaById$(id: string): Observable<AreaT> {
    const area = DevelopmentService._areas.find(area => area.id === id)
    // @ts-ignore
    return of(area).pipe(delay(1000));
  }

  public getLanguages$(): Observable<LanguageT[]> {
    return of(DevelopmentService._languages).pipe(delay(1000));
  }

  public getLanguageById$(id: string): Observable<LanguageT> {
    const language = DevelopmentService._languages.find(language => language.id === id)
    // @ts-ignore
    return of(language).pipe(delay(1000));
  }

  public getFrameworks$(): Observable<FrameworkT[]> {
    return of(DevelopmentService._frameworks).pipe(delay(1000));
  }

  public getFrameworkById$(id: string): Observable<FrameworkT> {
    const framework = DevelopmentService._frameworks.find(framework => framework.id === id)
    // @ts-ignore
    return of(framework).pipe(delay(1000));
  }

  public getFrameworksByArea$(areaId: string): Observable<String[]> {
    // @ts-ignore
    const frameworks = DevelopmentService._frameworks
      .filter(framework => framework.area === areaId)
      .map(framework => framework.id);
    // @ts-ignore
    return of(frameworks).pipe(delay(1000));
  }

  public getFrameworksByLanguage$(languageId: string): Observable<FrameworkT[]> {
    // @ts-ignore
    const frameworks = DevelopmentService._frameworks
      .filter(framework => framework.languages.includes(languageId))
      .map(framework => framework.id);
    // @ts-ignore
    return of(frameworks).pipe(delay(1000));
  }

}
