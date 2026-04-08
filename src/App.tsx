import { Link, Route, Routes } from 'react-router-dom';
import { intakeTranslations } from './i18n/parentIntakeTranslations';
import { ParentIntakePage } from './features/parent-intake/ParentIntakePage';
import './features/parent-intake/ParentIntake.css';

function StaffPortalHome(): JSX.Element {
  const labels = intakeTranslations.en;

  return (
    <section className="page-shell">
      <div className="kiosk-panel">
        <h1>BSOM Intake Portal</h1>
        <p className="lead">
          Existing staff workflows stay available. Launch a separate family kiosk
          experience below.
        </p>
        <div className="btn-group">
          <Link className="btn" to="/parent-intake">
            {labels.parentIntakeMode}
          </Link>
        </div>
      </div>
    </section>
  );
}

export default function App(): JSX.Element {
  return (
    <Routes>
      <Route path="/" element={<StaffPortalHome />} />
      <Route path="/parent-intake" element={<ParentIntakePage />} />
    </Routes>
  );
}
