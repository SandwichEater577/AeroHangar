const aircraftPerPage = 4;

export function changeAircraftFilter(value, setValue, setCurrentAircraftPage) {
    setValue(value);
    // jump back to page 1, otherwise you'd be on page 3 of a 1-page result
    setCurrentAircraftPage("1");
}

export function resetAircraftFilters(setters, setCurrentAircraftPage) {
    setters.setSearch("");
    setters.setCountry("all");
    setters.setRole("all");
    setters.setStatus("all");
    setters.setStealth("all");
    setters.setSortBy("name-asc");
    setCurrentAircraftPage("1");
}

// builds the dropdown options by grabbing every unique value in that field
function getFilterOptions(aircraft, property) {
    return [...new Set(aircraft.map((jet) => jet[property]).filter(Boolean))].sort();
}

// search + all four filters, then sort. search is checked against name+nickname+manufacturer
function filterAndSortAircraft(aircraft, filters) {
    const search = filters.search.trim().toLowerCase();

    const filtered = aircraft.filter((jet) => {
        const text = [jet.name, jet.nickname, jet.manufacturer]
            .filter(Boolean)
            .join(" ")
            .toLowerCase();

        return (
            text.includes(search) &&
            (filters.country === "all" || jet.country === filters.country) &&
            (filters.role === "all" || jet.role === filters.role) &&
            (filters.status === "all" || jet.status === filters.status) &&
            (filters.stealth === "all" || String(Boolean(jet.stealth)) === filters.stealth)
        );
    });

    // sort in place. the slice is because sort mutates
    return filtered.sort((a, b) => {
        if (filters.sortBy === "name-desc") return b.name.localeCompare(a.name, undefined, { numeric: true });
        if (filters.sortBy === "newest") return Number(b.birthDate) - Number(a.birthDate);
        if (filters.sortBy === "oldest") return Number(a.birthDate) - Number(b.birthDate);
        if (filters.sortBy === "fastest") return Number(b.maxSpeed) - Number(a.maxSpeed);
        return a.name.localeCompare(b.name, undefined, { numeric: true });
    });
}

// short lists get shown in full. long lists show 1, 2, ..., current-1, current, current+1, ..., last-1, last
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
            if (gap === 2) result.push(page - 1);   // only 1 page missing, just show it
            if (gap > 2) result.push("...");        // 2+ missing, use dots
        }
        result.push(page);
    });

    return result;
}

export function getAircraftCatalogData(aircraft, filters, currentAircraftPage) {
    const filteredAircraft = filterAndSortAircraft(aircraft, filters);
    const totalPages = Math.ceil(filteredAircraft.length / aircraftPerPage);

    // clamp the page so deleting items doesn't leave you on an empty page
    const currentPage = Math.min(
        Math.max(Number(currentAircraftPage) || 1, 1),
        Math.max(totalPages, 1),
    );

    const start = (currentPage - 1) * aircraftPerPage;

    return {
        countries: getFilterOptions(aircraft, "country"),
        roles: getFilterOptions(aircraft, "role"),
        statuses: getFilterOptions(aircraft, "status"),
        visibleAircraft: filteredAircraft.slice(start, start + aircraftPerPage),
        visiblePages: getVisiblePages(totalPages, currentPage),
        totalPages,
        currentPage,
        resultCount: filteredAircraft.length,
        hasFilters:
            filters.search.trim() !== "" ||
            filters.country !== "all" ||
            filters.role !== "all" ||
            filters.status !== "all" ||
            filters.stealth !== "all" ||
            filters.sortBy !== "name-asc",
    };
}