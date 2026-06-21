export default function About() {
  return (
    <section className="about texture-dark" id="about">
      <div className="about-inner">
        <h2>The Atelier</h2>
        <p>
          Vestiarium was founded by vestment-makers trained in the old sacristy workshops,
          where a chasuble was cut to the priest who would wear it and not the other way round.
          We still work that way: every order is made to measure, not pulled from a stock rack.
        </p>
        <dl className="facts">
          <div>
            <dt>Cut</dt>
            <dd>Roman, Gothic, and Borromeon, chosen to suit the rite and the wearer&apos;s preference.</dd>
          </div>
          <div>
            <dt>Fabric</dt>
            <dd>Brocade, damask, gabardine, and silk-wool blends, sourced from European mills.</dd>
          </div>
          <div>
            <dt>Turnaround</dt>
            <dd>Six to eight weeks; rush orders considered for ordinations and installations.</dd>
          </div>
        </dl>
      </div>
    </section>
  );
}
