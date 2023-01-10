import Dropdowns from "../../../components/Dropdowns";

const Ranking = () => {
  const options = [
    {
      name: "Thinh hanh",
    },
    {
      name: "Doc nhieu",
    },
  ];
  return <Dropdowns title={"Bang xep hang"} options={options} />;
};
export default Ranking;
