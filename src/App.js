import React from 'react'
import './App.css';


function App() {

  return (
    <div className="Parentbox">
      <FotoProduk/>
      <ProdukInfo name="Pingky Dwn" category="FUNGKY"/>   
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
  const {category, name} = props;

  return (
    <div>
     <div className="Deskripsi">
        <p className="Cate">{category}</p>
        <h1 className="Tittle">{name}</h1>
        <p className="Price">IDR 2.332.999</p>
        <p className="Info">lasasadadasadafsfsafaksjfbabfuibusbfebfuibaiuuf</p>
        <a onClick={(e) => TambahCart(name, e)} href="#"> Add to Cart</a>
     </div>
    </div>
  );
}

function TambahCart(e){
  return console.log("membeli produk " + e);
}

export default App;


