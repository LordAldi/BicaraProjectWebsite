import { useQuery, gql } from "@apollo/client";
import ReactPlayer from "react-player/youtube";
import ContentCard from "../../components/Card/ContentCard";

const DATA = gql`
  query Video($slug: String!) {
    videoBySlug(slug: $slug) {
      id
      slug
      created_at
      judul
      by
      description
      source
      categories {
        id
        name
      }
    }
    videos {
      id
      thumbnail {
        url
      }
      judul
      slug
    }
  }
`;

const Video = ({ match }) => {
  const { loading, error, data } = useQuery(DATA, {
    variables: {
      slug: match.params.slug,
    },
  });
  let show = null;
  if (data) {
    console.log(data);
    const { source, judul, by, description, categories } = data.videoBySlug;
    let news = data.videos.map((video) => {
      return <ContentCard rounded key={video.id} data={video} />;
    });
    show = (
      <div className="container mx-auto px-10 flex items-center flex-col">
        <div className="w-96 md:w-700">
          <div className="relative h-0 pb-fluid-video ">
            <ReactPlayer
              className="absolute top-0 left-0 "
              controls={true}
              pip
              width="100%"
              height="100%"
              url={source}
            />
          </div>
        </div>
        <div className="grid md:grid-cols-4 gap-4">
          <div className="md:col-span-3">
            <h2>{judul}</h2>
            <p>{by}</p>
            <p>{description}</p>
          </div>
          <div>{news}</div>
        </div>
      </div>
    );
    console.log(source);
  }

  return <div>{data && !loading ? show : <div>loading ... </div>}</div>;
};

export default Video;
