import Card from "@components/Card";
import { useState } from "react";

interface SummaryProps {
  name?: string;
  onClose: () => void;
}

const Summary: React.FC<SummaryProps> = ({ name, onClose }) => {
  const [showForm, setShowForm] = useState<boolean>(false);

  return (
    <Card
      className={`${
        showForm
          ? "fixed top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 max-w-xl"
          : "absolute bottom-2.5 left-2.5 max-w-xs"
      } z-10 text-primary-content`}
    >
      {showForm ? (
        <>COUCOU</>
      ) : (
        <>
          <div className="flex justify-between mb-4 items-center">
            <div className="flex items-center">
              <h2 className="text-xl font-extrabold">{name}</h2>
              <span className="inline-block ml-1">- 3 avis</span>
            </div>
            <button
              className="text-neutral hover:text-neutral-focus focus:text-neutral-focus"
              onClick={() => onClose()}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="28"
                height="28"
                fill="currentColor"
                className="bi bi-x"
                viewBox="0 0 16 16"
              >
                <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z" />
              </svg>
            </button>
          </div>
          <h3 className="text-l font-extrabold">Général</h3>
          <progress
            className="progress progress-info w-full mb-2"
            value="35"
            max="100"
          ></progress>

          <h3 className="text-l font-extrabold">Confort</h3>
          <progress
            className="progress progress-info w-full mb-2"
            value="60"
            max="100"
          ></progress>

          <h3 className="text-l font-extrabold">Sécurité</h3>
          <progress
            className="progress progress-info w-full mb-2"
            value="55"
            max="100"
          ></progress>

          <h3 className="text-l font-extrabold">Services</h3>
          <progress
            className="progress progress-info w-full mb-2"
            value="20"
            max="100"
          ></progress>

          <h3 className="text-l font-extrabold">Efforts</h3>
          <progress
            className="progress progress-info w-full mb-2"
            value="15"
            max="100"
          ></progress>
        </>
      )}
    </Card>
  );
};

export default Summary;
