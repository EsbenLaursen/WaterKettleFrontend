export class Temperature {
  id: number;
  createdAt?: Date;
  updatedAt?: Date;
  temperature: number;
  weight: number;

  constructor(id, date, temp) {
      this.id = id;
      this.createdAt = date;
      this.temperature =temp;
  }
}
