import React from 'react'
import Button from '../../components/button'

function Card({
  comodity,
  province,
  city,
  size,
  price,
  date,
  handleClickEdit,
}) {
  return (
    <div className="uikit-card">
      <div className="items-card">
        <p className="title">Komoditas</p>
        <p className="text">{comodity}</p>
      </div>
      <div className="items-card">
        <p className="title">Provinsi</p>
        <p className="text">{province}</p>
      </div>
      <div className="items-card">
        <p className="title">Kota</p>
        <p className="text">{city}</p>
      </div>
      <div className="items-card">
        <p className="title">Ukuran</p>
        <p className="text">{size}</p>
      </div>
      <div className="items-card">
        <p className="title">Harga</p>
        <p className="text">{price}</p>
      </div>
      <div className="items-card">
        <p className="title">Tanggal</p>
        <p className="text">{new Date(date).toDateString()}</p>
      </div>
      <img
        src="https://www.efishery.com/uploads/images/logo/4e250933d7f7fe68a5c16700b61a4cfc.png"
        alt=""
      />
      <Button onClick={handleClickEdit}>edit</Button>
    </div>
  )
}

export default Card
