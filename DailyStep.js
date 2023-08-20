/* Class for a step (daily challenge) */
export class DailyStep {
  constructor(step, fact1, fact2, fact3, image)
  {
    this.step = step;
    this.fact1 = fact1;
    this.fact2 = fact2;
    this.fact3 = fact3;
    this.image = image;
  }

  getStep()
  {
    return this.step;
  }

  getFact1()
  {
    return this.fact1;
  }

  getFact2()
  {
    return this.fact2;
  }

  getFact3()
  {
    return this.fact3;
  }

  getImage()
  {
    return this.image;
  }
}