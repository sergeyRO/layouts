import { useState } from "react";

export const CardsView = (products) => {
        
  return (
    <>
    {
      products.map((item)=>
        <div>
          {item.name}
        </div>
    )
    }
    </>
  )
}