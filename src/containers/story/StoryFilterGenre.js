import { useEffect, useLayoutEffect } from "react";
import "./StoryFilterGenre.scss";
import { useGenresFilter, useQueryString } from "../../hooks";
import _ from "lodash";
import { useLocation, useSearchParams } from "react-router-dom";
const APPEND = 0;
const REMOVE = 1;
const StoryFilterGenre = ({ selectedStoryGenres, setSelectedStoryGenres }) => {
  const [genres, setGenres] = useGenresFilter();
  const [qs, setQs] = useSearchParams();
  const { name } = useQueryString();
  const { state: category } = useLocation();
  useEffect(() => {
    let genresSlug = qs.get("genres")?.split(",") || [];
    let selectedGenresCp = [...selectedStoryGenres];

    if (!_.isEmpty(genres)) {
      let genresCp = [...genres];
      genresCp = genresCp.map((item) => {
        return {
          ...item,
          genres: item?.genres?.map((genre) => {
            let slugExist = genresSlug.includes(genre?.slug);
            if (slugExist) {
              selectedGenresCp = [...selectedGenresCp, genre];
            }
            return {
              ...genre,
              selected: slugExist ? true : false,
            };
          }),
        };
      });
      setGenres(genresCp);
      setSelectedStoryGenres(selectedGenresCp);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [genres?.length]);
  useEffect(() => {
    let genresSlug = selectedStoryGenres?.map((item) => item?.slug);
    if (!_.isEmpty(genresSlug)) {
      setQs((prev) => {
        prev.set("genres", genresSlug.join(","));
        return prev;
      });
    }
  }, [selectedStoryGenres]);
  useEffect(() => {
    if (!_.isEmpty(category)) {
      if (category?.id) {
        handleChangeSelectGenre(category, APPEND);
      } else {
        handleClearSelectGenre();
      }
    }
  }, [category]);
  const handleChangeSelectedGenre = (genre, action) => {
    let genresCp = [...genres];
    let genreIndex = genresCp.findIndex((item) => item?.value === genre?.type);
    let selectedGenres = {};
    if (genreIndex === -1) {
      selectedGenres = genresCp.find((item) => item?.value === 1);
    } else {
      selectedGenres = genresCp[genreIndex];
    }
    selectedGenres = {
      ...selectedGenres,
      genres: selectedGenres?.genres?.map((item) => {
        let selected = item.selected;
        switch (action) {
          case APPEND:
            selected = item.id === genre?.id ? true : item.selected;
            break;
          case REMOVE:
            selected = item.id === genre?.id ? false : item.selected;
            break;
          default:
            break;
        }
        return {
          ...item,
          selected: selected,
        };
      }),
    };
    let categoryIndex = genresCp?.findIndex((item) => item.value === 1);
    genresCp[genreIndex === -1 ? categoryIndex : genreIndex] = selectedGenres;
    setGenres(genresCp);
  };

  const handleChangeSelectGenre = (genre, action) => {
    handleChangeSelectedGenre(genre, action);
    let selectedGenresCp = [...selectedStoryGenres];
    let genreIndex = selectedGenresCp.findIndex(
      (item) => item.id === genre?.id
    );
    if (action === APPEND && genreIndex === -1) {
      selectedGenresCp = [...selectedGenresCp, genre];
      setSelectedStoryGenres(selectedGenresCp);
    } else if (action === REMOVE) {
      selectedGenresCp = selectedGenresCp.filter(
        (item) => item.id !== genre?.id
      );
      if (_.isEmpty(selectedGenresCp)) {
        setQs((prev) => {
          prev.delete("genres");
          return prev;
        });
      }
      setSelectedStoryGenres(selectedGenresCp);
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
