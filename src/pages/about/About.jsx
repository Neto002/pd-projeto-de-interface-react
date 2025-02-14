import { Link } from "react-router-dom";

const About = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center p-6">
      <div className="bg-white shadow-lg rounded-2xl p-8 max-w-2xl text-center">
        <h1 className="text-3xl font-bold text-purple-800 mb-4">
          Sobre o Projeto
        </h1>
        <p className="text-gray-700 text-lg mb-4">
          Esta página faz parte da entrega do projeto para a disciplina{" "}
          <span className="font-semibold">Projeto de Interfaces com React</span>{" "}
          do Instituto Infnet.
        </p>
        <p className="text-gray-700 text-lg mb-4">
          Meu nome é <span className="font-semibold">Antonio Neto</span>, tenho
          22 anos e trabalho como desenvolvedor FullStack em uma empresa de
          consultoria.
        </p>
        <div className="flex justify-center gap-4 mt-4">
          <a
            href="https://github.com/Neto002"
            target="_blank"
            className="text-purple-600 hover:underline text-lg"
          >
            GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/antonioneto2002/"
            target="_blank"
            className="text-purple-600 hover:underline text-lg"
          >
            LinkedIn
          </a>
        </div>
        <Link
          to="/"
          className="mt-6 inline-block text-purple-700 font-semibold hover:underline"
        >
          Voltar para a Página Inicial
        </Link>
      </div>
    </div>
  );
};

export default About;
