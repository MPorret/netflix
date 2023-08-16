const Section = ({ data }) => {
  return (
    <>
      {data.map((category, index) => {
        return (
          <section key={category.category}>
            <h2 key={index}>{category.category}</h2>

            <div key={category.category} className="carousel">
              {category.images.map((image, index) => {
                return <img src={image} key={index} />;
              })}
            </div>
          </section>
        );
      })}
    </>
  );
};

export default Section;
