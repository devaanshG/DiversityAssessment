import "./CarouselItem.css";

interface CarouselItemProps {
  title: String;
  desc: String;
}

function CarouselItem({ title, desc }: CarouselItemProps) {
  return (
    <>
      <div className="carousel-item">
        <h1>{title}</h1>
        <p>{desc}</p>
      </div>
    </>
  );
}

export default CarouselItem;
