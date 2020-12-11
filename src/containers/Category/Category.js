import { useQuery, gql, from } from "@apollo/client";
import { Link } from "react-router-dom";
import ContentCard from "../../components/Card/ContentCard";
import { Helmet } from "react-helmet";
const DATA = gql`
  query Category($slug: String!) {
    categoryBySlug(slug: $slug) {
      id
      slug
      published_at
      name
      thumbnail {
        url
      }
      videos {
        id
        judul
        thumbnail {
          url
        }
        slug
      }
    }
  }
`;

const Category = ({ match }) => {
  const { loading, error, data } = useQuery(DATA, {
    variables: {
      slug: match.params.slug,
    },
  });
  let show = (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Category</title>
        <meta name="description" content="Category for Bicara Project" />
      </Helmet>
      <div>Loading...</div>
    </>
  );
  if (!loading && data) {
    const { id, name, description, thumbnail, videos } = data.categoryBySlug;
    show = (
      <>
        <Helmet>
          <meta charSet="utf-8" />
          <title>{name}</title>
          <meta name="description" content={description} />
        </Helmet>
        <div>
          <img src={thumbnail.url} alt={name} />
        </div>
        <div className="container mx-auto lg:px-20">
          <div className="mt-20 grid grid-cols-1 lg:grid-cols-2 justify-center	 gap-4">
            {videos.map((video, i) => {
              return (
                <Link to={`${video.slug ? "/collection/" + video.slug : "/"}`}>
                  <ContentCard rounded key={video.id} data={video} popular />
                </Link>
              );
            })}
          </div>
        </div>
      </>
    );
  }
  return <div>{show}</div>;
};

export default Category;
