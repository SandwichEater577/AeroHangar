const allowedImageTypes = [
    "image/png",
    "image/jpeg",
    "image/webp",
    "image/gif",
];

export function addAircraftToState(
    newAircraft,
    setAircraft,
    setNewAircraftList,
) {
    setAircraft((currentAircraft) => [...currentAircraft, newAircraft]);
    setNewAircraftList((currentNewAircraftList) => [
        ...currentNewAircraftList,
        newAircraft,
    ]);
}

export function editAircraftInState(
    editedAircraft,
    setAircraft,
    setNewAircraftList,
) {
    setAircraft((currentAircraft) =>
        currentAircraft.map((jet) =>
            jet.id === editedAircraft.id ? editedAircraft : jet,
        ),
    );

    setNewAircraftList((currentNewAircraftList) =>
        currentNewAircraftList.map((jet) =>
            jet.id === editedAircraft.id ? editedAircraft : jet,
        ),
    );
}

export function deleteAircraftFromState(
    id,
    setAircraft,
    setLikedList,
    setNewAircraftList,
) {
    setAircraft((currentAircraft) =>
        currentAircraft.filter((jet) => jet.id !== id),
    );
    setLikedList((currentLikedList) =>
        currentLikedList.filter((jetId) => jetId !== id),
    );
    setNewAircraftList((currentNewAircraftList) =>
        currentNewAircraftList.filter((jet) => jet.id !== id),
    );
}

export function createAircraftStateHandlers({
    setAircraft,
    setNewAircraftList,
    setLikedList,
}) {
    return {
        addAircraft: (newAircraft) =>
            addAircraftToState(newAircraft, setAircraft, setNewAircraftList),
        editAircraft: (editedAircraft) =>
            editAircraftInState(editedAircraft, setAircraft, setNewAircraftList),
        deleteAircraft: (id) =>
            deleteAircraftFromState(
                id,
                setAircraft,
                setLikedList,
                setNewAircraftList,
            ),
    };
}

export function handleImageChange(
    event,
    {
        imageReaderRef,
        imageFileInputRef,
        setIsImageLoading,
        setAddAircraftImageInput,
        setValidationErrors,
    },
) {
    const file = event.target.files?.[0];
    if (!file) return;

    if (imageReaderRef.current?.readyState === 1) {
        imageReaderRef.current.abort();
    }

    setIsImageLoading(false);
    setAddAircraftImageInput("");
    setValidationErrors((errors) => ({ ...errors, "aircraft-image": "" }));

    if (!allowedImageTypes.includes(file.type)) {
        setValidationErrors((errors) => ({
            ...errors,
            "aircraft-image": "Choose a PNG, JPG, WebP or GIF image.",
        }));
        event.target.value = "";
        return;
    }

    if (file.size > 5 * 1024 * 1024) {
        setValidationErrors((errors) => ({
            ...errors,
            "aircraft-image": "The image must be 5 MB or smaller.",
        }));
        event.target.value = "";
        return;
    }

    setIsImageLoading(true);
    const reader = new FileReader();
    imageReaderRef.current = reader;

    reader.onload = () => {
        if (imageReaderRef.current !== reader) return;
        setIsImageLoading(false);
        if (typeof reader.result === "string") {
            setAddAircraftImageInput(reader.result);
        } else {
            setValidationErrors((errors) => ({
                ...errors,
                "aircraft-image": "Could not read this image. Try another file.",
            }));
        }
    };

    reader.onerror = () => {
        if (imageReaderRef.current !== reader) return;
        setIsImageLoading(false);
        setValidationErrors((errors) => ({
            ...errors,
            "aircraft-image": "Could not read this image. Try another file.",
        }));
        if (imageFileInputRef.current) imageFileInputRef.current.value = "";
    };

    reader.readAsDataURL(file);
}

