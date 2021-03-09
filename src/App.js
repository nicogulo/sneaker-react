import React from 'react'
import './App.css';


function App() {

  return (
    <div className="Parentbox">
      <FotoProduk/>
      <ProdukInfo category="FUNGKY"/>   
    </div>
  );
}
function FotoProduk(){
  return (
  
     <div className="Foto">
     <img src="bwasneaker.jpg"/>
     </div>
    
  );
}


function ProdukInfo(props){
  const {category} = props;

  return (
    <div>
     <div className="Deskripsi">
        <p className="Cate">{category}</p>
        <h1 className="Tittle">Pingky Swag</h1>
        <p className="Price">IDR 2.332.999</p>
        <p className="Info">lasasadadasadafsfsafaksjfbabfuibusbfebfuibaiuuf</p>
     </div>
    </div>
  );
}
export default App;


