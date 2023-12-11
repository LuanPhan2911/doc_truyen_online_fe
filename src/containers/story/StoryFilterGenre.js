import { useEffect } from "react";
import "./StoryFilterGenre.scss";
import { useGenresFilter, useQueryString } from "../../hooks";
import _ from "lodash";
import { useSearchParams } from "react-router-dom";
const APPEND = 0;
const REMOVE = 1;
const StoryFilterGenre = ({ selectedStoryGenres, setSelectedStoryGenres }) => {
  const [genres, setGenres, , hasGenres] = useGenresFilter();
  const [qs, setQs] = useSearchParams();
  const { name } = useQueryString();

  useEffect(() => {
    let selectedGenresCp = [...selectedStoryGenres];
    let genresSlug = qs.get("genres")?.split(",") || [];
    let allGenres = [];
    if (hasGenres) {
      let genresCp = [...genres];
      genresCp = genresCp.map((item) => {
        let genres = item?.genres;
        allGenres = [...allGenres, ...genres];
        return {
          ...item,
          genres: item?.genres?.map((genre) => {
            let slugExist = genresSlug.includes(genre?.slug);
            return {
              ...genre,
              selected: slugExist ? true : false,
            };
          }),
        };
      });
      setGenres(genresCp);
      genresSlug = genresSlug.map((item) => ({ slug: item }));
      selectedGenresCp = _.intersectionBy(allGenres, genresSlug, "slug");
      setSelectedStoryGenres(selectedGenresCp);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [hasGenres, qs.get("genres")]);
  const handleChangeSelectGenre = (genre, action) => {
    let genresSlug = qs.get("genres")?.split(",") || [];

    if (action === APPEND) {
      setQs((prev) => {
        prev.set("genres", [...genresSlug, genre?.slug].toString());
        return prev;
      });
    } else if (action === REMOVE) {
      genresSlug = genresSlug.filter((item) => item && item !== genre?.slug);

      setQs((prev) => {
        prev.set("genres", genresSlug.toString());
        if (_.isEmpty(genresSlug)) {
          prev.delete("genres");
        }
        return prev;
      });
    }
  };
  const handleClearSelectGenre = () => {
    let genresCp = [...genres];
    genresCp = genresCp.map((item) => {
      return {
        ...item,
        genres: item?.genres?.map((genre) => {
          return {
            ...genre,
            selected: false,
          };
        }),
      };
    });
    setGenres(genresCp);
    setSelectedStoryGenres([]);
    setQs((prev) => {
      prev.delete("genres");
      return prev;
    });
  };

  return (
    <>
      <div className="selected-genre">
        <div className="d-flex justify-content-between mb-2">
          <div className="tag-title">Đã chọn</div>
          {selectedStoryGenres?.length > 0 && (
            <button
              className="clear-tag"
              onClick={() => handleClearSelectGenre()}
            >
              Làm mới
            </button>
          )}
        </div>

        <div className="tag-wrapper">
          {name && <span className="search-value">Đang tìm: {name}</span>}
          {selectedStoryGenres?.length > 0 &&
            selectedStoryGenres.map((item) => {
              return (
                <span
                  key={item.id}
                  className="selected-tag"
                  onClick={() => handleChangeSelectGenre(item, REMOVE)}
                >
                  {item.name}
                  <i className="bi bi-x-lg"></i>
                </span>
              );
            })}
        </div>
      </div>
      {genres?.length > 0 &&
        genres?.map((item) => {
          return (
            <div className="story-genres" key={item?.value}>
              <div className="tag-title">{item?.title}</div>
              <div className="tag-wrapper">
                {item?.genres?.map((genre) => {
                  return (
                    <span
                      key={genre?.id}
                      onClick={() => handleChangeSelectGenre(genre, APPEND)}
                      className={genre?.selected ? "selected-tag" : ""}
                    >
                      {genre?.name}
                    </span>
                  );
                })}
              </div>
            </div>
          );
        })}
    </>
  );
};
export default StoryFilterGenre;
