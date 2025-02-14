import FeedbackForm from "../../components/feedbackForm/FeedbackForm";

const Home = () => {
  return (
    <div
      style={{
        backgroundImage: "url(/assets/background.jpeg)",
        backgroundSize: "cover",
      }}
    >
      <div className="min-h-screen flex flex-col justify-center p-5">
        <h1 className="text-center pb-5">Pesquisa de Satisfação</h1>
        <FeedbackForm />
      </div>
    </div>
  );
};

export default Home;
