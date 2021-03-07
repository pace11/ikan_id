import React from 'react'
import Select from '../../components/select'

function SectionFilter({ filter, handleFilter }) {
  return (
    <div className="row-filter">
      <div className="all-filter">
        <Select
          label="Komoditas"
          value={filter.commodity}
          items={JSON.parse(
            window.localStorage.getItem('LIST_COMMODITY'),
          )}
          onClick={(e) => handleFilter(e, 'commodity')}
        />
        <Select
          label="Provinsi"
          value={filter.province}
          items={JSON.parse(
            window.localStorage.getItem('LIST_OPTION_AREA'),
          ).map((item) => item.province)}
          onClick={(e) => handleFilter(e, 'province')}
        />
        {filter.province && (
          <Select
            label="Kota"
            value={filter.city}
            items={JSON.parse(
              window.localStorage.getItem('LIST_OPTION_AREA'),
            )
              .filter((item) => item.province === filter.province)
              .map((item) => item.city)}
            onClick={(e) => handleFilter(e, 'city')}
          />
        )}
      </div>
      <div className="type-list">
        <p>type show</p>
      </div>
    </div>
  )
}

export default SectionFilter
