import Coursel from "../../components/Coursel/Coursel";
import { useQuery, gql } from "@apollo/client";
import ContentCard from "../../components/Card/ContentCard";

const DATA = gql`
  query getCoursel {
    coursel {
      CourselItem {
        id
        picture {
          url
          id
        }
      }
    }
    videos(limit: 8, sort: "created_at:desc") {
      id
      judul
      thumbnail {
        url
      }
    }
    editorChoice {
      videos {
        judul
        id
        thumbnail {
          url
        }
      }
    }
  }
`;

export default function Home() {
  const { loading, error, data } = useQuery(DATA);
  console.log("Aeff");
  if (data) console.log(data);

  return (
    <div className="w-screen">
      {!loading && data ? (
        <Coursel data={data.coursel.CourselItem} />
      ) : (
        <div className="h-96 bg-secondary w-full animate-pulse"></div>
      )}
      <div className="container mx-auto px-3 my-10">
        <h3 className="text-2xl	p-2 font-bold	">New Release</h3>
        {!loading && data ? (
          <div className="grid grid-cols-2 lg:grid-cols-4 justify-center	 gap-4">
            {data.videos.map((video, i) => {
              return <ContentCard key={video.id} data={video} hide={i > 3} />;
            })}
          </div>
        ) : (
          <div className="grid grid-cols-2 lg:grid-cols-4 justify-center	 gap-4">
            <div className="h-60 bg-secondary w-full animate-pulse"></div>
            <div className="h-60 bg-secondary w-full animate-pulse"></div>
            <div className="h-60 bg-secondary w-full animate-pulse"></div>
            <div className="h-60 bg-secondary w-full animate-pulse"></div>
          </div>
        )}
        <h3>EDITORS' PICK</h3>
        {!loading && data ? (
          <div className="grid grid-cols-1  md:grid-cols-3  justify-center	 gap-4">
            {data.editorChoice.videos.map((video, i) => {
              return <ContentCard key={video.id} data={video} hide={i > 3} />;
            })}
          </div>
        ) : (
          <div className="grid grid-cols-1  md:grid-cols-3  justify-center	 gap-4">
            <div className="h-60 bg-secondary w-full animate-pulse"></div>
            <div className="h-60 bg-secondary w-full animate-pulse"></div>
            <div className="h-60 bg-secondary w-full animate-pulse"></div>
          </div>
        )}
      </div>
    </div>
  );
}
