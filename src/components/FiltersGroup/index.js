import {BsSearch} from 'react-icons/bs'
import ProfileDetails from '../ProfileDetails'
import './index.css'

const FiltersGroup = props => {
  const onChangeSearchInput = event => {
    const {changeSearchInput} = props
    changeSearchInput(event)
  }

  const onEnterSearchInput = event => {
    const {getJobs} = props
    if (event.key === 'Enter') {
      getJobs()
    }
  }

  const renderSearchInput = () => {
    const {getJobs, searchInput} = props
    return (
      <div className="search-input-container">
        <label htmlFor="searchInput" className="visually-hidden">
          Search
        </label>
        <input
          type="search"
          id="searchInput"
          className="search-input"
          placeholder="Search"
          value={searchInput}
          onChange={onChangeSearchInput}
          onKeyDown={onEnterSearchInput}
        />
        <button
          type="button"
          data-testid="searchButton"
          className="search-button-container"
          onClick={getJobs}
        >
          <BsSearch className="search-icon" />
        </button>
      </div>
    )
  }

  const onSelectEmployeeType = event => {
    const {changeEmployeeList} = props
    changeEmployeeList(event.target.value)
  }

  const renderTypeOfEmployment = () => {
    const {employmentTypesList} = props
    return (
      <div className="employment-type-container">
        <h1 className="employment-type-heading">Type of Employment</h1>
        <ul className="employee-type-list-container">
          {employmentTypesList.map(eachType => (
            <li className="employee-item" key={eachType.employmentTypeId}>
              <input
                type="checkbox"
                id={eachType.employmentTypeId}
                className="check-input"
                value={eachType.employmentTypeId}
                onChange={onSelectEmployeeType}
              />
              <label
                htmlFor={eachType.employmentTypeId}
                className="check-label"
              >
                {eachType.label}
              </label>
            </li>
          ))}
        </ul>
      </div>
    )
  }

  const renderSalaryRange = () => {
    const {salaryRangesList, changeSalary} = props
    return (
      <div className="salary-range-container">
        <h1 className="salary-range-heading">Salary Range</h1>
        <ul className="salary-range-list-container">
          {salaryRangesList.map(eachSalary => {
            const onClickSalary = () => {
              changeSalary(eachSalary.salaryRangeId)
            }
            return (
              <li
                className="salary-item"
                key={eachSalary.salaryRangeId}
                onClick={onClickSalary}
              >
                <input
                  type="radio"
                  id={eachSalary.salaryRangeId}
                  name="salary"
                  className="check-input"
                />
                <label
                  htmlFor={eachSalary.salaryRangeId}
                  className="check-label"
                >
                  {eachSalary.label}
                </label>
              </li>
            )
          })}
        </ul>
      </div>
    )
  }

  const onSelectLocation = event => {
    const {changeLocationFilter} = props
    changeLocationFilter(event.target.value)
  }

  const renderLocationFilter = () => {
    const {locationsList} = props
    return (
      <div className="location-filter-container">
        <h1 className="location-heading">Location</h1>
        <ul className="location-list-container">
          {locationsList.map(location => (
            <li key={location.locationId} className="location-item">
              <input
                type="checkbox"
                id={location.locationId}
                className="check-input"
                value={location.locationId}
                onChange={onSelectLocation}
              />
              <label htmlFor={location.locationId} className="check-label">
                {location.label}
              </label>
            </li>
          ))}
        </ul>
      </div>
    )
  }

  return (
    <div className="filters-group-container">
      {renderSearchInput()}
      <ProfileDetails />
      <hr className="horizontal-line" />
      {renderTypeOfEmployment()}
      <hr className="horizontal-line" />
      {renderSalaryRange()}
      <hr className="horizontal-line" />
      {renderLocationFilter()}
    </div>
  )
}

export default FiltersGroup