export function handleRemoveImage({
    imageReaderRef,
    imageFileInputRef,
    setIsImageLoading,
    setAddAircraftImageInput,
    setValidationErrors,
}) {
    if (imageReaderRef.current?.readyState === 1) {
        imageReaderRef.current.abort();
    }
    imageReaderRef.current = null;
    setIsImageLoading(false);
    setAddAircraftImageInput("");
    setValidationErrors((errors) => ({ ...errors, "aircraft-image": "" }));
    if (imageFileInputRef.current) imageFileInputRef.current.value = "";
}

export function handleInputChange(settingFunction, setValidationErrors) {
    return (event) => {
        settingFunction(event.target.value);
        const fieldId = event.target.id || event.target.name;
        if (fieldId) {
            setValidationErrors((currentErrors) => ({
                ...currentErrors,
                [fieldId]: "",
            }));
        }
    };
}

export function handleCheckboxChange(settingFunction) {
    return (event) => settingFunction(event.target.checked);
}

export function checkForAircraftValidation({
    fields,
    addAircraftImageInput,
    isImageLoading,
    setValidationErrors,
}) {
    const errors = {};
    const requiredFields = [
        ["aircraft-name", fields.name, "Name"],
        ["aircraft-nickname", fields.nickname, "Nickname"],
        ["aircraft-manufacturer", fields.manufacturer, "Manufacturer"],
        ["aircraft-country", fields.country, "Country"],
        ["aircraft-role", fields.role, "Role"],
        ["aircraft-type", fields.aircraftType, "Aircraft type"],
        ["aircraft-first-flight", fields.firstFlight, "First flight year"],
        ["aircraft-status", fields.status, "Status"],
        ["aircraft-engine-type", fields.engineType, "Engine type"],
        ["aircraft-engines", fields.engines, "Number of engines"],
        ["aircraft-max-speed", fields.maxSpeed, "Max speed"],
    ];

    for (const [fieldId, value, label] of requiredFields) {
        if (String(value ?? "").trim() === "") {
            errors[fieldId] = `${label} is required.`;
        }
    }

    const firstFlight = Number(fields.firstFlight);
    const currentYear = new Date().getFullYear();
    if (
        !errors["aircraft-first-flight"] &&
        (!Number.isInteger(firstFlight) || firstFlight < 1903 || firstFlight > currentYear)
    ) {
        errors["aircraft-first-flight"] =
            `Enter a year between 1903 and ${currentYear}.`;
    }

    const engines = Number(fields.engines);
    if (
        !errors["aircraft-engines"] &&
        (!Number.isInteger(engines) || engines < 0 || engines > 12)
    ) {
        errors["aircraft-engines"] = "Enter a whole number between 0 and 12.";
    }

    const maxSpeed = Number(fields.maxSpeed);
    if (
        !errors["aircraft-max-speed"] &&
        (!Number.isFinite(maxSpeed) || maxSpeed <= 0 || maxSpeed > 10000)
    ) {
        errors["aircraft-max-speed"] =
            "Enter a speed greater than 0 and up to 10000 km/h.";
    }

    if (isImageLoading) {
        errors["aircraft-image"] = "Wait until the image finishes loading.";
    } else if (!addAircraftImageInput) {
        errors["aircraft-image"] = "Choose an aircraft image.";
    }

    setValidationErrors(errors);
    return Object.keys(errors).length === 0;
}

export function handleAddAircraft({
    fields,
    aircraft,
    addAircraft,
    setValidationErrors,
    resetInputs,
    imageInput,
    isImageLoading,
    handleRemoveImage,
}) {
    if (
        !checkForAircraftValidation({
            fields,
            addAircraftImageInput: imageInput,
            isImageLoading,
            setValidationErrors,
        })
    ) {
        return;
    }

    const nextId =
        aircraft.reduce(
            (highestId, currentAircraft) => Math.max(highestId, currentAircraft.id),
            0,
        ) + 1;

    addAircraft({
        id: nextId,
        name: fields.name.trim(),
        nickname: fields.nickname.trim(),
        manufacturer: fields.manufacturer.trim(),
        country: fields.country,
        role: fields.role,
        aircraftType: fields.aircraftType,
        birthDate: Number(fields.firstFlight),
        status: fields.status,
        engineType: fields.engineType,
        engines: Number(fields.engines),
        maxSpeed: Number(fields.maxSpeed),
        stealth: fields.stealth,
        png: imageInput,
        likes: [],
    });

    resetInputs();
    handleRemoveImage();
}

