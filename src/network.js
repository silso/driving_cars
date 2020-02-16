class Point {
  constructor(coords) {
    this.x = coords.x;
    this.y = coords.y;
  }

  length() {
    return Math.sqrt(Math.pow(this.x, 2) + Math.pow(this.y, 2));
  }
}

class Lane {
  constructor(road, position) {
    this.road = road;
  }
}

class Road {
  constructor(laneList) {
    this.laneList = laneList;
    this.carList = [];
  }
}

class Inter {
  constructor(inRoadList, outRoadList) {
    this.inRoadList = inRoadList;
    this.outRoadList = outRoadList;
  }
}

class Car {
  constructor(road) {
    this.road = Road;
    this.position;

    this.state = 'road';
    this.speed = 0;
    this.accel = 0;
  }

  drive() {
    if (this.colissionDetected()) {
      // handle colission
    }
    else {
      if (this.state == 'road') {
        this.driveRoad();
      }
      else if (this.state = 'stop') {
        this.
      }
      this.setState();
    }
  }

  driveRoad() {
    //let d = this.getDistanceToObstacle()
    this.speed = 1;

  }

  getDistanceToObstacle() {

  }
}

class Network {
  constructor() {
    /*
    this.roadList = [];
    for (let i = 0; i < 4; i++) {
      this.roadList[i] = new Road([new Lane()]);
    }
    for (let i = 0; i < 4; i++) {
      let thisRoad = this.roadList[i];
      let nextRoad = this.roadList[(i + 1) % 4];
      thisRoad.endInter = new Inter([thisRoad], [nextRoad]);
    }
    this.carList = [];
    for (let i = 0; i < 1; i++) {
      this.carList[i] = new Car(roadList[0], 0);
    }
    */
    this.roadList = [];
    this.roadList[0] = new Road([new Lane()]);

  }

  driveCars() {
    for (let i = 0; i < carList.length; i++) {
      carList[i].drive();
    }
  }
}

modules.exports.Network = Network;
