function sapa(input: string): string;
function sapa(input: number): string;
function sapa(input: string | number): string {
  if (typeof input === "string") {
    return `Halo, ${input}.`;
  } else {
    return `Umur: ${input} tahun.`;
  }
}

console.log(sapa("Aisyah"));
console.log(sapa(20));