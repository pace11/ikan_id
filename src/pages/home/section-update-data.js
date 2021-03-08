import React from 'react'
import BottomSheet from '../../components/bottom-sheet'
import Input from '../../components/input'
import Select from '../../components/select'
import Button from '../../components/button'

function SectionUpdateData({
  show,
  onClick,
  value,
  valueSize,
  handleUpdateDataChange,
  handleUpdateData,
}) {
  return (
    <React.Fragment>
      {value !== undefined && (
        <BottomSheet show={show} onClick={onClick}>
          <Input
            label="Komoditas"
            placeholder="Isikan komiditas ..."
            value={value.komoditas}
            onChange={(e) => handleUpdateDataChange(e, 'commodity')}
          />
          <Select
            label="Provinsi"
            value={value.area_provinsi}
            items={JSON.parse(
              window.localStorage.getItem('LIST_OPTION_AREA'),
            ).map((item) => item.province)}
            onClick={(e) => handleUpdateDataChange(e, 'province')}
          />
          <Select
            label="Kota"
            value={value.area_kota}
            items={JSON.parse(
              window.localStorage.getItem('LIST_OPTION_AREA'),
            )
              .filter((item) => item.province === value.area_kota)
              .map((item) => item.city)}
            onClick={(e) => handleUpdateDataChange(e, 'city')}
          />
          <Select
            label="Size"
            value={value.size}
            items={
              valueSize.initialState &&
              valueSize.initialState.items &&
              valueSize.initialState.items.map((item) => item.size)
            }
            onClick={(e) => handleUpdateDataChange(e, 'size')}
          />
          <Input
            type="number"
            label="Harga"
            placeholder="Isikan harga ..."
            value={value.price}
            onChange={(e) => handleUpdateDataChange(e, 'price')}
          />
          <Button block onClick={handleUpdateData}>
            Update
          </Button>
        </BottomSheet>
      )}
    </React.Fragment>
  )
}

export default SectionUpdateData
