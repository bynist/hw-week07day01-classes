


class RunTracker{
    

    constructor(name,email ){
    this.name=name
    this.email=email
    
   this.distance = []
   this.time = []
   this.totalDist = 1
   this.totalTime=0
    }

    addRun(date,time,distance){
    this.date = date
    this.time.push(time)
    this.distance.push(distance)  
     }

 
    totalDistance() {// 50 meters
       
        this.distance.forEach(element =>  this.totalDist+=element);
        return `total distance: ${this.totalDist}`

    }
    longestDistance() // 30 meters
    {
    // {       var
            let longestDist = 0 
            let x = this.distance.values()

            for (const value of x) {
                if (longestDist < value){
                    longestDist = value
                
                }}

        return `longestDist : ${longestDist}`
    }

    averageSpeed() 

   {
    
    this.time.forEach(element =>  this.totalTime+=element);
        let speed = this.totalDist / this.totalTime
     return `averageSpeed : ${speed}`
   }
}
const runner = new RunTracker("Salman", "Salman@salman.com");

runner.addRun("2017-01-01", 10, 30)
runner.addRun("2017-01-02", 5, 20)
// runner.addRun("2017-01-02", 15, 20)
console.log(runner.totalDistance()) // 50 meters

console.log(runner.longestDistance()) // 30 meters

console.log(runner.averageSpeed()) // 3.3 meters per second

