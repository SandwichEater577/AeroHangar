import { useState } from "react";
import AircraftCard from "./AircraftCard.jsx";
import "../../CSS/AircraftPage.css";

const AIRCRAFT_PER_PAGE = 4;

function getVisiblePages(totalPages, currentPage) {
  if (totalPages <= 7) {
    return Array.from({ length: totalPages }, (_, index) => index + 1);
  }

  const pages = [1, 2, currentPage - 1, currentPage, currentPage + 1, totalPages - 1, totalPages]
    .filter((page) => page >= 1 && page <= totalPages);
  const sorted = [...new Set(pages)].sort((a, b) => a - b);
  const result = [];

  sorted.forEach((page, index) => {
    if (index > 0) {
      const gap = page - sorted[index - 1];
      if (gap === 2) result.push(page - 1);
      if (gap > 2) result.push("...");
    }
    result.push(page);
  });

  return result;
}

export default function AircraftPage({
  aircraft,
  likedList,
  setLikedList,
  currentLikeColor,
  currentAircraftPage,
  setCurrentLikeColor,
  setCurrentAircraftPage,
  setCurrentOpenAircraftHero,
}) {
  const [search, setSearch] = useState("");
  const [country, setCountry] = useState("all");
  const [role, setRole] = useState("all");
  const [status, setStatus] = useState("all");
  const [stealth, setStealth] = useState("all");
  const [sortBy, setSortBy] = useState("name-asc");

  const countries = [...new Set(aircraft.map((jet) => jet.country).filter(Boolean))].sort();
  const roles = [...new Set(aircraft.map((jet) => jet.role).filter(Boolean))].sort();
  const statuses = [...new Set(aircraft.map((jet) => jet.status).filter(Boolean))].sort();

  function changeFilter(setter, value) {
    setter(value);
    setCurrentAircraftPage("1");
  }

  function resetFilters() {
    setSearch("");
    setCountry("all");
    setRole("all");
    setStatus("all");
    setStealth("all");
    setSortBy("name-asc");
    setCurrentAircraftPage("1");
  }

  const searchTerm = search.trim().toLowerCase();
  const filteredAircraft = aircraft.filter((jet) => {
    const searchableText = [jet.name, jet.nickname, jet.manufacturer]
      .filter(Boolean)
      .join(" ")
      .toLowerCase();

    return (
      searchableText.includes(searchTerm) &&
      (country === "all" || jet.country === country) &&
      (role === "all" || jet.role === role) &&
      (status === "all" || jet.status === status) &&
      (stealth === "all" || String(Boolean(jet.stealth)) === stealth)
    );
  });

  const sortedAircraft = [...filteredAircraft].sort((a, b) => {
    if (sortBy === "name-desc") return b.name.localeCompare(a.name, undefined, { numeric: true });
    if (sortBy === "newest") return Number(b.birthDate) - Number(a.birthDate);
    if (sortBy === "oldest") return Number(a.birthDate) - Number(b.birthDate);
    if (sortBy === "fastest") return Number(b.maxSpeed) - Number(a.maxSpeed);
    return a.name.localeCompare(b.name, undefined, { numeric: true });
  });

  const totalPages = Math.ceil(sortedAircraft.length / AIRCRAFT_PER_PAGE);
  const currentPage = Math.min(
    Math.max(Number(currentAircraftPage) || 1, 1),
    Math.max(totalPages, 1),
  );
  const startIndex = (currentPage - 1) * AIRCRAFT_PER_PAGE;
  const visibleAircraft = sortedAircraft.slice(startIndex, startIndex + AIRCRAFT_PER_PAGE);
  const visiblePages = getVisiblePages(totalPages, currentPage);
  const hasFilters = Boolean(search.trim()) ||
    country !== "all" || role !== "all" || status !== "all" || stealth !== "all" || sortBy !== "name-asc";

  function changePage(page) {
    if (page >= 1 && page <= totalPages) {
      setCurrentAircraftPage(String(page));
    }
  }

  return (
    <section className="aircraft-catalog">
      <div className="aircraft-catalog-heading">
        <div>
          <span className="aircraft-catalog-eyebrow">AEROHANGAR / COLLECTION</span>
          <h1>Aircraft Catalog</h1>
          <p>Explore the aircraft in your hangar.</p>
        </div>
        <span className="aircraft-catalog-total">{aircraft.length} AIRCRAFT</span>
      </div>

      <div className="aircraft-catalog-toolbar">
        <label className="aircraft-catalog-search">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
            <circle cx="10.8" cy="10.8" r="6.8" />
            <path d="m16 16 5 5" />
          </svg>
          <input
            type="search"
            value={search}
            placeholder="Search aircraft, nickname, manufacturer..."
            onChange={(event) => changeFilter(setSearch, event.target.value)}
            aria-label="Search aircraft"
          />
        </label>

        <label className="aircraft-catalog-sort">
          <span>SORT BY</span>
          <select value={sortBy} onChange={(event) => changeFilter(setSortBy, event.target.value)}>
            <option value="name-asc">Name: A–Z</option>
            <option value="name-desc">Name: Z–A</option>
            <option value="newest">First flight: newest</option>
            <option value="oldest">First flight: oldest</option>
            <option value="fastest">Max speed: fastest</option>
          </select>
        </label>
      </div>

      <div className="aircraft-catalog-filters">
        <div className="aircraft-catalog-filters-top">
          <span className="aircraft-catalog-filter-title">FILTER AIRCRAFT</span>
          <button type="button" onClick={resetFilters} disabled={!hasFilters}>
            Clear all <span aria-hidden="true">×</span>
          </button>
        </div>

        <div className="aircraft-catalog-filter-grid">
          <label>
            <span>Country</span>
            <select value={country} onChange={(event) => changeFilter(setCountry, event.target.value)}>
              <option value="all">All countries</option>
              {countries.map((item) => <option key={item} value={item}>{item}</option>)}
            </select>
          </label>

          <label>
            <span>Role</span>
            <select value={role} onChange={(event) => changeFilter(setRole, event.target.value)}>
              <option value="all">All roles</option>
              {roles.map((item) => <option key={item} value={item}>{item}</option>)}
            </select>
          </label>

          <label>
            <span>Status</span>
            <select value={status} onChange={(event) => changeFilter(setStatus, event.target.value)}>
              <option value="all">All statuses</option>
              {statuses.map((item) => <option key={item} value={item}>{item}</option>)}
            </select>
          </label>

          <label>
            <span>Stealth</span>
            <select value={stealth} onChange={(event) => changeFilter(setStealth, event.target.value)}>
              <option value="all">All aircraft</option>
              <option value="true">Stealth only</option>
              <option value="false">Non-stealth only</option>
            </select>
          </label>
        </div>
      </div>

      <div className="aircraft-catalog-results">
        <span><strong>{sortedAircraft.length}</strong> matching aircraft</span>
        {hasFilters && <span>Filters applied</span>}
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
        <div className="aircraft-catalog-empty">
          <span className="aircraft-catalog-empty-icon" aria-hidden="true">✈</span>
          <h2>No aircraft found</h2>
          <p>Try changing your search or removing some filters.</p>
          <button type="button" onClick={resetFilters}>Reset filters</button>
        </div>
      )}

      {totalPages > 0 && (
        <div className="aircraft-catalog-pagination">
          <span className="aircraft-catalog-pagination-info">
            Showing <strong>{startIndex + 1}–{Math.min(startIndex + AIRCRAFT_PER_PAGE, sortedAircraft.length)}</strong> of <strong>{sortedAircraft.length}</strong>
          </span>

          <nav className="aircraft-catalog-page-controls" aria-label="Aircraft pagination">
            <button type="button" className="aircraft-catalog-page-arrow" disabled={currentPage === 1} onClick={() => changePage(currentPage - 1)}>
              <span aria-hidden="true">←</span> Prev
            </button>

            {visiblePages.map((page, index) => page === "..." ? (
              <span className="aircraft-catalog-page-ellipsis" key={`ellipsis-${index}`}>…</span>
            ) : (
              <button
                type="button"
                key={page}
                className={`aircraft-catalog-page-number${page === currentPage ? " is-active" : ""}`}
                aria-current={page === currentPage ? "page" : undefined}
                onClick={() => changePage(page)}
              >
                {page}
              </button>
            ))}

            <button type="button" className="aircraft-catalog-page-arrow" disabled={currentPage === totalPages} onClick={() => changePage(currentPage + 1)}>
              Next <span aria-hidden="true">→</span>
            </button>
          </nav>
        </div>
      )}
    </section>
  );
}
