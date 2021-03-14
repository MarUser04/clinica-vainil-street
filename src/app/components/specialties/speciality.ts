export class Speciality {
  constructor(slug: string, name: string, alias: string, doctorAlias: string) {
    this.slug = slug;
    this.name = name;
    this.alias = alias;
    this.doctorAlias = doctorAlias;
  }

  slug: string;
  name: string;
  alias: string;
  doctorAlias: string;
}
