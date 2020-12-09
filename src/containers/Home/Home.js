import Coursel from "../../components/Coursel/Coursel";
import { useQuery, gql } from "@apollo/client";
import ContentCard from "../../components/Card/ContentCard";
import ClassCard from "../../components/Card/ClassCard";

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
      slug
    }
    editorsPicks(limit: 3, sort: "created_at:desc") {
      id
      thumbnail {
        url
      }
      nama
    }
    classes(limit: 3, sort: "created_at:desc") {
      id
      thumbnail {
        url
      }
      name
      description
    }
  }
`;

export default function Home() {
  const { loading, error, data } = useQuery(DATA);

  return (
    <div className="w-screen">
      {!loading && data ? (
        <Coursel data={data.coursel.CourselItem} />
      ) : (
        <div className="h-96 bg-secondary w-full animate-pulse"></div>
      )}
      <div className="container mx-auto lg:px-20 my-10">
        <h3 className="text-2xl	p-2 font-bold	">New Release</h3>
        {!loading && data ? (
          <div className="grid grid-cols-2 lg:grid-cols-4 justify-center	 gap-4">
            {data.videos.map((video, i) => {
              return (
                <ContentCard rounded key={video.id} data={video} hide={i > 3} />
              );
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
        <h3 className="text-2xl	p-2 font-bold	mt-6">EDITORS' PICK</h3>
        {!loading && data ? (
          <div className="grid grid-cols-1  md:grid-cols-3  justify-center	 gap-4">
            {data.editorsPicks.map((video, i) => {
              return (
                <ContentCard editor key={video.id} data={video} hide={i > 3} />
              );
            })}
          </div>
        ) : (
          <div className="grid grid-cols-1  md:grid-cols-3  justify-center	 gap-4">
            <div className="h-60 bg-secondary w-full animate-pulse"></div>
            <div className="h-60 bg-secondary w-full animate-pulse"></div>
            <div className="h-60 bg-secondary w-full animate-pulse"></div>
          </div>
        )}
        <h3 className="text-2xl	p-2 font-bold mt-6	">Class</h3>
        {!loading && data ? (
          <div>
            <div className="grid grid-cols-1  md:grid-cols-3  justify-center	 gap-4">
              {data.classes.map((classe, i) => {
                return <ClassCard editor key={classe.id} data={classe} />;
              })}
            </div>
            <div className="flex justify-end">
              <p>see all class</p>
            </div>
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
