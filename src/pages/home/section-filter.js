import React from 'react'
import Select from '../../components/select'
import Button from '../../components/button'

function SectionFilter({
  valueComodity,
  filter,
  handleFilter,
  handleShowAddData,
  handleClearFilter,
}) {
  return (
    <React.Fragment>
      <div className="row-filter">
        <div className="filter-content">
          <div>
            <Select
              label="Komoditas"
              value={filter.commodity}
              items={
                valueComodity &&
                valueComodity.initialState &&
                valueComodity.initialState.items &&
                valueComodity.initialState.items.map(
                  (item) => item.komoditas,
                )
              }
              onClick={(e) => handleFilter(e, 'commodity')}
            />
          </div>
          <Button
            onClick={() => handleClearFilter()}
            disabled={filter.commodity ? false : true}
          >
            Bersihkan Filter
          </Button>
        </div>
        <div className="row-btn">
          <div className="row-btn">
            <Button onClick={() => handleShowAddData()}>
              Tambah Data
            </Button>
          </div>
        </div>
      </div>
    </React.Fragment>
  )
}

export default SectionFilter
