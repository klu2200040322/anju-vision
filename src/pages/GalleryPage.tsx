import Layout from "@/components/Layout";

const GalleryPage = () => (
  <Layout>
    <section className="bg-teal-deep py-16">
      <div className="container mx-auto px-4">
        <h1 className="font-display text-3xl md:text-4xl font-bold text-primary-foreground">Gallery</h1>
        <p className="text-primary-foreground/60 mt-2">A glimpse into our facilities and team.</p>
      </div>
    </section>
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <p className="text-muted-foreground text-center">Gallery content coming soon. Check back for photos and videos of our hospital, events, and team.</p>
      </div>
    </section>
  </Layout>
);

export default GalleryPage;
