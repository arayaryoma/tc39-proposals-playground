const double = x => x * 2;
const result = 2 |> double |> (x => 3 + x) |> (x => x.toString());
console.log(result); // -> 7
