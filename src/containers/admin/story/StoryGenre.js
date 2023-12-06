import _ from "lodash";

import Select from "react-select";

const StoryGenre = ({
  genres: genreType,
  selectedGenres,
  setSelectedGenres,
}) => {
  let { genres, genreSelected } = genreType;
  if (!_.isEmpty(genreSelected)) {
    genreSelected = {
      ...genreSelected,
      label: genreSelected.name,
      value: genreSelected.id,
    };
  }
  if (!_.isEmpty(genres)) {
    genres = genres.map((item) => {
      return {
        ...item,
        label: item.name,
        value: item.id,
      };
    });
  }
  const handleChangeSelect = (options) => {
    let { name, id, type } = options;
    let selectedGenresCp = [...selectedGenres];
    let isHasGenreType = selectedGenres?.findIndex(
      (item) => item.type === type
    );
    if (_.isEmpty(selectedGenres) || isHasGenreType === -1) {
      selectedGenresCp = [
        ...selectedGenresCp,
        {
          name,
          id,
          type,
        },
      ];
    } else {
      selectedGenresCp =
        selectedGenresCp?.length > 0 &&
        selectedGenresCp.map((item) => {
          return item.type === type
            ? {
                name,
                id,
                type,
              }
            : {
                ...item,
              };
        });
    }

    setSelectedGenres(selectedGenresCp);
  };

  return (
    <div className="col-lg-3 col-sm-6">
      <label className="text-capitalize">{genreType?.title}</label>
      <Select
        options={genres}
        onChange={(options) => handleChangeSelect(options)}
        value={genreSelected || null}
      />
    </div>
  );
};
export default StoryGenre;
