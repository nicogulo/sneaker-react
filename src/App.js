import React from 'react'
import './App.css';


function App() {

  return (
    <div className="Parentbox">
      <FotoProduk/>
      <ProdukInfo isDicount="comming" name="Pingky Dwn" category="FUNGKY"/>   
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

function CheckDiscount(props){
  const { isDicount} = props;
  if(isDicount == "yes"){
    return(
      <p>Discount 50%</p>
    );
  }else if(isDicount == "comming"){
    return(
      <p>Akan ada discount</p>
    );
  }
   else{
    return(
      <p>Belum Ada Discount</p>
    );
  }
}


function ProdukInfo(props){
  const {category, name, isDicount} = props;
  const benefit = ["Tidak kusut terkena air","Berkualitas"];
  const listBenefit = benefit.map((itemBenefit) =>
  <li>{itemBenefit}</li>
  );
  return (
    <div>
     <div className="Deskripsi">
        <p className="Cate">{category}</p>
        <h1 className="Tittle">{name}</h1>
        <p className="Price">IDR 2.332.999</p>
        <CheckDiscount isDicount={isDicount}/>
        <p className="Info">lasasadadasadafsfsafaksjfbabfuibusbfebfuibaiuuf</p>
        <ul>
          <li>
            {listBenefit}
          </li>
        </ul>
        <a onClick={(e) => TambahCart(name, e)} href="#"> Add to Cart</a>
     </div>
    </div>
  );
}

function TambahCart(e){
  return console.log("membeli produk " + e);
}

export default App;


