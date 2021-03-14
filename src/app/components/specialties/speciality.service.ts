import { Observable } from 'rxjs';
import { Speciality } from './speciality';

export class SpecialityService {
  public getSpecialities() {
    let specialities: Speciality[];

    specialities = [
      new Speciality('cardiologia', 'Cardiología', 'Cardiólogos', 'Cardiólogo'),
      new Speciality(
        'dermatologia',
        'Dermatología',
        'Dermatólogos',
        'Dermatólogo',
      ),
      new Speciality(
        'endocrinologia',
        'Endocrinología',
        'Endocrinólogos',
        'Endocrinólogo',
      ),
      new Speciality(
        'gastroenterologia',
        'Gastroenterología',
        'Gastroenterólogos',
        'Gastroenterólogo',
      ),
      new Speciality('ginecologia', 'Ginecología', 'Ginecólogos', 'Ginecólogo'),
      new Speciality('odontologia', 'Odontología', 'Odontólogos', 'Odontólogo'),
      new Speciality(
        'otorrinolaringologia',
        'Otorrinolaringología',
        'Otorrinolaringólogos',
        'Otorrinolaringólogo',
      ),
      new Speciality('pediatria', 'Pediatría', 'Pediatras', 'Pediatra'),
      new Speciality('proctologia', 'Proctología', 'Proctólogos', 'Proctólogo'),
    ];

    return specialities;
  }

  public getSpeciality(slug) {
    let specialities: Speciality[] = this.getSpecialities();
    return specialities.find((s) => s.slug == slug);
  }
}
