import styles from "./page.module.css";
import { RATING } from "../../util/rating";
import { useMemo } from "react";

type TRatingProps = {
  rating: "g" | "pg" | "pg-13" | "r";
};

export default function Rating({ rating }: TRatingProps) {
  const renderRatingType = useMemo(() => {
    let type;
    let level;
    let bg;

    switch (rating) {
      case RATING.G.type: {
        type = RATING.G.type;
        level = RATING.G.level;
        bg = RATING.G.backGroundColor;
        break;
      }
      case RATING.PG.type: {
        type = RATING.PG.type;
        level = RATING.PG.level;
        bg = RATING.PG.backGroundColor;

        break;
      }
      case RATING.PG_13.type: {
        type = "pg 13";
        level = RATING.PG_13.level;
        bg = RATING.PG_13.backGroundColor;

        break;
      }
      case RATING.R.type: {
        type = RATING.R.type;
        level = RATING.R.level;
        bg = RATING.R.backGroundColor;

        break;
      }
      default:
        break;
    }

    type = type?.split(" ");

    return (
      <div
        className={styles.ratingWrapper}
        style={{
          background: bg,
        }}
      >
        <div className={styles.ratingContent}>
          <div className={styles.ratingType}>
            {type?.map((item, index) => (
              <span key={index}>{item}</span>
            ))}
          </div>
          <div className={styles.ratingLevel}>level {level}</div>
        </div>
      </div>
    );
  }, [rating]);

  return <div>{renderRatingType}</div>;
}
