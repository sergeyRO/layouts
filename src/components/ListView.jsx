export const ListView = ({items}) => {
  let index = 0;
  return (
    <>
    {
     items.map((item)=>
        <div key={index++} style={{position: 'relative', width: '33%', float:'left',marginBottom: '20px'}}>
          <img src={item.img} style={{width: '250px', boxShadow:'#80808063 0px 5px 5px 2px'}}></img>
          <span style={{position: 'absolute',width:'100%',left:'0',top: '0px'}}>{item.name.toUpperCase()}
          <br/>
          <font style={{fontSize:'10px'}}>{item.color}</font>
          </span>
          <span style={{position: 'absolute',width:'100%',left:'0',top: '200px'}}>
            <font style={{color:'red'}}>${item.price}</font>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <button onClick={()=>console.log(index++)} style={{width:'75px',textAlign:'12px',border:'2px solid red',fontSize: '8px',color:'red'}}>ADD TO CART</button>
          </span>
        </div>
    )
    }
    </>
  )
}