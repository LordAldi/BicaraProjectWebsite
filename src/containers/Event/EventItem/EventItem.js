import { useQuery, gql } from "@apollo/client";
import { Helmet } from "react-helmet";
import ReactMarkdown from "react-markdown";

import { Link } from "react-router-dom";
const DATA = gql`
  query Event($slug: String) {
    acaraBySlug(slug: $slug) {
      id
      name
      desc
      thumbnail {
        url
      }
    }
  }
`;
const EventItem = ({ match }) => {
  const { loading, error, data } = useQuery(DATA, {
    variables: {
      slug: match.params.slug,
    },
  });
  console.log(data);
  let show = null;
  if (data) {
    const { name, thumbnail, id, desc } = data.acaraBySlug;

    show = (
      <div className="container mx-auto px-10 flex items-center flex-col">
        <Helmet>
          <meta charSet="utf-8" />
          <title>{name}</title>
          <meta name="description" content={name} />
        </Helmet>
        <div className="flex justify-center w-1/2">
          <img src={thumbnail.url} alt={name} />
        </div>
        <div className="py-10 w-full  max-w-5xl	 sd">
          <h2 className="text-5xl mb-4 text-bold text-center">{name}</h2>
          <ReactMarkdown className="markdown ">{desc}</ReactMarkdown>
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
            <title>Event</title>
            <meta name="description" content="Event For Bicara Project" />
          </Helmet>
          loading ... {match.params.slug}
        </div>
      )}
    </div>
  );
};

export default EventItem;
