function plumages(birds) {
  return new Map(birds
                .map(b => createBird(b))
                .map(bird => [bird.name,bird.plumage]));
}

function speeds(birds) {
  return new Map(birds
                .map(b => createBird(b))
                .map(bird => [bird.name, bird.airSpeedVelocity]));
}

function plumage(bird) {
  return new Bird(bird).plumage;
}

function airSpeedVelocity(bird) {
  return new Bird(bird).airSpeedVelocity;
}

function createBird(bird) {
  switch(this.type) {
    case 'EuropeanSwallow':
      return new EuropeanSwallow(bird);
    case 'AfricanSwallow':
      return AfricanSwallow(bird);
    case 'NorwegianBlueParrot':
      return new NorwegianBlueParrot(bird);
    default:
      return new Bird(bird);
  } 
}

class Bird {
  constructor(birdObject) {
    Object.assign(this, birdObject);
  }

  get plumage() {
    return "unknown";
  }

  get airSpeedVelocity() {
    return null;
  }
}

class EuropeanSwallow extends Bird {
  get plumage() {
    return 'average';
  }
  get airSpeedVelocity() {
    return 35;
  }
}

class AfricanSwallow extends Bird{
  get plumage() {
    return (this.numberOfCoconuts > 2) ? "tired" : "average";
  }
  get airSpeedVelocity() {
    return 40 - 2 * this.numberOfCoconuts;
  }
}

class NorwegianBlueParrot extends Bird{
  get plumage() {
    return (this.voltage > 100) ? "scorched" : "beautiful";
  }
  get airSpeedVelocity() {
    return (this.inNailed) ? 0 : 10 + this.voltage / 10;
  }
}