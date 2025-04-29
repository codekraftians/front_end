import React, { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Card from "../components/Card";
import Pagination from "../components/Pagination";
import SearchFilter from "../components/searchFilter/SearchFilter";

function Explore() {

  // datos de ejemplo para los eventos, cambiar por datos reales cuando backend esté listo
  const events = Array.from({ length: 300 }, (_, index) => ({
    id: index,
    title: `Event ${index + 1}`,
    image: 'https://external-preview.redd.it/moqwXPEx6GDBtYvFl5I51lltcFwBC_SvFuEDiO2mRaM.jpg?width=640&crop=smart&auto=webp&s=b95063ca9510280511942f855088c7b7749760a5',
    description: 'This is a sample event description.',
    isNew: index % 2 === 0,
  }));

  //esto es la paginación, ya puesta con 15 eventos por página
  const eventsPerPage = 15;
  const [currentPage, setCurrentPage] = useState(1);

  const indexOfLastEvent = currentPage * eventsPerPage;
  const indexOfFirstEvent = indexOfLastEvent - eventsPerPage;
  const currentEvents = events.slice(indexOfFirstEvent, indexOfLastEvent);
  
  const totalPages = Math.ceil(events.length / eventsPerPage);

  // Función para determinar si el evento es nuevo, añade la badge "NEW" si hace menos de 5 días que fue creado, ready para usar cuando el backend esté listo
  const isNew = (createdAt) => {
    const createdDate = new Date(createdAt);
    const now = new Date();
    const diffInDays = (now - createdDate) / (1000 * 60 * 60 * 24);
    return diffInDays < 5;
  };

  return (
    <>
    <Navbar />
    <SearchFilter />
      <div className="p-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 justify-items-center">
        {currentEvents.map((event) => (
          <Card 
            key={event.id}
            title={event.title}
            image={event.image}
            description={event.description}
            isNew={event.isNew}
          />
        ))}
      </div>
      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={(page) => setCurrentPage(page)}
      />
    <Footer />
    </>
  );
}

export default Explore;