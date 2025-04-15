import React from 'react';
import ModalForm from './components/ModalForm';
import { useState } from 'react';
import ScheduleSection from './components/ScheduleSection';
import Navbar from './components/Navbar';
import { useTranslation, Trans } from 'react-i18next';
import LegalModal from './components/LegalModal';
import {
    // Sparkles,
    MapPin,
    Phone,
    Mail,
    Instagram,
    CheckCircle,
    Star,
    Diamond,
    Clock,
    Users,
    GraduationCap,
    Quote,
} from 'lucide-react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/mousewheel';

function App() {
    const { t } = useTranslation();

    const [modalOpen, setModalOpen] = useState(false);
    const [prefillMessage, setPrefillMessage] = useState('');

    const [isImpressumOpen, setImpressumOpen] = useState(false);
    const [isDatenschutzOpen, setDatenschutzOpen] = useState(false);

    const impressumContent = (
        <div>
            <p className="mb-4">
                <strong>Natalia Chaykovskaya</strong>
                <br />
                Diva Nailsbar
                <br />
                Mülheimerstraße 83
                <br />
                45145 Essen
                <br />
            </p>
            <p className="mb-4">
                <strong>Kontakt</strong>
                <br />
                Telefon:{' '}
                <a
                    href="tel:+4917662521437"
                    className="text-gold hover:underline"
                >
                    +49 176 62521437
                </a>
                <br />
                E-Mail:{' '}
                <a
                    href="mailto:chaykovskayanails45138@gmail.com"
                    className="text-gold hover:underline"
                >
                    chaykovskayanails45138@gmail.com
                </a>
            </p>
            <p className="mb-4">
                <strong>Umsatzsteuer-ID</strong>
                <br />
                Umsatzsteuer-Identifikationsnummer gemäß § 27 a
                Umsatzsteuergesetz:
                <br />
                DE362422896
            </p>
            <p className="mb-4">
                <strong>
                    Verbraucherstreitbeilegung/Universalschlichtungsstelle
                </strong>
                <br />
                Wir sind nicht bereit oder verpflichtet, an
                Streitbeilegungsverfahren vor einer
                Verbraucherschlichtungsstelle teilzunehmen.
            </p>
            <p className="text-sm text-gray-400">
                Quelle:{' '}
                <a
                    href="https://www.e-recht24.de"
                    className="text-gold hover:underline"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    e-recht24.de
                </a>
            </p>
        </div>
    );

    const datenschutzContent = (
        <div className="prose max-w-none">
            <h2>1. Datenschutz auf einen Blick</h2>
            <h3>Allgemeine Hinweise</h3>{' '}
            <p>
                Die folgenden Hinweise geben einen einfachen &Uuml;berblick
                dar&uuml;ber, was mit Ihren personenbezogenen Daten passiert,
                wenn Sie diese Website besuchen. Personenbezogene Daten sind
                alle Daten, mit denen Sie pers&ouml;nlich identifiziert werden
                k&ouml;nnen. Ausf&uuml;hrliche Informationen zum Thema
                Datenschutz entnehmen Sie unserer unter diesem Text
                aufgef&uuml;hrten Datenschutzerkl&auml;rung.
            </p>
            <h3>Datenerfassung auf dieser Website</h3>{' '}
            <h4>
                Wer ist verantwortlich f&uuml;r die Datenerfassung auf dieser
                Website?
            </h4>{' '}
            <p>
                Die Datenverarbeitung auf dieser Website erfolgt durch den
                Websitebetreiber. Dessen Kontaktdaten k&ouml;nnen Sie dem
                Abschnitt &bdquo;Hinweis zur Verantwortlichen Stelle&ldquo; in
                dieser Datenschutzerkl&auml;rung entnehmen.
            </p>{' '}
            <h4>Wie erfassen wir Ihre Daten?</h4>{' '}
            <p>
                Ihre Daten werden zum einen dadurch erhoben, dass Sie uns diese
                mitteilen. Hierbei kann es sich z.&nbsp;B. um Daten handeln, die
                Sie in ein Kontaktformular eingeben.
            </p>{' '}
            <p>
                Andere Daten werden automatisch oder nach Ihrer Einwilligung
                beim Besuch der Website durch unsere IT-Systeme erfasst. Das
                sind vor allem technische Daten (z.&nbsp;B. Internetbrowser,
                Betriebssystem oder Uhrzeit des Seitenaufrufs). Die Erfassung
                dieser Daten erfolgt automatisch, sobald Sie diese Website
                betreten.
            </p>{' '}
            <h4>Wof&uuml;r nutzen wir Ihre Daten?</h4>{' '}
            <p>
                Ein Teil der Daten wird erhoben, um eine fehlerfreie
                Bereitstellung der Website zu gew&auml;hrleisten. Andere Daten
                k&ouml;nnen zur Analyse Ihres Nutzerverhaltens verwendet werden.
                Sofern &uuml;ber die Website Vertr&auml;ge geschlossen oder
                angebahnt werden k&ouml;nnen, werden die &uuml;bermittelten
                Daten auch f&uuml;r Vertragsangebote, Bestellungen oder sonstige
                Auftragsanfragen verarbeitet.
            </p>{' '}
            <h4>Welche Rechte haben Sie bez&uuml;glich Ihrer Daten?</h4>{' '}
            <p>
                Sie haben jederzeit das Recht, unentgeltlich Auskunft &uuml;ber
                Herkunft, Empf&auml;nger und Zweck Ihrer gespeicherten
                personenbezogenen Daten zu erhalten. Sie haben au&szlig;erdem
                ein Recht, die Berichtigung oder L&ouml;schung dieser Daten zu
                verlangen. Wenn Sie eine Einwilligung zur Datenverarbeitung
                erteilt haben, k&ouml;nnen Sie diese Einwilligung jederzeit
                f&uuml;r die Zukunft widerrufen. Au&szlig;erdem haben Sie das
                Recht, unter bestimmten Umst&auml;nden die Einschr&auml;nkung
                der Verarbeitung Ihrer personenbezogenen Daten zu verlangen. Des
                Weiteren steht Ihnen ein Beschwerderecht bei der
                zust&auml;ndigen Aufsichtsbeh&ouml;rde zu.
            </p>{' '}
            <p>
                Hierzu sowie zu weiteren Fragen zum Thema Datenschutz
                k&ouml;nnen Sie sich jederzeit an uns wenden.
            </p>
            <h3>Analyse-Tools und Tools von Dritt&shy;anbietern</h3>{' '}
            <p>
                Beim Besuch dieser Website kann Ihr Surf-Verhalten statistisch
                ausgewertet werden. Das geschieht vor allem mit sogenannten
                Analyseprogrammen.
            </p>{' '}
            <p>
                Detaillierte Informationen zu diesen Analyseprogrammen finden
                Sie in der folgenden Datenschutzerkl&auml;rung.
            </p>
            <h2>2. Hosting</h2>
            <p>
                Wir hosten die Inhalte unserer Website bei folgendem Anbieter:
            </p>
            <h3>Externes Hosting</h3>{' '}
            <p>
                Diese Website wird extern gehostet. Die personenbezogenen Daten,
                die auf dieser Website erfasst werden, werden auf den Servern
                des Hosters / der Hoster gespeichert. Hierbei kann es sich
                v.&nbsp;a. um IP-Adressen, Kontaktanfragen, Meta- und
                Kommunikationsdaten, Vertragsdaten, Kontaktdaten, Namen,
                Websitezugriffe und sonstige Daten, die &uuml;ber eine Website
                generiert werden, handeln.
            </p>{' '}
            <p>
                Das externe Hosting erfolgt zum Zwecke der
                Vertragserf&uuml;llung gegen&uuml;ber unseren potenziellen und
                bestehenden Kunden (Art. 6 Abs. 1 lit. b DSGVO) und im Interesse
                einer sicheren, schnellen und effizienten Bereitstellung unseres
                Online-Angebots durch einen professionellen Anbieter (Art. 6
                Abs. 1 lit. f DSGVO). Sofern eine entsprechende Einwilligung
                abgefragt wurde, erfolgt die Verarbeitung ausschlie&szlig;lich
                auf Grundlage von Art. 6 Abs. 1 lit. a DSGVO und &sect; 25 Abs.
                1 TDDDG, soweit die Einwilligung die Speicherung von Cookies
                oder den Zugriff auf Informationen im Endger&auml;t des Nutzers
                (z.&nbsp;B. Device-Fingerprinting) im Sinne des TDDDG umfasst.
                Die Einwilligung ist jederzeit widerrufbar.
            </p>{' '}
            <p>
                Unser(e) Hoster wird bzw. werden Ihre Daten nur insoweit
                verarbeiten, wie dies zur Erf&uuml;llung seiner
                Leistungspflichten erforderlich ist und unsere Weisungen in
                Bezug auf diese Daten befolgen.
            </p>{' '}
            <p>Wir setzen folgende(n) Hoster ein:</p>
            <p>
                Vercel Inc.
                <br />
                440 N Barranca Avenue #4133
                <br />
                Covina, CA 91723
                <br />
                United States
            </p>
            <h2>3. Allgemeine Hinweise und Pflicht&shy;informationen</h2>
            <h3>Datenschutz</h3>{' '}
            <p>
                Die Betreiber dieser Seiten nehmen den Schutz Ihrer
                pers&ouml;nlichen Daten sehr ernst. Wir behandeln Ihre
                personenbezogenen Daten vertraulich und entsprechend den
                gesetzlichen Datenschutzvorschriften sowie dieser
                Datenschutzerkl&auml;rung.
            </p>{' '}
            <p>
                Wenn Sie diese Website benutzen, werden verschiedene
                personenbezogene Daten erhoben. Personenbezogene Daten sind
                Daten, mit denen Sie pers&ouml;nlich identifiziert werden
                k&ouml;nnen. Die vorliegende Datenschutzerkl&auml;rung
                erl&auml;utert, welche Daten wir erheben und wof&uuml;r wir sie
                nutzen. Sie erl&auml;utert auch, wie und zu welchem Zweck das
                geschieht.
            </p>{' '}
            <p>
                Wir weisen darauf hin, dass die Daten&uuml;bertragung im
                Internet (z.&nbsp;B. bei der Kommunikation per E-Mail)
                Sicherheitsl&uuml;cken aufweisen kann. Ein l&uuml;ckenloser
                Schutz der Daten vor dem Zugriff durch Dritte ist nicht
                m&ouml;glich.
            </p>
            <h3>Hinweis zur verantwortlichen Stelle</h3>{' '}
            <p>
                Die verantwortliche Stelle f&uuml;r die Datenverarbeitung auf
                dieser Website ist:
            </p>{' '}
            <p>
                Diva Nailbar
                <br />
                M&uuml;lheimer str. 83
                <br />
                45145 Essen
                <br />
                Deutschland
            </p>
            <p>
                Telefon: +49 (0) 177 8534279
                <br />
                E-Mail: chaykovskayanails45138@gmail.com
            </p>
            <p>
                Verantwortliche Stelle ist die nat&uuml;rliche oder juristische
                Person, die allein oder gemeinsam mit anderen &uuml;ber die
                Zwecke und Mittel der Verarbeitung von personenbezogenen Daten
                (z.&nbsp;B. Namen, E-Mail-Adressen o. &Auml;.) entscheidet.
            </p>
            <h3>Speicherdauer</h3>{' '}
            <p>
                Soweit innerhalb dieser Datenschutzerkl&auml;rung keine
                speziellere Speicherdauer genannt wurde, verbleiben Ihre
                personenbezogenen Daten bei uns, bis der Zweck f&uuml;r die
                Datenverarbeitung entf&auml;llt. Wenn Sie ein berechtigtes
                L&ouml;schersuchen geltend machen oder eine Einwilligung zur
                Datenverarbeitung widerrufen, werden Ihre Daten gel&ouml;scht,
                sofern wir keine anderen rechtlich zul&auml;ssigen Gr&uuml;nde
                f&uuml;r die Speicherung Ihrer personenbezogenen Daten haben
                (z.&nbsp;B. steuer- oder handelsrechtliche
                Aufbewahrungsfristen); im letztgenannten Fall erfolgt die
                L&ouml;schung nach Fortfall dieser Gr&uuml;nde.
            </p>
            <h3>
                Allgemeine Hinweise zu den Rechtsgrundlagen der
                Datenverarbeitung auf dieser Website
            </h3>{' '}
            <p>
                Sofern Sie in die Datenverarbeitung eingewilligt haben,
                verarbeiten wir Ihre personenbezogenen Daten auf Grundlage von
                Art. 6 Abs. 1 lit. a DSGVO bzw. Art. 9 Abs. 2 lit. a DSGVO,
                sofern besondere Datenkategorien nach Art. 9 Abs. 1 DSGVO
                verarbeitet werden. Im Falle einer ausdr&uuml;cklichen
                Einwilligung in die &Uuml;bertragung personenbezogener Daten in
                Drittstaaten erfolgt die Datenverarbeitung au&szlig;erdem auf
                Grundlage von Art. 49 Abs. 1 lit. a DSGVO. Sofern Sie in die
                Speicherung von Cookies oder in den Zugriff auf Informationen in
                Ihr Endger&auml;t (z.&nbsp;B. via Device-Fingerprinting)
                eingewilligt haben, erfolgt die Datenverarbeitung
                zus&auml;tzlich auf Grundlage von &sect; 25 Abs. 1 TDDDG. Die
                Einwilligung ist jederzeit widerrufbar. Sind Ihre Daten zur
                Vertragserf&uuml;llung oder zur Durchf&uuml;hrung
                vorvertraglicher Ma&szlig;nahmen erforderlich, verarbeiten wir
                Ihre Daten auf Grundlage des Art. 6 Abs. 1 lit. b DSGVO. Des
                Weiteren verarbeiten wir Ihre Daten, sofern diese zur
                Erf&uuml;llung einer rechtlichen Verpflichtung erforderlich sind
                auf Grundlage von Art. 6 Abs. 1 lit. c DSGVO. Die
                Datenverarbeitung kann ferner auf Grundlage unseres berechtigten
                Interesses nach Art. 6 Abs. 1 lit. f DSGVO erfolgen. &Uuml;ber
                die jeweils im Einzelfall einschl&auml;gigen Rechtsgrundlagen
                wird in den folgenden Abs&auml;tzen dieser
                Datenschutzerkl&auml;rung informiert.
            </p>
            <h3>Empf&auml;nger von personenbezogenen Daten</h3>{' '}
            <p>
                Im Rahmen unserer Gesch&auml;ftst&auml;tigkeit arbeiten wir mit
                verschiedenen externen Stellen zusammen. Dabei ist teilweise
                auch eine &Uuml;bermittlung von personenbezogenen Daten an diese
                externen Stellen erforderlich. Wir geben personenbezogene Daten
                nur dann an externe Stellen weiter, wenn dies im Rahmen einer
                Vertragserf&uuml;llung erforderlich ist, wenn wir gesetzlich
                hierzu verpflichtet sind (z.&nbsp;B. Weitergabe von Daten an
                Steuerbeh&ouml;rden), wenn wir ein berechtigtes Interesse nach
                Art. 6 Abs. 1 lit. f DSGVO an der Weitergabe haben oder wenn
                eine sonstige Rechtsgrundlage die Datenweitergabe erlaubt. Beim
                Einsatz von Auftragsverarbeitern geben wir personenbezogene
                Daten unserer Kunden nur auf Grundlage eines g&uuml;ltigen
                Vertrags &uuml;ber Auftragsverarbeitung weiter. Im Falle einer
                gemeinsamen Verarbeitung wird ein Vertrag &uuml;ber gemeinsame
                Verarbeitung geschlossen.
            </p>
            <h3>Widerruf Ihrer Einwilligung zur Datenverarbeitung</h3>{' '}
            <p>
                Viele Datenverarbeitungsvorg&auml;nge sind nur mit Ihrer
                ausdr&uuml;cklichen Einwilligung m&ouml;glich. Sie k&ouml;nnen
                eine bereits erteilte Einwilligung jederzeit widerrufen. Die
                Rechtm&auml;&szlig;igkeit der bis zum Widerruf erfolgten
                Datenverarbeitung bleibt vom Widerruf unber&uuml;hrt.
            </p>
            <h3>
                Widerspruchsrecht gegen die Datenerhebung in besonderen
                F&auml;llen sowie gegen Direktwerbung (Art. 21 DSGVO)
            </h3>{' '}
            <p>
                WENN DIE DATENVERARBEITUNG AUF GRUNDLAGE VON ART. 6 ABS. 1 LIT.
                E ODER F DSGVO ERFOLGT, HABEN SIE JEDERZEIT DAS RECHT, AUS
                GR&Uuml;NDEN, DIE SICH AUS IHRER BESONDEREN SITUATION ERGEBEN,
                GEGEN DIE VERARBEITUNG IHRER PERSONENBEZOGENEN DATEN WIDERSPRUCH
                EINZULEGEN; DIES GILT AUCH F&Uuml;R EIN AUF DIESE BESTIMMUNGEN
                GEST&Uuml;TZTES PROFILING. DIE JEWEILIGE RECHTSGRUNDLAGE, AUF
                DENEN EINE VERARBEITUNG BERUHT, ENTNEHMEN SIE DIESER
                DATENSCHUTZERKL&Auml;RUNG. WENN SIE WIDERSPRUCH EINLEGEN, WERDEN
                WIR IHRE BETROFFENEN PERSONENBEZOGENEN DATEN NICHT MEHR
                VERARBEITEN, ES SEI DENN, WIR K&Ouml;NNEN ZWINGENDE
                SCHUTZW&Uuml;RDIGE GR&Uuml;NDE F&Uuml;R DIE VERARBEITUNG
                NACHWEISEN, DIE IHRE INTERESSEN, RECHTE UND FREIHEITEN
                &Uuml;BERWIEGEN ODER DIE VERARBEITUNG DIENT DER GELTENDMACHUNG,
                AUS&Uuml;BUNG ODER VERTEIDIGUNG VON RECHTSANSPR&Uuml;CHEN
                (WIDERSPRUCH NACH ART. 21 ABS. 1 DSGVO).
            </p>{' '}
            <p>
                WERDEN IHRE PERSONENBEZOGENEN DATEN VERARBEITET, UM
                DIREKTWERBUNG ZU BETREIBEN, SO HABEN SIE DAS RECHT, JEDERZEIT
                WIDERSPRUCH GEGEN DIE VERARBEITUNG SIE BETREFFENDER
                PERSONENBEZOGENER DATEN ZUM ZWECKE DERARTIGER WERBUNG
                EINZULEGEN; DIES GILT AUCH F&Uuml;R DAS PROFILING, SOWEIT ES MIT
                SOLCHER DIREKTWERBUNG IN VERBINDUNG STEHT. WENN SIE
                WIDERSPRECHEN, WERDEN IHRE PERSONENBEZOGENEN DATEN ANSCHLIESSEND
                NICHT MEHR ZUM ZWECKE DER DIREKTWERBUNG VERWENDET (WIDERSPRUCH
                NACH ART. 21 ABS. 2 DSGVO).
            </p>
            <h3>
                Beschwerde&shy;recht bei der zust&auml;ndigen
                Aufsichts&shy;beh&ouml;rde
            </h3>{' '}
            <p>
                Im Falle von Verst&ouml;&szlig;en gegen die DSGVO steht den
                Betroffenen ein Beschwerderecht bei einer Aufsichtsbeh&ouml;rde,
                insbesondere in dem Mitgliedstaat ihres gew&ouml;hnlichen
                Aufenthalts, ihres Arbeitsplatzes oder des Orts des
                mutma&szlig;lichen Versto&szlig;es zu. Das Beschwerderecht
                besteht unbeschadet anderweitiger verwaltungsrechtlicher oder
                gerichtlicher Rechtsbehelfe.
            </p>
            <h3>Recht auf Daten&shy;&uuml;bertrag&shy;barkeit</h3>{' '}
            <p>
                Sie haben das Recht, Daten, die wir auf Grundlage Ihrer
                Einwilligung oder in Erf&uuml;llung eines Vertrags automatisiert
                verarbeiten, an sich oder an einen Dritten in einem
                g&auml;ngigen, maschinenlesbaren Format aush&auml;ndigen zu
                lassen. Sofern Sie die direkte &Uuml;bertragung der Daten an
                einen anderen Verantwortlichen verlangen, erfolgt dies nur,
                soweit es technisch machbar ist.
            </p>
            <h3>Auskunft, Berichtigung und L&ouml;schung</h3>{' '}
            <p>
                Sie haben im Rahmen der geltenden gesetzlichen Bestimmungen
                jederzeit das Recht auf unentgeltliche Auskunft &uuml;ber Ihre
                gespeicherten personenbezogenen Daten, deren Herkunft und
                Empf&auml;nger und den Zweck der Datenverarbeitung und ggf. ein
                Recht auf Berichtigung oder L&ouml;schung dieser Daten. Hierzu
                sowie zu weiteren Fragen zum Thema personenbezogene Daten
                k&ouml;nnen Sie sich jederzeit an uns wenden.
            </p>
            <h3>Recht auf Einschr&auml;nkung der Verarbeitung</h3>{' '}
            <p>
                Sie haben das Recht, die Einschr&auml;nkung der Verarbeitung
                Ihrer personenbezogenen Daten zu verlangen. Hierzu k&ouml;nnen
                Sie sich jederzeit an uns wenden. Das Recht auf
                Einschr&auml;nkung der Verarbeitung besteht in folgenden
                F&auml;llen:
            </p>{' '}
            <ul>
                {' '}
                <li>
                    Wenn Sie die Richtigkeit Ihrer bei uns gespeicherten
                    personenbezogenen Daten bestreiten, ben&ouml;tigen wir in
                    der Regel Zeit, um dies zu &uuml;berpr&uuml;fen. F&uuml;r
                    die Dauer der Pr&uuml;fung haben Sie das Recht, die
                    Einschr&auml;nkung der Verarbeitung Ihrer personenbezogenen
                    Daten zu verlangen.
                </li>{' '}
                <li>
                    Wenn die Verarbeitung Ihrer personenbezogenen Daten
                    unrechtm&auml;&szlig;ig geschah/geschieht, k&ouml;nnen Sie
                    statt der L&ouml;schung die Einschr&auml;nkung der
                    Datenverarbeitung verlangen.
                </li>{' '}
                <li>
                    Wenn wir Ihre personenbezogenen Daten nicht mehr
                    ben&ouml;tigen, Sie sie jedoch zur Aus&uuml;bung,
                    Verteidigung oder Geltendmachung von Rechtsanspr&uuml;chen
                    ben&ouml;tigen, haben Sie das Recht, statt der L&ouml;schung
                    die Einschr&auml;nkung der Verarbeitung Ihrer
                    personenbezogenen Daten zu verlangen.
                </li>{' '}
                <li>
                    Wenn Sie einen Widerspruch nach Art. 21 Abs. 1 DSGVO
                    eingelegt haben, muss eine Abw&auml;gung zwischen Ihren und
                    unseren Interessen vorgenommen werden. Solange noch nicht
                    feststeht, wessen Interessen &uuml;berwiegen, haben Sie das
                    Recht, die Einschr&auml;nkung der Verarbeitung Ihrer
                    personenbezogenen Daten zu verlangen.
                </li>{' '}
            </ul>{' '}
            <p>
                Wenn Sie die Verarbeitung Ihrer personenbezogenen Daten
                eingeschr&auml;nkt haben, d&uuml;rfen diese Daten &ndash; von
                ihrer Speicherung abgesehen &ndash; nur mit Ihrer Einwilligung
                oder zur Geltendmachung, Aus&uuml;bung oder Verteidigung von
                Rechtsanspr&uuml;chen oder zum Schutz der Rechte einer anderen
                nat&uuml;rlichen oder juristischen Person oder aus Gr&uuml;nden
                eines wichtigen &ouml;ffentlichen Interesses der
                Europ&auml;ischen Union oder eines Mitgliedstaats verarbeitet
                werden.
            </p>
            <h3>Widerspruch gegen Werbe-E-Mails</h3>{' '}
            <p>
                Der Nutzung von im Rahmen der Impressumspflicht
                ver&ouml;ffentlichten Kontaktdaten zur &Uuml;bersendung von
                nicht ausdr&uuml;cklich angeforderter Werbung und
                Informationsmaterialien wird hiermit widersprochen. Die
                Betreiber der Seiten behalten sich ausdr&uuml;cklich rechtliche
                Schritte im Falle der unverlangten Zusendung von
                Werbeinformationen, etwa durch Spam-E-Mails, vor.
            </p>
            <h2>4. Datenerfassung auf dieser Website</h2>
            <h3>Kontaktformular</h3>{' '}
            <p>
                Wenn Sie uns per Kontaktformular Anfragen zukommen lassen,
                werden Ihre Angaben aus dem Anfrageformular inklusive der von
                Ihnen dort angegebenen Kontaktdaten zwecks Bearbeitung der
                Anfrage und f&uuml;r den Fall von Anschlussfragen bei uns
                gespeichert. Diese Daten geben wir nicht ohne Ihre Einwilligung
                weiter.
            </p>{' '}
            <p>
                Die Verarbeitung dieser Daten erfolgt auf Grundlage von Art. 6
                Abs. 1 lit. b DSGVO, sofern Ihre Anfrage mit der Erf&uuml;llung
                eines Vertrags zusammenh&auml;ngt oder zur Durchf&uuml;hrung
                vorvertraglicher Ma&szlig;nahmen erforderlich ist. In allen
                &uuml;brigen F&auml;llen beruht die Verarbeitung auf unserem
                berechtigten Interesse an der effektiven Bearbeitung der an uns
                gerichteten Anfragen (Art. 6 Abs. 1 lit. f DSGVO) oder auf Ihrer
                Einwilligung (Art. 6 Abs. 1 lit. a DSGVO) sofern diese abgefragt
                wurde; die Einwilligung ist jederzeit widerrufbar.
            </p>{' '}
            <p>
                Die von Ihnen im Kontaktformular eingegebenen Daten verbleiben
                bei uns, bis Sie uns zur L&ouml;schung auffordern, Ihre
                Einwilligung zur Speicherung widerrufen oder der Zweck f&uuml;r
                die Datenspeicherung entf&auml;llt (z.&nbsp;B. nach
                abgeschlossener Bearbeitung Ihrer Anfrage). Zwingende
                gesetzliche Bestimmungen &ndash; insbesondere
                Aufbewahrungsfristen &ndash; bleiben unber&uuml;hrt.
            </p>
            <h3>Anfrage per E-Mail, Telefon oder Telefax</h3>{' '}
            <p>
                Wenn Sie uns per E-Mail, Telefon oder Telefax kontaktieren, wird
                Ihre Anfrage inklusive aller daraus hervorgehenden
                personenbezogenen Daten (Name, Anfrage) zum Zwecke der
                Bearbeitung Ihres Anliegens bei uns gespeichert und verarbeitet.
                Diese Daten geben wir nicht ohne Ihre Einwilligung weiter.
            </p>{' '}
            <p>
                Die Verarbeitung dieser Daten erfolgt auf Grundlage von Art. 6
                Abs. 1 lit. b DSGVO, sofern Ihre Anfrage mit der Erf&uuml;llung
                eines Vertrags zusammenh&auml;ngt oder zur Durchf&uuml;hrung
                vorvertraglicher Ma&szlig;nahmen erforderlich ist. In allen
                &uuml;brigen F&auml;llen beruht die Verarbeitung auf unserem
                berechtigten Interesse an der effektiven Bearbeitung der an uns
                gerichteten Anfragen (Art. 6 Abs. 1 lit. f DSGVO) oder auf Ihrer
                Einwilligung (Art. 6 Abs. 1 lit. a DSGVO) sofern diese abgefragt
                wurde; die Einwilligung ist jederzeit widerrufbar.
            </p>{' '}
            <p>
                Die von Ihnen an uns per Kontaktanfragen &uuml;bersandten Daten
                verbleiben bei uns, bis Sie uns zur L&ouml;schung auffordern,
                Ihre Einwilligung zur Speicherung widerrufen oder der Zweck
                f&uuml;r die Datenspeicherung entf&auml;llt (z.&nbsp;B. nach
                abgeschlossener Bearbeitung Ihres Anliegens). Zwingende
                gesetzliche Bestimmungen &ndash; insbesondere gesetzliche
                Aufbewahrungsfristen &ndash; bleiben unber&uuml;hrt.
            </p>
            <h2>5. Soziale Medien</h2>
            <h3>Instagram</h3>{' '}
            <p>
                Auf dieser Website sind Funktionen des Dienstes Instagram
                eingebunden. Diese Funktionen werden angeboten durch die Meta
                Platforms Ireland Limited, Merrion Road, Dublin 4, D04 X2K5,
                Irland.
            </p>{' '}
            <p>
                Wenn das Social-Media-Element aktiv ist, wird eine direkte
                Verbindung zwischen Ihrem Endger&auml;t und dem Instagram-Server
                hergestellt. Instagram erh&auml;lt dadurch Informationen
                &uuml;ber den Besuch dieser Website durch Sie.
            </p>{' '}
            <p>
                Wenn Sie in Ihrem Instagram-Account eingeloggt sind, k&ouml;nnen
                Sie durch Anklicken des Instagram-Buttons die Inhalte dieser
                Website mit Ihrem Instagram-Profil verlinken. Dadurch kann
                Instagram den Besuch dieser Website Ihrem Benutzerkonto
                zuordnen. Wir weisen darauf hin, dass wir als Anbieter der
                Seiten keine Kenntnis vom Inhalt der &uuml;bermittelten Daten
                sowie deren Nutzung durch Instagram erhalten.
            </p>{' '}
            <p>
                Die Nutzung dieses Dienstes erfolgt auf Grundlage Ihrer
                Einwilligung nach Art. 6 Abs. 1 lit. a DSGVO und &sect; 25 Abs.
                1 TDDDG. Die Einwilligung ist jederzeit widerrufbar.
            </p>{' '}
            <p>
                Soweit mit Hilfe des hier beschriebenen Tools personenbezogene
                Daten auf unserer Website erfasst und an Facebook bzw. Instagram
                weitergeleitet werden, sind wir und die Meta Platforms Ireland
                Limited, 4 Grand Canal Square, Grand Canal Harbour, Dublin 2,
                Irland gemeinsam f&uuml;r diese Datenverarbeitung verantwortlich
                (Art. 26 DSGVO). Die gemeinsame Verantwortlichkeit
                beschr&auml;nkt sich dabei ausschlie&szlig;lich auf die
                Erfassung der Daten und deren Weitergabe an Facebook bzw.
                Instagram. Die nach der Weiterleitung erfolgende Verarbeitung
                durch Facebook bzw. Instagram ist nicht Teil der gemeinsamen
                Verantwortung. Die uns gemeinsam obliegenden Verpflichtungen
                wurden in einer Vereinbarung &uuml;ber gemeinsame Verarbeitung
                festgehalten. Den Wortlaut der Vereinbarung finden Sie unter:{' '}
                <a
                    href="https://www.facebook.com/legal/controller_addendum"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    https://www.facebook.com/legal/controller_addendum
                </a>
                . Laut dieser Vereinbarung sind wir f&uuml;r die Erteilung der
                Datenschutzinformationen beim Einsatz des Facebook- bzw.
                Instagram-Tools und f&uuml;r die datenschutzrechtlich sichere
                Implementierung des Tools auf unserer Website verantwortlich.
                F&uuml;r die Datensicherheit der Facebook bzw.
                Instagram-Produkte ist Facebook verantwortlich.
                Betroffenenrechte (z.&nbsp;B. Auskunftsersuchen) hinsichtlich
                der bei Facebook bzw. Instagram verarbeiteten Daten k&ouml;nnen
                Sie direkt bei Facebook geltend machen. Wenn Sie die
                Betroffenenrechte bei uns geltend machen, sind wir verpflichtet,
                diese an Facebook weiterzuleiten.
            </p>{' '}
            <p>
                Die Daten&uuml;bertragung in die USA wird auf die
                Standardvertragsklauseln der EU-Kommission gest&uuml;tzt.
                Details finden Sie hier:{' '}
                <a
                    href="https://www.facebook.com/legal/EU_data_transfer_addendum"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    https://www.facebook.com/legal/EU_data_transfer_addendum
                </a>
                ,{' '}
                <a
                    href="https://privacycenter.instagram.com/policy/"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    https://privacycenter.instagram.com/policy/
                </a>{' '}
                und{' '}
                <a
                    href="https://de-de.facebook.com/help/566994660333381"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    https://de-de.facebook.com/help/566994660333381
                </a>
                .
            </p>{' '}
            <p>
                Weitere Informationen hierzu finden Sie in der
                Datenschutzerkl&auml;rung von Instagram:{' '}
                <a
                    href="https://privacycenter.instagram.com/policy/"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    https://privacycenter.instagram.com/policy/
                </a>
                .
            </p>
            <p>
                Das Unternehmen verf&uuml;gt &uuml;ber eine Zertifizierung nach
                dem &bdquo;EU-US Data Privacy Framework&ldquo; (DPF). Der DPF
                ist ein &Uuml;bereinkommen zwischen der Europ&auml;ischen Union
                und den USA, der die Einhaltung europ&auml;ischer
                Datenschutzstandards bei Datenverarbeitungen in den USA
                gew&auml;hrleisten soll. Jedes nach dem DPF zertifizierte
                Unternehmen verpflichtet sich, diese Datenschutzstandards
                einzuhalten. Weitere Informationen hierzu erhalten Sie vom
                Anbieter unter folgendem Link:{' '}
                <a
                    href="https://www.dataprivacyframework.gov/participant/4452"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    https://www.dataprivacyframework.gov/participant/4452
                </a>
                .
            </p>
            <h2>6. Eigene Dienste</h2>
            <h3>Google Drive</h3>{' '}
            <p>
                Wir haben Google Drive auf dieser Website eingebunden. Anbieter
                ist die Google Ireland Limited (&bdquo;Google&ldquo;), Gordon
                House, Barrow Street, Dublin 4, Irland.
            </p>{' '}
            <p>
                Google Drive erm&ouml;glicht es uns, einen Uploadbereich auf
                unserer Website einzubinden, in dem Sie Inhalte hochladen
                k&ouml;nnen. Wenn Sie Inhalte hochladen, werden diese auf den
                Servern von Google Drive gespeichert. Wenn Sie unsere Website
                betreten, wird au&szlig;erdem eine Verbindung zu Google Drive
                aufgebaut, sodass Google Drive feststellen kann, dass Sie unsere
                Website besucht haben.
            </p>{' '}
            <p>
                Die Verwendung von Google Drive erfolgt auf Grundlage von Art. 6
                Abs. 1 lit. f DSGVO. Der Websitebetreiber hat ein berechtigtes
                Interesse an einem zuverl&auml;ssigen Uploadbereich auf seiner
                Website. Sofern eine entsprechende Einwilligung abgefragt wurde,
                erfolgt die Verarbeitung ausschlie&szlig;lich auf Grundlage von
                Art. 6 Abs. 1 lit. a DSGVO; die Einwilligung ist jederzeit
                widerrufbar.
            </p>
            <p>
                Das Unternehmen verf&uuml;gt &uuml;ber eine Zertifizierung nach
                dem &bdquo;EU-US Data Privacy Framework&ldquo; (DPF). Der DPF
                ist ein &Uuml;bereinkommen zwischen der Europ&auml;ischen Union
                und den USA, der die Einhaltung europ&auml;ischer
                Datenschutzstandards bei Datenverarbeitungen in den USA
                gew&auml;hrleisten soll. Jedes nach dem DPF zertifizierte
                Unternehmen verpflichtet sich, diese Datenschutzstandards
                einzuhalten. Weitere Informationen hierzu erhalten Sie vom
                Anbieter unter folgendem Link:{' '}
                <a
                    href="https://www.dataprivacyframework.gov/participant/5780"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    https://www.dataprivacyframework.gov/participant/5780
                </a>
                .
            </p>
            <p>
                Quelle:{' '}
                <a href="https://www.e-recht24.de">https://www.e-recht24.de</a>
            </p>
        </div>
    );

    const handleCourseClick = (courseKey: string) => {
        const translated = t(`contact.preFilledMessages.${courseKey}`);
        setPrefillMessage(translated);
        setModalOpen(true);
    };

    const whoItems = t('courses.basicManicure.whoItems', {
        returnObjects: true,
    }) as string[];

    const programItems = t('courses.basicManicure.programItems', {
        returnObjects: true,
    }) as string[];

    const scheduleItems = t('courses.basicManicure.scheduleItems', {
        returnObjects: true,
    }) as string[];

    const youGetItems = t('courses.basicManicure.youGetItems', {
        returnObjects: true,
    }) as string[];

    const whoItemsPedicure = t('courses.basicPedicure.whoItems', {
        returnObjects: true,
    }) as string[];

    const programItemsPedicure = t('courses.basicPedicure.programItems', {
        returnObjects: true,
    }) as string[];

    const formatItemsPedicure = t('courses.basicPedicure.formatItems', {
        returnObjects: true,
    }) as string[];

    const youGetItemsPedicure = t('courses.basicPedicure.youGetItems', {
        returnObjects: true,
    }) as string[];

    const whoItemsAdvance = t('courses.advancedCourse.whoItems', {
        returnObjects: true,
    }) as string[];

    const formatGroup = t('courses.advancedCourse.formatItems.group.details', {
        returnObjects: true,
    }) as string[];

    const formatIndividual = t(
        'courses.advancedCourse.formatItems.individual.details',
        {
            returnObjects: true,
        }
    ) as string[];

    const testimonials = t('testimonials.list', { returnObjects: true }) as {
        name: string;
        review: string;
    }[];

    const handleWhatsApp = () => {
        const name =
            (document.querySelector('#name') as HTMLInputElement)?.value || '';
        const email =
            (document.querySelector('#email') as HTMLInputElement)?.value || '';
        const message =
            (document.querySelector('#message') as HTMLTextAreaElement)
                ?.value || '';

        const fullMessage = t('whatsapp.message', { name, email, message });
        const phone = '4917662521437'; // твой номер в международном формате без +

        const url = `https://wa.me/${phone}?text=${encodeURIComponent(
            fullMessage
        )}`;
        window.open(url, '_blank');
    };

    const handleWhatsApp2 = (name: string, email: string, message: string) => {
        const fullMessage = t('whatsapp.message', { name, email, message });
        const phone = '4917662521437';
        const url = `https://wa.me/${phone}?text=${encodeURIComponent(
            fullMessage
        )}`;
        window.open(url, '_blank');
    };

    React.useEffect(() => {
        const script = document.createElement('script');
        script.setAttribute('src', 'https://www.instagram.com/embed.js');
        script.setAttribute('async', '');
        document.body.appendChild(script);
    }, []);

    return (
        <div className="min-h-screen bg-black overflow-x-hidden">
            {/* Navbar */}
            <Navbar />
            <div className="h-20" />

            {/* Hero Section */}
            <div
                className="h-screen bg-cover bg-center relative"
                style={{
                    backgroundImage: 'url("/images/bg1.jpg")',
                }}
            >
                <div className="absolute inset-0 bg-gradient-to-b from-black/70 to-black/50">
                    <div className="container mx-auto px-4 h-full flex items-center">
                        <div className="w-full max-w-sm md:ml-auto order-1 md:order-2">
                            <img
                                src="/images/natalia.jpg"
                                alt="Наталья Чайковская"
                                className="rounded-2xl border-4 border-gold shadow-lg object-cover w-full h-auto"
                            />
                        </div>
                        <div className="max-w-3xl">
                            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
                                {t('hero.title')}{' '}
                                <span className="text-gold">
                                    {t('hero.name')}
                                </span>
                            </h1>
                            <p className="text-xl text-white mb-8">
                                {t('hero.subtitle')}
                            </p>
                            <a href="#contact">
                                <button className="bg-gold text-white px-8 py-3 rounded-full font-semibold hover:bg-gold transition duration-300">
                                    {t('hero.button')}
                                </button>
                            </a>
                        </div>
                    </div>
                </div>
            </div>

            {/* Courses Section */}
            <div
                id="courses"
                className="py-20 bg-gradient-to-b from-black to-gray-900"
            >
                <div className="container mx-auto px-4">
                    <h2 className="text-4xl font-bold text-center text-white mb-16">
                        <Trans
                            i18nKey="courses.sectionTitle"
                            components={{ 1: <span className="text-gold" /> }}
                        />
                    </h2>

                    {/* Basic Manicure Course */}
                    <div className="mb-16 bg-black p-8 rounded-lg border border-gold/20 shadow-2xl shadow-gold/10">
                        <div className="flex items-center justify-between mb-8">
                            <div>
                                <h3 className="text-3xl font-bold text-white flex items-center gap-3">
                                    <GraduationCap className="text-gold w-8 h-8" />
                                    {t('courses.basicManicure.title')}
                                </h3>
                                <div className="flex items-center gap-4 mt-3 text-gray-400">
                                    <div className="flex items-center">
                                        <Clock className="w-5 h-5 mr-2 text-gold" />
                                        {t('courses.basicManicure.duration')}
                                    </div>
                                    <div className="flex items-center">
                                        <Users className="w-5 h-5 mr-2 text-gold" />
                                        {t('courses.basicManicure.models')}
                                    </div>
                                </div>
                            </div>
                            <div className="text-right">
                                <p className="text-3xl font-bold text-gold">
                                    {t('courses.basicManicure.price')}
                                </p>
                                <p className="text-gray-400">
                                    {t('courses.basicManicure.priceNote')}
                                </p>
                            </div>
                        </div>

                        <div className="grid md:grid-cols-2 gap-8">
                            <div>
                                <h4 className="text-xl font-semibold text-gold mb-4">
                                    {t('courses.basicManicure.who')}
                                </h4>

                                <ul className="space-y-3">
                                    {whoItems.map((item, idx) => (
                                        <li
                                            key={idx}
                                            className="flex items-center text-white"
                                        >
                                            <CheckCircle className="text-gold w-5 h-5 mr-3 flex-shrink-0" />
                                            <span>{item}</span>
                                        </li>
                                    ))}
                                </ul>

                                <h4 className="text-xl font-semibold text-gold mt-6 mb-4">
                                    {t('courses.basicManicure.program')}
                                </h4>
                                <ul className="space-y-3">
                                    {programItems.map((item, idx) => (
                                        <li
                                            key={idx}
                                            className="flex items-center text-white"
                                        >
                                            <Star className="text-gold w-5 h-5 mr-3 flex-shrink-0" />
                                            <span>{item}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            <div>
                                <h4 className="text-xl font-semibold text-gold mb-4">
                                    {t('courses.basicManicure.schedule')}
                                </h4>
                                <ul className="space-y-3">
                                    {scheduleItems.map((item, idx) => (
                                        <li
                                            key={idx}
                                            className="flex items-start text-white"
                                        >
                                            <div className="bg-gold text-white w-6 h-6 rounded-full flex items-center justify-center mr-3 flex-shrink-0 mt-1">
                                                {idx + 1}
                                            </div>
                                            <span>{item}</span>
                                        </li>
                                    ))}
                                </ul>

                                <h4 className="text-xl font-semibold text-gold mt-6 mb-4">
                                    {t('courses.basicManicure.youGet')}
                                </h4>
                                <ul className="space-y-3">
                                    {youGetItems.map((item, idx) => (
                                        <li
                                            key={idx}
                                            className="flex items-center text-white"
                                        >
                                            <CheckCircle className="text-gold w-5 h-5 mr-3 flex-shrink-0" />
                                            <span>{item}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>

                        {/* КНОПКА */}
                        <div className="mt-8 text-center">
                            <a href="#contact">
                                <button
                                    onClick={() =>
                                        handleCourseClick('basicManicure')
                                    }
                                    className="bg-gold text-white px-6 py-3 rounded-full font-semibold hover:bg-gold transition duration-300"
                                >
                                    {t('courses.common.wantButton')}
                                </button>
                            </a>
                        </div>
                    </div>

                    {/* Basic Pedicure Course */}
                    <div className="mb-16 bg-black p-8 rounded-lg border border-gold/20 shadow-2xl shadow-gold/10">
                        <div className="flex items-center justify-between mb-8">
                            <div>
                                <h3 className="text-3xl font-bold text-white flex items-center gap-3">
                                    <GraduationCap className="text-gold w-8 h-8" />
                                    {t('courses.basicPedicure.title')}
                                </h3>
                                <div className="flex items-center gap-4 mt-3 text-gray-400">
                                    <div className="flex items-center">
                                        <Clock className="w-5 h-5 mr-2 text-gold" />
                                        {t('courses.basicPedicure.duration')}
                                    </div>
                                    <div className="flex items-center">
                                        <Users className="w-5 h-5 mr-2 text-gold" />
                                        {t('courses.basicPedicure.models')}
                                    </div>
                                </div>
                            </div>
                            <div className="text-right">
                                <p className="text-3xl font-bold text-gold">
                                    {t('courses.basicPedicure.price')}
                                </p>
                                <p className="text-gray-400">
                                    {t('courses.basicPedicure.priceNote')}
                                </p>
                            </div>
                        </div>

                        <div className="grid md:grid-cols-2 gap-8">
                            <div>
                                <h4 className="text-xl font-semibold text-gold mb-4">
                                    {t('courses.basicPedicure.who')}
                                </h4>
                                <ul className="space-y-3">
                                    {whoItemsPedicure.map((item, idx) => (
                                        <li
                                            key={idx}
                                            className="flex items-center text-white"
                                        >
                                            <CheckCircle className="text-gold w-5 h-5 mr-3 flex-shrink-0" />
                                            <span>{item}</span>
                                        </li>
                                    ))}
                                </ul>

                                <h4 className="text-xl font-semibold text-gold mt-6 mb-4">
                                    {t('courses.basicPedicure.program')}
                                </h4>
                                <ul className="space-y-3">
                                    {programItemsPedicure.map((item, idx) => (
                                        <li
                                            key={idx}
                                            className="flex items-center text-white"
                                        >
                                            <Star className="text-gold w-5 h-5 mr-3 flex-shrink-0" />
                                            <span>{item}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            <div>
                                <h4 className="text-xl font-semibold text-gold mb-4">
                                    {t('courses.basicPedicure.format')}
                                </h4>
                                <ul className="space-y-3">
                                    {formatItemsPedicure.map((item, idx) => (
                                        <li
                                            key={idx}
                                            className="flex items-center text-white"
                                        >
                                            <Diamond className="text-gold w-5 h-5 mr-3 flex-shrink-0" />
                                            <span>{item}</span>
                                        </li>
                                    ))}
                                </ul>
                                <h4 className="text-xl font-semibold text-gold mt-6 mb-4">
                                    {t('courses.basicManicure.youGet')}
                                </h4>
                                <ul className="space-y-3">
                                    {youGetItemsPedicure.map((item, idx) => (
                                        <li
                                            key={idx}
                                            className="flex items-center text-white"
                                        >
                                            <CheckCircle className="text-gold w-5 h-5 mr-3 flex-shrink-0" />
                                            <span>{item}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                        {/* КНОПКА педикюр */}
                        <div className="mt-8 text-center">
                            <a href="#contact">
                                <button
                                    onClick={() =>
                                        handleCourseClick('basicPedicure')
                                    }
                                    className="bg-gold text-white px-6 py-3 rounded-full font-semibold hover:bg-gold transition duration-300"
                                >
                                    {t('courses.common.wantButton')}
                                </button>
                            </a>
                        </div>
                    </div>

                    {/* Advanced Course */}
                    <div className="bg-black p-8 rounded-lg border border-gold/20 shadow-2xl shadow-gold/10">
                        <div className="flex items-center justify-between mb-8">
                            <div>
                                <h3 className="text-2xl sm:text-3xl font-bold text-white flex items-center gap-3 break-words">
                                    <GraduationCap className="text-gold w-8 h-8" />
                                    {t('courses.advancedCourse.title')}
                                </h3>
                                <div className="flex items-center gap-4 mt-3 text-gray-400">
                                    <div className="flex items-center">
                                        <Clock className="w-5 h-5 mr-2 text-gold" />
                                        {t('courses.advancedCourse.duration')}
                                    </div>
                                    <div className="flex items-center">
                                        <Users className="w-5 h-5 mr-2 text-gold" />
                                        {t('courses.advancedCourse.models')}
                                    </div>
                                </div>
                            </div>
                            <div className="text-right">
                                <p className="text-3xl sm:text-3xl font-bold text-gold">
                                    {t('courses.advancedCourse.price')}
                                </p>
                                <p className="text-gray-400">
                                    {t('courses.advancedCourse.priceNote')}
                                </p>
                            </div>
                        </div>

                        <div className="grid md:grid-cols-2 gap-8">
                            <div>
                                <h4 className="text-xl font-semibold text-gold mb-4">
                                    {t('courses.advancedCourse.who')}
                                </h4>
                                <ul className="space-y-3">
                                    {whoItemsAdvance.map((item, idx) => (
                                        <li
                                            key={idx}
                                            className="flex items-center text-white"
                                        >
                                            <CheckCircle className="text-gold w-5 h-5 mr-3 flex-shrink-0" />
                                            <span>{item}</span>
                                        </li>
                                    ))}
                                </ul>

                                <div className="mt-6 p-4 bg-gold/10 rounded-lg border border-gold/20">
                                    <p className="text-white">
                                        <span className="text-gold font-semibold">
                                            {t(
                                                'courses.advancedCourse.importantNote.label'
                                            )}
                                        </span>{' '}
                                        {t(
                                            'courses.advancedCourse.importantNote.text'
                                        )}
                                    </p>
                                </div>
                            </div>

                            <div>
                                <h4 className="text-xl font-semibold text-gold mb-4">
                                    {t('courses.advancedCourse.format')}
                                </h4>
                                <ul className="space-y-6">
                                    <li className="text-white">
                                        <p className="font-semibold mb-2">
                                            {t(
                                                'courses.advancedCourse.formatItems.group.label'
                                            )}
                                        </p>
                                        <ul className="space-y-2 ml-4">
                                            {formatGroup.map(
                                                (detail: string, i: number) => (
                                                    <li
                                                        key={i}
                                                        className="flex items-center"
                                                    >
                                                        <Star className="text-gold w-4 h-4 mr-2" />
                                                        <span>{detail}</span>
                                                    </li>
                                                )
                                            )}
                                        </ul>
                                    </li>
                                    <li className="text-white">
                                        <p className="font-semibold mb-2">
                                            {t(
                                                'courses.advancedCourse.formatItems.individual.label'
                                            )}
                                        </p>
                                        <ul className="space-y-2 ml-4">
                                            {formatIndividual.map(
                                                (detail: string, i: number) => (
                                                    <li
                                                        key={i}
                                                        className="flex items-center"
                                                    >
                                                        <Star className="text-gold w-4 h-4 mr-2" />
                                                        <span>{detail}</span>
                                                    </li>
                                                )
                                            )}
                                        </ul>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        {/* КНОПКА повышение*/}
                        <div className="mt-8 text-center">
                            <a href="#contact">
                                <button
                                    onClick={() =>
                                        handleCourseClick('advanced')
                                    }
                                    className="bg-gold text-white px-6 py-3 rounded-full font-semibold hover:bg-gold transition duration-300"
                                >
                                    {t('courses.common.wantButton')}
                                </button>
                            </a>
                        </div>
                    </div>
                </div>
            </div>

            {/* Gallery Section */}
            <div id="gallery" className="py-20 bg-black">
                <div className="container mx-auto px-4">
                    <h2 className="text-4xl font-bold text-center text-white mb-16">
                        {t('ourWork.title')}
                        {''}
                        <span className="text-gold">
                            {t('ourWork.highlight')}
                        </span>
                    </h2>
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                        <img
                            src="/images/img4.jpg"
                            alt="Nail Art"
                            className="w-full h-64 object-cover rounded-lg"
                        />
                        <img
                            src="/images/img7.jpg"
                            alt="Manicure Tools"
                            className="w-full h-64 object-cover rounded-lg"
                        />
                        <img
                            src="/images/img2.jpg"
                            alt="Professional Nails"
                            className="w-full h-64 object-cover rounded-lg"
                        />

                        <img
                            src="/images/img5.jpg"
                            alt="Nail Art"
                            className="w-full h-64 object-cover rounded-lg"
                        />
                        <img
                            src="/images/img3.jpg"
                            alt="Manicure Tools"
                            className="w-full h-64 object-cover rounded-lg"
                        />
                        <img
                            src="/images/img6.jpg"
                            alt="Professional Nails"
                            className="w-full h-64 object-cover rounded-lg"
                        />
                    </div>
                </div>
            </div>

            {/* Testimonials Section */}
            <div id="testimonials" className="py-20 bg-black">
                <div className="container mx-auto px-4">
                    <h2 className="text-4xl font-bold text-center text-white mb-12">
                        {t('testimonials.title')}{' '}
                        <span className="text-gold">
                            {t('testimonials.highlight')}
                        </span>
                    </h2>

                    <Swiper
                        spaceBetween={16}
                        slidesPerView="auto"
                        grabCursor={true}
                        mousewheel={true}
                        breakpoints={{
                            640: {
                                spaceBetween: 24,
                            },
                            1024: {
                                spaceBetween: 32,
                            },
                        }}
                        className="pb-4"
                    >
                        {testimonials.map((testimonial, index) => (
                            <SwiperSlide key={index} className="w-[280px]">
                                <div className="bg-gray-900 p-6 rounded-lg shadow-lg border border-gold/20 h-full">
                                    <Quote className="text-gold w-6 h-6 mb-4" />
                                    <p className="text-white text-sm leading-relaxed whitespace-pre-wrap">
                                        {testimonial.review}
                                    </p>
                                    <p className="text-gold font-semibold mt-4">
                                        — {testimonial.name}
                                    </p>
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            </div>

            {/* Schedule Section */}
            <ScheduleSection />

            {/* Video Section */}
            <div id="video" className="py-20 bg-black">
                <div className="container mx-auto px-4">
                    <h2 className="text-4xl font-bold text-center text-white mb-16">
                        {t('video.title')}{' '}
                        <span className="text-gold">
                            {t('video.highlight')}
                        </span>
                    </h2>

                    <div className="flex flex-col md:flex-row justify-center items-center md:items-start gap-8">
                        {/* Видео 1 */}
                        <div className="w-full md:w-1/2 max-w-md">
                            <blockquote
                                className="instagram-media"
                                data-instgrm-permalink="https://www.instagram.com/reel/DHtEDkHIFFh/?utm_source=ig_embed&amp;utm_campaign=loading"
                                data-instgrm-version="14"
                            ></blockquote>
                        </div>

                        {/* Видео 2 */}
                        <div className="w-full md:w-1/2 max-w-md">
                            <blockquote
                                className="instagram-media"
                                data-instgrm-permalink="https://www.instagram.com/reel/DHqWSduIHEn/?utm_source=ig_embed&amp;utm_campaign=loading"
                                data-instgrm-version="14"
                            ></blockquote>
                        </div>

                        {/* Видео 3 */}
                        <div className="w-full md:w-1/2 max-w-md">
                            <blockquote
                                className="instagram-media"
                                data-instgrm-permalink="https://www.instagram.com/reel/DIQxuhSIp6d/?utm_source=ig_embed&amp;utm_campaign=loading"
                                data-instgrm-version="14"
                            ></blockquote>
                        </div>
                    </div>
                </div>
            </div>

            {/* Contact Section */}
            <div
                id="contact"
                className="py-20 bg-gradient-to-b from-gray-900 to-black"
            >
                <div className="container mx-auto px-4">
                    <h2 className="text-4xl font-bold text-center text-white mb-16">
                        {t('contact.title')}{' '}
                        <span className="text-gold">
                            {t('contact.highlight')}
                        </span>
                    </h2>
                    <div className="grid md:grid-cols-2 gap-8">
                        <div className="space-y-6 text-white">
                            <div className="flex items-center">
                                <MapPin className="text-gold w-6 h-6 mr-4" />
                                <a
                                    href="https://www.google.com/maps?q=Mülheimer+Str.+83,+45145+Essen"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="hover:text-gold transition"
                                >
                                    Mülheimer Str. 83, 45145 Essen
                                </a>
                            </div>
                            <div className="flex items-center">
                                <Phone className="text-gold w-6 h-6 mr-4" />
                                <a
                                    href="tel:+4917662521437"
                                    className="hover:text-gold transition"
                                >
                                    +49 176 62521437
                                </a>
                            </div>
                            <div className="flex items-center">
                                <Mail className="text-gold w-6 h-6 mr-4" />
                                <a
                                    href="mailto:chaykovskayanails45138@gmail.com?subject=Запись на курс"
                                    className="hover:text-gold transition"
                                >
                                    chaykovskayanails45138@gmail.com
                                </a>
                            </div>

                            <a
                                href="https://www.instagram.com/chaykovskaya_pronails"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center hover:text-gold transition"
                            >
                                <Instagram className="text-gold w-6 h-6 mr-4" />
                                <p>@chaykovskaya_pronails</p>
                            </a>
                        </div>

                        {/* Форма */}
                        <form className="space-y-4">
                            <input
                                id="name"
                                type="text"
                                placeholder={t('contact.namePlaceholder')}
                                className="w-full p-3 bg-white/10 border border-gold/20 rounded-lg focus:outline-none focus:border-gold text-white"
                            />
                            <input
                                id="email"
                                type="email"
                                placeholder={t('contact.emailPlaceholder')}
                                className="w-full p-3 bg-white/10 border border-gold/20 rounded-lg focus:outline-none focus:border-gold text-white"
                            />
                            <textarea
                                id="message"
                                placeholder={t('contact.messagePlaceholder')}
                                rows={4}
                                className="w-full p-3 bg-white/10 border border-gold/20 rounded-lg focus:outline-none focus:border-gold text-white"
                            ></textarea>
                            <button
                                onClick={handleWhatsApp}
                                className="bg-gold text-white px-8 py-3 rounded-full font-semibold hover:bg-green-600 transition duration-300"
                            >
                                {t('contact.button')}
                            </button>
                        </form>
                    </div>
                </div>
            </div>

            <ModalForm
                isOpen={modalOpen}
                onClose={() => setModalOpen(false)}
                prefillMessage={prefillMessage}
                handleWhatsApp={handleWhatsApp2}
            />

            {/* Footer */}
            <footer className="bg-black text-white py-8">
                <div className="container mx-auto px-4 text-center">
                    <p>{t('footer')}</p>
                    <div className="container mx-auto px-4 text-center space-x-4">
                        <button
                            onClick={() => setImpressumOpen(true)}
                            className="text-gold hover:underline"
                        >
                            Impressum
                        </button>
                        <button
                            onClick={() => setDatenschutzOpen(true)}
                            className="text-gold hover:underline"
                        >
                            Datenschutzerklärung
                        </button>
                    </div>
                </div>
            </footer>

            {/* Modals */}
            <LegalModal
                isOpen={isImpressumOpen}
                onClose={() => setImpressumOpen(false)}
                title="Impressum"
                content={impressumContent}
            />
            <LegalModal
                isOpen={isDatenschutzOpen}
                onClose={() => setDatenschutzOpen(false)}
                title="Datenschutzerklärung"
                content={datenschutzContent}
            />
        </div>
    );
}

export default App;
