const StartingPageContent: React.FC = () => {
  return (
    <div>
      <section
        className="m-24 m-auto text-center"
        data-test="starting-page-content"
      >
        <h1 className="text-6xl text-purple-900">Welcome on TaskBerry!</h1>
      </section>
      <div className="w-full flex justify-center">
        <img
          className="w-[462px] h-[418px] border-solid border-1 border-purple-500 "
          src="/images/TaskBerry.png"
          alt="logo"
        />
      </div>
    </div>
  );
};

export default StartingPageContent;