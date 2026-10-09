import "../../CSS/Dialog.css";

export default function Dialog({
  open,
  title,
  children,
  onClose,
  onConfirm,
  confirmText = "Confirm",
}) {
  if (!open) return null;

  return (
    <div className="dialog-background">
      <div className="dialog-box" role="dialog" aria-modal="true" aria-label={title}>
        <h2>{title}</h2>
        <div className="dialog-content">{children}</div>
        <div className="dialog-buttons">
          <button type="button" onClick={onClose}>
            {onConfirm ? "Cancel" : "Close"}
          </button>
          {onConfirm && (
            <button type="button" onClick={onConfirm}>
              {confirmText}
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
