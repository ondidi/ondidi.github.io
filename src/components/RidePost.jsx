import "../assets/styles/RidePost.css";

const RidePost = ({
  title,
  date,
  images = [],
  content
}) => {

  return (

    <section className="ride-post">

      <div className="ride-post-header">

        <h1>{title}</h1>

        <span>
          Publicado em {date}
        </span>

      </div>

      <div className="ride-post-content">

        <p>{content}</p>

<div className="ride-gallery">

  {images.map((img, index) => (

    <div
      className="ride-gallery-card"
      key={index}
    >

      <img
        src={img}
        alt={title}
        className="ride-post-image"
      />

      <div className="ride-gallery-footer">

        <span>
          AMIGOS NO PEDAL
        </span>

        <div className="ride-gallery-actions">

          <button>↗</button>

          <button>♡</button>

        </div>

      </div>

    </div>

  ))}

</div>

      </div>

    </section>

  );

};

export default RidePost;