import React, { useEffect, useState } from 'react'
import { useStoreDispatch, useStoreState } from 'easy-peasy'
import Card from '../../components/card'
import Select from '../../components/select'

function Home() {
  const dispatch = useStoreDispatch()
  const [comodity, setComodity] = useState('')
  const [province, setProvince] = useState('')
  const [city, setCity] = useState('')
  const {
    ListData: stateListData,
    ListOptionArea: stateListOptionArea,
  } = useStoreState((globalState) => globalState)

  useEffect(() => {
    dispatch.ListData.getListData()
    dispatch.ListOptionArea.getListOptionArea()
  }, [dispatch.ListData, dispatch.ListOptionArea])

  return (
    <React.Fragment>
      <div className="row-filter">
        <div className="all-filter">
          <Select
            label="Komoditas"
            value={comodity}
            items={
              stateListData &&
              stateListData.initialState.items &&
              stateListData.initialState.items.map(
                (item) => item.komoditas,
              )
            }
            onClick={(e) => setComodity(e)}
          />
          <Select
            label="Provinsi"
            value={province}
            items={
              stateListOptionArea &&
              stateListOptionArea.initialState.items &&
              stateListOptionArea.initialState.items.map(
                (item) => item.province,
              )
            }
            onClick={(e) => setProvince(e)}
          />
          {province && (
            <Select
              label="Kota"
              value={city}
              items={
                stateListOptionArea &&
                stateListOptionArea.initialState.items &&
                stateListOptionArea.initialState.items
                  .filter((item) => item.province === province)
                  .map((item) => item.city)
              }
              onClick={(e) => setCity(e)}
            />
          )}
        </div>
        <div className="type-list">
          <p>type show</p>
        </div>
      </div>
      <div className="row-content">
        {stateListData && stateListData.initialState.isLoading ? (
          <p>Loading...</p>
        ) : (
          stateListData.initialState.items &&
          stateListData.initialState.items.map((item, idx) => (
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
    </React.Fragment>
  )
}

export default Home
