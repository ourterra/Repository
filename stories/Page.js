import React from 'react';
import PropTypes from 'prop-types';

import { Header } from './Header';
import './page.css';

export const Page = ({ user, onLogin, onLogout, onCreateAccount }) => (
  <article>
    <Header user={user} onLogin={onLogin} onLogout={onLogout} onCreateAccount={onCreateAccount} />

    <section>
      <h1>DEUTSCHLAND Seite in Storybook</h1>
      <p>
        Deutschland gehört geologisch zu Westeuropa, das heißt zu jenem Teil des Kontinents,
        der dem präkambrisch konsolidierten „Ur-Europa“ (Osteuropa einschließlich eines Großteils Skandinaviens,
          vgl. Baltica) erst im Verlauf des Phanerozoikums sukzessive durch Kontinent-Kontinent-Kollisionen
          (Gebirgsbildungen) angegliedert wurde.{' '}
        <a href="https://de.wikipedia.org/wiki/Deutschland" target="_blank" rel="noopener noreferrer">
          <strong><h4>Deutschland auf WIKI</h4></strong>
        </a>{' '}
        An Deutschland grenzen neun Staaten,
        es hat Anteil an der Nord- und Ostsee im Norden sowie dem Bodensee und den Alpen im Süden.
      </p>
      <p>
        Es liegt in der gemäßigten Klimazone und verfügt über sechzehn National- und über hundert Naturparks.
        Bundeshauptstadt sowie bevölkerungsreichste deutsche Stadt ist Berlin. Weitere Metropolen mit
        mehr als einer Million Einwohnern sind Hamburg, München und Köln, der größte Ballungsraum ist das
        Ruhrgebiet, Frankfurt am Main ist als deutsches Finanzzentrum international von Bedeutung.
      </p>
      <ul>
        <li>
          Deutschlands Bevölkerung hat mit 1,57 Kindern pro Frau (2018)
          eine vergleichsweise niedrige Geburtenrate, die jedoch in den 2010er-Jahren leicht anstieg.
        </li>
        <li>
          Auf dem Gebiet des heutigen Deutschlands ist die
          Anwesenheit von Menschen vor 500.000 Jahren durch Funde des Homo heidelbergensis,
          des Neandertalers sowie einiger der ältesten Kunstwerke der Menschheit aus
          der späteren Altsteinzeit nachgewiesen.
        </li>
      </ul>
      <p>
        Deutschland ist Gründungsmitglied der
        <a href="https://de.wikipedia.org/wiki/Europ%C3%A4ische_Union" target="_blank" rel="noopener noreferrer">
       Europäischen Union
        </a> sowie deren bevölkerungsreichstes Land.
        Mit 18 anderen EU-Mitgliedstaaten bildet es eine Währungsunion, die Eurozone. {' '}

        Die naturräumlichen Großregionen sind von Nord nach Süd: das Norddeutsche Tiefland, {' '}
        <a href="https://de.wikipedia.org/wiki/Norddeutsches_Tiefland" target="_blank" rel="noopener noreferrer">
          Norddeutsche Tiefland
        </a>
         die Mittelgebirgszone und das Alpenvorland mit den Alpen.
      </p>
      <div className="tip-wrapper">
        <span className="tip">Tip</span> Nehmen Sie sich täglich 10-15 Minuten Zeit,
        um WIKI zu lesen{' '}
        <svg width="10" height="10" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
          <g fill="none" fillRule="evenodd">
            <path
              d="M1.5 5.2h4.8c.3 0 .5.2.5.4v5.1c-.1.2-.3.3-.4.3H1.4a.5.5 0 01-.5-.4V5.7c0-.3.2-.5.5-.5zm0-2.1h6.9c.3 0 .5.2.5.4v7a.5.5 0 01-1 0V4H1.5a.5.5 0 010-1zm0-2.1h9c.3 0 .5.2.5.4v9.1a.5.5 0 01-1 0V2H1.5a.5.5 0 010-1zm4.3 5.2H2V10h3.8V6.2z"
              id="a"
              fill="#999"
            />
          </g>
        </svg>
        und Ihr Wissen zu verbessern)
      </div>
    </section>
  </article>
);
Page.propTypes = {
  user: PropTypes.shape({}),
  onLogin: PropTypes.func.isRequired,
  onLogout: PropTypes.func.isRequired,
  onCreateAccount: PropTypes.func.isRequired,
};

Page.defaultProps = {
  user: null,
};
