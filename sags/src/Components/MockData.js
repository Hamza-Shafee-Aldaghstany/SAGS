const data = [
  {
    id: 1,
    title: "Beetlejuice",
    year: "1988",
  },
  {
    id: 2,
    title: "Ghostbusters",
    year: "1984",
  }
 
];
if(data.length<20){
for(var i=0; i<20 ; i++){
    if(!data[i]){
        data[i] ={
            id : i,
        };
    }
}    
}
export default data;
