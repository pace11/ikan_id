import React from 'react'
import Select from '../../components/select'
import Button from '../../components/button'

function SectionFilter({
  filter,
  handleFilter,
  handleClearFilter,
  handleShowAddData,
}) {
  return (
    <React.Fragment>
      <div className="row-filter">
        <div className="filter-content">
          <Select
            label="Komoditas"
            value={filter.commodity}
            items={JSON.parse(
              window.localStorage.getItem('LIST_COMMODITY'),
            )}
            onClick={(e) => handleFilter(e, 'commodity')}
          />
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
