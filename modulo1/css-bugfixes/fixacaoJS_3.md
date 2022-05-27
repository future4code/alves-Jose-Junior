 let mediaNota = ((ex*1)+(p2*3)+(p1*2)) / 6
  if(mediaNota>=9){
    return "A"
  } else if (mediaNota<9, mediaNota>=7.5){
    return "B"
  } else if(mediaNota<7.5, mediaNota>=6){
    return "C"
  } else{
    return "D"
  }
}