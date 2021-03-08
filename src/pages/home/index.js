import React, { useEffect, useState } from 'react'
import { useStoreDispatch, useStoreState } from 'easy-peasy'
import SectionFilter from './section-filter'
import SectionCard from './section-card'
import SectionAddData from './section-add-data'
import SectionUpdateData from './section-update-data'

function Home() {
  const dispatch = useStoreDispatch()
  const [show, setShow] = useState(false)
  const [showEdit, setShowEdit] = useState(false)
  const [editData, setEditData] = useState()
  const [addData, setAddData] = useState({
    commodity: '',
    province: '',
    city: '',
    size: '',
    price: '',
  })
  const [filter, setFilter] = useState({
    commodity: '',
  })

  const {
    ListData: stateListData,
    ListOptionArea: stateListOptionArea,
    ListOptionSize: stateListOptionSize,
    PostData: statePostData,
  } = useStoreState((globalState) => globalState)

  useEffect(() => {
    dispatch.ListData.getListData()
    dispatch.ListOptionArea.getListOptionArea()
    dispatch.ListOptionSize.getListOptionSize()

    const COMMODITY = window.localStorage.getItem('LIST_COMMODITY')

    if (!COMMODITY) {
      window.localStorage.setItem(
        'LIST_COMMODITY',
        JSON.stringify(
          stateListData &&
            stateListData.initialState.items.map(
              (item) => item.komoditas,
            ),
        ),
      )
    }
  }, [dispatch.ListData])

  useEffect(() => {
    if (filter.commodity) {
      dispatch.ListData.getListDataByPayload(filter)
    }
  }, [filter])

  const HandleFilter = (val, key) => {
    setFilter({
      ...filter,
      [key]: val,
    })
  }

  const HandleAddDataChange = (val, key) => {
    setAddData({
      ...addData,
      [key]: val,
    })
  }

  const HandleSubmitData = () => {
    dispatch.PostData.postAddData(addData)
  }

  const HandleClickEdit = (val) => {
    const value = stateListData.initialState.items.filter(
      (item) => item.uuid === val,
    )[0]
    setEditData(value)
    setShowEdit((showEdit) => !showEdit)
  }

  const HandleClearFilter = () => {
    setFilter({
      ...filter,
      commodity: '',
    })
    dispatch.ListData.getListData()
  }

  return (
    <React.Fragment>
      <SectionFilter
        filter={filter}
        handleFilter={HandleFilter}
        handleClearFilter={HandleClearFilter}
        handleShowAddData={() => setShow((show) => !show)}
      />
      <SectionCard
        list={stateListData}
        handleClickEdit={HandleClickEdit}
      />
      <SectionAddData
        value={addData}
        valueSize={stateListOptionSize}
        valueOptionArea={stateListOptionArea}
        show={show}
        onClick={() => setShow((show) => !show)}
        handleAddDataChange={HandleAddDataChange}
        handleAddData={() => HandleSubmitData()}
      />
      <SectionUpdateData
        value={editData}
        valueSize={stateListOptionSize}
        show={showEdit}
        onClick={() => setShowEdit((showEdit) => !showEdit)}
        // handleUpdateDataChange
        // handleUpdateData
      />
    </React.Fragment>
  )
}

export default Home
