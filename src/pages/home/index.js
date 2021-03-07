import React, { useEffect, useState } from 'react'
import { useStoreDispatch, useStoreState } from 'easy-peasy'
import SectionFilter from './section-filter'
import SectionCard from './section-card'

function Home() {
  const dispatch = useStoreDispatch()
  const [filter, setFilter] = useState({
    commodity: '',
    province: '',
    city: '',
  })

  const {
    ListData: stateListData,
    ListOptionArea: stateListOptionArea,
  } = useStoreState((globalState) => globalState)

  useEffect(() => {
    dispatch.ListData.getListData()
    dispatch.ListOptionArea.getListOptionArea()
    if (
      stateListData.initialState.items &&
      stateListOptionArea.initialState.items
    ) {
      const COMMODITY = window.localStorage.getItem('LIST_COMMODITY'),
        OPTION_AREA = window.localStorage.getItem('LIST_OPTION_AREA'),
        listData = stateListData && stateListData.initialState.items,
        listOptionArea =
          stateListOptionArea &&
          stateListOptionArea.initialState.items

      if (!COMMODITY) {
        window.localStorage.setItem(
          'LIST_COMMODITY',
          JSON.stringify(listData.map((item) => item.komoditas)),
        )
      }

      if (!OPTION_AREA) {
        window.localStorage.setItem(
          'LIST_OPTION_AREA',
          JSON.stringify(listOptionArea),
        )
      }
    }
  }, [
    dispatch.ListData,
    dispatch.ListOptionArea,
    stateListData,
    stateListOptionArea,
  ])

  const HandleFilter = (val, key) => {
    setFilter({
      ...filter,
      [key]: val,
    })
  }

  return (
    <React.Fragment>
      <SectionFilter filter={filter} handleFilter={HandleFilter} />
      <SectionCard list={stateListData} />
    </React.Fragment>
  )
}

export default Home