export function resetAddAircraftInputs(inputSetters) {
    inputSetters.name("");
    inputSetters.nickname("");
    inputSetters.manufacturer("");
    inputSetters.country("");
    inputSetters.role("");
    inputSetters.aircraftType("");
    inputSetters.firstFlight("");
    inputSetters.status("");
    inputSetters.engineType("");
    inputSetters.engines("");
    inputSetters.maxSpeed("");
    inputSetters.stealth(false);
}

export function createAddAircraftHandlers({
    fields,
    aircraft,
    addAircraft,
    imageHandlerOptions,
    imageInput,
    isImageLoading,
    setValidationErrors,
    inputSetters,
}) {
    const handleImageChangeForForm = (event) =>
        handleImageChange(event, imageHandlerOptions);
    const handleRemoveImageForForm = () => handleRemoveImage(imageHandlerOptions);

    return {
        handleImageChange: handleImageChangeForForm,
        handleRemoveImage: handleRemoveImageForForm,
        handleFieldChange: (settingFunction) =>
            handleInputChange(settingFunction, setValidationErrors),
        handleMaxSpeedChange: handleInputChange(
            fields.setMaxSpeed,
            setValidationErrors,
        ),
        handleStealthChange: handleCheckboxChange(fields.setStealth),
        handleAddAircraft: () =>
            handleAddAircraft({
                fields,
                aircraft,
                addAircraft,
                setValidationErrors,
                resetInputs: () => resetAddAircraftInputs(inputSetters),
                imageInput,
                isImageLoading,
                handleRemoveImage: handleRemoveImageForForm,
            }),
    };
}

export function handleAircraftLike(event, aircraftId, isLiked, setLikedList) {
    event.stopPropagation();
    const nextIsLiked = !isLiked;

    setLikedList((previousLikedList) => {
        if (nextIsLiked) {
            return previousLikedList.includes(aircraftId)
                ? previousLikedList
                : [...previousLikedList, aircraftId];
        }

        return previousLikedList.filter((likedAircraftId) => likedAircraftId !== aircraftId);
    });
}

export function handleEditAircraft(aircraft, editAircraft) {
    const name = window.prompt("Aircraft name", aircraft.name);
    if (name === null) return;

    const nickname = window.prompt("Aircraft nickname", aircraft.nickname);
    if (nickname === null) return;

    editAircraft({
        ...aircraft,
        name: name.trim() || aircraft.name,
        nickname: nickname.trim() || aircraft.nickname,
    });
}

export function handleDeleteAircraft(aircraftId, deleteAircraft) {
    deleteAircraft(aircraftId);
}

export function openAircraftHero(id, setCurrentOpenAircraftHero) {
    setCurrentOpenAircraftHero(id);
}

export function closeAircraftHero(setCurrentOpenAircraftHero) {
    setCurrentOpenAircraftHero(0);
}

export function changeAircraftPage(page, setCurrentAircraftPage) {
    setCurrentAircraftPage(page.toString());
}

export function changeProfilePage(page, setCurrentProfilePage) {
    setCurrentProfilePage(page.toString());
}

export function handleHeaderNavigation(
    page,
    currentPage,
    setCurrentPage,
    setCurrentProfilePage,
) {
    if (currentPage === "profile" && page !== "profile") {
        setCurrentProfilePage("1");
        setCurrentPage(page);
    } else if (currentPage !== page) {
        setCurrentPage(page);
    }
}

export function handleLogin(setIsLoggedIn) {
    setIsLoggedIn(true);
}