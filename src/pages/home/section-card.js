import React from 'react'
import Card from '../../components/card'
import { PulseLoader } from 'react-spinners'

function SectionCard({ list, handleClickEdit }) {
  return (
    <div className="row-content">
      {list && list.initialState.isLoading ? (
        <div className="content-spinner">
          <PulseLoader color="#2AB896" size={20} />
        </div>
      ) : (
        <div className="content-card">
          {list.initialState.items &&
            list.initialState.items.map((item, idx) => (
              <Card
                key={String(idx)}
                comodity={item.komoditas}
                province={item.area_provinsi}
                city={item.area_kota}
                size={item.size}
                price={item.price}
                date={item.tgl_parsed}
                handleClickEdit={() => handleClickEdit(item.uuid)}
              />
            ))}
        </div>
      )}
    </div>
  )
}

export default SectionCard
