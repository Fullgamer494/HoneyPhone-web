import Image from "next/image";
import { site } from "@/lib/site";

function BrandMark({ small = false }: { small?: boolean }) {
  return (
    <Image
      aria-hidden="true"
      alt=""
      className={small ? "brand-mark brand-mark-small" : "brand-mark"}
      src="/honeyphone-logo.jpeg"
      width={2048}
      height={2048}
      unoptimized
    />
  );
}

function ArrowIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 20 20" fill="none">
      <path d="M4 10h11m-4.5-4.5L15 10l-4.5 4.5" />
    </svg>
  );
}

function FeatureIcon({ kind }: { kind: "wifi" | "signal" | "shield" | "account" }) {
  const paths = {
    wifi: <><path d="M3.5 8.5a13 13 0 0 1 17 0M6.7 11.8a8 8 0 0 1 10.6 0M10 15a3 3 0 0 1 4 0" /><circle cx="12" cy="18" r=".7" /></>,
    signal: <><path d="M4 19V9m5 10V5m5 14v-7m5 7V3" /><path d="M2 21h20" /></>,
    shield: <><path d="M12 3 19 6v5c0 4.6-3 7.7-7 10-4-2.3-7-5.4-7-10V6l7-3Z" /><path d="m9 12 2 2 4-4" /></>,
    account: <><circle cx="12" cy="8" r="3.25" /><path d="M5 20a7 7 0 0 1 14 0" /></>,
  };

  return (
    <svg className="feature-icon" aria-hidden="true" viewBox="0 0 24 24" fill="none">
      {paths[kind]}
    </svg>
  );
}

function SignalGraphic() {
  return (
    <div className="signal-stage" role="img" aria-label="Ilustración de HoneyPhone observando señales de red">
      <div className="stage-grid" />
      <div className="orbit orbit-one" />
      <div className="orbit orbit-two" />
      <div className="orbit orbit-three" />
      <div className="signal-core">
        <BrandMark />
        <span>HP</span>
      </div>
      <span className="orbit-point point-top" />
      <span className="orbit-point point-right" />
      <span className="orbit-point point-bottom" />
      <div className="signal-tag tag-dns"><i /> DNS <b>en preparación</b></div>
      <div className="signal-tag tag-wifi"><i /> Wi-Fi <b>local</b></div>
      <div className="signal-tag tag-https"><i /> HTTPS <b>en preparación</b></div>
      <div className="stage-caption"><span>LECTURA DE RED</span><span>01 / 03</span></div>
    </div>
  );
}

const capabilities = [
  {
    index: "01",
    kind: "wifi" as const,
    title: "Una lectura clara de tu Wi-Fi",
    text: "Consulta indicadores que Android expone sobre seguridad Wi-Fi y detección de portales cautivos. HoneyPhone no cambia la configuración del router.",
    status: "Disponible en Android",
  },
  {
    index: "02",
    kind: "signal" as const,
    title: "Comprobaciones con límites definidos",
    text: "Las sondas DNS y HTTPS comparan una respuesta con referencias del proyecto. Permanecen como “sin resultado” hasta configurar destinos controlados.",
    status: "Destinos por configurar",
  },
  {
    index: "03",
    kind: "shield" as const,
    title: "Un señuelo que tú enciendes",
    text: "Activa un servidor HTTP local en tu Wi-Fi para observar solicitudes entrantes. Guarda IP de origen, método, ruta y User-Agent; no lee cuerpos de petición.",
    status: "Solo durante la sesión activa",
  },
  {
    index: "04",
    kind: "account" as const,
    title: "Tu cuenta, tus revisiones",
    text: "Inicia sesión con correo y contraseña o Google. Las revisiones sincronizadas se asocian a tu cuenta; puedes solicitar verificación de correo y recuperar el acceso.",
    status: "Datos separados por cuenta",
  },
];

