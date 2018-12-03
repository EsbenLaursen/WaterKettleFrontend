export class Temperature {
  id: number;
  Created: Date;
  Value: number;

  constructor(id, value, date) {
      this.id = id;
      this.Value = value;
      this.Created = date;
  }
}
