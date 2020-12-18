import hero from "../../assets/images/aboutus.jpg";
import char from "../../assets/images/char.png";
import Slider from "react-slick";
import StaffCard from "../../components/Card/StaffCard";
import { useQuery, gql } from "@apollo/client";

const DATA = gql`
  query getTeam {
    team {
      id
      TeamMember {
        id
        name
        desc
        role
        email
        photo {
          url
        }
      }
    }
  }
`;
export default function About() {
  const { loading, error, data } = useQuery(DATA);

  const settings = {
    className: "center",
    infinite: true,
    dots: true,

    centerPadding: "100px",
    autoplay: true,
    autoplaySpeed: 3000,
    slidesToShow: 3,
    slidesToScroll: 3,
    speed: 500,
    pauseOnHover: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          autoplaySpeed: 2000,
        },
      },
      {
        breakpoint: 720,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          autoplaySpeed: 1000,
        },
      },
    ],
  };
  let team = <div>Loading...</div>;
  if (!loading && data) {
    team = (
      <Slider {...settings}>
        {data.team.TeamMember.map((staff) => {
          return <StaffCard data={staff} key={staff.id} />;
        })}
      </Slider>
    );
  }
  return (
    <div>
      <div
        className="bg-local bg-clip-border h-700 md:h-screen bg-cover bg-no-repeat bg-top  flex flex-col items-center bg-opacity-80	"
        style={{ backgroundImage: `url(${hero})` }}
      >
        <p className="z-10 pt-20 md:pt-40 text-3xl md:text-4xl	text-white font-semibold	">
          About us
        </p>
        <h1 className="z-10 pt-20 text-5xl md:text-9xl	text-white	font-bold leading-none	">
          Bicara Project
        </h1>
        <p className="z-10  text-4xl md:text-6xl	text-white p-0 font-semibold leading-none	text-center mt-1">
          House Of Public Speaking Improvement
        </p>
      </div>
      <div className="flex flex-col m-10">
        <p className="z-10  text-5xl md:text-8xl md:text-center	font-bold leading-none">
          Brighter, Louder,
        </p>
        <p className="z-10 text-5xl md:text-8xl	md:text-center font-bold leading-none">
          More Power
        </p>
        <p className="z-10 text-3xl md:text-4xl font-semibold text-center text-gray-500">
          Tentang Bicara Project
        </p>
        <div className="flex flex-col md:flex-row pt-8 ">
          <img src={char} className="w-full md:w-2/5" />
          <div className="flex flex-col justify-center pl-6 ">
            <p className="leading-relaxed	text-lg	 text-justify">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras nec
              dolor ut nunc aliquam faucibus eu ut eros. Nunc vitae blandit
              ante. Phasellus vulputate, ligula vulputate malesuada efficitur,
              leo lectus pharetra ex, id feugiat metus ante id risus. Nunc
              efficitur volutpat justo non scelerisque. Maecenas ligula turpis,
              condimentum ut consectetur non, congue in mi. Maecenas in erat ac
              quam eleifend posuere. Proin pretium maximus fringilla.
            </p>
            <p className="leading-relaxed	text-lg text-justify	">
              Nunc scelerisque fermentum ex ac tempor. Aenean sed dui metus.
              Praesent ac gravida arcu, quis porta nunc. Vestibulum gravida
              lobortis dui a rutrum. Nulla elementum tincidunt dui et semper.
              Aliquam erat volutpat. Aenean ante augue, tincidunt quis tellus
              et, ultricies mattis libero. Integer congue neque in condimentum
              tempus. Donec nisi orci, efficitur sed lacus ut, congue accumsan
              magna. Duis ultricies consequat nunc et imperdiet.
            </p>
          </div>
        </div>
      </div>
      <div className="flex flex-col m-10">
        <p className="z-10  text-5xl md:text-8xl md:text-center	font-bold leading-none">
          Meet Our
        </p>
        <p className="z-10 text-5xl md:text-8xl	md:text-center font-bold leading-none">
          Bicara Team
        </p>
        <div className="hidden my-10 md:flex flex-col">
          <p className="z-10 text-2xl md:text-3xl font-semibold text-center text-gray-500 leading-tight">
            Bicara adalah tempat yang kita bangun
          </p>
          <p className="z-10 text-2xl md:text-3xl font-semibold text-center text-gray-500 leading-tight">
            dengan dedikasi yang tinggi, serta
          </p>
          <p className="z-10 text-2xl md:text-3xl font-semibold text-center text-gray-500 leading-tight">
            harapan yang besar dan penuh manfaat.
          </p>
        </div>
      </div>
      <div className="lg:px-32 pb-24">{team}</div>
    </div>
  );
}
