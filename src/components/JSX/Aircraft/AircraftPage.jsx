import AircraftCard from "./AircraftCard.jsx";
import Pagination from "./Pagination.jsx";
import {
  changeAircraftFilter,
  resetAircraftFilters,
  getAircraftCatalogData,
} from "../../../handlers/aircraftCatalogHandlers.js";
import { changeAircraftPage } from "../../../handlers/aircraftHandlers.js";
import "../../CSS/AircraftPage.css";

export default function AircraftPage({
  aircraft,
  likedList,
  setLikedList,
  currentLikeColor,
  currentAircraftPage,
  setCurrentLikeColor,
  setCurrentAircraftPage,
  setCurrentOpenAircraftHero,
  search,
  setSearch,
  country,
  setCountry,
  role,
  setRole,
  status,
  setStatus,
  stealth,
  setStealth,
  sortBy,
  setSortBy,
}) {
  // one call does search + filter + sort + paginate + build filter options
  const {
    countries,
    roles,
    statuses,
    visibleAircraft,
    visiblePages,
    totalPages,
    currentPage,
    resultCount,
  } = getAircraftCatalogData(
    aircraft,
    { search, country, role, status, stealth, sortBy },
    currentAircraftPage,
  );

  // every filter change also resets to page 1. that's inside changeAircraftFilter
  const onFilterChange = (setter) => (event) =>
    changeAircraftFilter(event.target.value, setter, setCurrentAircraftPage);

  const filterSetters = {
    setSearch,
    setCountry,
    setRole,
    setStatus,
    setStealth,
    setSortBy,
  };

  return (
    <section className="aircraft-catalog">
      <h1>Aircraft</h1>

      <div className="aircraft-controls">
        <input
          type="search"
          placeholder="Search aircraft..."
          aria-label="Search aircraft"
          value={search}
          onChange={onFilterChange(setSearch)}
        />
        <select
          aria-label="Sort aircraft"
          value={sortBy}
          onChange={onFilterChange(setSortBy)}
        >
          <option value="name-asc">Name A-Z</option>
          <option value="name-desc">Name Z-A</option>
          <option value="newest">Newest</option>
          <option value="oldest">Oldest</option>
          <option value="fastest">Fastest</option>
        </select>
      </div>

      <div className="aircraft-filters">
        <select
          aria-label="Country"
          value={country}
          onChange={onFilterChange(setCountry)}
        >
          <option value="all">All countries</option>
          {countries.map((item) => (
            <option key={item} value={item}>
              {item}
            </option>
          ))}
        </select>

        <select
          aria-label="Role"
          value={role}
          onChange={onFilterChange(setRole)}
        >
          <option value="all">All roles</option>
          {roles.map((item) => (
            <option key={item} value={item}>
              {item}
            </option>
          ))}
        </select>

        <select
          aria-label="Status"
          value={status}
          onChange={onFilterChange(setStatus)}
        >
          <option value="all">All statuses</option>
          {statuses.map((item) => (
            <option key={item} value={item}>
              {item}
            </option>
          ))}
        </select>

        <select
          aria-label="Stealth"
          value={stealth}
          onChange={onFilterChange(setStealth)}
        >
          <option value="all">All aircraft</option>
          <option value="true">Stealth</option>
          <option value="false">Non-stealth</option>
        </select>

        <button
          type="button"
          onClick={() =>
            resetAircraftFilters(filterSetters, setCurrentAircraftPage)
          }
        >
          Reset
        </button>
      </div>

      <p className="aircraft-count">
        {resultCount} {resultCount === 1 ? "aircraft" : "aircraft"}
      </p>

      <div className="aircraft-pagination-top">
        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          pages={visiblePages}
          onPageChange={(page) =>
            changeAircraftPage(page, setCurrentAircraftPage)
          }
        />
      </div>

      {visibleAircraft.length > 0 ? (
        <div id="aircraft-cards-container" className="aircraft-catalog-grid">
          {visibleAircraft.map((jet) => (
            <AircraftCard
              key={jet.id}
              jet={jet}
              likedList={likedList}
              setLikedList={setLikedList}
              currentLikeColor={currentLikeColor}
              setCurrentLikeColor={setCurrentLikeColor}
              setCurrentOpenAircraftHero={setCurrentOpenAircraftHero}
            />
          ))}
        </div>
      ) : (
        <p className="aircraft-no-results">No aircraft match your filters.</p>
      )}

      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        pages={visiblePages}
        onPageChange={(page) =>
          changeAircraftPage(page, setCurrentAircraftPage)
        }
      />
    </section>
  );
}
