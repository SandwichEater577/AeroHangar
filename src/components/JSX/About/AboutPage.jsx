import Dialog from "../Shared/Dialog.jsx";
import { openDialog, closeDialog } from "../../../handlers/dialogHandlers.js";
import "../../CSS/About.css";

export default function AboutPage({ showStats, setShowStats }) {
  return (
    <section className="about-page">
      <h1>About AeroHangar</h1>
      <p>This is a project of Mikey Bones for a class.</p>
      <p>
        AeroHangar is a small aircraft catalog. You can browse aircraft, search,
        filter, sort, like them and add your own.
      </p>
      <p>Made with React, JavaScript, CSS and Vite.</p>

      <button type="button" onClick={() => openDialog(setShowStats)}>
        Code stats
      </button>

      <Dialog
        open={showStats}
        title="Code stats"
        onClose={() => closeDialog(setShowStats)}
      >
        <p>JavaScript + JSX: 2924 lines</p>
        <p>CSS: 1793 lines</p>
        <p>HTML: 16 lines</p>
        <p>JSON (package.json): 27 lines</p>
        <p>Total: 4760 lines</p>
        <small>
          Includes blank lines and eslint.config.js. Excludes package-lock.json and assets.
        </small>
      </Dialog>
    </section>
  );
}