export default function Home() {
  return (
    <main>
      <div className="site-shell">
        <header className="site-header">
          <a className="brand" href="#inicio" aria-label="HoneyPhone, inicio">
            <BrandMark small />
            <span>HoneyPhone</span>
          </a>
          <nav aria-label="Navegación principal" className="main-nav">
            <a href="#producto">Producto</a>
            <a href="#alcance">Alcance</a>
            <a href="#documentacion">Documentación</a>
            <a href="#equipo">Equipo</a>
          </nav>
          <a className="header-cta" href={site.apkUrl} target="_blank" rel="noreferrer">
            Descargar app <ArrowIcon />
          </a>
        </header>

        <section className="hero" id="inicio">
          <div className="hero-copy">
            <div className="eyebrow"><span className="eyebrow-line" /> SEGURIDAD DE RED, DESDE ANDROID</div>
            <h1>Entiende tu red.<br /><span>Sin adivinar.</span></h1>
            <p className="hero-description">
              HoneyPhone convierte señales técnicas de tu conexión en información comprensible,
              con comprobaciones acotadas y un señuelo local que solo se activa cuando tú lo decides.
            </p>
            <div className="hero-actions">
              <a className="button button-primary" href={site.apkUrl} target="_blank" rel="noreferrer">
                Descargar APK <ArrowIcon />
              </a>
              <a className="button button-quiet" href="#producto">Conocer el proyecto <span>↓</span></a>
            </div>
            <div className="hero-meta">
              <span><i className="live-dot" /> Android</span>
              <span>Privacidad por diseño</span>
              <span>Hecho para redes autorizadas</span>
            </div>
          </div>
          <SignalGraphic />
          <div className="hero-index"><span>01</span> / OBSERVAR CON CONTEXTO</div>
        </section>

        <section className="manifesto" aria-label="Propósito de HoneyPhone">
          <p className="section-kicker">EL PROPÓSITO</p>
          <div className="manifesto-copy">
            <h2>Más contexto para cuidar la conexión que usas todos los días.</h2>
            <p>
              Diseñamos una herramienta móvil que explica qué puede observar y qué no. Sin
              escanear a terceros, sin capturar el tráfico de navegación y sin convertir una
              señal aislada en una alarma exagerada.
            </p>
          </div>
          <div className="manifesto-mark"><BrandMark /></div>
        </section>

        <section className="product-section section-block" id="producto">
          <div className="section-heading">
            <div>
              <p className="section-kicker">QUÉ HACE</p>
              <h2>Una lectura útil.<br /><span>Con límites claros.</span></h2>
            </div>
            <p className="section-intro">Cada indicador tiene una explicación y un alcance concreto. Si una comprobación aún no está lista, la app lo dice.</p>
          </div>

          <div className="capability-grid">
            {capabilities.map((item) => (
              <article className="capability-card" key={item.index}>
                <div className="card-topline"><span>{item.index} / 04</span><FeatureIcon kind={item.kind} /></div>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
                <div className="card-status"><span />{item.status}</div>
              </article>
            ))}
          </div>
        </section>

        <section className="workflow section-block" id="alcance">
          <div className="workflow-heading">
            <p className="section-kicker">CÓMO SE USA</p>
            <h2>La red primero.<br /><span>La decisión siempre tuya.</span></h2>
          </div>
          <div className="workflow-steps">
            <article><span className="step-number">01</span><div><h3>Conecta a una red Wi-Fi</h3><p>La revisión lee los indicadores disponibles en el dispositivo.</p></div></article>
            <article><span className="step-number">02</span><div><h3>Inicia la revisión</h3><p>Las comprobaciones controladas se realizan con acceso a internet y destinos definidos.</p></div></article>
            <article><span className="step-number">03</span><div><h3>Interpreta cada señal</h3><p>Los resultados distinguen entre una diferencia, una conexión segura y una prueba sin resultado.</p></div></article>
          </div>
          <div className="scope-note">
            <div className="scope-symbol">i</div>
            <p><strong>Alcance:</strong> HoneyPhone no es un auditor integral ni una herramienta de captura de paquetes. No intercepta navegación, no prueba redes ajenas y no sustituye una evaluación profesional de seguridad.</p>
          </div>
        </section>

        <section className="docs-section section-block" id="documentacion">
          <div className="docs-copy">
            <p className="section-kicker">PARA QUIEN QUIERE VER MÁS</p>
            <h2>Abierto a la<br /><span>inspección.</span></h2>
            <p>Consulta los contratos de la API o instala la versión Android disponible. La documentación técnica describe los endpoints y modelos de datos.</p>
          </div>
          <div className="docs-links">
            <a href={site.apiDocs} target="_blank" rel="noreferrer" className="doc-link">
              <span className="doc-icon">API</span><span><b>Documentación de la API</b><small>Endpoints, autenticación y modelos</small></span><ArrowIcon />
            </a>
            <a href={site.apiSchema} target="_blank" rel="noreferrer" className="doc-link">
              <span className="doc-icon">JSON</span><span><b>Esquema OpenAPI</b><small>Contrato legible por herramientas</small></span><ArrowIcon />
            </a>
            <a href={site.apkUrl} target="_blank" rel="noreferrer" className="doc-link">
              <span className="doc-icon download-icon">↓</span><span><b>HoneyPhone para Android</b><small>APK firmado · versión {site.releaseVersion}</small></span><ArrowIcon />
            </a>
          </div>
        </section>

        <section className="team-section section-block" id="equipo">
          <div className="team-intro">
            <p className="section-kicker">QUIÉNES SOMOS</p>
            <h2>Una herramienta<br /><span>hecha con intención.</span></h2>
            <p>HoneyPhone es un proyecto independiente para hacer más comprensible la seguridad cotidiana de las redes. Lo construimos con foco en transparencia, control del usuario y límites verificables.</p>
          </div>
          <div className="team-card">
            <span className="team-label">EQUIPO DEL PROYECTO</span>
            <div className="team-member"><span className="member-index">01</span><span>Gilberto Málaga Fernández</span><span className="member-role">Equipo</span></div>
            <div className="team-member"><span className="member-index">02</span><span>Jeshua Isaac Luna Zúñiga</span><span className="member-role">Equipo</span></div>
            <div className="team-footnote">Un proyecto en evolución. Las funciones y destinos de prueba se publican con claridad a medida que se habilitan.</div>
          </div>
        </section>

        <section className="download-banner">
          <div className="banner-mark"><BrandMark /></div>
          <div><p className="section-kicker">EMPIEZA POR TU TELÉFONO</p><h2>Observa. Comprende. Decide.</h2><p>Descarga la versión Android y explora las señales de tu propia conexión.</p></div>
          <a className="button button-light" href={site.apkUrl} target="_blank" rel="noreferrer">Descargar HoneyPhone <ArrowIcon /></a>
        </section>

        <footer className="site-footer">
          <a className="brand footer-brand" href="#inicio"><BrandMark small /><span>HoneyPhone</span></a>
          <span>Una mirada más clara a tu red.</span>
          <div><a href="#alcance">Alcance</a><a href={site.apiDocs} target="_blank" rel="noreferrer">API</a><a href={site.apkUrl} target="_blank" rel="noreferrer">Descarga</a></div>
          <small>© 2026 HoneyPhone</small>
        </footer>
      </div>
    </main>
  );
}
