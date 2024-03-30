import "./CarouselItem.css";

// Create the interface for the props, that
interface CarouselItemProps {
  title: String;
  desc: String;
  icon: String;
}

function CarouselItem({ title, desc, icon }: CarouselItemProps) {
  return (
    <>
      {/* Create the carouselItem, feeding in the appropriate props */}
      <div className="carousel-item">
        <h1>
          {title}
          <span className="material-symbols-outlined">{icon}</span>{" "}
        </h1>
        <p>{desc}</p>
      </div>
    </>
  );
}

export default CarouselItem;
