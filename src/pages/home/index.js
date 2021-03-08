import React, { useEffect, useState } from 'react'
import { useStoreDispatch, useStoreState } from 'easy-peasy'
import { PostUpdate, PostAdd } from '../../api'
import SectionFilter from './section-filter'
import SectionCard from './section-card'
import SectionAddData from './section-add-data'
import SectionUpdateData from './section-update-data'

function Home() {
  const dispatch = useStoreDispatch()
  const [show, setShow] = useState(false)
  const [loading, setLoading] = useState({
    update: false,
    add: false,
  })
  const [errorMessage, setErrorMessage] = useState({
    update: '',
    add: '',
  })
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
  }, [
    dispatch.ListData,
    dispatch.ListOptionArea,
    dispatch.ListOptionSize,
  ])

  useEffect(() => {
    if (filter.commodity) {
      dispatch.ListData.getListDataByPayload(filter)
    }
  }, [filter, dispatch.ListData])

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

  const HandleUpdateDataChange = (val, key) => {
    setEditData({
      ...editData,
      [key]: val,
    })
  }

  const HandleSubmitData = () => {
    setLoading({
      ...loading,
      add: true,
    })
    PostAdd(addData).then((res) => {
      setLoading({
        ...loading,
        add: false,
      })
      const { status, message } = res
      if (status !== 200) {
        setErrorMessage({
          ...errorMessage,
          add: message,
        })
      } else {
        setErrorMessage({
          ...errorMessage,
          add: '',
        })
        setShowEdit(false)
        window.location.href = '/'
      }
    })
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

  const HandleUpdateData = () => {
    setLoading({
      ...loading,
      update: true,
    })
    PostUpdate(editData).then((res) => {
      setLoading({
        ...loading,
        update: false,
      })
      const { status, message } = res
      if (status !== 200) {
        setErrorMessage({
          ...errorMessage,
          update: message,
        })
      } else {
        setErrorMessage({
          ...errorMessage,
          update: '',
        })
        setShowEdit(false)
        window.location.href = '/'
      }
    })
  }

  return (
    <React.Fragment>
      <SectionFilter
        filter={filter}
        valueComodity={stateListData}
        handleFilter={HandleFilter}
        handleClearFilter={HandleClearFilter}
        handleShowAddData={() => setShow((show) => !show)}
      />
      <SectionCard
        list={stateListData}
        handleClickEdit={HandleClickEdit}
      />
      <SectionAddData
        loading={loading.add}
        value={addData}
        valueSize={stateListOptionSize}
        valueOptionArea={stateListOptionArea}
        show={show}
        onClick={() => setShow((show) => !show)}
        handleAddDataChange={HandleAddDataChange}
        handleAddData={() => HandleSubmitData()}
        statePostData={statePostData}
      />
      <SectionUpdateData
        loading={loading.update}
        value={editData}
        valueSize={stateListOptionSize}
        valueOptionArea={stateListOptionArea}
        show={showEdit}
        onClick={() => setShowEdit((showEdit) => !showEdit)}
        handleUpdateDataChange={HandleUpdateDataChange}
        handleUpdateData={() => HandleUpdateData()}
      />
    </React.Fragment>
  )
}

export default Home
