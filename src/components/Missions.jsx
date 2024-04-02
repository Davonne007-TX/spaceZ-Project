export default function Missions({ launch, name, watch }) {
  return (
    <section className=" text-white launch appear font-serif flex flex-col ml-20 lg:ml-60">
      <div className=" flex flex-col mb-28 ">
        <h2 className="text-2xl">{launch}</h2>
        <p className="text-4xl md:text-5xl lg:text-5xl mt-2">{name}</p>
        <button className="border-2 rounded-lg border-white mt-5 p-4 w-32 hover:bg-white hover:text-black">
          {watch}
        </button>
      </div>
    </section>
  );
}
