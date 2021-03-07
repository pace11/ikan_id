import React, { useEffect } from 'react'
import { useStoreDispatch, useStoreState } from 'easy-peasy'
import Card from '../../components/card'

function Home() {
  const dispatch = useStoreDispatch()
  const { ListData: stateListData } = useStoreState(
    (globalState) => globalState,
  )

  useEffect(() => {
    dispatch.ListData.getListData()
  }, [dispatch.ListData])

  return (
    <React.Fragment>
      {stateListData && stateListData.initialState.isLoading ? (
        <p>Loading...</p>
      ) : (
        stateListData.initialState.items &&
        stateListData.initialState.items.map((item, idx) => (
          <Card
            comodity={item.komoditas}
            province={item.area_provinsi}
            city={item.area_kota}
            size={item.size}
            price={item.price}
            date={item.tgl_parsed}
          />
        ))
      )}
    </React.Fragment>
  )
}

export default Home
