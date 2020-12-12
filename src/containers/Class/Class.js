import { useQuery, gql, from } from "@apollo/client";
import { Link } from "react-router-dom";
import ContentCard from "../../components/Card/ContentCard";
import { Helmet } from "react-helmet";
import banner from "../../assets/images/bannerClass.jpg";
import ClassCard from "../../components/Card/ClassCard";
const DATA = gql`
  query getClasses {
    classes {
      id
      name
      slug
      description
      thumbnail {
        url
      }
    }
  }
`;

const Class = ({ match }) => {
  const { loading, error, data } = useQuery(DATA, {
    variables: {
      slug: match.params.slug,
    },
  });
  let show = <div>Loading...</div>;
  if (!loading && data) {
    show = (
      <>
        <div className="mb-10">
          <img src={banner} alt="CLASS" />
        </div>
        <div className="mb-10">
          <div className="container mx-auto lg:px-20">
            <div className="grid grid-cols-2  md:grid-cols-3  justify-center	 gap-4">
              {data.classes.map((classe, i) => {
                return <ClassCard editor key={classe.id} data={classe} />;
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
        <title>Class</title>
        <meta name="description" content="Class for Bicara Project" />
      </Helmet>
      {show}
    </div>
  );
};

export default Class;
