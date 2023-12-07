import data from "./assets/data";

function App() {
  return (
    <div className="flex h-screen flex-col items-center bg-white md:bg-neutral-lightblue">
      <div className="flex w-full flex-1 md:items-center md:justify-center">
        <div className="grid w-full max-w-[700px] bg-white text-lg md:mx-3 md:grid-cols-2 md:rounded-[20px] md:text-xl md:shadow-xl">
          <div className="flex h-full w-full flex-col items-center justify-center gap-3 rounded-b-[50px] bg-gradient-to-b from-gradient-blue-start to-gradient-blue-end p-6 text-white md:gap-6 md:rounded-[20px] md:p-4">
            <h1 className="font-bold text-neutral-lavender">Your Result</h1>
            <div className="flex h-[150px] w-[150px] flex-col items-center justify-center rounded-full bg-gradient-to-b from-gradient-violet-start to-gradient-violet-end md:h-[175px] md:w-[175px]">
              <h2 className="text-6xl font-extrabold md:text-7xl">76</h2>
              <p className="text-sm font-medium opacity-40 md:text-lg">
                of 100
              </p>
            </div>
            <div className="text-center">
              <h3 className="mb-2 text-2xl font-semibold md:text-3xl">Great</h3>
              <p className="w-[200px] text-center text-sm text-neutral-lavender md:text-base">
                You scored higher than 65% of the people who have taken these
                tests.
              </p>
            </div>
          </div>
          <div className="flex w-full flex-col px-6 py-6 md:py-10">
            <h1 className="text-bold mb-5 text-lg font-bold text-neutral-blue md:text-xl">
              Summary
            </h1>

            <div className="flex flex-col gap-4">
              {data.map((e) => (
                <ScoreCard
                  key={e.category}
                  icon={e.icon}
                  title={e.category}
                  className={e.styles}
                  points={e.score}
                  maxPoints={100}
                />
              ))}

              <button className="mt-4 rounded-full bg-neutral-blue px-4 py-3 text-base font-semibold text-neutral-white">
                Continue
              </button>
            </div>
          </div>
        </div>
      </div>

      <Attribution />
    </div>
  );
}

function ScoreCard({
  icon,
  title,
  className,
  points,
  maxPoints,
}: {
  icon: string;
  title: string;
  className?: string;
  points: number;
  maxPoints?: number;
}) {
  return (
    <div
      className={`flex justify-between rounded-lg p-4 text-base ${className}`}>
      <div className="flex items-center gap-4">
        <img src={icon} />
        <h5 className="text-base font-medium">{title}</h5>
      </div>
      <div className="">
        <span className="font-semibold text-neutral-blue">{points} </span>
        <span className="font-semibold text-neutral-blue/40">
          {" "}
          / {maxPoints ?? 100}
        </span>
      </div>
    </div>
  );
}

function Attribution() {
  return (
    <div className="attribution">
      Challenge by{" "}
      <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">
        Frontend Mentor
      </a>
      . Coded by <a href="https://github.com/deon-graicas">Deon Gracias</a>.
    </div>
  );
}

export default App;
