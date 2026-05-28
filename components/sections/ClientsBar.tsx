export function ClientsBar() {
  const clients = ['BCG', 'Airbnb', 'Spotify', 'Adobe', 'Netflix', 'Acme'];

  return (
    <section className="bg-white py-12 md:py-16">
      <div className="container-max">
        <p className="text-center text-muted-text font-dm-sans text-sm uppercase tracking-wide mb-8">
          Partners & Clients
        </p>
        <div className="flex flex-wrap items-center justify-center gap-4 md:gap-8">
          {clients.map((client, index) => (
            <div key={index} className="flex items-center gap-4 md:gap-8">
              <div className="text-lg md:text-xl font-serif font-semibold text-body-text hover:text-primary-accent transition-colors duration-300 cursor-pointer">
                {client}
              </div>
              {index < clients.length - 1 && (
                <div className="w-1.5 h-1.5 bg-border rounded-full hidden md:block" />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
