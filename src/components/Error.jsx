export const Error = ({ children }) => {
  return (
    <div className="bg-red-800 text-white text-center p-3 mb-3 uppercase font-bold rounded-lg animate__animated animate__flash">
      {children}
    </div>
  );
};
