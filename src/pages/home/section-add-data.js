import React from 'react'
import BottomSheet from '../../components/bottom-sheet'
import Input from '../../components/input'
import Select from '../../components/select'
import Button from '../../components/button'

function SectionAddData({
  show,
  onClick,
  value,
  valueSize,
  valueOptionArea,
  handleAddDataChange,
  handleAddData,
}) {
  return (
    <BottomSheet show={show} onClick={onClick}>
      <Input
        label="Komoditas"
        placeholder="Isikan komiditas ..."
        value={value.commodity}
        onChange={(e) => handleAddDataChange(e, 'commodity')}
      />
      <Select
        label="Provinsi"
        value={value.province}
        items={
          valueOptionArea.initialState &&
          valueOptionArea.initialState.items &&
          valueOptionArea.initialState.items.map(
            (item) => item.province,
          )
        }
        onClick={(e) => handleAddDataChange(e, 'province')}
      />
      <Select
        label="Kota"
        value={value.city}
        items={
          valueOptionArea.initialState &&
          valueOptionArea.initialState.items &&
          valueOptionArea.initialState.items
            .filter((item) => item.province === value.province)
            .map((item) => item.city)
        }
        onClick={(e) => handleAddDataChange(e, 'city')}
      />
      <Select
        label="Size"
        value={value.size}
        items={
          valueSize.initialState &&
          valueSize.initialState.items &&
          valueSize.initialState.items.map((item) => item.size)
        }
        onClick={(e) => handleAddDataChange(e, 'size')}
      />
      <Input
        type="number"
        label="Harga"
        placeholder="Isikan harga ..."
        value={value.price}
        onChange={(e) => handleAddDataChange(e, 'price')}
      />
      <Button block onClick={handleAddData}>
        Simpan
      </Button>
    </BottomSheet>
  )
}

export default SectionAddData
