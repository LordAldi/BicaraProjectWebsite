// import Coursel from "../../components/Coursel/Coursel";
import { useQuery, gql } from "@apollo/client";
import ContentCard from "../../components/Card/ContentCard";
import ClassCard from "../../components/Card/ClassCard";
// import { useContext } from "react";
// import { UserContext } from "../../Provider/UserProvider/UserProvider";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";
import CourselCoba from "../../components/Coursel/CourselCoba";
import EventCard from "../../components/Card/EventCard";
const DATA = gql`
  query getCoursel {
    coursel {
      CourselItem {
        id
        Link
        picture {
          url
          id
        }
      }
    }
    acaras(limit: 6, sort: "published_at:desc") {
      id
      name
      thumbnail {
        url
      }
      slug
    }
    videos(limit: 8, sort: "published_at:desc") {
      id
      judul
      thumbnail {
        url
      }
      slug
    }
    editors(limit: 3, sort: "published_at:desc") {
      id
      thumbnail {
        url
      }
      name
      slug
    }
    classes(limit: 3, sort: "published_at:desc") {
      id
      slug
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
  // const { user } = useContext(UserContext);
  return (
    <div className="w-screen">
      <Helmet>
        <meta charSet="utf-8" />
        <title>Home</title>
        <meta name="description" content="Home for Bicara Project" />
      </Helmet>
      {!loading && data ? (
        <CourselCoba data={data.coursel.CourselItem} />
      ) : (
        <div className="h-96 bg-secondary w-full animate-pulse"></div>
      )}
      <div className="container mx-auto lg:px-20 my-10">
        {/* <p>hallo {user.username}</p>
        <p> {user.isAuth ? "isAuth" : "notAuth"}</p>
        <p>your ID {user.ID}</p> */}
        <h3 className="text-2xl	p-2 font-bold	">Events</h3>
        {!loading && data ? (
          <div className="grid grid-cols-2 lg:grid-cols-4 justify-center	 gap-4">
            {data.acaras.map((event, i) => {
              return (
                <Link
                  to={`${event.slug ? "/event/" + event.slug : "/"}`}
                  key={event.id}
                >
                  <EventCard rounded data={event} />
                </Link>
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
        <h3 className="text-2xl	p-2 font-bold	">New Release</h3>
        {!loading && data ? (
          <div className="grid grid-cols-2 lg:grid-cols-4 justify-center	 gap-4">
            {data.videos.map((video, i) => {
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
            {data.editors.map((video, i) => {
              return (
                <Link key={video.id} to={`/ep/${video.slug}`}>
                  <ContentCard editor data={video} hide={i > 3} />
                </Link>
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
              <Link to="/class">
                <p>see all class</p>
              </Link>
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
