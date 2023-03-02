import { Carousel } from "react-bootstrap";

function Slider() {
  return (
    <Carousel fade>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://media.istockphoto.com/id/500466008/fr/photo/steak-de-b%C5%93uf.jpg?s=612x612&w=0&k=20&c=eXg2uV0UUk1aa7jJFoPahVRf1eMFgiwBLtJLwPp6L4g="
          alt="First slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://media.istockphoto.com/id/182409111/fr/photo/brochettes-de-crevettes-et-de-b%C5%93uf.jpg?s=612x612&w=0&k=20&c=wqfrbvIsgI-qD574IBohCZ6-y1vO3yX3j6kr2ZXAvgU="
          alt="Second slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://media.gettyimages.com/id/1081422898/fr/photo/po%C3%AAl%C3%A9e-de-canard.jpg?s=612x612&w=gi&k=20&c=XyjBFCxHVkPF_xzqzJGcH4939UqdgzWlye5edHKSZGA="
          alt="Third slide"
        />
      </Carousel.Item>
    </Carousel>
  );
}

export default Slider;
