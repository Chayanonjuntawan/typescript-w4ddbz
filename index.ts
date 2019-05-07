
const x:number = 10;
const y:string = 'x';
const myCoordinate:{x:number, y:string} = {x:10,y:'xo'}
// example 1
let department: {
  departmentCode: string,
  departmentName: string,
  status: number
};

department = {
  departmentCode: 'UN',
  departmentName: 'Union',
  status: 3
};

console.log(department);

// example 2
const department2: {
  departmentCode: string,
  departmentName: string,
  status: number
}= {
  departmentCode: 'UN',
  departmentName: 'Union',
  status: 1
};