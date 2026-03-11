import Header from "../components/Header";
import Header1 from "../assets/images/Header1.jpg";
import PageTitle from "../components/PageTitle";


const Gallery = () => {


  return (
    <main>
      {/* Page Title */}
      <PageTitle title="Gallery - Diferancia Global Academy" />

      <Header
        title="Build Your Career in Hospitality"
        subtitle="Intensive Training / International Certification / Job Placement Support"
        bgImage={Header1}
        height="400px"
        showButtons={true}
      />
    </main>
  );
};

export default Gallery;