import React from "react";
import banner from "../../assets/images/bannerEvent.jpg";
import { useQuery, gql } from "@apollo/client";
import EventCard from "../../components/Card/EventCard";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";
const DATA = gql`
  query event {
    acaras(sort: "published_at:desc") {
      id
      name
      thumbnail {
        url
      }
      slug
    }
  }
`;
const EventPage = ({ match }) => {
  const { loading, error, data } = useQuery(DATA);
  let show = <div>Loading...</div>;
  if (!loading && data) {
    show = (
      <>
        <div className="mb-10">
          <img src={banner} alt="CLASS" />
        </div>
        <div className="mb-10">
          <div className="container mx-auto lg:px-20">
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
          </div>
        </div>
      </>
    );
  }
  return (
    <div>
      {" "}
      <Helmet>
        <meta charSet="utf-8" />
        <title>Event</title>
        <meta name="description" content="Event for Bicara Project" />
      </Helmet>
      {show}
    </div>
  );
};

export default EventPage;
