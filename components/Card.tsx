interface CardProps {
  className?: string;
  children?: React.ReactNode;
}

const Card: React.FC<CardProps> = ({ className, children }) => {
  return (
    <div
      className={`${className} w-full bg-base-100 rounded-box p-3 shadow-lg`}
    >
      {children}
    </div>
  );
};

export default Card;
