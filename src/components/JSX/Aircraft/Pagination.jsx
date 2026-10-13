// shows Prev / page numbers / Next. hidden when there's only one page
export default function Pagination({
  currentPage,
  totalPages,
  pages,
  onPageChange,
}) {
  if (totalPages <= 1) return null;

  return (
    <div className="aircraft-pagination">
      <button
        type="button"
        disabled={currentPage === 1}
        onClick={() => onPageChange(currentPage - 1)}
      >
        Prev
      </button>

      {pages.map((page, index) =>
        page === "..." ? (
          // dots aren't clickable
          <span key={`dots-${index}`}>...</span>
        ) : (
          <button
            type="button"
            key={page}
            className={page === currentPage ? "active" : ""}
            aria-current={page === currentPage ? "page" : undefined}
            onClick={() => onPageChange(page)}
          >
            {page}
          </button>
        ),
      )}

      <button
        type="button"
        disabled={currentPage === totalPages}
        onClick={() => onPageChange(currentPage + 1)}
      >
        Next
      </button>
    </div>
  );
}
