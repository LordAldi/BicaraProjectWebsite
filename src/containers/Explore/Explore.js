import { useQuery, gql } from "@apollo/client";
import CategoryCard from "../../components/Card/CategoryCard";
import { Link } from "react-router-dom";

import ContentCard from "../../components/Card/ContentCard";
const DATA = gql`
  query explore {
    categories {
      id
      name
      slug
      thumbnail {
        url
      }
    }
    popular {
      videos(limit: 2) {
        id
        judul
        thumbnail {
          url
        }
        slug
      }
    }
    videos(sort: "updated_at:desc") {
      id
      judul
      thumbnail {
        url
      }
      slug
    }
  }
`;
export default function Explore() {
  const { loading, error, data } = useQuery(DATA);
  let show = <div>loading...</div>;
  if (!loading && data) {
    show = (
      <>
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 mt-4">
          {data.categories.map((category) => {
            return (
              <Link
                to={`${category.slug ? "/category/" + category.slug : "/"}`}
              >
                <CategoryCard key={category.id} category={category} />
              </Link>
            );
          })}
        </div>
        <div>
          <h3 className="text-2xl	p-2 font-bold mt-6	">Popular</h3>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mt-4">
            {data.popular.videos.map((video) => {
              return (
                <Link to={`${video.slug ? "/collection/" + video.slug : "/"}`}>
                  <ContentCard popular key={video.id} data={video} />
                </Link>
              );
            })}
          </div>

          <div className="mt-20 grid grid-cols-2 lg:grid-cols-4 justify-center	 gap-4">
            {data.videos.map((video, i) => {
              return (
                <Link to={`${video.slug ? "/collection/" + video.slug : "/"}`}>
                  <ContentCard
                    rounded
                    key={video.id}
                    data={video}
                    hide={i > 3}
                  />
                </Link>
              );
            })}
          </div>
        </div>
      </>
    );
  }
  return <div className="w-screen container mx-auto lg:px-20">{show}</div>;
}
