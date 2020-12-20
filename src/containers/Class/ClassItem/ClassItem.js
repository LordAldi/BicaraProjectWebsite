import React from "react";
import { useQuery, gql } from "@apollo/client";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import ContentCard from "../../../components/Card/ContentCard";
import ReactMarkdown from "react-markdown";
const DATA = gql`
  query Classes($slug: String) {
    classBySlug(slug: $slug) {
      id
      name
      description
      content
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
const ClassItem = ({ match }) => {
  const { loading, error, data } = useQuery(DATA, {
    variables: {
      slug: match.params.slug,
    },
  });
  let show = null;
  if (data) {
    const {
      id,
      name,
      description,
      thumbnail,
      videos,
      content,
    } = data.classBySlug;

    show = (
      <div className="container mx-auto px-10 flex items-center flex-col">
        <Helmet>
          <meta charSet="utf-8" />
          <title>{name}</title>
          <meta name="description" content={description} />
        </Helmet>
        <div className="flex justify-center w-1/2">
          <img src={thumbnail.url} alt={name} />
        </div>
        <div className="py-10 w-full  max-w-5xl	 sd">
          <h2 className="text-5xl mb-4 text-bold text-center">{name}</h2>
          <ReactMarkdown className="markdown ">{content}</ReactMarkdown>
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

export default ClassItem;
