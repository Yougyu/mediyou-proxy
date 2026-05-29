export default function handler(req, res) {
  const html = `<!DOCTYPE html>
<html lang="de">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Datenschutzerklärung – MediYou</title>
  <style>
    *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
    body {
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
      background: #f9fafb;
      color: #111827;
      line-height: 1.7;
    }
    header {
      background: #16a34a;
      color: #fff;
      padding: 32px 24px 28px;
      text-align: center;
    }
    header h1 { font-size: 1.6rem; font-weight: 700; letter-spacing: -0.3px; }
    header p  { margin-top: 6px; font-size: 0.875rem; opacity: 0.85; }
    main {
      max-width: 780px;
      margin: 40px auto;
      padding: 0 20px 60px;
    }
    h2 {
      font-size: 1.1rem;
      font-weight: 700;
      color: #16a34a;
      margin: 36px 0 10px;
      padding-bottom: 6px;
      border-bottom: 2px solid #d1fae5;
    }
    h3 {
      font-size: 0.95rem;
      font-weight: 600;
      color: #374151;
      margin: 20px 0 8px;
    }
    p  { margin-bottom: 12px; font-size: 0.93rem; color: #374151; }
    ul { margin: 8px 0 12px 20px; }
    li { font-size: 0.93rem; color: #374151; margin-bottom: 5px; }
    a  { color: #16a34a; text-decoration: none; }
    a:hover { text-decoration: underline; }
    strong { color: #111827; }
    table {
      width: 100%;
      border-collapse: collapse;
      margin: 14px 0 20px;
      font-size: 0.88rem;
    }
    th {
      background: #f0fdf4;
      color: #166534;
      font-weight: 600;
      text-align: left;
      padding: 10px 12px;
      border: 1px solid #d1fae5;
    }
    td {
      padding: 9px 12px;
      border: 1px solid #e5e7eb;
      vertical-align: top;
    }
    tr:nth-child(even) td { background: #f9fafb; }
    .badge {
      display: inline-block;
      background: #d1fae5;
      color: #166534;
      font-size: 0.75rem;
      font-weight: 600;
      padding: 2px 8px;
      border-radius: 9999px;
      margin-left: 8px;
      vertical-align: middle;
    }
    footer {
      text-align: center;
      font-size: 0.8rem;
      color: #9ca3af;
      padding: 24px;
      border-top: 1px solid #e5e7eb;
    }
  </style>
</head>
<body>

<header>
  <h1>&#9679; MediYou — Datenschutzerklärung</h1>
  <p>Stand: Mai 2026 &nbsp;|&nbsp; Version 1.0</p>
</header>

<main>

  <h2>1. Verantwortlicher</h2>
  <p>
    Seongkyeom Kim<br />
    Tübingen, Deutschland<br />
    E-Mail: <a href="mailto:tjd2937@gmail.com">tjd2937@gmail.com</a>
  </p>

  <h2>2. Übersicht der Datenverarbeitung</h2>
  <p>
    MediYou ist eine Gesundheits-App für iOS. Die App verarbeitet ausschließlich Daten,
    die Sie selbst eingeben. Es gibt kein Backend, keine zentrale Datenbank und kein
    Account-System. Die Nutzung der KI-Funktionen erfordert eine Internetverbindung;
    alle anderen Funktionen sind vollständig offline nutzbar.
  </p>

  <h2>3. Welche Daten werden verarbeitet?</h2>

  <h3>3.1 Lokal gespeicherte Daten (AsyncStorage auf Ihrem Gerät)</h3>
  <p>
    Alle folgenden Daten werden ausschließlich lokal auf Ihrem iPhone gespeichert
    und verlassen das Gerät nur im Rahmen der unter Punkt&nbsp;4 beschriebenen KI-Anfragen:
  </p>
  <ul>
    <li><strong>Profildaten:</strong> Alter, Geschlecht, Größe, Gewicht, bekannte Erkrankungen</li>
    <li><strong>Medikamentendaten:</strong> Name, Dosierung, Einnahmezeiten, Einnahmeprotokoll</li>
    <li><strong>Symptome:</strong> Art, Schweregrad, Datum, KI-Analyseergebnisse</li>
    <li><strong>Blutbildwerte:</strong> Laborwerte, hochgeladene Bilder/PDFs, Analyseergebnisse</li>
    <li><strong>Diabetes-Daten:</strong> Blutzuckermessungen, Insulineinträge, Einstellungen, Augen- und Fußcheck-Fotos</li>
    <li><strong>Frauengesundheit:</strong> Zykluseinträge, Zykluseinstellungen, Verhütungsmittel, Pillen-Einnahmeprotokoll, Schwangerschaftsdaten</li>
    <li><strong>Aktivitätsdaten:</strong> Schritte, Sport-Einträge, Ziele</li>
    <li><strong>Vorsorgeuntersuchungen:</strong> Termine, Status, Erinnerungseinstellungen</li>
    <li><strong>Familienmitglieder:</strong> Namen, Relation, alle oben genannten Gesundheitsdaten je Mitglied</li>
    <li><strong>App-Einstellungen:</strong> Sprache, Theme, Schriftgröße, Benachrichtigungseinstellungen</li>
  </ul>
  <p>
    Diese Daten sind nur auf Ihrem Gerät gespeichert. Sie können sie jederzeit löschen,
    indem Sie die App deinstallieren oder die jeweiligen Einträge in der App löschen.
  </p>

  <h3>3.2 Daten, die an externe Dienste übertragen werden</h3>
  <h3>KI-Analysen via Claude API (Anthropic)</h3>
  <p>
    Für KI-gestützte Funktionen (Medikamenten-Analyse, Symptom-Check, Blutbild-Analyse,
    Zyklusanalyse, Wochenplan-Generierung u.&nbsp;a.) werden Teile Ihrer Gesundheitsdaten an
    die Claude API von Anthropic PBC übertragen. Die Übertragung erfolgt verschlüsselt
    (HTTPS) über einen Vercel-Proxy-Server.
  </p>
  <p><strong>Übertragene Datenkategorien je nach genutzter Funktion:</strong></p>
  <ul>
    <li>Symptome und deren Verlauf</li>
    <li>Medikamentenliste und Dosierungen</li>
    <li>Zyklusdaten und Schwangerschaftsinformationen</li>
    <li>Blutbildwerte und -bilder (Base64-kodiert)</li>
    <li>Profildaten (Alter, Geschlecht, bekannte Erkrankungen)</li>
  </ul>
  <p>
    Anthropic verarbeitet diese Daten als Auftragsverarbeiter ausschließlich zur Bearbeitung
    Ihrer Anfrage. Anthropic speichert Eingabe-Daten standardmäßig für 30 Tage zu
    Trust&nbsp;&amp;&nbsp;Safety-Zwecken. Weitere Informationen:
    <a href="https://www.anthropic.com/privacy" target="_blank" rel="noopener">anthropic.com/privacy</a>
  </p>
  <p><strong>Hinweis:</strong> Vor der ersten KI-Anfrage werden Sie um Ihre ausdrückliche Einwilligung gebeten.</p>

  <h3>Arztsuche via Google Places API</h3>
  <p>
    Wenn Sie die Arztsuche-Funktion nutzen, werden Ihre aktuellen GPS-Koordinaten an die
    Google Places API übermittelt, um nahegelegene Ärzte, Apotheken und Notdienste zu finden.
    Die Datenschutzerklärung von Google gilt für diese Verarbeitung:
    <a href="https://policies.google.com/privacy" target="_blank" rel="noopener">policies.google.com/privacy</a>
  </p>

  <h2>4. Rechtsgrundlagen</h2>
  <p>Die Verarbeitung Ihrer personenbezogenen Daten erfolgt auf Basis Ihrer ausdrücklichen Einwilligung gemäß:</p>
  <ul>
    <li><strong>Art. 6 Abs. 1 lit. a DSGVO</strong> – Einwilligung für die allgemeine Datenverarbeitung</li>
    <li><strong>Art. 9 Abs. 2 lit. a DSGVO</strong> – Ausdrückliche Einwilligung für die Verarbeitung besonderer Kategorien personenbezogener Daten (Gesundheitsdaten)</li>
  </ul>
  <p>
    Sie erteilen diese Einwilligung beim ersten Start der App über den DSGVO-Einwilligungs-Dialog.
    Ohne Ihre Einwilligung werden keine Daten verarbeitet.
  </p>

  <h2>5. Weitergabe an Dritte</h2>
  <p>Eine Weitergabe Ihrer Daten an Dritte erfolgt <strong>nicht</strong>, mit folgenden Ausnahmen:</p>
  <table>
    <thead>
      <tr><th>Empfänger</th><th>Zweck</th><th>Rechtsgrundlage</th></tr>
    </thead>
    <tbody>
      <tr>
        <td>Anthropic PBC, San Francisco, USA</td>
        <td>KI-Analyse Ihrer Gesundheitsdaten</td>
        <td>Art. 6 Abs. 1 lit. a + Art. 9 Abs. 2 lit. a DSGVO</td>
      </tr>
      <tr>
        <td>Google LLC (nur bei Arztsuche)</td>
        <td>Standortbasierte Arztsuche</td>
        <td>Art. 6 Abs. 1 lit. a DSGVO</td>
      </tr>
    </tbody>
  </table>
  <p>Es gibt keine Werbepartner, Analytics-Dienste, Data Broker oder sonstige Drittempfänger.</p>

  <h2>6. Übermittlung in Drittländer</h2>
  <p>
    Bei der Nutzung der Claude API werden Ihre Daten an Anthropic PBC mit Sitz in den USA
    übermittelt. Die USA gelten datenschutzrechtlich als unsicheres Drittland. Die Übermittlung
    erfolgt auf Grundlage Ihrer ausdrücklichen Einwilligung nach Art. 49 Abs. 1 lit. a DSGVO.
    Sie werden vor der ersten KI-Anfrage ausdrücklich auf diese Übermittlung hingewiesen.
  </p>

  <h2>7. Speicherdauer</h2>
  <table>
    <thead>
      <tr><th>Datenkategorie</th><th>Speicherort</th><th>Speicherdauer</th></tr>
    </thead>
    <tbody>
      <tr>
        <td>Alle lokalen Gesundheitsdaten</td>
        <td>Ihr iPhone (AsyncStorage)</td>
        <td>Bis zur manuellen Löschung oder App-Deinstallation</td>
      </tr>
      <tr>
        <td>KI-Anfragedaten</td>
        <td>Anthropic-Server</td>
        <td>Bis zu 30 Tage (Trust &amp; Safety), danach gelöscht</td>
      </tr>
      <tr>
        <td>GPS-Koordinaten (Arztsuche)</td>
        <td>Google-Server</td>
        <td>Gemäß Google Datenschutzrichtlinien</td>
      </tr>
    </tbody>
  </table>

  <h2>8. Ihre Rechte als betroffene Person</h2>
  <p>Sie haben gegenüber uns folgende Rechte bezüglich Ihrer personenbezogenen Daten:</p>
  <ul>
    <li><strong>Auskunftsrecht (Art. 15 DSGVO):</strong> Sie haben das Recht, Auskunft über die von uns verarbeiteten personenbezogenen Daten zu erhalten.</li>
    <li><strong>Berichtigungsrecht (Art. 16 DSGVO):</strong> Sie haben das Recht, unrichtige Daten berichtigen zu lassen.</li>
    <li><strong>Löschungsrecht (Art. 17 DSGVO):</strong> Sie haben das Recht, die Löschung Ihrer Daten zu verlangen. Da alle Daten lokal auf Ihrem Gerät gespeichert sind, können Sie diese durch Löschen einzelner Einträge in der App oder durch Deinstallation der App vollständig löschen.</li>
    <li><strong>Einschränkungsrecht (Art. 18 DSGVO):</strong> Sie haben das Recht, die Einschränkung der Verarbeitung Ihrer Daten zu verlangen.</li>
    <li><strong>Datenübertragbarkeit (Art. 20 DSGVO):</strong> Sie haben das Recht, Ihre Daten in einem strukturierten, gängigen Format zu erhalten.</li>
    <li><strong>Widerspruchsrecht (Art. 21 DSGVO):</strong> Sie haben das Recht, der Verarbeitung Ihrer Daten zu widersprechen.</li>
    <li><strong>Widerrufsrecht (Art. 7 Abs. 3 DSGVO):</strong> Sie können Ihre Einwilligung zur Datenverarbeitung jederzeit mit Wirkung für die Zukunft widerrufen.</li>
  </ul>
  <p>
    <strong>So widerrufen Sie Ihre Einwilligung:</strong> Gehen Sie in der App zu
    Einstellungen → Rechtliches → Einwilligung widerrufen. Die KI-Funktionen werden danach
    deaktiviert. Alle lokal gespeicherten Daten bleiben erhalten, bis Sie sie manuell löschen.
  </p>
  <p>Zur Ausübung Ihrer Rechte wenden Sie sich an: <a href="mailto:tjd2937@gmail.com">tjd2937@gmail.com</a></p>

  <h2>9. Beschwerderecht</h2>
  <p>
    Sie haben das Recht, sich bei einer Datenschutz-Aufsichtsbehörde zu beschweren.
    Für Baden-Württemberg:
  </p>
  <p>
    Der Landesbeauftragte für den Datenschutz und die Informationsfreiheit Baden-Württemberg<br />
    Postfach 10 29 32, 70025 Stuttgart<br />
    <a href="https://www.baden-wuerttemberg.datenschutz.de" target="_blank" rel="noopener">
      www.baden-wuerttemberg.datenschutz.de
    </a>
  </p>

  <h2>10. Datensicherheit</h2>
  <ul>
    <li>Alle Daten werden lokal auf Ihrem Gerät in der durch iOS geschützten App-Sandbox gespeichert.</li>
    <li>Alle Netzwerkübertragungen erfolgen ausschließlich über HTTPS/TLS.</li>
    <li>Der Anthropic-API-Schlüssel wird nicht in der App gespeichert, sondern über einen serverseitigen Proxy verwaltet.</li>
    <li>Die App enthält kein Analytics, kein Tracking und keine Werbung.</li>
    <li>Es gibt keine Nutzerkonten, keine Passwörter und keine zentrale Datenhaltung.</li>
  </ul>

  <h2>11. Keine Cookies und kein Tracking</h2>
  <p>
    MediYou verwendet keine Cookies, kein Tracking, kein Analytics (weder First-Party
    noch Third-Party) und keine Werbenetzwerke.
  </p>

  <h2>12. Gesundheitsinformationen – Haftungsausschluss</h2>
  <p>
    MediYou ist eine Informations- und Unterstützungs-App. Die KI-generierten Analysen
    und Empfehlungen stellen <strong>keine</strong> medizinische Diagnose und
    <strong>keine</strong> ärztliche Beratung dar. Konsultieren Sie bei gesundheitlichen
    Fragen stets einen Arzt oder Apotheker. Der Betreiber übernimmt keine Haftung für
    Schäden, die aus der Nutzung der App-Inhalte entstehen.
  </p>

  <h2>13. Änderungen dieser Datenschutzerklärung</h2>
  <p>
    Wir behalten uns vor, diese Datenschutzerklärung anzupassen, wenn sich rechtliche
    Anforderungen oder die App-Funktionen ändern. Die aktuelle Version ist stets in der App
    unter Einstellungen → Rechtliches abrufbar. Bei wesentlichen Änderungen werden Sie beim
    nächsten App-Start informiert.
  </p>

</main>

<footer>
  Tübingen, Mai 2026 &nbsp;·&nbsp; Seongkyeom Kim &nbsp;·&nbsp;
  <a href="mailto:tjd2937@gmail.com">tjd2937@gmail.com</a>
</footer>

</body>
</html>`;

  res.setHeader('Content-Type', 'text/html; charset=utf-8');
  res.setHeader('Cache-Control', 'public, max-age=86400');
  res.status(200).send(html);
}
