export const CardsView = ({cards}) => {
       let index = 0;
  return (
    <>
    {
     cards.map((item)=>
        <div key={index++} style={{background:'#80808012', border:'1px solid white', float:'left', clear:'both', width: '100%'}}>
         <div style={{float:'left',width:'20%'}}><img src={item.img} style={{width:'50px', float: 'left'}}></img></div>
         <div style={{float:'left',width:'20%',marginTop:'12px'}}>{item.name.toUpperCase()}</div>
         <div style={{float:'left',width:'20%',marginTop:'18px',fontSize:'10px'}}>{item.color}</div>
         <div style={{float:'left',width:'20%',color:'red',marginTop:'12px'}}>{item.price}$</div>
         <div style={{float:'right',width:'20%',marginTop:'10px'}}>
         <button onClick={()=>console.log(index++)} style={{width:'50%',textAlign:'12px',border:'2px solid red',fontSize: '8px',color:'red'}}>ADD TO CART</button>
         </div>
        </div>
    )
    }
    </>
  )
}
