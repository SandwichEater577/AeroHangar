# AeroHangar - Remaining Work

## 1. Finish Edit and Delete

- [ ] Reuse the Add Aircraft form for editing instead of using `window.prompt`.
- [ ] Preserve the aircraft `id` when saving edits.
- [ ] Add Cancel for edit mode without changing the aircraft.
- [ ] Create a reusable `Dialog` component.
- [ ] Use the Dialog for Delete confirmation with Cancel and Delete buttons.
- [ ] Use the same Dialog for a second confirmation, such as discarding edits.
- [ ] After deleting the last item on a page, move to the previous valid page.
- [ ] Close the aircraft details view when its aircraft is deleted.

## 2. Add Search, Filter, and Sort

- [ ] Add search by name, nickname, and/or manufacturer.
- [ ] Add a filter with an `All` option, such as country, role, or status.
- [ ] Add sorting, for example Name A-Z, Name Z-A, oldest first flight, and newest first flight.
- [ ] Apply search, filter, and sort before pagination.
- [ ] Reset the page to 1 when search, filter, or sort changes.
- [ ] Add a clear-filters action and an empty-results message.

## 3. Extract Pagination

- [ ] Create `src/components/JSX/Aircraft/Pagination.jsx`.
- [ ] Give it `currentPage`, `totalPages`, and `onPageChange` props.
- [ ] Handle zero results without rendering invalid page buttons.

## 4. Clean Up Documentation

- [ ] Fix the browser title in `index.html` to `<PAI><S01> Projekt`.
- [ ] Remove the leftover `# NesChat` line from `README.md`.
- [ ] Update `README.md` with the actual finished features and usage instructions.
- [ ] Remove unused pagination data such as `whenNextAircraftShouldCreateNewPage` if it is no longer needed.

## 5. Final Verification

- [ ] Run `npm run lint`.
- [ ] Run `npm run build`.
- [ ] Test Add, validation, Edit, Cancel, Delete confirmation, search, filter, sort, pagination, empty states, and profile pages in the browser.
