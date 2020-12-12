import React from "react";
import { useQuery, gql } from "@apollo/client";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import ContentCard from "../../components/Card/ContentCard";
const DATA = gql`
  query Editor($slug: String) {
    editorBySlug(slug: $slug) {
      id
      name
      slug
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
const EditorsPick = ({ match }) => {
  const { loading, error, data } = useQuery(DATA, {
    variables: {
      slug: match.params.slug,
    },
  });
  let show = null;
  if (data) {
    const { id, name, thumbnail, videos } = data.editorBySlug;

    show = (
      <div>
        <Helmet>
          <meta charSet="utf-8" />
          <title>{name}</title>
          <meta name="description" content={name} />
        </Helmet>
        <div className="flex justify-center items-center ">
          <img src={thumbnail.url} className="w-72 md:w-96" />
        </div>
        <div>
          <div className="grid grid-cols-2 lg:grid-cols-4 justify-center	 gap-4">
            {videos.map((video, i) => {
              return (
                <Link
                  to={`${video.slug ? "/collection/" + video.slug : "/"}`}
                  key={video.id}
                >
                  <ContentCard rounded data={video} hide={i > 3} />
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    );
  }
  return (
    <div>
      {data && !loading ? (
        show
      ) : (
        <div>
          <Helmet>
            <meta charSet="utf-8" />
            <title>Video</title>
            <meta name="description" content="Video For Bicara Project" />
          </Helmet>
          loading ...{" "}
        </div>
      )}
    </div>
  );
};

export default EditorsPick;
