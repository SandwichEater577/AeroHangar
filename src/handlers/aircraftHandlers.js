// adds, edits, deletes. all three update the same set of states
export function createAircraftStateHandlers({ setAircraft, setNewAircraftList, setLikedList }) {
    return {
        addAircraft: (newAircraft) => {
            setAircraft((current) => [...current, newAircraft]);
            setNewAircraftList((current) => [...current, newAircraft]);
        },

        editAircraft: (edited) => {
            // replace by id. map keeps the order the same as before
            setAircraft((current) => current.map((a) => (a.id === edited.id ? edited : a)));
            setNewAircraftList((current) => current.map((a) => (a.id === edited.id ? edited : a)));
        },

        deleteAircraft: (id) => {
            setAircraft((current) => current.filter((a) => a.id !== id));
            // also drop it from likes, otherwise the like count stays wrong
            setLikedList((current) => current.filter((likedId) => likedId !== id));
            setNewAircraftList((current) => current.filter((a) => a.id !== id));
        },
    };
}

// returns an object of errors. empty object = form is fine
export function validateAircraftForm(draft, isImageLoading) {
    const errors = {};

    if (!draft.name.trim()) errors.name = "Name is required.";
    if (!draft.nickname.trim()) errors.nickname = "Nickname is required.";
    if (!draft.manufacturer.trim()) errors.manufacturer = "Manufacturer is required.";
    if (!draft.country) errors.country = "Country is required.";
    if (!draft.role) errors.role = "Role is required.";
    if (!draft.aircraftType) errors.aircraftType = "Aircraft type is required.";
    if (!draft.status) errors.status = "Status is required.";
    if (!draft.engineType) errors.engineType = "Engine type is required.";

    const year = Number(draft.birthDate);
    const currentYear = new Date().getFullYear();
    if (draft.birthDate === "") {
        errors.birthDate = "First flight year is required.";
    } else if (!Number.isInteger(year) || year < 1903 || year > currentYear) {
        errors.birthDate = `Enter a year between 1903 and ${currentYear}.`;
    }

    const engines = Number(draft.engines);
    if (draft.engines === "" || !Number.isInteger(engines) || engines < 0 || engines > 12) {
        errors.engines = "Enter a whole number between 0 and 12.";
    }

    const speed = Number(draft.maxSpeed);
    if (!draft.maxSpeed || !Number.isFinite(speed) || speed <= 0 || speed > 10000) {
        errors.maxSpeed = "Enter a speed greater than 0 and up to 10000 km/h.";
    }

    if (isImageLoading) {
        errors.png = "Wait until the image finishes loading.";
    } else if (!draft.png) {
        errors.png = "Choose an aircraft image.";
    }

    return errors;
}

// stopPropagation so clicking the heart doesn't also open the aircraft card
export function handleAircraftLike(event, aircraftId, isLiked, setLikedList) {
    event.stopPropagation();
    setLikedList((current) => {
        if (isLiked) return current.filter((id) => id !== aircraftId);
        return [...current, aircraftId];
    });
}

export function handleDeleteAircraft(aircraftId, deleteAircraft) {
    deleteAircraft(aircraftId);
}

export function openAircraftHero(id, setCurrentOpenAircraftHero) {
    setCurrentOpenAircraftHero(id);
}

// null = nothing open. was 0 before but 0 is a valid id
export function closeAircraftHero(setCurrentOpenAircraftHero) {
    setCurrentOpenAircraftHero(null);
}

// always store the page as a string, since it comes from a select or number
export function changeAircraftPage(page, setCurrentAircraftPage) {
    setCurrentAircraftPage(page.toString());
}

export function changeProfilePage(page, setCurrentProfilePage) {
    setCurrentProfilePage(page.toString());
}

export function handleHeaderNavigation(page, currentPage, setCurrentPage, setCurrentProfilePage) {
    // leaving profile resets the profile tab back to page 1
    if (currentPage === "profile" && page !== "profile") {
        setCurrentProfilePage("1");
    }
    if (currentPage !== page) {
        setCurrentPage(page);
    }
}

export function handleLogin(setIsLoggedIn) {
    setIsLoggedIn(true);
}