


class RunTracker{
    

constructor(name,email ){
    this.name=name
    this.email=email
    
    // this.date = date
    this.distance = []
   this.time = []
 
}

addRun(date,time,distance){
    this.date = date
    this.time.push(time)
    this.distance.push(distance)  
 }

 
 totalDistance() {// 50 meters
        let totalDist = 1
this.distance.forEach(element =>  totalDist+=element);
return ` total distance: ${totalDist}`

 }
longestDistance() // 30 meters
{       var longestDist = 0 
  let x = this.distance.values()

for (const value of x) {
    if (longestDist < value){
        longestDist = value
    
    }}

    return `longestDist : ${longestDist}`
}
averageSpeed() 

{
    let totalDist = 1
    this.distance.forEach(element =>  totalDist+=element);
    let totalTime=0
    this.time.forEach(element =>  totalTime+=element);
      let speed = totalDist / totalTime
    //  let ava = speed / count 
     return `  averageSpeed : ${speed}`
}
}
const runner = new RunTracker("Salman", "Salman@salman.com");

runner.addRun("2017-01-01", 10, 30)
runner.addRun("2017-01-02", 5, 20)
// runner.addRun("2017-01-02", 15, 20)
console.log(runner.totalDistance()) // 50 meters

console.log(runner.longestDistance()) // 30 meters

console.log(runner.averageSpeed()) // 3.3 meters per second

