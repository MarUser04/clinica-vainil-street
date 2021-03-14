import { Observable } from 'rxjs';
import { Speciality } from './speciality';

export class SpecialityService {
  public getSpecialities() {
    let specialities: Speciality[];

    specialities = [
      new Speciality('Cardiología', 'Cardiólogos', 'Cardiólogo'),
      new Speciality(
        'Dermatología',
        'Dermatólogos',
        'Dermatólogo',
      ),
      new Speciality(
        'Endocrinología',
        'Endocrinólogos',
        'Endocrinólogo',
      ),
      new Speciality(
        'Gastroenterología',
        'Gastroenterólogos',
        'Gastroenterólogo',
      ),
      new Speciality( 'Ginecología', 'Ginecólogos', 'Ginecólogo'),
      new Speciality( 'Odontología', 'Odontólogos', 'Odontólogo'),
      new Speciality(
        'Otorrinolaringología',
        'Otorrinolaringólogos',
        'Otorrinolaringólogo',
      ),
      new Speciality('Pediatría', 'Pediatras', 'Pediatra'),
      new Speciality( 'Proctología', 'Proctólogos', 'Proctólogo'),
    ];

    return specialities;
  }

  public getSpeciality(slug) {
    let specialities: Speciality[] = this.getSpecialities();
    return specialities.find((s) => s.getSpecialitySlug() == slug);
  }

  public getDoctorAliasBySlug(slug) {
    let specialities: Speciality[] = this.getSpecialities();
    let speciality = specialities.find((s) => s.getDoctorAliasSlug() == slug);
    return speciality.doctorAlias ? speciality.doctorAlias : '';
  }
}
