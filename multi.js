//[hometeam, awayteam] //1 is hometeamwon, 0 is awayteam won
var count=0,k=0, final='';

const tournamentWinner=(competitions, results) =>{
  const hash = new Map()
  for (let i = 0; i < results.length; i++) {
    if (results[i] == 1) {
      getcount(hash, competitions[i][0])
    } else {
      getcount(hash, competitions[i][1])
    }
  }
  console.log(hash)

  function getcount(hash,  matchme){
    if(hash.get(matchme)){
      this.count+=1
      hash.set(matchme, this.count);
    }else{
      this.count=1
      hash.set(matchme, this.count);
    }
  }
  for (const [key, value] of hash.entries()) {
    console.log("key",key)
    if(value>k){
      k=value
      final=key
    }
  }
  console.log("final",final)
  return final
}

console.log(tournamentWinner([
  ["HTML", "Java"],
  ["Java", "Python"],
  ["Python", "HTML"]
], [0,1,1]))
