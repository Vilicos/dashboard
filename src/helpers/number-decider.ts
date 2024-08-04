function NumberDecider(value:number):string|void {
  if(value === 0) return;
  return value < 0 ? "text-red-600/90" : "text-green-600/90"
}

export default NumberDecider