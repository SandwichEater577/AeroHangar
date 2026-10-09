import { handleDeleteAircraft } from "./aircraftHandlers.js";

export function openDialog(setOpen) {
    setOpen(true);
}

export function closeDialog(setOpen) {
    setOpen(false);
}

export function confirmDeleteAircraft(id, deleteAircraft, setOpen) {
    handleDeleteAircraft(id, deleteAircraft);
    setOpen(false);
}