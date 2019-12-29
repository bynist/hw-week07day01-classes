


class RunTracker{
    

constructor(name,email ){
    this.name=name
    this.email=email
    
    // this.date = date
    this.distance = []
    // this.time = time 
 
}

addRun(date,distance,time){
    this.date = date
    this.distance.push(distance)  
    this.time = time

}



 totalDistance() {// 50 meters
        var totalDist = 1
this.distance.forEach(element =>  totalDist*=element);
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
     var speed = totalDist / time
     var ava= speed / count 
     return `  averageSpeed : ${ava}`
}
}
const runner = new RunTracker("Salman", "Salman@salman.com");

runner.addRun("2017-01-01", 10, 30)
runner.addRun("2017-01-02", 5, 20)
// runner.addRun("2017-01-02", 15, 20)
console.log(runner.totalDistance()) // 50 meters

console.log(runner.longestDistance()) // 30 meters

runner.averageSpeed() // 0.3 meters per second

