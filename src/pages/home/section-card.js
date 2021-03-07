import React from 'react'
import Card from '../../components/card'

function SectionCard({ list }) {
  return (
    <div className="row-content">
      {list && list.initialState.isLoading ? (
        <p>Loading...</p>
      ) : (
        list.initialState.items &&
        list.initialState.items.map((item, idx) => (
          <Card
            key={String(idx)}
            comodity={item.komoditas}
            province={item.area_provinsi}
            city={item.area_kota}
            size={item.size}
            price={item.price}
            date={item.tgl_parsed}
          />
        ))
      )}
    </div>
  )
}

export default SectionCard
