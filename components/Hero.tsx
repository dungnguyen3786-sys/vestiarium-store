import ChasubleSvg from './ChasubleSvg';

export default function Hero() {
  return (
    <section className="hero texture-dark" id="top">
      <div className="hero-inner">
        <p className="eyebrow">Atelier of Liturgical Vestments</p>
        <h1>Garments Cut for the Altar.</h1>
        <p className="hero-sub">
          Each chasuble is sewn by hand from brocade, damask, and silk, in the colour the
          calendar of the Church requires — violet for penitence, red for the blood of the
          martyrs, green for the long ordinary weeks.
        </p>
        <a href="#shop" className="btn btn-gold">Browse the Collection</a>
      </div>
      <div className="hero-figure">
        <ChasubleSvg colorKey="white" />
      </div>
    </section>
  );
}
