export const ComparisonTable = () => (
  <div className="max-w-4xl mx-auto px-6">
    <div className="grid md:grid-cols-3 gap-6">
      <div className="glass rounded-2xl p-6">
        <h3 className="text-white font-semibold text-lg mb-2">Build quote</h3>
        <p className="text-muted text-sm">A fixed project quote based on your scope, pages and requirements.</p>
      </div>
      <div className="glass rounded-2xl p-6">
        <h3 className="text-white font-semibold text-lg mb-2">Monthly care</h3>
        <p className="text-muted text-sm">Optional hosting, updates, backups and small support requests after launch.</p>
      </div>
      <div className="glass rounded-2xl p-6">
        <h3 className="text-white font-semibold text-lg mb-2">Extra work</h3>
        <p className="text-muted text-sm">Larger changes, new features or redesigns are quoted separately before starting.</p>
      </div>
    </div>
  </div>
);
