import Card from "./Card";

const SeriesList = ({ series, limit }) => {
  const displaySeries = limit ? series.slice(0, limit) : series;
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 mb-20">
      {displaySeries.map((serie) => (
        <Card key={serie.id} {...serie} />
      ))}
    </div>
  );
};

export default SeriesList;